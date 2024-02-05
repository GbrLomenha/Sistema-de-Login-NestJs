import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma:PrismaService,
        private readonly userService:UserService,
        private readonly jwtService: JwtService,
        ){}

    async validateUser(email,password){
        const user = await this.userService.findByEmail(email)

        if(!user || !(bcrypt.compare(user.password,password))){
            throw new Error('Credenciais Inválidas')
        }

        return {...user , password:undefined}
    }

    login(user){
        const payload = { id: user.id, email: user.email}
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: '1d' })
        return {
            access_token: jwtToken
        }
    }

}
