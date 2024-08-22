import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

// This is a simple NestJS controller example
// It defines a route '/hello' that returns 'Hello World!' when accessed with a GET request