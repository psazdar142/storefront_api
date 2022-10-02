import { Product, ProductStore} from '../models/product';

const store = new ProductStore();

describe("Book Model", () => {
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