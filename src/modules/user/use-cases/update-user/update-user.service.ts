import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  async execute(updateUserDto: UpdateUserDto): Promise<void> {
    //REGRAS de negócio para atualizar um usuário
    console.log(updateUserDto);
    return;
  }
}
