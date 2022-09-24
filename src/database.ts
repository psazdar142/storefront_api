import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSGRES_USER,
    POSTGRES_PASSWORD,
    PORT,
    DB_ENV,
    POSTGRES_TESTING_DB
} = process.env

// let client
console.log('DB_ENV is ' + DB_ENV)

let current_db; 
if(DB_ENV == 'dev'){
    current_db = POSTGRES_DB;
}
else{
    current_db = POSTGRES_TESTING_DB;
}

// if(ENV == 'dev'){
//     client = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DB,
//         user: POSGRES_USER,
//         password: POSTGRES_PASSWORD,
//     })
// }



// (ENV === 'test') {
//     client = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_TESTING_DB,
//         user: POSGRES_USER,
//         password: POSTGRES_PASSWORD,
//     })
// }

const client = new Pool({
    host: POSTGRES_HOST,
    database: current_db,
    user: POSGRES_USER,
    password: POSTGRES_PASSWORD,
})


export default client
