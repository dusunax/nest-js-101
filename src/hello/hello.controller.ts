import { Controller, Get } from '@nestjs/common';

import { Hello } from './hello.model';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  findAll(): Hello[] {
    return this.helloService.getAllHellos();
  }
}
