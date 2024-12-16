import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class ErrorHandlingService {
  constructor(private readonly logger: LoggerService) {}

  handleError(error: any, context: string): void {
    const errorResponse = this.formatError(error);
    this.logger.error(
      `Error in ${context}: ${errorResponse.message}`,
      error.stack,
      context,
    );
  }

  private formatError(error: any) {
    return {
      message: error.message || 'An unexpected error occurred',
      code: error.code || 'INTERNAL_ERROR',
      timestamp: new Date().toISOString(),
      details: error.details || null,
    };
  }

  public getFormattedError(error: any) {
    return this.formatError(error);
  }
} 