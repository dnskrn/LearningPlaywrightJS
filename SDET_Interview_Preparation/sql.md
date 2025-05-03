# SQL Notes & Interview Preparation

---

## Common SQL Queries

### Retrieve all records from a table
```sql
SELECT * FROM table_name;
```

### Count the number of records in a table
```sql
SELECT COUNT(*) FROM table_name;
```

### Select distinct values from a column
```sql
SELECT DISTINCT column_name FROM table_name;
```

### Filter records based on a specific condition
```sql
SELECT * FROM table_name WHERE condition;
```

### Sort records
- Ascending:
    ```sql
    SELECT * FROM table_name ORDER BY column_name ASC;
    ```
- Descending:
    ```sql
    SELECT * FROM table_name ORDER BY column_name DESC;
    ```

### Joins
- Inner Join:
    ```sql
    SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;
    ```
- Left Join:
    ```sql
    SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
    ```
- Right Join:
    ```sql
    SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
    ```

### Aggregate Functions
- Sum:
    ```sql
    SELECT SUM(column_name) FROM table_name;
    ```
- Average:
    ```sql
    SELECT AVG(column_name) FROM table_name;
    ```
- Maximum:
    ```sql
    SELECT MAX(column_name) FROM table_name;
    ```
- Minimum:
    ```sql
    SELECT MIN(column_name) FROM table_name;
    ```

### Grouping and Filtering
- Group By:
    ```sql
    SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;
    ```
- Having Clause:
    ```sql
    SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;
    ```

### Pattern Matching
- Using `LIKE`:
    ```sql
    SELECT * FROM table_name WHERE column_name LIKE 'pattern%';
    ```
- Using `BETWEEN`:
    ```sql
    SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;
    ```
- Using `IN`:
    ```sql
    SELECT * FROM table_name WHERE column_name IN (value1, value2, value3);
    ```

---

## Advanced SQL Queries

### Find the nth highest salary
```sql
SELECT DISTINCT Salary
FROM Employee
ORDER BY Salary DESC
LIMIT 1 OFFSET n-1;
```

### Employees with specific conditions
1. Ends with 'A':
     ```sql
     SELECT * FROM EMPLOYEE WHERE FIRST_NAME LIKE '%a';
     ```
2. Ends with 'H' and contains six alphabets:
     ```sql
     SELECT * FROM EMPLOYEE WHERE FIRST_NAME LIKE '_____h';
     ```
3. Salary between 100,000 and 500,000:
     ```sql
     SELECT * FROM EMPLOYEE WHERE SALARY BETWEEN 100000 AND 500000;
     ```

### Fetch employees who joined in February 2014
```sql
SELECT * FROM EMPLOYEE WHERE YEAR(JOINING_DATE) = 2014 AND MONTH(JOINING_DATE) = 2;
```

### Fetch employee count per department
```sql
SELECT DEPARTMENT, COUNT(EMPLOYEE_ID) AS No_Of_EMPLOYEEs
FROM EMPLOYEE
GROUP BY DEPARTMENT
ORDER BY No_Of_EMPLOYEEs DESC;
```

### Fetch duplicate records
```sql
SELECT EMPLOYEE_TITLE, AFFECTED_FROM, COUNT(*)
FROM Title
GROUP BY EMPLOYEE_TITLE, AFFECTED_FROM
HAVING COUNT(*) > 1;
```

---

## SQL Commands Comparison

### Drop vs Truncate vs Delete
| Command   | Purpose                              | Effect                                   |
|-----------|--------------------------------------|-----------------------------------------|
| `DROP`    | Deletes entire table structure       | Irreversible, removes table and data    |
| `TRUNCATE`| Removes all rows from a table        | Keeps table structure intact            |
| `DELETE`  | Removes specific rows based on condition | Generates transaction logs             |

---

## Scenario-Based Questions

### Types of Joins
- **Inner Join**: Retrieve matching rows from both tables.
    ```sql
    SELECT employees.employee_id, employees.employee_name, departments.department_name
    FROM employees
    INNER JOIN departments ON employees.department_id = departments.department_id;
    ```

### Subqueries
- Example:
    ```sql
    SELECT employee_name, salary
    FROM employees
    WHERE salary > (SELECT AVG(salary) FROM employees);
    ```

### Window Functions
- Example:
    ```sql
    SELECT department_name, employee_name, salary, 
                 RANK() OVER (PARTITION BY department_name ORDER BY salary DESC) AS salary_rank
    FROM employees;
    ```

### Indexing
- Example:
    ```sql
    CREATE INDEX idx_employee_name ON employees(employee_name);
    ```

### Transactions
- Example:
    ```sql
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE account_id = 123;
    COMMIT;
    ```

---

## Additional Topics

### Stored Procedures
```sql
CREATE PROCEDURE sp_GetEmployeeCount
AS
BEGIN
        SELECT COUNT(*) FROM employees;
END;
```

### Handling NULL Values
```sql
SELECT employee_name, COALESCE(salary, 0) AS adjusted_salary
FROM employees;
```

### Dynamic SQL
```sql
DECLARE @sql_query NVARCHAR(MAX);
SET @sql_query = 'SELECT * FROM ' + @table;
```
