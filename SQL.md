#Select

SELECT * FROM table_name

SELECT id, username, email, age FROM table_name

SELECT * FROM table_name WHERE age = 40

SELECT username, email FROM table_name WHERE age = 25 ORDER BY username DESC

#Update

UPDATE table_name SET age = 20, username = johnny WHERE id = 1513

#Insert

INSERT INTO table_name (username, email, age) VALUES (bobby, abc@gmail.com, 22)

#Stored Procedure (Calling a Stored Procedure)

#Create Table

CREATE TABLE table_name

CREATE TABLE table_name (column_1 varchar(200), column_2 varchar(43))

#Alter Table

ALTER TABLE table_name ADD column_name varchar(131) NULL

ALTER TABLE table_name MODIFY column_name varchar(9)

#Show Table

(Perform this on an existing table in order to see the SQL statement that creates that table)

SHOW CREATE TABLE table_name
