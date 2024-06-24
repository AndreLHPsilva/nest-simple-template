import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: string;

    if (exception instanceof HttpException) {
      const errorResponse = exception.getResponse() as { message: string };
      message = errorResponse.message || 'Erro interno do sistema';
    } else {
      message = 'Erro interno do sistema';
    }

    response.status(status).json({
      data: null,
      statusHttp: status,
      message: message,
    });
  }
}
