import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'

export class LocalAuthGuard extends AuthGuard('local'){
    canActivate(context: ExecutionContext) {
        //todo guard possui uma função canActivate que diz se pode acessar a rota ou não
        return super.canActivate(context)
    }
}