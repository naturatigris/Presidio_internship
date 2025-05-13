create database ecommerce;
use ecommerce;
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PhoneNo NVARCHAR(20),
    Address NVARCHAR(255)
);
CREATE TABLE ProductType (
    ProductTypeID INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    Category NVARCHAR(100) NOT NULL
);
CREATE TABLE Supplier (
    SupplierID INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    Place NVARCHAR(100),
    Address NVARCHAR(255)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY,
    ProductTypeID INT NOT NULL,
    SupplierID INT NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (ProductTypeID) REFERENCES ProductType(ProductTypeID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY IDENTITY,
    Type NVARCHAR(50) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    CustomerID INT NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    Amount DECIMAL(10, 2),
	PaymentID INT,

    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
	FOREIGN KEY (PaymentID) REFERENCES Payment(PaymentID)

);


CREATE TABLE OrderDetails (
    OrderDetailsID INT PRIMARY KEY IDENTITY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    Amount DECIMAL(10, 2),

    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
);
 