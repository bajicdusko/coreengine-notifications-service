import { HttpStatus } from '@nestjs/common';
import { BaseException } from '@notification/shared/exceptions/notification.exceptions';

export class EmailException extends BaseException {
  constructor(message: string, code: string = 'EMAIL_ERROR') {
    super(message, code, HttpStatus.BAD_REQUEST);
  }
}

export class EmailDeliveryException extends EmailException {
  constructor(message: string) {
    super(message, 'EMAIL_DELIVERY_ERROR');
  }
}

export class EmailValidationException extends EmailException {
  constructor(message: string) {
    super(message, 'EMAIL_VALIDATION_ERROR');
  }
}

export class EmailTemplateException extends EmailException {
  constructor(message: string) {
    super(message, 'EMAIL_TEMPLATE_ERROR');
  }
} 