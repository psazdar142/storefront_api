import dotenv from 'dotenv'
import { Pool } from 'pg'
let ENV = process.env.ENV

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSGRES_USER,
    POSTGRES_PASSWORD,
    PORT,
    POSTGRES_TESTING_DB
} = process.env
ENV = ENV || process.env.ENV

let current_db; 
if(ENV == 'dev'){
    current_db = POSTGRES_DB;
}
else{
    current_db = POSTGRES_TESTING_DB;
}

const client = new Pool({
    host: POSTGRES_HOST,
    database: current_db,
    user: POSGRES_USER,
    password: POSTGRES_PASSWORD,
})


export default client
