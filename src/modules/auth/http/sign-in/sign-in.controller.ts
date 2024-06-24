import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../../dto/login.dto';
import { SignInService } from '../../use-cases/sign-in/sign-in.service';

@Controller('auth')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post('')
  async handle(@Body() loginDto: LoginDto) {
    const response = await this.signInService.execute(loginDto);

    return {
      message: 'Login efetuado com sucesso',
      data: {
        token: response,
      },
      statusHttp: 200,
    };
  }
}
