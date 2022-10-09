import { skipPartiallyEmittedExpressions } from "typescript";

const {UserStore} = require("../models/user") 

const store = new UserStore()
// const result = store.create({
//   first_name: 'John',
//   last_name: "smith",
//   password: "cows",
//   id: 1
// });

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

    it('create method should add a user', async () => {
      const result = await store.create({
        first_name: 'John',
        last_name: "smith",
        password: "cows",
        id: 1
      });
      expect(result).toEqual(jasmine.objectContaining({
        first_name: 'John',
        last_name: "smith"
      }));
    });

    it('show method should return the correct user', async () => {
      const result = await store.show("1");
      expect(result).toEqual(jasmine.objectContaining({
        first_name: 'John',
        last_name: "smith"
      }));
    });

    // it('index method should return all users', async () => {
    //   const result = await store.index;
    //   console.log("RESULT: " + result)
    //   expect(result).toEqual(
    //     jasmine.objectContaining({
    //       first_name: 'John',
    //       last_name: "smith"
    //     })
    //   );
    // });

  });


  function sleep(milliseconds: Number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }