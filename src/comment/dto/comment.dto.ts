export class CreateCommentDTO {
  postId: string;
  content: string;
  createdAt: Date;
  password: string;
}

export class UpdateCommentDTO {
  id: string;
  postId: string;
  content: string;
  password: string;
}
