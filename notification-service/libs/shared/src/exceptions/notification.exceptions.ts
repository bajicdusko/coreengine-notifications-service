import { HttpStatus } from '@nestjs/common';

export class BaseException extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ValidationException extends BaseException {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', HttpStatus.BAD_REQUEST);
  }
}

export class ConfigurationException extends BaseException {
  constructor(message: string) {
    super(message, 'CONFIGURATION_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class UnauthorizedException extends BaseException {
  constructor(message: string) {
    super(message, 'UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
  }
}