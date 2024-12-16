import { Injectable } from '@nestjs/common';
import { ErrorHandlingService } from '@notification/shared/services/error-handling.service';
import { SmsException } from '../exceptions/sms.exceptions';

@Injectable()
export class SmsErrorService {
  constructor(private readonly errorHandlingService: ErrorHandlingService) {}

  handleError(error: any, context: string): void {
    if (error instanceof SmsException) {
      // Handle SMS-specific errors
      this.errorHandlingService.handleError(error, `SMS.${context}`);
    } else {
      // Wrap unknown errors in SmsException
      const wrappedError = new SmsException(
        error.message || 'An unexpected error occurred in SMS service'
      );
      this.errorHandlingService.handleError(wrappedError, `SMS.${context}`);
    }
  }
}