"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { UserStore, User } from "../user";
const user_1 = require("../src/models/user");
const store = new user_1.UserStore();
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
