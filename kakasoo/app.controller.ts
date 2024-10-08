import { Controller, Post, Body } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('products')
export class AppController {
  @Post()
  async createProduct(@Body() productData: Omit<Product, 'id'>) {
    try {
      const product = await prisma.product.create({
        data: productData,
      });
      return { success: true, data: product };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}