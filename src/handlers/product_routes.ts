import express, { Request, Response } from 'express'
import { ProductStore, Product } from '../models/product'
import jwt from 'jsonwebtoken'

let token_secret = process.env.SECRET_TOKEN + ""

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  console.log("HERE")
  try {
    jwt.verify(_req.body.token, token_secret)
  } catch (err) {
      res.status(401)
      res.json('Invalid token ' + err)
      return
  }

  const product = await store.index()
  res.json(product)
}

const show = async (req: Request, res: Response) => {
  try {
  jwt.verify(req.body.token, token_secret)
  } catch (err) {
    res.status(401)
    res.json('Invalid token ' + err)
    return
  }

  const product = await store.show(Number(req.params.id))
  res.json(product)
}

const create = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.body.token, token_secret)
  } catch (err) {
      res.status(401)
      res.json('Invalid token ' + err)
      return
  }

  try {
      const product: Product = {
          product_name: req.body.product_name,
          product_price: req.body.product_price,
          id: 1
      }

      const newProduct = await store.create(product)
      res.json(newProduct)
  } catch(err) {
      res.status(400)
      res.json(err)
  }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const product_routes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
  app.delete('/products/:id', destroy)
}

export default product_routes