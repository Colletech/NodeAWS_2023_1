import { Product } from '../entities/product.entity';
import { ProductRepository } from './product.repository';

describe('ProductRepository', () => {
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('findAll', () => {
    it('should return all product', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      const result = await productRepository.findAll();

      expect(result).toEqual(products);
    });
  });

  describe('findById', () => {
    it('should return the product with the given id', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      const result = await productRepository.findById(1);

      expect(result).toEqual(products[0]);
    });

    it('should return undefined if the product is not found', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      const result = await productRepository.findById(3);

      expect(result).toBeUndefined();
    });
  });

  describe('create', () => {
    it('should created a new product', async () => {
      const newProduct: Product = {
        id: 100,
        name: 'New Product',
        price: 15,
      };
      jest.spyOn(productRepository, 'generateId').mockReturnValue(100);

      const result = await productRepository.create(newProduct);

      expect(result).toEqual(newProduct);
      expect(productRepository['products']).toContainEqual(newProduct);
    });
  });

  describe('update', () => {
    it('should update the product with the given id', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      const updateProduct: Product = {
        id: 1,
        name: 'Updated product',
        price: 30,
      };

      const result = await productRepository.update(updateProduct);

      expect(result).toEqual(updateProduct);
      expect(productRepository['products']).toContainEqual(updateProduct);
    });

    it('should return null if the product to update is not found', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      const updateProduct: Product = {
        id: 3,
        name: 'Updated Product',
        price: 15,
      };

      const result = await productRepository.update(updateProduct);

      expect(result).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete the product with the given id', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      productRepository['products'] = products;

      await productRepository.delete(1);

      expect(productRepository['products']).not.toContainEqual(products[0]);
    });
  });

  describe('generateId', () => {
    it('should generate a random number between 0 and 1000', () => {
      const id = productRepository.generateId();

      expect(id).toBeGreaterThanOrEqual(0);
      expect(id).toBeLessThanOrEqual(1000);
      expect(Number.isInteger(id)).toBe(true);
    });
  });
});
