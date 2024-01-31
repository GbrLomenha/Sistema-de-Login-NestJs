import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocalStrategy } from './strategies/local-strategy';
import { UserService } from 'src/user/user.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService,PrismaService,LocalStrategy,UserService],
})
export class AuthModule {}
