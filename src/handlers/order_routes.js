"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const order = await store.index();
    res.json(order);
};
const show = async (req, res) => {
    const order = await store.show(Number(req.params.id));
    res.json(order);
};
// const create = async (req: Request, res: Response) => {
//     try {
//         const user: User = {
//             title: req.body.title,
//             content: req.body.content,
//         }
//         const newArticle = await store.create(article)
//         res.json(newArticle)
//     } catch(err) {
//         res.status(400)
//         res.json(err)
//     }
// }
const destroy = async (req, res) => {
    const deleted = await store.delete(req.body.id);
    res.json(deleted);
};
const order_routes = (app) => {
    app.get('/orders', index);
    app.get('/orders/:id', show);
    // app.post('/orders', create)
    app.delete('/orders/:id', destroy);
};
exports.default = order_routes;
