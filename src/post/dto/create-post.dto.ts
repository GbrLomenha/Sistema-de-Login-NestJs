import { IsEmail, IsNotEmpty, IsBoolean, IsInt, IsOptional } from 'class-validator';
export class CreatePostDto {
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    content: string;
  
    @IsOptional()
    @IsBoolean()
    published?: boolean;
  
    @IsInt()
    authorId: number;
  }