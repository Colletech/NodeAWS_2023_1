// import { ProductRepository } from '../repositories/product.repository';
// import { ProductService } from './product.service';
// import { Test, TestingModule } from '@nestjs/testing';
// import { Product } from '../entities/product.entity';

// describe('ProductService', () => {
//   let productService: ProductService;
//   let productRepository: ProductRepository;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [ProductService, ProductRepository],
//     }).compile();

//     productService = module.get<ProductService>(ProductService);
//     productRepository = module.get<ProductRepository>(ProductRepository);
//   });

//   it('should return an array of products', async () => {
//     const products: Product[] = [{ id: 1, name: 'Product 1', price: 10 }];
//     jest.spyOn(productRepository, 'findAll').mockResolvedValue(products);

//     const result = await productService.findAll();

//     expect(result).toEqual(products);
//   });

//   it('should return a product by id', async () => {
//     const product: Product = { id: 1, name: 'Product 1', price: 10 };
//     jest.spyOn(productRepository, 'findById').mockResolvedValue(product);

//     const result = await productService.findById(1);

//     expect(result).toEqual(product);
//   });

//   it('should create a new product', async () => {
//     const newProduct: Product = {
//       id: 0,
//       name: 'New Product',
//       price: 20,
//     };
//     const createdProduct: Product = { id: 2, ...newProduct };
//     jest.spyOn(productRepository, 'create').mockResolvedValue(createdProduct);

//     const result = await productService.create(newProduct);

//     expect(result).toEqual(createdProduct);
//     expect(productRepository.create).toHaveBeenCalledWith(newProduct);
//   });

//   it('should update an existing product', async () => {
//     const updatedProduct: Product = {
//       id: 1,
//       name: 'Updated Product',
//       price: 30,
//     };
//     jest.spyOn(productRepository, 'update').mockResolvedValue(updatedProduct);

//     const result = await productService.update(updatedProduct);

//     expect(result).toEqual(updatedProduct);
//     expect(productRepository.update).toHaveBeenCalledWith(updatedProduct);
//   });

//   it('should delete a product by id', async () => {
//     const id = 1;
//     jest.spyOn(productRepository, 'delete').mockResolvedValue(true);

//     const result = await productService.delete(id);

//     expect(result).toBe(true);
//     expect(productRepository.delete).toHaveBeenCalledWith(id);
//   });
// });
