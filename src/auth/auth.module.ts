import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocalStrategy } from './strategies/local-strategy';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Module({
    controllers: [AuthController],
    providers: [AuthService,PrismaService,LocalStrategy,UserService,JwtService],
})
export class AuthModule {}
