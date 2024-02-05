import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { LocalStrategy } from './auth/strategies/local-strategy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/strategies/jwt-strategy';

@Module({
  imports: [UserModule, PostModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, AuthService,UserService,LocalStrategy,JwtService,JwtStrategy],
})
export class AppModule {}
