import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(message: string, code: string, status: HttpStatus = HttpStatus.BAD_REQUEST) {
    super(
      {
        message,
        code,
        timestamp: new Date().toISOString(),
      },
      status,
    );
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