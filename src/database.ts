import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSGRES_USER,
    POSTGRES_PASSWORD,
    PORT,
} = process.env

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSGRES_USER,
    password: POSTGRES_PASSWORD,
})

export default client
