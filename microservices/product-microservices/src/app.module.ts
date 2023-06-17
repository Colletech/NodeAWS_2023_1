import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import * as Joi from '@hapi/joi';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     POSTGRES_HOST: Joi.string().required(),
    //     POSTGRES_PORT: Joi.number().required(),
    //     POSTGRES_USER: Joi.string().required(),
    //     POSTGRES_PASSWORD: Joi.string().required(),
    //     POSTGRES_DB: Joi.string().required(),
    //     PORT: Joi.number(),
    //   }),
    // }),
    TypeOrmModule.forFeature([Product]),
    DatabaseModule,
    // ProductsModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
