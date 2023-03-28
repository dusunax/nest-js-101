import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { PostService } from '../post/post.service';

import { Post } from '../post/post.model';
import { Comment } from './comment.model';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/comment.dto';

@Injectable()
export class CommentService {
  private comments: Comment[] = [];

  constructor(private postService: PostService) {}

  getPostComments(postId: string): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }

  getCommentById(id: string) {
    return this.comments.find((x) => x.id === id);
  }

  createComment(postId: string, createCommentDTO: CreateCommentDTO): Comment {
    const post: Post | undefined = this.postService.getPostById(postId);

    if (!post) throw new Error('존재하지 않는 게시글입니다.');

    const comment: Comment = {
      id: uuid(),
      ...createCommentDTO,
    };

    this.comments.push(comment);
    return comment;
  }

  updateComment(updateCommentDTO: UpdateCommentDTO): Comment {
    const { id } = updateCommentDTO;
    const commentIndex = this.comments.findIndex(
      (comment) => comment.id === id,
    );

    if (commentIndex === -1) throw new Error('존재하지 않는 댓글입니다.');

    const updatedComment = {
      ...this.comments[commentIndex],
      ...updateCommentDTO,
    };
    this.comments[commentIndex] = updatedComment;

    return updatedComment;
  }

  deleteComment(id: string) {
    const commentIndex = this.comments.findIndex(
      (comment) => comment.id === id,
    );

    if (commentIndex === -1) throw new Error('존재하지 않는 댓글입니다.');

    this.comments.splice(commentIndex, 1);
  }
}
