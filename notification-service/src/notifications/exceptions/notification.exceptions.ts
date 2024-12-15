import { HttpStatus } from '@nestjs/common';
import { BaseException } from '@shared/exceptions/notification.exceptions';

export class NotificationException extends BaseException {
  constructor(message: string, code: string = 'NOTIFICATION_ERROR') {
    super(message, code, HttpStatus.BAD_REQUEST);
  }
}

export class NotificationValidationException extends NotificationException {
  constructor(message: string) {
    super(message, 'NOTIFICATION_VALIDATION_ERROR');
  }
}

export class NotificationProviderException extends NotificationException {
  constructor(message: string, details?: any) {
    super(message, 'NOTIFICATION_PROVIDER_ERROR');
  }
} 