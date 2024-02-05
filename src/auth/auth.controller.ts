import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req){
        return this.AuthService.login(req.user)
    }

}
