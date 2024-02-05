import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly AuthService:AuthService
    ){
        super({ usernameField : 'email', passwordField: 'password'})
    }

    validate(email:string, password:string){
        return this.AuthService.validateUser(email,password)
    }

}