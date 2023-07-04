import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { Product } from './entities/product.entity';
import { RedisService } from 'nestjs-redis';
import HealthController from './controllers/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    TerminusModule,
  ],
  controllers: [ProductController, HealthController],
  providers: [ProductService],
})
export class AppModule {}
