import { Controller, Post, Body } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('products')
export class AppController {
  @Post()
  async createProduct(@Body() productData: Omit<Product, 'id'>) {
    const product = await prisma.product.create({
      data: productData,
    });
    return product;
  }
}