const {UserStore} = require("../models/user") 

const store = new UserStore()

// store.create({
//   first_name: 'Adam',
//   last_name: "Sandler",
//   password: "Turkey",
//   id: 50
// });

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

    // it('create method should add a user', async () => {
    //   const result = await store.create({
    //     first_name: 'John',
    //     last_name: "smith",
    //     password: "cows",
    //     id: 1
    //   });
    //   expect(result).toEqual(jasmine.objectContaining({
    //     first_name: 'John',
    //     last_name: "smith"
    //   }));
    // });

    // it('show method should return the correct user', async () => {
    //   const result = await store.show("1");
    //   expect(result).toEqual(jasmine.objectContaining({
    //     first_name: 'John',
    //     last_name: "smith"
    //   }));
    // });

    // it('index method should return all users', async () => {
    //   const result = await store.index;
    //   expect(result).toEqual(jasmine.objectContaining({
    //     id: 1,
    //     first_name: 'John',
    //     last_name: "smith"
    //   }));
    // });

  });
