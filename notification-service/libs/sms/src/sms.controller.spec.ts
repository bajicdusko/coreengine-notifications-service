import { Test, TestingModule } from '@nestjs/testing';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { SendSmsDto } from './dto/send-sms.dto';
import { ConfigService } from '@nestjs/config';
import { SmsErrorService } from './services/sms-error.service';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

describe('SmsController', () => {
  let controller: SmsController;
  let mockSmsService: jest.Mocked<SmsService>;

  beforeEach(async () => {
    mockSmsService = {
      sendSms: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsController],
      providers: [
        {
          provide: SmsService,
          useValue: mockSmsService,
        },
      ],
    }).compile();

    controller = module.get<SmsController>(SmsController);
  });

  describe('sendSms', () => {
    it('should validate the request body', async () => {
      const invalidDto = {
        to: 'invalid-phone', // Invalid phone number format
        message: '',         // Empty message
      };

      const validationPipe = new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      });

      await expect(validationPipe.transform(invalidDto, {
        type: 'body',
        metatype: SendSmsDto,
      })).rejects.toThrow(BadRequestException);
    });
  });
});
