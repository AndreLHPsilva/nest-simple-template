import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../use-cases/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(createUserDto);
    return {
      message: 'Usário criado com sucesso',
    };
  }
}
