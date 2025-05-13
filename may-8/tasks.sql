--task1
select o.OrderID,concat(e.FirstName,' ',e.LastName) as emp_name, c.CompanyName 
from Orders o join Employees e on e.EmployeeID=o.EmployeeID 
join Customers c on c.CustomerID=o.CustomerID;

--task-2
select p.ProductName,c.CategoryName, s.CompanyName 
from Products p join Categories c on c.CategoryID=p.CategoryID 
join Suppliers s on s.SupplierID=p.SupplierID;

--task-3
select o.OrderID,p.ProductName,od.Quantity,od.UnitPrice
from Orders o join [Order Details] od on od.OrderID=o.OrderID
join Products p on p.ProductID=od.ProductID;

--task-4
select * from Employees where ReportsTo is Not null;


--task-5

select CustomerID,count(*) as Number_of_orders from Orders group by CustomerID;

--task-6
select CategoryID,avg(UnitPrice) as avg_unit_price from Products group by CategoryID;

--task-7
select * from Customers where ContactTitle Like '%Owner';

--task-8
SELECT TOP 5 * FROM Products ORDER BY UnitPrice DESC;
--task-9
select OrderID,sum(unitPrice*Quantity) as Tota_Amount from [Order Details] group by OrderID;

--task-10
create or alter proc proc_order(@cid nchar(10))
as 
begin
select * from Orders where CustomerID=@cid;
end
select * from Orders

exec proc_order 'VINET';
--task-11

CREATE PROCEDURE InsertProduct(@ProductName NVARCHAR(100),@SupplierID INT,@CategoryID INT,@QuantityPerUnit NVARCHAR(50) = NULL,
    @UnitPrice DECIMAL(10, 2),@UnitsInStock SMALLINT = 0,@UnitsOnOrder SMALLINT = 0,@ReorderLevel SMALLINT = 0,
    @Discontinued BIT = 0)
AS
BEGIN
    INSERT INTO Products 
    VALUES (@ProductName,@SupplierID,@CategoryID,@QuantityPerUnit,
        @UnitPrice,@UnitsInStock,@UnitsOnOrder,@ReorderLevel,@Discontinued
    );
END;
EXEC InsertProduct @ProductName='Chai', @SupplierID=1, @CategoryID=1, @QuantityPerUnit='10 boxes x 20 bags', @UnitPrice=18.00, @UnitsInStock=39, @UnitsOnOrder=0, @ReorderLevel=10, @Discontinued=0;

--task-12

create or alter proc proc_sales(@eid int)
as 
begin
select sum(od.UnitPrice * od.Quantity) as total from Orders o join [Order Details] od on od.OrderID=o.OrderID 
join Employees e on e.EmployeeID=o.EmployeeID where o.EmployeeID=@eid group by o.EmployeeID;
end

exec proc_sales 1;

--task-13
WITH RankedProducts AS (
    SELECT ProductID,ProductName, CategoryID,UnitPrice,
        ROW_NUMBER() OVER (PARTITION BY CategoryID ORDER BY UnitPrice DESC) AS PriceRank FROM Products
)

select  * from RankedProducts order by CategoryID, PriceRank

--task-14

WITH ProductRevenue AS (SELECT p.ProductID, p.ProductName, SUM(od.UnitPrice * od.Quantity) AS TotalRevenue FROM Products p 
JOIN [Order Details] od ON p.ProductID = od.ProductID 
GROUP BY p.ProductID, p.ProductName) 
SELECT * FROM ProductRevenue WHERE TotalRevenue > 10000 ORDER BY TotalRevenue DESC;

--task-15
WITH EmployeeHierarchy AS (
    SELECT EmployeeID,FirstName,ReportsTo,1 AS Level FROM Employees WHERE ReportsTo IS NULL

    UNION ALL

    SELECT e.EmployeeID,e.FirstName,e.ReportsTo,eh.Level + 1FROM Employees e
    INNER JOIN EmployeeHierarchy eh ON e.ReportsTo = eh.EmployeeID
)
SELECT *
FROM EmployeeHierarchy
ORDER BY Level, ReportsTo;





