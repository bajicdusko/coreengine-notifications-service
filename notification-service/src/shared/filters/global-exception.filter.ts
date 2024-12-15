import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorHandlingService } from '../services/error-handling.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly errorHandlingService: ErrorHandlingService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    this.errorHandlingService.handleError(exception, 'GlobalExceptionFilter');

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = exception instanceof HttpException
      ? exception.getResponse()
      : this.errorHandlingService.getFormattedError(exception);

    response.status(status).json(errorResponse);
  }
} 