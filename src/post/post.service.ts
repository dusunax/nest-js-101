import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { Post } from './post.model';
import { CreatePostDTO, UpdatePostDTO } from './dto/post.dto';

@Injectable()
export class PostService {
  private posts: Post[] = [];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  createPost(createPostDTO: CreatePostDTO): Post {
    const newPost = { ...createPostDTO, id: uuid() };

    this.posts.push(newPost);
    return newPost;
  }

  updatePost(updatePostDTO: UpdatePostDTO) {
    const { id, password } = updatePostDTO;
    const prevPost = this.posts.find((post) => post.id === id);

    if (!prevPost) return console.log('해당 게시글이 없습니다.');
    if (password !== prevPost.password)
      return console.log('일치하지 않는 비밀번호 입니다.');

    const updatedPost = { ...prevPost, ...updatePostDTO };
    this.posts = [...this.posts, updatedPost];
  }

  deletePostById(id: string) {
    this.posts.filter((post) => post.id !== id);
  }
}
