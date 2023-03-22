import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  findAll(): string {
    return 'hello to NestJs';
  }
}
