import { Module } from '@nestjs/common';

import { MainController } from './main.controller';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [],
  controllers: [HelloController, MainController],
  providers: [HelloService],
})
export class AppModule {}
