"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    async index() {
        try {
            //   @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders_table';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }
    async create(o) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO orders_table (product_id, product_quantity, user_id, order_status) VALUES($1, $2, $3, $4) RETURNING *';
            const result = await conn.query(sql, [o.product_id, o.product_quantity, o.user_id, o.order_status]);
            conn.release();
            const Order = result.rows[0];
            return Order;
        }
        catch (err) {
            throw new Error(`Could not add new Order. Error: ${err}`);
        }
    }
    async delete(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'DELETE FROM orders_table WHERE id=($1) RETURNING *';
            const result = await conn.query(sql, [id]);
            conn.release();
            const Order = result.rows[0];
            return Order;
        }
        catch (err) {
            throw new Error(`Could not delete Order ${id}. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders_table WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find Order ${id}. Error: ${err}`);
        }
    }
}
exports.OrderStore = OrderStore;
