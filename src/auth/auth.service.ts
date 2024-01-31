import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma : PrismaService,
        private readonly userService: UserService,    
    ){}

    async validateUser(email,senha){
        const user = await this.userService.findByEmail(email)
        
        if(!user || user.password != senha){
            throw new Error('Credenciais inválidas')
        }
        return {...user, password:undefined}
    }

    login(user){
        
    }
}
