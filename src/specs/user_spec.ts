// import { UserStore } from "../models/user";

// require { UserStore } from "../models/user";\
const {UserStore} = require("../models/user") 

const store = new UserStore()

describe("User Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a show method', () => {
      expect(store.show).toBeDefined();
    });
  
    it('should have a create method', () => {
      expect(store.create).toBeDefined();
    });
  
    it('should have a delete method', () => {
      expect(store.delete).toBeDefined();
    });


    it('create method should add a book', async () => {
      const result = await store.create({
        first_name: 'John',
        last_name: "smith",
        password: 'cows',
        id: 1
      });
      expect(result).toEqual({
        first_name: 'John',
        last_name: "smith",
        password: 'cows',
        id: 1
      });
    });

  });
