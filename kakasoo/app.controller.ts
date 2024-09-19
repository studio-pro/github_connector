import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class AppController {
  @Post()
  createProduct() {
    // This is a placeholder for creating a product
    return { message: 'Product created successfully' };
  }
}