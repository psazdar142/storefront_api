import { OrderStore, Order } from "../models/order";


const store = new OrderStore();

describe("Order Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a show method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a create method', () => {
      expect(store.index).toBeDefined();
    });
    
});