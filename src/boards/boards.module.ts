import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  // 프로바이더 등록
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
