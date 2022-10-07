import express, { Request, Response } from 'express'
import { OrderStore, Order } from '../models/order'
import jwt from 'jsonwebtoken'

let token_secret = process.env.SECRET_TOKEN + ""

const store = new OrderStore()

const index = async (_req: Request, res: Response) => {
  try {
    jwt.verify(_req.body.token, token_secret)
  } catch (err) {
      res.status(401)
      res.json('Invalid token ' + err)
      return
  }

  const order = await store.index()
  res.json(order)
}

const show = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.body.token, token_secret)
  } catch (err) {
      res.status(401)
      res.json('Invalid token ' + err)
      return
  }

   const order = await store.show(Number(req.params.id))
   res.json(order)
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
      const order: Order = {
      product_id: req.body.product_id,
      product_quantity: req.body.product_quantity,
      user_id: req.body.user_id,
      order_status: req.body.order_status,
      id: 1
      }

      const newOrder = await store.create(order)
      res.json(newOrder)
  } catch(err) {
      res.status(400)
      res.json('BAD REQUEST ' + err)
  }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const order_routes = (app: express.Application) => {
  app.get('/orders', index)
  app.get('/orders/:id', show)
  app.post('/orders', create)
  app.delete('/orders/:id', destroy)
}

export default order_routes