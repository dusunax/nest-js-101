import { IsNotEmpty } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  createdAt: Date;

  @IsNotEmpty()
  password: string;
}

export class UpdatePostDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  password: string;

  title?: string;
  content?: string;
  createdAt?: Date;
}
