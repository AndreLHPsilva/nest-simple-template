import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const httpContext = context.switchToHttp();
        const response = httpContext.getResponse();

        const statusHttp =
          data.statusHttp !== undefined && !isNaN(data.statusHttp)
            ? data.statusHttp
            : response.statusCode || HttpStatus.OK;

        return {
          data: data.data ?? null,
          statusHttp,
          message: data.message || 'Requisição realizada com sucesso',
        };
      }),
    );
  }
}
