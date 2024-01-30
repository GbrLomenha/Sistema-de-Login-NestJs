import { IsEmail, IsNotEmpty, IsBoolean, IsInt } from 'class-validator';
export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}