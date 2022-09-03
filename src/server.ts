import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { UserStore, User } from './models/user'
import { ProductStore } from './models/product'
import { OrderStore } from './models/order'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', async function (req: Request, res: Response) {
    res.send('Hello World!')
    

    // <<<< Product Model Testing >>>>
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
    const store = new OrderStore();
    const create_test = await store.create({
        product_id: 1,
        product_quantity: 6,
        user_id: 3,
        order_status: "INCOMPLETE",
        id: 1
    });

    // const index_test = await store.index();
    // console.log(index_test)

    // const user_delete_test = await store.delete(1);

    // const show_test = await store.show(7);
    // console.log(show_test)
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
