import { Injectable } from '@nestjs/common';
import { ErrorHandlingService } from '@shared/services/error-handling.service';
import { EmailException } from '@email/exceptions/email.exceptions';

@Injectable()
export class EmailErrorService {
  constructor(private readonly errorHandlingService: ErrorHandlingService) {}

  handleError(error: any, context: string): void {
    if (error instanceof EmailException) {
      // Handle email-specific errors
      this.errorHandlingService.handleError(error, `Email.${context}`);
    } else {
      // Wrap unknown errors in EmailException
      const wrappedError = new EmailException(
        error.message || 'An unexpected error occurred in email service'
      );
      this.errorHandlingService.handleError(wrappedError, `Email.${context}`);
    }
  }
} 