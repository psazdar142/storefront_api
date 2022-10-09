import { OrderStore, Order } from "../models/order";
const {UserStore} = require("../models/user") 

const store_User = new UserStore()


const store = new OrderStore();

describe("Order Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a show method', () => 
    {
      expect(store.index).toBeDefined();
    });
  
    it('should have a create method', () => {
      expect(store.index).toBeDefined();
    });
    
    it('create method should add a order', async () => {
      const result_user = await store_User.create({
        first_name: 'John',
        last_name: "smith",
        password: "cows",
        id: 1
      });

      const result = await store.create(
        {
        "user_id": 1,

        "order_status": "COMPLETE"
      });
      expect(result).toEqual(1);
    });




});
