import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
    controllers:[AuthController],
    providers:[AuthService,PrismaService, UserService,LocalStrategy,JwtService,JwtStrategy]
})
export class AuthModule {}

