import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserService } from '../../use-cases/create-user/create-user.service';

@Controller('user')
export class CreateUserController {
  constructor(readonly createUserService: CreateUserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.createUserService.execute(createUserDto);
    return {
      message: 'Usário criado com sucesso',
    };
  }
}
