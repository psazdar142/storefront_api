import express, { Request, Response } from 'express'
import { UserStore, User } from '../models/user'
import jwt from 'jsonwebtoken'

let token_secret = process.env.SECRET_TOKEN + ""

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
    try {
        jwt.verify(_req.body.token, token_secret)
    } catch (err) {
        res.status(401)
        res.json('Invalid token ' + err)
        return
    }
      
      const users = await store.index()
      res.json(users)
}

const show = async (req: Request, res: Response) => {
    try {
        jwt.verify(req.body.token, token_secret)
    } catch (err) {
        res.status(401)
        res.json('Invalid token ' + err)
        return
    }

   const article = await store.show(Number(req.params.id))
   res.json(article)
}

const create = async (req: Request, res: Response) => {
    
    try {
        const user: User = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            id: 1
        }
        
        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser }, token_secret)
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err)
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
    const deleted = await store.delete(Number(req.params.id))
    res.json(deleted)
}

const user_routes = (app: express.Application) => {
  app.get('/users', index)
  app.get('/users/:id', show)
  app.post('/users', create)
  app.delete('/users/:id', destroy)
}

export default user_routes