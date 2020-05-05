update customers
set email = $1
where customer_id = $2;

select customer_id, firstname, lastname, email from customers
where customer_id = $2;