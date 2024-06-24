import { Module } from '@nestjs/common';
import { CreateUserService } from './use-cases/create-user/create-user.service';
import { CreateUserController } from './http/create-user/create-user.controller';
import { UpdateUserController } from './http/update-user/update-user.controller';
import { UpdateUserService } from './use-cases/update-user/update-user.service';

@Module({
  controllers: [CreateUserController, UpdateUserController],
  providers: [CreateUserService, UpdateUserService],
})
export class UserModule {}
