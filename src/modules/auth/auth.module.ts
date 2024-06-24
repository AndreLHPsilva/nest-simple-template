import { Module } from '@nestjs/common';

import { AuthController } from './http/auth.controller';
import { AuthService } from './use-cases/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
