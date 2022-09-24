import dotenv from 'dotenv'
import { Pool } from 'pg'
let ENV = process.env.ENV
console.log("line 3 is " + ENV)
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
// let client
console.log('ENV is ' + ENV)

let current_db; 
if(ENV == 'dev'){
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
