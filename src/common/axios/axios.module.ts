import { Module } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Module({
  providers: [
    {
      provide: 'Axios',
      useFactory: (): AxiosInstance => {
        return axios.create({
          baseURL: 'BASE_URL_AQUI',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      },
    },
  ],
  exports: ['Axios'],
})
export class AxiosModule {}
