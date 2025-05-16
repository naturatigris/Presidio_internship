--mydatabse design

student_status
id,message

trainer_status
id,message

course_status
id,message(ongoing||completed)

student
id,name,age,emailid,phoneno,statusid

category
id,category

course_details
id,name,categoryid,trainerid,assessmentid,lessonid,price,createdDate,statusid

trainer
id,name,email,phone,statusid

certificate
id,certificateUrl

inventory
id,course_id,certificate_id,price,purchasedOn,ValidTill

course
id,stu_id,inventory_id,purchasedOn

-- students
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL
);

-- courses
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    duration_days INT NOT NULL CHECK (duration_days > 0)
);

-- trainers
CREATE TABLE trainers (
    trainer_id SERIAL PRIMARY KEY,
    trainer_name VARCHAR(100) NOT NULL,
    expertise VARCHAR(100) NOT NULL
);

-- enrollments
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enroll_date DATE NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

--  certificates
CREATE TABLE certificates (
    certificate_id SERIAL PRIMARY KEY,
    enrollment_id INT UNIQUE NOT NULL,
    issue_date DATE NOT NULL,
    serial_no VARCHAR(50) UNIQUE NOT NULL,
    FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id)
);

--course_trainers
CREATE TABLE course_trainers (
    course_id INT NOT NULL,
    trainer_id INT NOT NULL,
    PRIMARY KEY (course_id, trainer_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (trainer_id) REFERENCES trainers(trainer_id)
);

-- insert
INSERT INTO students (name, email, phone) VALUES 
('Alice Johnson', 'alice@example.com', '1234567890'),
('Bob Smith', 'bob@example.com', '2345678901');
INSERT INTO students (name, email, phone) VALUES 
('Alice', 'alice1@example.com', '09876898');
INSERT INTO courses (course_name, category, duration_days) VALUES 
('Web Development', 'Technology', 30),
('Data Science', 'Technology', 45);
INSERT INTO courses (course_name, category, duration_days) VALUES 
('Artificial Intelligence', 'Technology', 27);
INSERT INTO courses (course_name, category, duration_days) VALUES 
('IOT', 'Technology', 27);
SELECT * from enrollments;


INSERT INTO trainers (trainer_name, expertise) VALUES 
('Dr. Emma Brown', 'Web Development'),
('Mr. John Doe', 'Data Science');

INSERT INTO course_trainers (course_id, trainer_id) VALUES 
(1, 1), 
(2, 2); 
INSERT INTO course_trainers (course_id, trainer_id) VALUES 
(3,2);

INSERT INTO enrollments (student_id, course_id, enroll_date) VALUES 
(1, 1, '2025-01-10'), 
(2, 2, '2025-02-15');

INSERT INTO certificates (enrollment_id, issue_date, serial_no) VALUES 
(1, '2025-02-15', 'CERT-001'),
(2, '2025-03-31', 'CERT-002');

--indexs
CREATE UNIQUE INDEX idx_students_email ON students(email);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
--1)
SELECT s.name AS student_name, c.course_name FROM enrollments e 
JOIN students s ON e.student_id = s.student_id JOIN courses c ON e.course_id = c.course_id;

--2)
SELECT c.serial_no AS certificate_no,t.trainer_name FROM certificates c JOIN enrollments e 
ON e.enrollment_id=c.enrollment_id JOIN course_trainers ct ON e.course_id=ct.course_id
JOIN trainers t on t.trainer_id=ct.trainer_id;

--3)
SELECT c.course_id,c.course_name,COUNT(*) AS No_of_students FROM enrollments e JOIN courses c ON c.course_id=e.course_id
GROUP BY c.course_id;

--FUNCTION
CREATE OR REPLACE FUNCTION get_certified_students(p_course_id INT)
RETURNS TABLE(student_id INT, student_name VARCHAR, email VARCHAR) AS $$
BEGIN
    RETURN QUERY
    SELECT s.student_id, s.name, s.email FROM certificates c
    JOIN enrollments e ON c.enrollment_id = e.enrollment_id
    JOIN students s ON e.student_id = s.student_id
    WHERE e.course_id = p_course_id;
END;
$$ LANGUAGE plpgsql;

select * from get_certified_students(2);

--PROCEDURE
CREATE OR REPLACE PROCEDURE sp_enroll_student(p_student_id INT, p_course_id INT, p_completed BOOLEAN DEFAULT FALSE)
LANGUAGE plpgsql
AS $$
DECLARE
    v_enrollment_id INT;
BEGIN
    INSERT INTO enrollments(student_id, course_id, enroll_date)
    VALUES (p_student_id, p_course_id, CURRENT_DATE)
    RETURNING enrollment_id INTO v_enrollment_id;

    IF p_completed THEN
        INSERT INTO certificates(enrollment_id, issue_date, serial_no)
        VALUES (
            v_enrollment_id,CURRENT_DATE,'CERT-' || p_student_id || '-' || v_enrollment_id
        );
    END IF;
END;
$$;

CALL sp_enroll_student(1, 2, TRUE);
CALL sp_enroll_student(2, 1, FALSE);
CALL sp_enroll_student(2,3,FALSE);
SELECT * FROM enrollments;


-- CURSOR.
CREATE FUNCTION student_without_cert() 
RETURNS VOID AS $$

DECLARE
	 rec RECORD;
     cur cursor FOR SELECT  c.course_id,c.course_name,s.student_id,s.name,s.email from courses c 
	 JOIN enrollments e on e.course_id=c.course_id
	 JOIN students s on e.student_id =s.student_id 
	 LEFT JOIN certificates ct ON ct.enrollment_id=e.enrollment_id WHERE ct.enrollment_id IS NULL;
BEGIN
OPEN cur;
LOOP
        FETCH cur INTO rec;
        EXIT WHEN NOT FOUND;

        RAISE NOTICE 'NOT-Certified Student: %-%-%-%-%',
		rec.course_id,rec.course_name,rec.student_id, rec.name,rec.email;
    END LOOP;
	
CLOSE cur;
END;
$$ LANGUAGE plpgsql;

SELECT student_without_cert();

--ROLES
CREATE ROLE reader LOGIN PASSWORD 'readonly_pass';
GRANT CONNECT ON DATABASE "DVDRental" TO reader;
GRANT USAGE ON SCHEMA public TO reader;
GRANT SELECT ON students, courses, certificates TO reader;
REVOKE INSERT, UPDATE, DELETE ON students, courses, certificates FROM reader;

CREATE ROLE writer LOGIN PASSWORD 'writer_password';
GRANT CONNECT ON DATABASE "DVDRental" TO writer;
GRANT USAGE ON SCHEMA public TO writer;
GRANT INSERT ON students, enrollments TO writer;
REVOKE INSERT, UPDATE, DELETE ON certificates FROM writer;

--transaction

DO $$
DECLARE
    v_enrollment_id INT;
BEGIN
    BEGIN
        INSERT INTO enrollments(student_id, course_id, enroll_date)
        VALUES (4, 3, CURRENT_DATE)
        RETURNING enrollment_id INTO v_enrollment_id;
		
        INSERT INTO certificates(enrollment_id, issue_date, serial_no)
        VALUES (v_enrollment_id, CURRENT_DATE, 'CERT-yu-2025');

    EXCEPTION
        WHEN OTHERS THEN
		     ROLLBACK;
            RAISE NOTICE 'Error occurred, rolling back:%',SQLERRM ;
    END;
END $$;
select * from courses;
SELECT course_id ,count(student_id) from enrollments group by course_id;

