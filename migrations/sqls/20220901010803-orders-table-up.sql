CREATE TABLE orders_table (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    FOREIGN KEY(product_id) REFERENCES products_table(id), 
    product_quantity INTEGER,
    user_id INTEGER, 
    FOREIGN KEY(user_id) REFERENCES users_table(id), 
    order_status VARCHAR(100)
);