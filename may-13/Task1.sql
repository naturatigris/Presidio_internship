--1)Write a cursor to list all customers and how many rentals each made. Insert these into a summary table.

create table summary (
    customer_id int,
	total_rents int
);
select * from summary;
do $$
declare
    rec record;
    cur cursor for
        select  
               c.customer_id,
               count(r.rental_id) as total_rents
        from rental r
        join customer c on r.customer_id = c.customer_id group by c.customer_id;
begin
    open cur;

    loop
        fetch cur into rec;
        exit when not found;

        insert into summary (customer_id,total_rents)
        values (
            rec.customer_id,
            rec.total_rents
           
        );
    end loop;

    close cur;
end;
$$;

--2)Using a cursor, print the titles of films in the 'Comedy' category rented more than 10 times.

do $$
declare
    rec record;
    cur cursor for
        select i.film_id ,count(*) as count from inventory i join film_category fc 
		on fc.film_id=i.film_id group by i.film_id ,fc.category_id 
		having count(*)>10 and fc.category_id=5 ;

begin
    open cur;

    loop
        fetch cur into rec;
        exit when not found;

	RAISE NOTICE 'film_id %: count %', rec.film_id, rec.count;
        
    end loop;

    close cur;
end;
$$;

--3)Create a cursor to go through each store and count the number of distinct films available, and insert results into a report table.
 create table store_summary (
    store_id int,
	distinct_film int
);
select * from store_summary;
do $$
declare
    rec record;
    cur cursor for
	select i.store_id ,count(distinct i.film_id) as distinct_film 
	from inventory i group by i.store_id;

begin
    open cur;

    loop
        fetch cur into rec;
        exit when not found;

	insert into store_summary (store_id, distinct_film)
        values (
            rec.store_id,
            rec.distinct_film
        );
        
    end loop;

    close cur;
end;
$$;

--4)Loop through all customers who havent rented in the last 6 months and insert their details into an inactive_customers table.

CREATE TABLE inactive_customers (
customer_id int,
last_updated_date date,
status varchar(255)
)
DO $$
DECLARE
    rec RECORD;
BEGIN
    FOR rec IN
        SELECT customer_id,last_update FROM customer
        WHERE customer_id NOT IN (
            SELECT DISTINCT customer_id
            FROM rental
            WHERE rental_date >= CURRENT_DATE - INTERVAL '6 months'
        )
    LOOP
        INSERT INTO inactive_customers
        VALUES (
            rec.customer_id,
			rec.last_update,
			'inactive'
        );

        
    END LOOP;
END;
$$;

--5)Write a transaction that inserts a new customer, adds their rental, and logs the payment – all atomically.
 DO $$
DECLARE
    v_customer_id INT;
    v_rental_id INT;
    v_inventory_id INT;
BEGIN
   
    INSERT INTO customer (
        store_id, first_name, last_name, email,
        address_id, activebool, create_date, last_update, active
    )
    VALUES (
        987, 'John', 'Doe', 'john.doe@example.com',
        500, TRUE, CURRENT_DATE, CURRENT_TIMESTAMP, 1
    )
    RETURNING customer_id INTO v_customer_id;

    SELECT inventory_id INTO v_inventory_id
    FROM inventory
    WHERE store_id = 1
    LIMIT 1;

    INSERT INTO rental (
        rental_date, inventory_id, customer_id, return_date, staff_id
    )
    VALUES (
        CURRENT_TIMESTAMP,
        v_inventory_id,
        v_customer_id,
        CURRENT_TIMESTAMP + INTERVAL '3 days',
        1
    )
    RETURNING rental_id INTO v_rental_id;

    INSERT INTO payment (
        customer_id, staff_id, rental_id, amount, payment_date
    )
    VALUES (
        v_customer_id,
        1,
        v_rental_id,
        4.99,
        CURRENT_TIMESTAMP
    );

    RAISE NOTICE 'Transaction completed: customer %, rental %, inventory %',
        v_customer_id, v_rental_id, v_inventory_id;
END;
$$;

select * from rental where customer_id=602;

--6)Simulate a transaction where one update fails (e.g., invalid rental ID), and ensure the entire transaction rolls back.


DO $$
BEGIN

    BEGIN

        INSERT INTO payment (
            customer_id, staff_id, rental_id, amount, payment_date
        )
        VALUES (1,1,1,9.99,CURRENT_TIMESTAMP);

        UPDATE rental
        SET return_date = CURRENT_TIMESTAMP
        WHERE rental_id = -999; 


    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Transaction failed: %', SQLERRM;
    END;
END;
$$;

--7)Use SAVEPOINT to update multiple payment amounts. Roll back only one payment update using ROLLBACK TO SAVEPOINT.

CREATE OR REPLACE PROCEDURE update_payments()
LANGUAGE plpgsql
AS $$
BEGIN

    BEGIN
        UPDATE payment
        SET amount = 15.00
        WHERE customer_id = 1;
		COMMIT;

        UPDATE payment
        SET amount = 20.00
        WHERE customer_id = 2;
		COMMIT;

        UPDATE payment
        SET amount = 25.00
        WHERE customer_id = 999;  
		COMMIT;

    EXCEPTION
        WHEN OTHERS THEN

            ROLLBACK ;
			RAISE;
    END;

END;
$$;
CALL update_payments();

--8)Perform a transaction that transfers inventory from one store to another (delete + insert) safely.
DO $$ 
BEGIN
   

    BEGIN


        UPDATE inventory
        SET store_id=2 
        WHERE film_id<20;

    EXCEPTION
        WHEN OTHERS THEN
		ROLLBACK;
		RAISE;
    END;

END;
$$;
--9)Create a transaction that deletes a customer and all associated records (rental, payment), ensuring referential integrity.

DO $$
DECLARE
    v_customer_id INT := 602; 

    BEGIN
        DELETE FROM payment
        WHERE customer_id = v_customer_id;

        DELETE FROM rental
        WHERE customer_id = v_customer_id;

        DELETE FROM customer
        WHERE customer_id = v_customer_id;

    EXCEPTION
        WHEN OTHERS THEN
		ROLLBACK;
		RAISE;
    END;
END;
$$;

--10)Create a trigger to prevent inserting payments of zero or negative amount.

CREATE FUNCTION Check_Amount()
RETURNS TRIGGER AS $check$
BEGIN
IF NEW.amount<1 THEN
RAISE 'invalid amount';
END IF;
END;
$check$ LANGUAGE plpgsql;


CREATE OR REPLACE TRIGGER BEFORE_INSERT
BEFORE INSERT ON payment
FOR EACH ROW
EXECUTE FUNCTION Check_Amount();
END;

INSERT INTO payment (customer_id, staff_id, rental_id, amount, payment_date) VALUES (1, 1, 1, 0, CURRENT_TIMESTAMP);

--11)Set up a trigger that automatically updates last_update on the film table when the title or rental rate is changed.
 select * from film where film_id=1;

CREATE OR REPLACE FUNCTION update_date()
RETURNS TRIGGER AS $$
BEGIN
IF NEW.rental_rate IS DISTINCT FROM OLD.rental_rate OR
   NEW.title IS DISTINCT FROM OLD.title THEN
 UPDATE film SET last_update=CURRENT_TIMESTAMP WHERE film_id=OLD.film_id;
	 END IF;
	      RETURN NEW;


END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_film_table
AFTER UPDATE ON film
FOR EACH ROW
EXECUTE FUNCTION update_date();

 UPDATE film SET rental_rate=5.00 WHERE film_id=1;


--12)Write a trigger that inserts a log into rental_log whenever a film is rented more than 3 times in a week.
CREATE OR REPLACE FUNCTION check_film_rental_threshold()
RETURNS TRIGGER AS $$
DECLARE
    v_film_id INT;
    v_count INT;
BEGIN
    SELECT i.film_id INTO v_film_id
    FROM inventory i
    WHERE i.inventory_id = NEW.inventory_id;

    SELECT COUNT(*) INTO v_count
    FROM rental r
    JOIN inventory i ON r.inventory_id = i.inventory_id
    WHERE i.film_id = v_film_id
      AND r.rental_date >= CURRENT_DATE - INTERVAL '7 days';

    IF v_count > 3 THEN
        INSERT INTO rental_log (film_id, rental_count)
        VALUES (v_film_id, v_count);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_log_film_rentals
AFTER INSERT ON rental
FOR EACH ROW
EXECUTE FUNCTION check_film_rental_threshold();

