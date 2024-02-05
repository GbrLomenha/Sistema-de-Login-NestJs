import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext) {
        //todo guard possui uma função canActivate que diz se pode acessar a rota ou não
        return super.canActivate(context)
    }
}