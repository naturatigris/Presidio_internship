--1)List all films with their length and rental rate, sorted by length descending.

select title, length, rental_rate from film order by length DESC;
-- 2)Find the top 5 customers who have rented the most films.

select customer_id, count(*) from rental group by customer_id order by count(*) desc limit 5;
-- 3) Display all films that have never been rented.

select f.film_id from film f  left join inventory i on f.film_id=i.film_id  left join rental r 
on r.inventory_id = i.inventory_id
where r.rental_id is null;
-- 4) List all actors who appeared in the film ‘Academy Dinosaur’.

select  a.actor_id, CONCAT(a.first_name ,a.last_name) AS actor from film f
JOIN film_actor fa ON f.film_id = fa.film_id JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.title = 'Academy Dinosaur';
--5) List each customer along with the total number of rentals they made and the total amount paid.
select p.customer_id , sum(amount) ,count(*) as no_of_rents from payment p  right join customer c on c.customer_id=p.customer_id  
 group by p.customer_id order by p.customer_id;
 --6) Using a CTE, show the top 3 rented movies by number of rentals.
 with topmovie as(
select i.film_id,count(rental_id) as no_of_rents from inventory i inner join film f 
on i.film_id=f.film_id inner join rental r ON i.inventory_id = r.inventory_id
group by i.film_id order by 2 desc limit 3
 )
 select * from topmovie
--7) Find customers who have rented more than the average number of films.
  with customeravg as(
select customer_id,count(*) as no_of_rents from rental  group by customer_id  having count(*)>=(select avg(rentscount) from 
(select count(rental_id) as rentscount from rental group by customer_id) as avgval
)
 )
 select * from customeravg
 --8) Write a function that returns the total number of rentals for a given customer ID.
create or replace function retunr_rental(cid INT)
returns int as $$ 
DECLARE 
	total int;

BEGIN
	SELECT COUNT(rental_id) INTO total_rent
	FROM rental
	WHERE customer_id = cid;
	
	RETURN total;
END;
$$ LANGUAGE plpgsql;

SELECT retunr_rental(5);


--9) Write a stored procedure that updates the rental rate of a film by film ID and new rate.
create or replace procedure updaterate(fid INT, new_rate NUMERIC)
language plpgsql
AS $$
BEGIN
	UPDATE film 
	SET rental_Rate = new_rate WHERE film_id = fid;
END;
$$;

CALL updaterate(5,34)

select * from film where film_id = 1
--10)Write a procedure to list overdue rentals (return date is NULL and rental date older than 7 days).
create or replace procedure proc_OverdueRentals()
language plpgsql
AS $$
DECLARE 
	r rental%ROWTYPE;
BEGIN 
	FOR r IN
		SELECT * from rental
		WHERE return_date IS NULL 
		AND EXTRACT(day from AGE(NOW(),rental_date)) > 7
	LOOP 
		RAISE NOTICE 'Overdue rental ID:%, Date: %',r.rental_id,r.rental_date;
	END LOOP;
END;
$$

CALL proc_OverdueRentals(); 
 