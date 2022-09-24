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
        password: "cows",
        id: 1
      });
      expect(result).toEqual(jasmine.objectContaining({
        first_name: 'John',
        last_name: "smith",
        id: 1
      }));
    });

    it('show method should return the correct user', async () => {
      const create_test = store.create({
        first_name: 'Sally',
        last_name: "Runner",
        password: 'Apples',
        id: 2
      });

      const result = await store.show("2");
      expect(result).toEqual(jasmine.objectContaining({
        first_name: 'Sally',
        last_name: "Runner",
        id: 2
      }));
    });

  });
