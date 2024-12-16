import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class LoggerService implements NestLoggerService {
  constructor(private readonly logger: Logger) {}

  private formatMessage(message: string, module: string, metadata?: any) {
    return {
      message,
      module,
      metadata,
    };
  }

  log(message: string, module: string, metadata?: any) {
    this.logger.info(this.formatMessage(message, module, metadata));
  }

  error(message: string, module: string, trace?: string, metadata?: any) {
    this.logger.error(this.formatMessage(message, module, {
      ...metadata,
      trace,
    }));
  }

  warn(message: string, module: string, metadata?: any) {
    this.logger.warn(this.formatMessage(message, module, metadata));
  }

  debug(message: string, module: string, metadata?: any) {
    this.logger.debug(this.formatMessage(message, module, metadata));
  }

  verbose(message: string, module: string, metadata?: any) {
    this.logger.verbose(this.formatMessage(message, module, metadata));
  }
} 