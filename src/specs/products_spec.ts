import { Product, ProductStore} from '../models/product';

const store = new ProductStore();

describe("Products Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a show method', () => {
      expect(store.index).toBeDefined();
    });
  
    it('should have a create method', () => {
      expect(store.index).toBeDefined();
    });



    it('create method should add a product', async () => {
      const result = await store.create({
        product_name: "dog food",
        product_price: 5,
        id: 1
      });
      expect(result).toEqual(jasmine.objectContaining({
        product_name: "dog food",
        product_price: 5
      }));
    });

    it('show method should return the correct product', async () => {
      const result = await store.show(1);
      expect(result).toEqual(jasmine.objectContaining({
        product_name: "dog food",
        product_price: 5
      }));
    });

    it('create method should add a product2', async () => {
      const result = await store.create({
        product_name: "Apple",
        product_price: 32,
        id: 2
      });
      expect(result).toEqual(jasmine.objectContaining({
        product_name: "Apple",
        product_price: 32
      }));
    });

    it('show method should return the correct product2', async () => {
      const result = await store.show(2);
      expect(result).toEqual(jasmine.objectContaining({
        product_name: "Apple",
        product_price: 32
      }));
    });
    
  });