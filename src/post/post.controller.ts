import {
  Controller,
  Get,
  Post as PostMethod,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { PostService } from './post.service';
import { CreatePostDTO, UpdatePostDTO } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @PostMethod()
  createPost(@Body() createPostDTO: CreatePostDTO) {
    return this.postService.createPost(createPostDTO);
  }

  @Put()
  updatePost(@Body() updatePostDTO: UpdatePostDTO) {
    return this.postService.updatePost(updatePostDTO);
  }

  @Delete()
  deletePostById(@Param('id') id: string) {
    return this.postService.deletePostById(id);
  }
}
