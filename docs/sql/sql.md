# SQL

## Queries

SELECT * FROM Customers
WHERE Country='Germany' OR Country='Spain';

SELECT * FROM Customers
WHERE NOT Country='Germany';

SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;

INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;

SELECT TOP 3 * FROM Customers;

SELECT * FROM Customers
WHERE Country='Germany'
LIMIT 3;

SELECT MAX(Price) AS LargestPrice
FROM Products;

SELECT COUNT(ProductID) / AVG(Price) / SUM(Quantity)
FROM Products;

## Joins

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers 
ON Orders.CustomerID=Customers.CustomerID; (note: getting CustomerName from Customers table)


returns the cities (only distinct values) from both the "Customers" and the "Suppliers" table:
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;



Different Types of SQL JOINs
Here are the different types of the JOINs in SQL:

(INNER) JOIN: Returns records that have matching values in both tables
LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

#### SQL Basics
- [W3Schools Quiz](https://www.w3schools.com/quiztest/quiztest.asp?qtest=SQL)


1. How do you select all the records from a table named "Persons" where the "LastName" is alphabetically between (and including) "Hansen" and "Pettersen"?

```sql 
SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen';
```

2. SQL keyword `ORDER BY` is used to sort the result-set.

3. How can you return all the records from a table named "Persons" sorted descending by "FirstName"?

```sql 
SELECT * FROM Persons ORDER BY FirstName DESC;
```

4. How can you insert a new record into the "Persons" table?

```sql 
INSERT INTO Persons VALUES ('Jimmy', 'Jackson');
```

5. How can you insert "Olsen" as the "LastName" in the "Persons" table?

```sql 
INSERT INTO Persons (LastName) VALUES ('Olsen');
```

6. How can you change "Hansen" into "Nilsen" in the "LastName" column in the Persons table?

```sql 
UPDATE Persons SET LastName='Nilsen' WHERE LastName='Olsen';
```

7. How can you delete the records where the "FirstName" is "Peter" in the Persons Table?

```sql 
DELETE FROM Persons WHERE FirstName='Peter';
```

8. How can you return the number of records in the "Persons" table?

```sql 
SELECT COUNT(*) FROM Persons;
```

9. `INNER JOIN` is most common type of join.

10. Which operator is used to select values within a range? `BETWEEN`

11. The NOT NULL constraint enforces a column to not accept NULL values. *true*

12. Which operator is used to search for a specified pattern in a column? `LIKE`

13. Which SQL statement is used to create a database table called 'Customers'?

```sql
CREATE TABLE Customers;
```

14. Select all records where the value of the `City` column starts with the letter "a" (or not).

```sql
SELECT * FROM Customers WHERE City LIKE 'a%';
SELECT * FROM Customers WHERE City NOT LIKE 'a%';
```

#### SQL Exercises

Select all records from the Customers where the PostalCode column is empty.

```sql
SELECT * FROM Customers WHERE PostalCode IS NULL;
```

Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City.

```sql
SELECT * FROM Customers
ORDER BY Country, City;
```

Update the `City` value and the `Country` value.

```sql
UPDATE Customers
SET City = 'Oslo',
Country = 'Norway'
WHERE CustomerID = 32;
```

Use an SQL function to calculate the sum of all the `Price` column values in the Products table.

```sql
SELECT SUM(Price) FROM Products;
```

Select all records where the value of the City column contains the letter "a".

```sql
SELECT * FROM Customers WHERE City LIKE '%a%';
```

Select all records where the second letter of the City is an "a".

```sql
SELECT * FROM Customers WHERE City LIKE '_a%';
```

Select all records where the value of the `City` column starts with letter "a" and ends with the letter "b".

```sql
SELECT * FROM Customers WHERE City LIKE 'a%b';
```

Select all records where the first letter of the `City` is NOT an "a" or a "c" or an "f".

```sql
SELECT * FROM Customers WHERE City LIKE '[!acf]%';
```

Select all records where the first letter of the `City` starts with anything from an "a" to an "f".

```sql
SELECT * FROM Customers WHERE City LIKE '[a-f]%';
```

Use the `IN` operator to select all the records where `Country` is either "Norway" or "France".

```sql
SELECT * FROM Customers WHERE COUNTRY IN ('Norway', 'France');
```

Query to join the two tables Orders and Customers, using the CustomerID field in both tables as the relationship between the two tables.

```sql
SELECT *
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

Select all records from the two tables where there is a match in both tables.

```sql
SELECT *
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```

Select all the records from the `Customers` table plus all the matches in the `Orders` table.

```sql
SELECT *
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```
List the number of customers in each country.

```sql
SELECT COUNT(CustomerID),
Country
FROM Customers
GROUP BY Country;
```

List the number of customers in each country, ordered by the country with the most customers first.

```sql
SELECT COUNT(CustomerID),
Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

Given the following data definition, select all city names in descending order:

```sql
TABLE cities
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
```

```sql
SELECT name FROM cities ORDER BY name DESC
```

What is wrong with this SQL query? Correct it so it executes properly.

```sql
SELECT Id, YEAR (BillingDate) AS BillingYear FROM InvoicesWHERE BillingYear >= 2010;
```

Write a SQL query to find the 10th highest employee salary from an Employee table.

```sql
SELECT Id, YEAR (BillingDate) AS BillingYear FROM InvoicesWHERE BillingYear >= 2010;
```


Explain your answer. (Note: You may assume that there are at least 10 records in the Employee table).

### Query

App usage data are kept in the following table:

```sql
TABLE sessions
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  duration DECIMAL NOT NULL
```

 Write a query that selects userId and average session duration for each user who has more than one session.

```sql
SELECT 
  userId, 
  AVG(duration) AS avg_duration
FROM 
  sessions 
GROUP BY 
  userId
HAVING 
  COUNT(*) > 1;
```

### Query

A table containing the students enrolled in a yearly course has incorrect data in records with ids between 20 and 100 (inclusive).

```sql
TABLE enrollments
  id INTEGER NOT NULL PRIMARY KEY
  year INTEGER NOT NULL
  studentId INTEGER NOT NULL
```

 Write a query that updates the field `year` of every faulty record to 2015.

```sql
UPDATE enrollments
SET year = 2015
WHERE id >= 20 AND id <= 100;
```

### Ideas for Test Prep

SQL (ASNI Format)

ANSI Format was developed by The American National Standards Institute and presents itself as a Microsoft-related standard for character set encoding. Also ANSI Format serves as a modified ASCII (the American Standard Code for Information Interchange) character set. If we compare the ASCII code and the ANSI Format, the first one employs 7 bits to represent each character. At the same time, the ANSI Format utilizes 8 bits for each character.

Joins, Queries
Grouping, Aggregate Functions, HAVING Clause
Subqueries, EXISTS, IN Operators
Miscellaneous: Ranking Functions, Foreign Key, UNION Operator, NULLs

#### Sample SQL Test Question

Sample SQL Test Question

Consider the following database tables:

![customers-table-and-subscriptions-table](https://tests4geeks.com/content/img/smp/sql-online-test-sample-question.png)

While peer reviewing a colleague's work, you stumble across the following SQL query, which is supposed to return how many subscriptions each of your customers has:

![sql-select-query](https://tests4geeks.com/content/img/smp/sql-test-query-sample.png)

What is wrong with this SQL query?

Answers:

1. It does not return customers who have no subscriptions.
2. It returns NULL instead of 0 for customers who have no subscriptions.
3. It returns more than one record for customers who have more than one subscription.

The correct answer is 2.
