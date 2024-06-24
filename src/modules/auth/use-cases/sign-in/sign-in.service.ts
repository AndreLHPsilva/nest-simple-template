import { Injectable } from '@nestjs/common';
import { LoginDto } from '../../dto/login.dto';

@Injectable()
export class SignInService {
  async execute(loginDto: LoginDto): Promise<string> {
    //REGRA de negocio para realizar o login (chamar algum serviço externo ou interno mesmo)
    console.log(loginDto);

    return 'token';
  }
}
