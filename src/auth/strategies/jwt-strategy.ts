import {Injectable} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
  
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
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