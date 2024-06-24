import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  async login(user: LoginDto): Promise<string> {
    //REGRA de negocio para realizar o login (chamar algum serviço externo ou interno mesmo)
    console.log(user);

    return 'token';
  }
}
