import { IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator'
export class CreateUserDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:string
    
    @IsOptional()
    @IsString()
    name:string
    
    @IsNotEmpty()
    @IsString()
    password:string
}
