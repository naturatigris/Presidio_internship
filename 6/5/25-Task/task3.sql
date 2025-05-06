create database company2;
use company2;

create table Item(
Name VARCHAR(255) PRIMARY KEY,
Type VARCHAR(255) NOT NULL,
Colour VARCHAR(255)

)

CREATE TABLE DEPARTMENT(
Name VARCHAR(100) PRIMARY KEY,
Floor INT,
Phone VARCHAR(20),
MangerID INT ,

);

CREATE TABLE EMP (
    empno INT PRIMARY KEY,
    empname VARCHAR(100),
    salary DECIMAL(10, 2),
    deptname VARCHAR(100) NOT NULL,
    bossno INT NOT NULL,
    FOREIGN KEY (deptname) REFERENCES DEPARTMENT(Name),
    FOREIGN KEY (bossno) REFERENCES EMP(empno)
);

ALTER TABLE DEPARTMENT
ADD CONSTRAINT fk_bossno
FOREIGN KEY (MangerID) 
REFERENCES EMP(empno);

 CREATE TABLE SALES(
 salesno INT PRIMARY KEY,
 ItemName VARCHAR(255),
 deptname VARCHAR(100),

 FOREIGN KEY(ItemName) REFERENCES Item(Name),
  FOREIGN KEY(deptname) REFERENCES DEPARTMENT(Name),


 );
 INSERT INTO Item (Name, Type, Colour) VALUES
('Pocket Knife-Nile', 'E', 'Brown'),
('Pocket Knife-Avon', 'E', 'Brown'),
('Compass', 'N', NULL),
('Geo positioning system', 'N', NULL),
('Elephant Polo stick', 'R', 'Bamboo'),
('Camel Saddle', 'R', 'Brown'),
('Sextant', 'N', NULL),
('Map Measure', 'N', NULL),
('Boots-snake proof', 'C', 'Green'),
('Pith Helmet', 'C', 'Khaki'),
('Hat-polar Explorer', 'C', 'White'),
('Exploring in 10 Easy Lessons', 'B', NULL),
('Hammock', 'F', 'Khaki'),
('How to win Foreign Friends', 'B', NULL),
('Map case', 'E', 'Brown'),
('Safari Chair', 'F', 'Khaki'),
('Safari cooking kit', 'F', 'Khaki'),
('Stetson', 'C', 'Black'),
('Tent - 2 person', 'F', 'Khaki'),
('Tent -8 person', 'F', 'Khaki');
INSERT INTO DEPARTMENT  VALUES
('Management', 5, '34', 1),
('Books', 1, '81', 4),
('Clothes', 2, '24', 4),
('Equipment', 3, '57', 3),
('Furniture', 4, '14', 3),
('Navigation', 1, '41', 3),
('Recreation', 2, '29', 4),
('Accounting', 5, '35', 5),
('Purchasing', 5, '36', 7),
('Personnel', 5, '37', 9),
('Marketing', 5, '38', 2);

INSERT INTO EMP VALUES (1, 'Alice', 75000, 'Management', 1);
INSERT INTO EMP VALUES (2, 'Ned', 45000, 'Marketing', 1);
INSERT INTO EMP VALUES (3, 'Andrew', 25000, 'Marketing', 2);
INSERT INTO EMP VALUES (4, 'Clare', 22000, 'Marketing', 2);
INSERT INTO EMP VALUES (5, 'Todd', 38000, 'Accounting', 1);
INSERT INTO EMP VALUES (6, 'Nancy', 22000, 'Accounting', 5);
INSERT INTO EMP VALUES (7, 'Brier', 43000, 'Purchasing', 1);
INSERT INTO EMP VALUES (8, 'Sarah', 56000, 'Purchasing', 7);
INSERT INTO EMP VALUES (9, 'Sophile', 35000, 'Personnel', 1);
INSERT INTO EMP VALUES (10, 'Sanjay', 15000, 'Navigation', 3);
INSERT INTO EMP VALUES (11, 'Rita', 15000, 'Books', 4);
INSERT INTO EMP VALUES (12, 'Gigi', 16000, 'Clothes', 4);
INSERT INTO EMP VALUES (13, 'Maggie', 11000, 'Clothes', 4);
INSERT INTO EMP VALUES (14, 'Paul', 15000, 'Equipment', 3);
INSERT INTO EMP VALUES (15, 'James', 15000, 'Equipment', 3);
INSERT INTO EMP VALUES (16, 'Pat', 15000, 'Furniture', 3);
INSERT INTO EMP VALUES (17, 'Mark', 15000, 'Recreation', 3);
INSERT INTO SALES VALUES
(101, 'Boots-snake proof', 'Clothes'),
(102,  'Pith Helmet', 'Clothes'),
(103,  'Sextant', 'Navigation'),
(104,  'Hat-polar Explorer', 'Clothes'),
(105,  'Pith Helmet', 'Equipment'),
(106,  'Pocket Knife-Nile', 'Clothes'),
(107,  'Pocket Knife-Nile', 'Recreation'),
(108,  'Compass', 'Navigation'),
(109,  'Geo positioning system', 'Navigation'),
(110,  'Map Measure', 'Navigation'),
(111,  'Geo positioning system', 'Books'),
(112,  'Sextant', 'Books'),
(113,  'Pocket Knife-Nile', 'Books'),
(114,  'Pocket Knife-Nile', 'Navigation'),
(115,  'Pocket Knife-Nile', 'Equipment'),
(116,  'Sextant', 'Clothes'),
(117,  'Pocket Knife-Nile', 'Equipment'),
(118,  'Pocket Knife-Nile', 'Recreation'),
(119,  'Pocket Knife-Nile', 'Furniture'),
(120,  'Pocket Knife-Nile', NULL),
(121,  'Exploring in 10 Easy Lessons', 'Books'),
(122,  'How to win Foreign Friends', NULL),
(123,  'Compass', NULL),
(124,  'Pith Helmet', NULL),
(125,  'Elephant Polo stick', 'Recreation'),
(126,  'Camel Saddle', 'Recreation');
