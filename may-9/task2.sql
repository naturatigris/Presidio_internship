-- 1)Write a cursor that loops through all films and prints titles longer than 120 minutes.
DO $$
DECLARE 
	longfilm CURSOR FOR
		(Select title from film WHERE length > 120);
	movietitle TEXT;
BEGIN 
	open longfilm ;

	LOOP
		FETCH NEXT from longfilm INTO movietitle;
		EXIT WHEN NOT FOUND;
		RAISE NOTICE '%',movietitle;
	END LOOP;

	close longfilm;
END;
$$;
-- 2)Create a cursor that iterates through all customers and counts how many rentals each made.
DO $$
DECLARE 
	rentcount CURSOR FOR(
		SELECT c.customer_id,COUNT(r.rental_id) as RentCount
		FROM customer c
		LEFT JOIN rental r 
		ON c.customer_id = r.customer_id
		GROUP BY c.customer_id
		ORDER by 1
	);
	customerid INT;
	rents INT;

BEGIN 
	open rentcount;
	LOOP
		FETCH NEXT FROM rentcount INTO customerid,rents;
		EXIT WHEN NOT FOUND;

		RAISE NOTICE 'CustomerID: %, RentCount: %',customerid,rents;
	END LOOP;

	close rentcount;
END;
$$
--3) Using a cursor, update rental rates: Increase rental rate by $1 for films with less than 5 rentals.
DO $$
DECLARE 
	updaterent CURSOR FOR
	(SELECT f.film_id,COUNT(r.rental_id) as RentCount
	FROM film f 
	INNER JOIN inventory i 
	ON f.film_id = i.film_id
	INNER JOIN rental r
	ON i.inventory_id = r.inventory_id
	GROUP BY f.film_id
	HAVING COUNT(r.rental_id) < 5);

	fid INT;
	rentcount INT;
BEGIN 
	open updaterent;
	LOOP
		FETCH NEXT from cur_UpdateRentalRate into fid,rentcount;
		EXIT WHEN NOT FOUND;

		UPDATE film 
		SET rental_rate = rental_rate+1
		WHERE film_id = filmid;

		RAISE NOTICE 'Updated filmID:% RentCount:% ',filmid,rentcount;

	END LOOP;
	CLOSE updaterent;
END;
$$
--4)Create a function using a cursor that collects titles of all films from a particular category.
create or replace procedure generate(categoryid INT)
AS $$

DECLARE 
	cur_films CURSOR FOR 
		SELECT f.film_id,f.title
		from film f
		INNER JOIN film_category fc
		ON f.film_id = fc.film_id
		WHERE fc.category_id = categoryid;

	filmid INT;
	filmtitle TEXT;
	
BEGIN 
	open cur_films;
	LOOP
		FETCH NEXT FROM cur_films INTO filmid,filmtitle;
		EXIT WHEN NOT FOUND;

		RAISE NOTICE 'FilmID:% Title:%',filmid,filmtitle;
	END LOOP;
	close cur_films;
END;
$$ language plpgsql;
call generate(6);
--5)Loop through all stores and count how many distinct films are available in each store using a cursor.
DO $$
DECLARE 
	cur_CountFilms CURSOR FOR
		SELECT s.store_id,COUNT(DISTINCT i.film_id) as FilmCount
		FROM store s 
		INNER JOIN inventory i 
		ON s.store_id = i.store_id
		GROUP BY s.store_id;
		
	storeid INT;
	filmcount INT;

BEGIN 
	open cur_CountFilms;
	LOOP
		FETCH NEXT FROM cur_CountFilms INTO storeid,filmcount;
		EXIT WHEN NOT FOUND;

		RAISE NOTICE 'StoreID: %,FilmCount: %',storeid,filmcount;
	END LOOP;
	close cur_CountFilms;
END;
$$;

-- 6)Write a trigger that logs whenever a new customer is inserted.
create table customer_log (
    customer_id int references customer(customer_id),
    insert_id int generated always as identity primary key,
    log_date date default current_date
);

create or replace function log_new_customer()
returns trigger 
language plpgsql
as $$
begin 
    insert into customer_log(customer_id) values (new.customer_id);
    return new;
end;
$$;

create trigger trg_customer_insert
after insert on customer 
for each row
execute function log_new_customer();

insert into customer 
values (601, 2, 'john', 'doe', 'john.doe@example.com', 3, true, current_date, current_timestamp, 2);

select * from customer_log;


--7)Create a trigger that prevents inserting a payment of amount 0.
create or replace function prevent_zero_payment()
returns trigger 
language plpgsql
as $$
begin 
    if new.amount <= 0 then 
        raise exception 'payment amount must be greater than 0';
    end if;
    return new;
end;
$$;

create trigger trg_payment_check
before insert on payment
for each row
execute function prevent_zero_payment();

insert into payment values (18504, 4, 4, 2129, 0, now());

-- 8)Set up a trigger to automatically set last_update on the film table before update.
create or replace function update_last_modified()
returns trigger
language plpgsql
as $$
begin 
    new.last_update := now();
    return new;
end;
$$;

create trigger trg_film_lastupdate
before update or insert on film
for each row 
execute function update_last_modified();

update film set title = 'new movie title' where film_id = 2;

select * from film where film_id = 2;

--9)Create a trigger to log changes in the inventory table (insert/delete).
create table inventory_log (
    log_id int generated always as identity primary key,
    inventory_id int references inventory(inventory_id),
    log_date date default current_date
);

create or replace function log_inventory_change()
returns trigger
language plpgsql
as $$
begin 
    insert into inventory_log(inventory_id) values (new.inventory_id);
    return new;
end;
$$;

create trigger trg_inventory_change
after insert or delete on inventory 
for each row 
execute function log_inventory_change();

insert into inventory values (4583, 2, 3, now());

select * from inventory_log;

--10)Write a trigger that ensures a rental can’t be made for a customer who owes more than $50.
create or replace function calculate_due(cust_id int)
returns numeric 
language plpgsql
as $$
declare 
    due_amount numeric;
begin 
    select coalesce(sum(f.rental_rate), 0) - coalesce(sum(p.amount), 0)
    into due_amount
    from customer c
    join rental r on c.customer_id = r.customer_id
    join payment p on p.rental_id = r.rental_id
    join inventory i on r.inventory_id = i.inventory_id
    join film f on i.film_id = f.film_id
    where c.customer_id = cust_id;

    return coalesce(due_amount, 0);
end;
$$;

create or replace function check_customer_debt()
returns trigger
language plpgsql
as $$
begin 
    if calculate_due(new.customer_id) > 50 then
        raise exception 'customer owes more than $50 — rental denied';
    end if;
    return new;
end;
$$;

create trigger trg_rental_check
before insert or update on rental
for each row 
execute function check_customer_debt();

insert into rental values (...);


-- 11)Write a transaction that inserts a customer and an initial rental in one atomic operation.
BEGIN;
insert into customer VALUES(888,1,'sandhya','anand','sandhya@gmail.com',436,true,CURRENT_DATE,NOW(),1);
insert into rental VALUES(56090,NOW(),1523,888,CURRENT_DATE+ INTERVAL '5 days',2,NOW());
COMMIT;

--12)Simulate a failure in a multi-step transaction (update film + insert into inventory) and roll back.
BEGIN;
UPDATE film SET title='Hotel transylvania' WHERE film_id=10;
INSERT INTO inventory VALUES(4583,10,1,NOW());
ROLLBACK;

--13)Create a transaction that transfers an inventory item from one store to another.
BEGIN;
UPDATE inventory SET store_id=2 WHERE inventory_id=10 and store_id=3;
COMMIT;

BEGIN;
SAVEPOINT beforepayment;
UPDATE payment SET amount=16.00 WHERE payment_id=17517;
select * from payment where payment_id=17517;

ROLLBACK to beforepayment;
select * from payment where payment_id=17517;

--15)Write a transaction that deletes a customer and all associated rentals and payments, ensuring atomicity.
create or replace function deletcus(cid INT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN 
	DELETE FROM payment WHERE customer_id=cid;
	DELETE FROM rental WHERE customer_id=cid;
	DELETE FROM customer WHERE customer_id=cid;
END;
$$

BEGIN;
SELECT deletcus(10);
COMMIT;

select * from customer where customer_id=10;