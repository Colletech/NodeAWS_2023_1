import { ProductController } from './product.controller';
import { ProductService } from '../services/product.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, ProductRepository],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should return an array of products', async () => {
    const products: Product[] = [{ id: 1, name: 'Product 1', price: 10 }];
    jest.spyOn(productService, 'findAll').mockResolvedValue(products);

    const result = await productController.findAll();

    expect(result).toEqual(products);
  });

  it('should return a product by id', async () => {
    const product: Product = { id: 1, name: 'Product 1', price: 10 };
    jest.spyOn(productService, 'findById').mockResolvedValue(product);

    const result = await productController.findById(1);

    expect(result).toEqual(product);
  });

  it('should create a new product', async () => {
    const newProduct: Product = { id: 0, name: 'New Product', price: 20 };
    const createdProduct: Product = { id: 2, ...newProduct };
    jest.spyOn(productService, 'create').mockResolvedValue(createdProduct);

    const result = await productController.create(newProduct);

    expect(result).toEqual(createdProduct);
    expect(productService.create).toHaveBeenCalledWith(newProduct);
  });

  it('should update an existing product', async () => {
    const updatedProduct: Product = {
      id: 1,
      name: 'Updated Product',
      price: 30,
    };
    jest.spyOn(productService, 'update').mockResolvedValue(updatedProduct);

    const result = await productController.update(updatedProduct);

    expect(result).toEqual(updatedProduct);
    expect(productService.update).toHaveBeenCalledWith(updatedProduct);
  });

  it('should delete a product by id', async () => {
    const id = 1;
    jest.spyOn(productService, 'delete').mockResolvedValue(true);

    const result = await productController.delete(id);

    expect(result).toBe(true);
    expect(productService.delete).toHaveBeenCalledWith(id);
  });
});
