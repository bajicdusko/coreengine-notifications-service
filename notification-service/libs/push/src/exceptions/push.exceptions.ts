import { HttpStatus } from '@nestjs/common';
import { BaseException } from '@notification/shared/exceptions/notification.exceptions';

export class PushException extends BaseException {
  constructor(message: string, code: string = 'PUSH_ERROR') {
    super(message, code, HttpStatus.BAD_REQUEST);
  }
}

export class PushDeliveryException extends PushException {
  constructor(message: string) {
    super(message, 'PUSH_DELIVERY_ERROR');
  }
}

export class PushTokenException extends PushException {
  constructor(message: string) {
    super(message, 'PUSH_TOKEN_ERROR');
  }
}

export class PushProviderException extends PushException {
  constructor(message: string) {
    super(message, 'PUSH_PROVIDER_ERROR');
  }
} 