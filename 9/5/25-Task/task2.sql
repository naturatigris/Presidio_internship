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