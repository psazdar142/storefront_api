import express, { Request, Response } from 'express'
import { ProductStore, Product } from '../models/product'

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  const product = await store.index()
  res.json(product)
}

const show = async (req: Request, res: Response) => {
   const product = await store.show(Number(req.params.id))
   res.json(product)
}

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

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const product_routes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
// app.post('/products', create)
  app.delete('/products/:id', destroy)
}

export default product_routes