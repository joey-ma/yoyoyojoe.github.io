"use strict";(self.webpackChunkyoyoyojoe_github_io=self.webpackChunkyoyoyojoe_github_io||[]).push([[8833],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>N});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,N=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(N,l(l({ref:t},p),{},{components:r})):n.createElement(N,l({ref:t},p))}));function N(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const s={},l="SQL",o={unversionedId:"sql/sql",id:"sql/sql",title:"SQL",description:"Queries",source:"@site/docs/sql/sql.md",sourceDirName:"sql",slug:"/sql/",permalink:"/docs/sql/",draft:!1,editUrl:"https://github.com/yoyoyojoe/yoyoyojoe.github.io/tree/main/docs/sql/sql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL",permalink:"/docs/category/sql"},next:{title:"Terraform",permalink:"/docs/terraform"}},i={},u=[{value:"Queries",id:"queries",level:2},{value:"Joins",id:"joins",level:2},{value:"SQL Basics",id:"sql-basics",level:4},{value:"SQL Exercises",id:"sql-exercises",level:4},{value:"Query",id:"query",level:3},{value:"Query",id:"query-1",level:3},{value:"Ideas for Test Prep",id:"ideas-for-test-prep",level:3},{value:"Sample SQL Test Question",id:"sample-sql-test-question",level:4}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql"},"SQL"),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"SELECT\xa0*\xa0FROM\xa0Customers\nWHERE\xa0Country='Germany'\xa0OR\xa0Country='Spain';"),(0,a.kt)("p",null,"SELECT\xa0*\xa0FROM\xa0Customers\nWHERE\xa0NOT\xa0Country='Germany';"),(0,a.kt)("p",null,"SELECT\xa0*\xa0FROM\xa0Customers\nORDER\xa0BY\xa0Country\xa0ASC, CustomerName\xa0DESC;"),(0,a.kt)("p",null,"INSERT\xa0INTO\xa0Customers (CustomerName, City, Country)\nVALUES\xa0('Cardinal',\xa0'Stavanger',\xa0'Norway');"),(0,a.kt)("p",null,"SELECT\xa0CustomerName, ContactName, Address\nFROM\xa0Customers\nWHERE\xa0Address\xa0IS\xa0NULL;"),(0,a.kt)("p",null,"UPDATE\xa0Customers\nSET\xa0ContactName =\xa0'Alfred Schmidt', City=\xa0'Frankfurt'\nWHERE\xa0CustomerID =\xa01;"),(0,a.kt)("p",null,"Be careful when updating records. If you omit the\xa0WHERE\xa0clause, ALL records will be updated!"),(0,a.kt)("p",null,"DELETE\xa0FROM\xa0Customers\xa0WHERE\xa0CustomerName='Alfreds Futterkiste';\nSELECT\xa0column_name(s)\nFROM\xa0table_name\nWHERE\xa0condition\nLIMIT\xa0number;"),(0,a.kt)("p",null,"SELECT\xa0TOP\xa03\xa0*\xa0FROM\xa0Customers;"),(0,a.kt)("p",null,"SELECT\xa0*\xa0FROM\xa0Customers\nWHERE\xa0Country='Germany'\nLIMIT\xa03;"),(0,a.kt)("p",null,"SELECT\xa0MAX(Price)\xa0AS\xa0LargestPrice\nFROM\xa0Products;"),(0,a.kt)("p",null,"SELECT\xa0COUNT(ProductID) / AVG(Price) / SUM(Quantity)\nFROM\xa0Products;"),(0,a.kt)("h2",{id:"joins"},"Joins"),(0,a.kt)("p",null,"SELECT\xa0Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM\xa0Orders\nINNER\xa0JOIN\xa0Customers\xa0\nON\xa0Orders.CustomerID=Customers.CustomerID; (note: getting CustomerName from Customers table)"),(0,a.kt)("p",null,'returns the cities (only distinct values) from both the "Customers" and the "Suppliers" table:\nSELECT\xa0City\xa0FROM\xa0Customers\nUNION\nSELECT\xa0City\xa0FROM\xa0Suppliers\nORDER\xa0BY\xa0City;'),(0,a.kt)("p",null,"Different Types of SQL JOINs\nHere are the different types of the JOINs in SQL:"),(0,a.kt)("p",null,"(INNER) JOIN: Returns records that have matching values in both tables\nLEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table\nRIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table\nFULL (OUTER) JOIN: Returns all records when there is a match in either left or right table"),(0,a.kt)("h4",{id:"sql-basics"},"SQL Basics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/quiztest/quiztest.asp?qtest=SQL"},"W3Schools Quiz"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'How do you select all the records from a table named "Persons" where the "LastName" is alphabetically between (and including) "Hansen" and "Pettersen"?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen';\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SQL keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," is used to sort the result-set.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'How can you return all the records from a table named "Persons" sorted descending by "FirstName"?'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Persons ORDER BY FirstName DESC;\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'How can you insert a new record into the "Persons" table?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Persons VALUES ('Jimmy', 'Jackson');\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},'How can you insert "Olsen" as the "LastName" in the "Persons" table?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Persons (LastName) VALUES ('Olsen');\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},'How can you change "Hansen" into "Nilsen" in the "LastName" column in the Persons table?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE Persons SET LastName='Nilsen' WHERE LastName='Olsen';\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},'How can you delete the records where the "FirstName" is "Peter" in the Persons Table?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Persons WHERE FirstName='Peter';\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},'How can you return the number of records in the "Persons" table?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM Persons;\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"INNER JOIN")," is most common type of join.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Which operator is used to select values within a range? ",(0,a.kt)("inlineCode",{parentName:"p"},"BETWEEN"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The NOT NULL constraint enforces a column to not accept NULL values. ",(0,a.kt)("em",{parentName:"p"},"true"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Which operator is used to search for a specified pattern in a column? ",(0,a.kt)("inlineCode",{parentName:"p"},"LIKE"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Which SQL statement is used to create a database table called 'Customers'?"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Customers;\n")),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"Select all records where the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"City"),' column starts with the letter "a" (or not).')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE 'a%';\nSELECT * FROM Customers WHERE City NOT LIKE 'a%';\n")),(0,a.kt)("h4",{id:"sql-exercises"},"SQL Exercises"),(0,a.kt)("p",null,"Select all records from the Customers where the PostalCode column is empty."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE PostalCode IS NULL;\n")),(0,a.kt)("p",null,"Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers\nORDER BY Country, City;\n")),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"City")," value and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Country")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE Customers\nSET City = 'Oslo',\nCountry = 'Norway'\nWHERE CustomerID = 32;\n")),(0,a.kt)("p",null,"Use an SQL function to calculate the sum of all the ",(0,a.kt)("inlineCode",{parentName:"p"},"Price")," column values in the Products table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SUM(Price) FROM Products;\n")),(0,a.kt)("p",null,'Select all records where the value of the City column contains the letter "a".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE '%a%';\n")),(0,a.kt)("p",null,'Select all records where the second letter of the City is an "a".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE '_a%';\n")),(0,a.kt)("p",null,"Select all records where the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"City"),' column starts with letter "a" and ends with the letter "b".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE 'a%b';\n")),(0,a.kt)("p",null,"Select all records where the first letter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"City"),' is NOT an "a" or a "c" or an "f".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE '[!acf]%';\n")),(0,a.kt)("p",null,"Select all records where the first letter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"City"),' starts with anything from an "a" to an "f".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE City LIKE '[a-f]%';\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator to select all the records where ",(0,a.kt)("inlineCode",{parentName:"p"},"Country"),' is either "Norway" or "France".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers WHERE COUNTRY IN ('Norway', 'France');\n")),(0,a.kt)("p",null,"Query to join the two tables Orders and Customers, using the CustomerID field in both tables as the relationship between the two tables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM Orders\nLEFT JOIN Customers\nON Orders.CustomerID = Customers.CustomerID;\n")),(0,a.kt)("p",null,"Select all records from the two tables where there is a match in both tables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM Orders\nINNER JOIN Customers\nON Orders.CustomerID=Customers.CustomerID;\n")),(0,a.kt)("p",null,"Select all the records from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Customers")," table plus all the matches in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM Orders\nRIGHT JOIN Customers\nON Orders.CustomerID=Customers.CustomerID;\n")),(0,a.kt)("p",null,"List the number of customers in each country."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(CustomerID),\nCountry\nFROM Customers\nGROUP BY Country;\n")),(0,a.kt)("p",null,"List the number of customers in each country, ordered by the country with the most customers first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(CustomerID),\nCountry\nFROM Customers\nGROUP BY Country\nORDER BY COUNT(CustomerID) DESC;\n")),(0,a.kt)("p",null,"Given the following data definition, select all city names in descending order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TABLE cities\n  id INTEGER NOT NULL PRIMARY KEY,\n  name VARCHAR(30) NOT NULL\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM cities ORDER BY name DESC\n")),(0,a.kt)("p",null,"What is wrong with this SQL query? Correct it so it executes properly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Id, YEAR (BillingDate) AS BillingYear FROM InvoicesWHERE BillingYear >= 2010;\n")),(0,a.kt)("p",null,"Write a SQL query to find the 10th highest employee salary from an Employee table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Id, YEAR (BillingDate) AS BillingYear FROM InvoicesWHERE BillingYear >= 2010;\n")),(0,a.kt)("p",null,"Explain your answer. (Note: You may assume that there are at least 10 records in the Employee table)."),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"App usage data are kept in the following table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TABLE sessions\n  id INTEGER PRIMARY KEY,\n  userId INTEGER NOT NULL,\n  duration DECIMAL NOT NULL\n")),(0,a.kt)("p",null," Write a query that selects userId and average session duration for each user who has more than one session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n  userId, \n  AVG(duration) AS avg_duration\nFROM \n  sessions \nGROUP BY \n  userId\nHAVING \n  COUNT(*) > 1;\n")),(0,a.kt)("h3",{id:"query-1"},"Query"),(0,a.kt)("p",null,"A table containing the students enrolled in a yearly course has incorrect data in records with ids between 20 and 100 (inclusive)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TABLE enrollments\n  id INTEGER NOT NULL PRIMARY KEY\n  year INTEGER NOT NULL\n  studentId INTEGER NOT NULL\n")),(0,a.kt)("p",null," Write a query that updates the field ",(0,a.kt)("inlineCode",{parentName:"p"},"year")," of every faulty record to 2015."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE enrollments\nSET year = 2015\nWHERE id >= 20 AND id <= 100;\n")),(0,a.kt)("h3",{id:"ideas-for-test-prep"},"Ideas for Test Prep"),(0,a.kt)("p",null,"SQL (ASNI Format)"),(0,a.kt)("p",null,"ANSI Format was developed by The American National Standards Institute and presents itself as a Microsoft-related standard for character set encoding. Also ANSI Format serves as a modified ASCII (the American Standard Code for Information Interchange) character set. If we compare the ASCII code and the ANSI Format, the first one employs 7 bits to represent each character. At the same time, the ANSI Format utilizes 8 bits for each character."),(0,a.kt)("p",null,"Joins, Queries\nGrouping, Aggregate Functions, HAVING Clause\nSubqueries, EXISTS, IN Operators\nMiscellaneous: Ranking Functions, Foreign Key, UNION Operator, NULLs"),(0,a.kt)("h4",{id:"sample-sql-test-question"},"Sample SQL Test Question"),(0,a.kt)("p",null,"Sample SQL Test Question"),(0,a.kt)("p",null,"Consider the following database tables:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tests4geeks.com/content/img/smp/sql-online-test-sample-question.png",alt:"customers-table-and-subscriptions-table"})),(0,a.kt)("p",null,"While peer reviewing a colleague's work, you stumble across the following SQL query, which is supposed to return how many subscriptions each of your customers has:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tests4geeks.com/content/img/smp/sql-test-query-sample.png",alt:"sql-select-query"})),(0,a.kt)("p",null,"What is wrong with this SQL query?"),(0,a.kt)("p",null,"Answers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It does not return customers who have no subscriptions."),(0,a.kt)("li",{parentName:"ol"},"It returns NULL instead of 0 for customers who have no subscriptions."),(0,a.kt)("li",{parentName:"ol"},"It returns more than one record for customers who have more than one subscription.")),(0,a.kt)("p",null,"The correct answer is 2."))}m.isMDXComponent=!0}}]);