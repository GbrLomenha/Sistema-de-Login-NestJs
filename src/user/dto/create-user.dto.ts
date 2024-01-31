import { IsEmail, IsString, IsNotEmpty } from 'class-validator'
export class CreateUserDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:String
    
    @IsNotEmpty()
    @IsString()
    name:String
    
    @IsNotEmpty()
    @IsString()
    password:String
}
