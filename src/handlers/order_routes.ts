import express, { Request, Response } from 'express'
import { OrderStore, Order } from '../models/order'
import { Order_To_Procuct_Store, Order_to_product } from '../models/order_to_product'
import jwt from 'jsonwebtoken'

let token_secret = process.env.SECRET_TOKEN + ""

const store = new OrderStore()
const store_o_p = new Order_To_Procuct_Store()

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

  //  const order = await store.show(Number(req.params.id))
  // try{
  //   const order_o_p = await store_o_p.show(Number(req.params.id))
  // }catch(err){console.log(err)}
  const order_o_p = await store_o_p.show(Number(req.params.id))
   res.json(order_o_p   )
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
      user_id: req.body.user_id,
      order_status: req.body.order_status
      }

      const newOrder = await store.create(order)

      try{
        let products_array = req.body.product_id
        for (let i = 0; i < products_array.length; i++) {
          let num = Number(newOrder) * 1
          const order_to_p: Order_to_product = {
            order_id: num,
            product_id: req.body.product_id[i],
            product_quantity: req.body.product_quantity[i]
          }
          console.log(order_to_p)
          const o_p = await store_o_p.create(order_to_p)
        }
      }
      catch(err){
        console.log("error with adding to product to order table: " + err)
      }



      res.json(newOrder)
  } catch(err) {
      res.status(400)
      res.json('BAD REQUEST ' + err)
  }
}

const destroy = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.body.token, token_secret)
  } catch (err) {
      res.status(401)
      res.json('Invalid token ' + err)
      return
  }

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