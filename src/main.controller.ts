import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  findAll(): string {
    return '<h1>🤗</h1>';
  }
}
