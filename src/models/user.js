"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
class UserStore {
    async index() {
        try {
            //   @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM users_table';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get users. Error: ${err}`);
        }
    }
    async create(u) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO users_table (first_name, last_name, password) VALUES($1, $2, $3) RETURNING *';
            const hash = bcrypt_1.default.hashSync(u.password + BCRYPT_PASSWORD, parseInt(String(SALT_ROUNDS)));
            const result = await conn.query(sql, [u.first_name, u.last_name, hash]);
            conn.release();
            const user = result.rows[0];
            return user;
        }
        catch (err) {
            throw new Error(`Could not add new user ${u.first_name}. Error: ${err}`);
        }
    }
    async delete(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'DELETE FROM users_table WHERE id=($1) RETURNING *';
            const result = await conn.query(sql, [id]);
            conn.release();
            const user = result.rows[0];
            return user;
        }
        catch (err) {
            throw new Error(`Could not delete user ${id}. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM users_table WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find user ${id}. Error: ${err}`);
        }
    }
}
exports.UserStore = UserStore;
