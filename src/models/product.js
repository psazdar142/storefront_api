"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductStore {
    async index() {
        try {
            //   @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products_table';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }
    async create(p) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO products_table (product_name, product_price) VALUES($1, $2) RETURNING *';
            const result = await conn.query(sql, [p.product_name, p.product_price]);
            conn.release();
            const Product = result.rows[0];
            return Product;
        }
        catch (err) {
            throw new Error(`Could not add new Product ${p.product_name}. Error: ${err}`);
        }
    }
    async delete(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'DELETE FROM products_table WHERE id=($1) RETURNING *';
            const result = await conn.query(sql, [id]);
            conn.release();
            const Product = result.rows[0];
            return Product;
        }
        catch (err) {
            throw new Error(`Could not delete Product ${id}. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products_table WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find Product ${id}. Error: ${err}`);
        }
    }
}
exports.ProductStore = ProductStore;
