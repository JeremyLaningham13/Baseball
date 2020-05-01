insert into customers (
    firstname,
    lastname,
    email,
    password
) values (
    $1,
    $2,
    $3,
    $4
)
returning customer_id, email;