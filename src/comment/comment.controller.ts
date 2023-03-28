import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { Comment } from './comment.model';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/:postId')
  getPostComments(@Param('postId') postId: string): Comment[] {
    return this.commentService.getPostComments(postId);
  }

  @Post('/:postId')
  createComment(
    @Param('postId') postId: string,
    @Body() createCommentDTO: CreateCommentDTO,
  ): Comment {
    return this.commentService.createComment(postId, createCommentDTO);
  }

  @Put()
  updateComment(@Body() updateCommentDTO: UpdateCommentDTO): Comment {
    const updatedComment = this.commentService.updateComment(updateCommentDTO);

    if (!updatedComment)
      throw new NotFoundException('존재하지 않는 댓글입니다.');
    return updatedComment;
  }

  @Delete('/:id')
  deleteComment(@Param('id') id: string) {
    this.commentService.deleteComment(id);
  }
}
