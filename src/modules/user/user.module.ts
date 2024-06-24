import { Module } from '@nestjs/common';
import { UserController } from './http/user.controller';
import { UserService } from './use-cases/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
