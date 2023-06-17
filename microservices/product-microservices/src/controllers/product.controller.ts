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

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The product list',
    isArray: true,
    type: Product,
  })
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
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
