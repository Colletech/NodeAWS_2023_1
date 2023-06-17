import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    example: 'Milk',
    description: 'The name of product',
    minimum: 4,
    maxLength: 50,
  })
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    example: 10,
    description: 'The price of product',
  })
  price: number;
}
