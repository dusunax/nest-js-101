import { Module } from '@nestjs/common';

import { MainController } from './main.controller';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [],
  controllers: [HelloController, MainController, PostController, CommentController],
  providers: [HelloService, PostService, CommentService],
})
export class AppModule {}
