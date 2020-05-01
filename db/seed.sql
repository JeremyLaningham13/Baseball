--Customers Table
CREATE TABLE if not exists customers (
customer_id SERIAL PRIMARY KEY,
firstname VARCHAR (100) NOT NULL,
lastname VARCHAR (100) NOT NULL,
email VARCHAR (100) NOT NULL,
password VARCHAR (100)
);

--Products Table
CREATE TABLE if not exists products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  description VARCHAR (150),
  price decimal
);

CREATE TABLE customer_cart (
  cart_id SERIAL PRIMARY KEY,
  customer_id int references customers(customer_id),
  paid boolean
);

CREATE TABLE cart_items (
  cart_item_id SERIAL PRIMARY KEY,
  cart_id int references customer_cart(cart_id),
  product_id int references products(product_id),
  qty int,
  price decimal
);