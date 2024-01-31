import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma : PrismaService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService    
    ){}

    async validateUser(email,senha){
        const user = await this.userService.findByEmail(email)
        
        if(!user || !(bcrypt.compare(user.password,senha))){
            throw new Error('Credenciais inválidas')
        }
        return {...user, password:undefined}
    }

    login(user){ //Cria o JWT a partir do usuario na request
        const payload = {sub: user.id, email:user.email}
        const jwtToken = this.jwtService.sign(payload, {secret:process.env.JWT_SECRET, expiresIn: '1d'})
        return {
            access_token: jwtToken
        }
    }
}
