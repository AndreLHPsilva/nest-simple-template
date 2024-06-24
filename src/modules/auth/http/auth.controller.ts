import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../use-cases/auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);

    return {
      message: 'Login efetuado com sucesso',
      data: {
        token: response,
      },
      statusHttp: 200,
    };
  }
}
