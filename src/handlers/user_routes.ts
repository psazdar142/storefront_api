import express, { Request, Response } from 'express'
import { UserStore, User } from '../models/user'

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
  const users = await store.index()
  res.json(users)
}

const show = async (req: Request, res: Response) => {
   const article = await store.show(Number(req.params.id))
   res.json(article)
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

const user_routes = (app: express.Application) => {
  app.get('/users', index)
  app.get('/users/:id', show)
// app.post('/users', create)
  app.delete('/users/:id', destroy)
}

export default user_routes