import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put()
  async update(@Body() product: Product): Promise<Product> {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.productService.delete(id);
  }
}
