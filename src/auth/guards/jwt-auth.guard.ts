import {Injectable} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
  
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET, //Vai validar as assinaturas de tokens externos com a senha definida internamente
        });
    }
    async validate(payload) { 
        //Adiciona as informações do payload no objeto resquest
        return { id_corretora: payload.sub, email: payload.email };
    }
}