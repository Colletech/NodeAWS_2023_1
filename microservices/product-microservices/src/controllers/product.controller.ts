import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from 'src/dto/product.dto';

import { Redis } from 'ioredis';
@ApiTags('products')
@Controller('products')
export class ProductController {
  // redis: Redis;

  constructor(private readonly productService: ProductService) {
    // this.redis = new Redis({
    //   host: 'localhost',
    //   port: 6379,
    // });
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The product list',
    isArray: true,
    type: Product,
  })
  async findAll(): Promise<Product[]> {
    // const cacheProducts = await this.redis.get('productsKey');

    // if (cacheProducts) {
    //   return JSON.parse(cacheProducts) as Product[];
    // }

    const products = await this.productService.findAll();
    // await this.redis.set('productsKey', JSON.stringify(products));

    return products;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found product',
    type: Product,
  })
  async findById(@Param('id') id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 201, description: 'Successful operation created' })
  @ApiResponse({ status: 405, description: 'Ivalid input' })
  async create(@Body() product: ProductDto): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() product: ProductDto,
  ): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.productService.delete(id);
  }
}
