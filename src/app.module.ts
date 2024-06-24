import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AxiosModule } from './common/axios/axios.module';

@Module({
  imports: [UserModule, AuthModule, AxiosModule],
})
export class AppModule {}
