--1)primary server that has insert,update,read,delete access to data.
--1)create a table in primary

CREATE TABLE rental_log (
    log_id INT PRIMARY KEY,
    film_id INT,
    rental_count INT,
    log_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from rental_log;

--2)stored procedure to insert new rental_log entry 

CREATE OR REPLACE PROCEDURE insertrental_logs(
    p_logid INT,
    p_filmid INT,
    p_rental_count INT
)
LANGUAGE plpgsql 
AS $$
BEGIN 
    BEGIN
        INSERT INTO rental_log(log_id, film_id, rental_count, log_timestamp) 
        VALUES (p_logid, p_filmid, p_rental_count, NOW());

    EXCEPTION WHEN OTHERS THEN 
        RAISE NOTICE 'Transaction failed: %', SQLERRM;
    END;
END;
$$;


CALL insertrental_logs(1, 100, 3);
