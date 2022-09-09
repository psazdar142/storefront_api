"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const store = new product_1.ProductStore();
const index = async (_req, res) => {
    const product = await store.index();
    res.json(product);
};
const show = async (req, res) => {
    const product = await store.show(Number(req.params.id));
    res.json(product);
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
const product_routes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    // app.post('/products', create)
    app.delete('/products/:id', destroy);
};
exports.default = product_routes;
