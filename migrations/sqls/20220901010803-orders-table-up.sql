CREATE TABLE orders_table (
    id SERIAL PRIMARY KEY,
    user_id INTEGER, 
    FOREIGN KEY(user_id) REFERENCES users_table(id), 
    order_status VARCHAR(100)
);