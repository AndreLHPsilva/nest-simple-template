import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  async execute(createUserDto: CreateUserDto): Promise<void> {
    //REGRAS de negócio para criar um novo usuário
    console.log(createUserDto);
    return;
  }
}
