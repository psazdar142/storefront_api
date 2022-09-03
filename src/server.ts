import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { UserStore, User } from './models/user'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', async function (req: Request, res: Response) {
    res.send('Hello World!')
    

    const store = new UserStore()

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
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
