import client from '../database'

export type Order_to_product = {
    order_id: Number;
    product_id: Number;
    product_quantity: Number;
}

export class Order_To_Procuct_Store {

    async create(o: Order_to_product): Promise<any> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO order_to_product_table (product_id, order_id, quantity) VALUES($1, $2, $3) RETURNING *'
            const result = await conn.query(sql, [o.product_id, o.order_id, o.product_quantity])
            conn.release()
            const user = result.rows[0] 
            return user
        } catch (err) {
          console.log("Problem with create: " + err)
        }
    }

    async show(id: Number): Promise<any> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            // const sql = 'SELECT * FROM order_to_product_table WHERE id=($1)'
            const sql = 'select first_name, last_name, product_name, product_price, quantity, order_status from public.order_to_product_table JOIN orders_table on order_to_product_table.order_id = orders_table.id JOIN users_table on users_table.id = orders_table.user_id JOIN products_table on products_table.id = order_to_product_table.product_id where order_to_product_table.order_id = ($1)'
            const result = await conn.query(sql, [id])
            conn.release()

            const all_rows = result.rows
            console.log(all_rows)
            const obj = {
                first_name: all_rows[0].first_name,
                last_name: all_rows[0].last_name,
                orders: all_rows.map(row => ({
                    product_name: row.product_name,
                    quantity: row.quantity,
                    price: row.product_price,
                    order_status: row.order_status
                })),
                total_price: all_rows.reduce((sum, row) =>
                    sum + (row.product_price * row.quantity), 0)
            }

            return obj
        } catch (err) {
            console.log("Probelm with show order_to_product: " + err)
        }
      }

}