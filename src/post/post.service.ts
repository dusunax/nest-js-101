import { Injectable, NotFoundException } from '@nestjs/common';
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
    const found = this.posts.find((post) => post.id === id);
    if (!found)
      throw new NotFoundException(
        `게시글을 찾을 수 없습니다. \n Cant't find Post with id: ${id}`,
      );

    return found;
  }

  createPost(createPostDTO: CreatePostDTO): Post {
    const newPost = { ...createPostDTO, id: uuid() };

    this.posts.push(newPost);
    return newPost;
  }

  updatePost(updatePostDTO: UpdatePostDTO) {
    const { id, password } = updatePostDTO;
    const prevPost = this.posts.find((post) => post.id === id);

    if (!prevPost) throw new Error('게시글을 찾을 수 없습니다.');
    if (password !== prevPost.password)
      throw new Error('비밀번호가 일치하지 않습니다.');

    const updatedPost = { ...prevPost, ...updatePostDTO };
    this.posts = [...this.posts, updatedPost];
  }

  deletePostById(id: string) {
    const found = this.getPostById(id);
    this.posts.filter((post) => post.id !== found.id);
  }
}
