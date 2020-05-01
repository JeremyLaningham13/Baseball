-- insert into products (name, description, price)
-- values ('Cage Rental', '2 Hour Cage Rental', 75.00);

-- insert into products (name, description, price)
-- values('Lesson', '30 Minute Lesson', 40.00);

-- delete from products where price=(75);

-- update products
-- set price = 65.00
-- where id = 10;

-- ALTER TABLE products
-- ALTER COLUMN price set data type decimal;

-- CREATE TABLE if not exists users (
-- id SERIAL PRIMARY KEY,
-- firstname VARCHAR (100) NOT NULL,
-- lastname VARCHAR (100) NOT NULL,
-- email VARCHAR (100) NOT NULL,
-- password VARCHAR (100)
-- );

-- create table customer_cart (
-- cart_id serial primary key,
-- id int references users(id),
-- paid boolean
-- );

-- create table cart_items (
-- cart_item_id serial primary key,
-- cart_id int references customer_cart(cart_id),
-- id int references products(id),
-- qty int,
-- price numeric
-- );

-- select * from cart_items ci
-- join products p on ci.id = p.id
-- where ci.cart_id = 13

-- insert into customer_cart (id, paid)
-- values (20, false)

-- delete from cart_items where cart_id is null

-- alter table users
-- rename COLUMN id to user_id

-- alter table products
-- rename COLUMN id to product_id

-- alter table customer_cart
-- rename COLUMN id to user_id

-- alter table customer_cart
-- rename COLUMN user_id to id

-- alter table users
-- rename COLUMN user_id to id

-- alter table products
-- rename COLUMN product_id to id

-- select * from cart_items ci
-- join products p on ci.id = p.id
-- join customer_cart cc on cc.cart_id = ci.cart_id
-- where ci.cart_id = 2

-- select * from cart_items ci
-- join products p on ci.cart_item_id = p.id
-- join customer_cart cc on cc.cart_id = p.id
-- where ci.cart_id = 2

-- SELECT * FROM produ
-- full join cart_items ci on ci.cart_id = p.id
-- WHERE p.id IN (SELECT id FROM cart_items WHERE cart_id = 2);

-- (SELECT id FROM cart_items WHERE cart_id = 2)

-- insert into customer_cart (id, paid)
-- values (21, false)