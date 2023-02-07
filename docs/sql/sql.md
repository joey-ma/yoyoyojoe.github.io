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

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers 
ON Orders.CustomerID=Customers.CustomerID; (note: getting CustomerName from Customers table)

￼

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
