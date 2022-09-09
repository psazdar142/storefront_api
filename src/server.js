"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_routes_1 = __importDefault(require("./handlers/user_routes"));
const product_routes_1 = __importDefault(require("./handlers/product_routes"));
const order_routes_1 = __importDefault(require("./handlers/order_routes"));
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', async function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
(0, user_routes_1.default)(app);
(0, product_routes_1.default)(app);
(0, order_routes_1.default)(app);
// import { UserStore, User } from './models/user'
// import { ProductStore } from './models/product'
// import { OrderStore } from './models/order'
// <<<< User Model Testing >>>>
// const store = new UserStore()
// const create_test = await store.create({
//     first_name: 'John',
//     last_name: "smith",
//     password: 'cows',
//     id: 1
// });
// const user_index_test = await store.index();
// console.log(user_index_test)
// const user_delete_test = await store.delete(2);
// const user_show_test = await store.show(15);
// console.log(user_show_test)
// <<<< Product Model Testing >>>>
// const store = new ProductStore();
// const create_test = await store.create({
//     product_name: "dog food",
//     product_price: 5,
//     id: 1
// });
// const index_test = await store.index();
// console.log(index_test)
// const user_delete_test = await store.delete(1);
// const show_test = await store.show(7);
// console.log(show_test)
// <<<< Order Model Testing >>>>
// const store = new OrderStore();
// const create_test = await store.create({
//     product_id: 1,
//     product_quantity: 6,
//     user_id: 1,
//     order_status: "INCOMPLETE",
//     id: 1
// });
// const index_test = await store.index();
// console.log(index_test)
// const user_delete_test = await store.delete(1);
// const show_test = await store.show(7);
// console.log(show_test)
