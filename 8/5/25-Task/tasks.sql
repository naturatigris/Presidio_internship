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





