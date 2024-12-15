import { HttpStatus } from '@nestjs/common';
import { BaseException } from '@shared/exceptions/notification.exceptions';

export class SmsException extends BaseException {
  constructor(message: string, code: string = 'SMS_ERROR') {
    super(message, code, HttpStatus.BAD_REQUEST);
  }
}

export class SmsDeliveryException extends SmsException {
  constructor(message: string) {
    super(message, 'SMS_DELIVERY_ERROR');
  }
}

export class SmsValidationException extends SmsException {
  constructor(message: string) {
    super(message, 'SMS_VALIDATION_ERROR');
  }
}

export class SmsProviderException extends SmsException {
  constructor(message: string) {
    super(message, 'SMS_PROVIDER_ERROR');
  }
} 