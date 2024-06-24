import { Module } from '@nestjs/common';

import { SignInService } from './use-cases/sign-in/sign-in.service';
import { SignInController } from './http/sign-in/sign-in.controller';

@Module({
  controllers: [SignInController],
  providers: [SignInService],
})
export class AuthModule {}
