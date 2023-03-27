import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateHelloDTO } from './dto/createHello.dto';

import { Hello, HelloStatus } from './hello.model';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get('/')
  findAll(): Hello[] {
    return this.helloService.getAllHellos();
  }

  @Post()
  createHello(@Body() createHelloDTO: CreateHelloDTO): Hello {
    console.log(createHelloDTO);

    return this.helloService.createHello(createHelloDTO);
  }

  @Get('/:id')
  getHelloById(@Param('id') id: string) {
    return this.helloService.getHelloById(id);
  }

  @Delete()
  deleteHelloById(@Param('id') id: string): void {
    return this.helloService.deleteHelloById(id);
  }

  @Patch('/:id/status')
  updateHelloStatusById(
    @Param('id') id: string,
    @Body('status') status: HelloStatus,
  ): Hello {
    return this.helloService.updateHelloStatusById(id, status);
  }
}
