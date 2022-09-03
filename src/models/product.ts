import client from '../database'

export type Product = {
    id: Number;
    product_name: string;
    product_price: Number;
}

export class ProductStore {

    async index(): Promise<Product[]> {
        try {
            //   @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products_table'
            const result = await conn.query(sql)
            conn.release()
            return result.rows 
        } catch (err) {
          throw new Error(`Could not get products. Error: ${err}`)
        }
    }

    async create(p: Product): Promise<Product[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO products_table (product_name, product_price) VALUES($1, $2) RETURNING *'
            const result = await conn.query(sql, [p.product_name, p.product_price])
            conn.release()
            const Product = result.rows[0] 
            return Product
        } catch (err) {
          throw new Error(`Could not add new Product ${p.product_name}. Error: ${err}`)
        }
    }

    async delete(id: Number): Promise<Product[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'DELETE FROM products_table WHERE id=($1) RETURNING *'
            const result = await conn.query(sql, [id])
            conn.release()
            const Product = result.rows[0] 
            return Product
        } catch (err) {
          throw new Error(`Could not delete Product ${id}. Error: ${err}`)
        }
    }

    async show(id: Number): Promise<Product> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products_table WHERE id=($1)'
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find Product ${id}. Error: ${err}`)
        }
      }
}