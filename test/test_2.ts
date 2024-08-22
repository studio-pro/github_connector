import { Module } from '@nestjs/common';
import { HelloController } from './test_1';

@Module({
  controllers: [HelloController],
})
export class AppModule {}

// This is a NestJS module example
// It imports and uses the HelloController from test_1.ts