export class CreatePostDTO {
  title: string;
  content: string;
  createdAt: Date;
  password: string;
}

export class UpdatePostDTO {
  id: string;
  title?: string;
  content?: string;
  createdAt?: Date;
  password: string;
}
