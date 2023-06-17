import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { Product } from './entities/product.entity';
import { RedisService } from 'nestjs-redis';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService
  ],
})
export class AppModule {}
