import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    example: 1,
    description: 'The id of product',
  })
  id: number;

  @ApiProperty({
    example: 'Milk',
    description: 'The name of product',
  })
  name: string;

  @ApiProperty({
    example: 10,
    description: 'The price of product',
  })
  price: number;
  
}
