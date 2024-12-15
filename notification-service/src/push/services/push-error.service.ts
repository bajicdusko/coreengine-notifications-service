import { Injectable } from '@nestjs/common';
import { ErrorHandlingService } from '@shared/services/error-handling.service';
import { PushException } from '@push/exceptions/push.exceptions';

@Injectable()
export class PushErrorService {
  constructor(private readonly errorHandlingService: ErrorHandlingService) {}

  handleError(error: any, context: string): void {
    if (error instanceof PushException) {
      // Handle push-specific errors
      this.errorHandlingService.handleError(error, `Push.${context}`);
    } else {
      // Wrap unknown errors in PushException
      const wrappedError = new PushException(
        error.message || 'An unexpected error occurred in push notification service'
      );
      this.errorHandlingService.handleError(wrappedError, `Push.${context}`);
    }
  }
} 