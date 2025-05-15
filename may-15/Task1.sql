create table customer1(
cus_id serial primary key,
name varchar(255),
pass bytea
)
CREATE EXTENSION IF NOT EXISTS pgcrypto;
--encryption
create or replace procedure sp_encrypt_text1(in pass varchar(255),in secret_key text,out encptxt bytea)
language plpgsql
as $$
begin
encptxt:=pgp_sym_encrypt(pass, secret_key);
end
--comparison

CREATE OR REPLACE PROCEDURE sp_compare_encrypted(
    IN pass VARCHAR(255),
    IN cus_id INT,
    IN secret_key TEXT,
    OUT validity BOOLEAN
)
LANGUAGE plpgsql
AS $$
DECLARE
    encrypted_password BYTEA;
    decrypted_password TEXT;
BEGIN
    SELECT pass::BYTEA INTO encrypted_password
    FROM customer
    WHERE customer.cus_id = cus_id;

    decrypted_password := pgp_sym_decrypt(encrypted_password, secret_key);

    IF decrypted_password = pass THEN
        validity := TRUE;
    ELSE
        validity := FALSE;
    END IF;
END;
$$;

--masking
CREATE OR REPLACE PROCEDURE sp_mask_name(
    IN full_name VARCHAR,
    OUT masked_name VARCHAR
)
LANGUAGE plpgsql
AS $$
DECLARE
    name_length INT;
    visible_prefix VARCHAR;
    visible_suffix VARCHAR;
    mask VARCHAR := '';
    mask_length INT;
BEGIN
    name_length := LENGTH(full_name);
    
    IF name_length <= 3 THEN
        masked_name := SUBSTRING(full_name, 1, 1) || REPEAT('*', GREATEST(0, name_length - 1));
    ELSE
        visible_prefix := SUBSTRING(full_name, 1, 2);
        visible_suffix := SUBSTRING(full_name, name_length, 1);
        mask_length := name_length - 3;
        mask := REPEAT('*', mask_length);
        masked_name := visible_prefix || mask || visible_suffix;
    END IF;
END;
$$;

--insert
CREATE OR REPLACE PROCEDURE sp_insert_customer1(
    IN full_name VARCHAR,
    IN raw_password VARCHAR,
    IN secret_key TEXT
)
LANGUAGE plpgsql
AS $$
DECLARE
    masked_name VARCHAR;
    encrypted_pass BYTEA;
BEGIN
    CALL sp_mask_name(full_name, masked_name);
    
    CALL sp_encrypt_text1(raw_password, secret_key, encrypted_pass);
    
    INSERT INTO customer1 (name, pass)
    VALUES (masked_name, encrypted_pass);
    
    RAISE NOTICE 'Customer inserted: %, %', masked_name, encrypted_pass;
END;
$$;

CALL sp_insert_customer1('anand', 'sandhya1311', 'myscretkey123');

--selection
CREATE OR REPLACE PROCEDURE sp_read_customer_masked()
LANGUAGE plpgsql
AS $$
DECLARE
    rec RECORD;
    masked_name VARCHAR;
    decrypted_pass TEXT;
    secret_key TEXT := 'myscretkey123';  
BEGIN
    FOR rec IN SELECT cus_id, name, pass FROM customer1 LOOP
        CALL sp_mask_name(rec.name, masked_name);

        decrypted_pass := pgp_sym_decrypt(rec.pass, secret_key);

        RAISE NOTICE 'ID: %, Name: %, Password: %', rec.cus_id, masked_name, decrypted_pass;
    END LOOP;
END;
$$;
call sp_read_customer_masked();

