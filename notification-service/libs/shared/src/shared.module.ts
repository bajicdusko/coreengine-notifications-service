import { Module, Global } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { ErrorHandlingService } from './services/error-handling.service';
import { LoggerService } from './services/logger.service';
import { loggerConfig } from './config/logger.config';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Global()
@Module({
  imports: [
    WinstonModule.forRoot(loggerConfig),
  ],
  providers: [
    ErrorHandlingService,
    {
      provide: LoggerService,
      useFactory: (logger) => new LoggerService(logger),
      inject: ['winston'],
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
  exports: [ErrorHandlingService, LoggerService],
})
export class SharedModule {} 