import client from '../database'

export type User = {
    id: Number;
    first_name: string;
    last_name: string;
    password: string;
}

export class UserStore {

    async index(): Promise<User[]> {
        try {
            //   @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM users_table'
            const result = await conn.query(sql)
            conn.release()
            return result.rows 
        } catch (err) {
          throw new Error(`Could not get users. Error: ${err}`)
        }
    }

    async create(u: User): Promise<User[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO users_table (first_name, last_name, password) VALUES($1, $2, $3) RETURNING *'
            const result = await conn.query(sql, [u.first_name, u.last_name, u.password])
            conn.release()
            const user = result.rows[0] 
            return user
        } catch (err) {
          throw new Error(`Could not add new user ${u.first_name}. Error: ${err}`)
        }
    }

    async delete(id: Number): Promise<User[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'DELETE FROM users_table WHERE id=($1) RETURNING *'
            const result = await conn.query(sql, [id])
            conn.release()
            const user = result.rows[0] 
            return user
        } catch (err) {
          throw new Error(`Could not delete user ${id}. Error: ${err}`)
        }
    }

    async show(id: Number): Promise<User> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM users_table WHERE id=($1)'
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find user ${id}. Error: ${err}`)
        }
      }
}