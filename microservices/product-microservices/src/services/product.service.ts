import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product> {
    return this.productRepository.findById(id);
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.create(product);
  }

  async update(product: Product): Promise<Product> {
    return this.productRepository.update(product);
  }

  async delete(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
