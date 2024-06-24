import { Body, Controller, Put } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UpdateUserService } from '../../use-cases/update-user/update-user.service';

@Controller('user')
export class UpdateUserController {
  constructor(readonly updateUserService: UpdateUserService) {}

  @Put()
  async createUser(@Body() updateUserDto: UpdateUserDto) {
    await this.updateUserService.execute(updateUserDto);
    return {
      message: 'Usário editado com sucesso',
    };
  }
}
