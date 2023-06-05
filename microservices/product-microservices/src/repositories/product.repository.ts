import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'leche',
      price: 3,
    },
    {
      id: 2,
      name: 'sal',
      price: 2,
    },
    {
      id: 3,
      name: 'atun',
      price: 6,
    },
  ];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: number): Promise<Product> {
    return this.products.find((product) => product.id === id);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = { ...product, id: this.generateId() };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(product: Product): Promise<Product> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return product;
    }

    return null;
  }

  async delete(id: number): Promise<any> {
    this.products = this.products.filter((product) => product.id !== id);
  }

  public generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
