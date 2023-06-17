import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { Repository } from 'typeorm';

// @Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async create(product: ProductDto): Promise<Product> {
    const newProduct = await this.productRepository.create({
      name: product.name,
      price: product.price,
    });

    await this.productRepository.save(newProduct);

    return newProduct;
  }

  async update(id: number, product: ProductDto): Promise<Product> {
    const productById = await this.findById(id);

    Object.assign(productById, product);

    return this.productRepository.save(productById);
  }

  async delete(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
