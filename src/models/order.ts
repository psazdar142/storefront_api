import client from '../database'

export type Order = {
    id: Number;
    product_id: Number;
    product_quantity: Number;
    user_id: Number;
    order_status: string;
}

export class OrderStore {

    async index(): Promise<Order[]> {
        try {
            //   @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders_table'
            const result = await conn.query(sql)
            conn.release()
            return result.rows 
        } catch (err) {
          throw new Error(`Could not get products. Error: ${err}`)
        }
    }

    async create(o: Order): Promise<Order[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO orders_table (product_id, product_quantity, user_id, order_status) VALUES($1, $2, $3, $4) RETURNING *'
            const result = await conn.query(sql, [o.product_id, o.product_quantity, o.user_id, o.order_status])
            conn.release()
            const Order = result.rows[0] 
            return Order
        } catch (err) {
          throw new Error(`Could not add new Order. Error: ${err}`)
        }
    }

    async delete(id: Number): Promise<Order[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'DELETE FROM orders_table WHERE id=($1) RETURNING *'
            const result = await conn.query(sql, [id])
            conn.release()
            const Order = result.rows[0] 
            return Order
        } catch (err) {
          throw new Error(`Could not delete Order ${id}. Error: ${err}`)
        }
    }

    async show(id: Number): Promise<Order> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders_table WHERE id=($1)'
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find Order ${id}. Error: ${err}`)
        }
      }
}