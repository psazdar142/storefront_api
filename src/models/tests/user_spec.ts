// import { UserStore, User } from "../user";
import { UserStore } from "../user";

const store = new UserStore()

describe("User Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
  
    // it('should have a show method', () => {
    //   expect(store.index).toBeDefined();
    // });
  
    // it('should have a create method', () => {
    //   expect(store.index).toBeDefined();
    // });
  
    // it('should have a update method', () => {
    //   expect(store.index).toBeDefined();
    // });
  
    // it('should have a delete method', () => {
    //   expect(store.index).toBeDefined();
    // });
  });
