CREATE TABLE order_to_product_table (
    id SERIAL PRIMARY KEY,

    product_id INTEGER,
    FOREIGN KEY(product_id) REFERENCES products_table(id), 

    order_id INTEGER,
    FOREIGN KEY(order_id) REFERENCES orders_table(id), 
    
    quantity INTEGER
);

