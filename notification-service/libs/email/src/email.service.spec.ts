import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';
import { EmailErrorService } from './services/email-error.service';
import { SendEmailDto } from './dto/send-email.dto';
import { ErrorHandlingService } from '@notification/shared/services/error-handling.service';
import * as nodemailer from 'nodemailer';
import { plainToInstance } from 'class-transformer';
import { EmailConfigSchema } from './config/email-config.schema';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' }),
  }),
}));

describe('EmailService', () => {
  let service: EmailService;
  let configService: ConfigService;
  let emailErrorService: EmailErrorService;

  const mockEmailConfig = plainToInstance(EmailConfigSchema, {
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    user: 'test@example.com',
    password: 'test-password',
    from: 'test@example.com',
  });

  const mockEmailErrorService = {
    handleError: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue(mockEmailConfig),
          },
        },
        {
          provide: EmailErrorService,
          useValue: mockEmailErrorService,
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
    configService = module.get<ConfigService>(ConfigService);
    emailErrorService = module.get<EmailErrorService>(EmailErrorService);

    // Initialize the module
    await service.onModuleInit();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should initialize nodemailer transporter with correct config', async () => {
      expect(nodemailer.createTransport).toHaveBeenCalledWith({
        host: mockEmailConfig.host,
        port: mockEmailConfig.port,
        secure: mockEmailConfig.secure,
        auth: {
          user: mockEmailConfig.user,
          password: mockEmailConfig.password,
        },
      });
    });

    it('should handle initialization errors', async () => {
      jest.spyOn(configService, 'get').mockReturnValue(null);
      await service.onModuleInit();
      expect(emailErrorService.handleError).toHaveBeenCalled();
    });
  });

  describe('sendEmail', () => {
    it('should send email successfully', async () => {
      const emailDto: SendEmailDto = {
        to: 'recipient@example.com',
        subject: 'Test Subject',
        text: 'Test Content',
      };

      const result = await service.sendEmail(emailDto);
      expect(result).toEqual({ messageId: 'test-message-id' });
    });

    it('should handle send email errors', async () => {
      const emailDto: SendEmailDto = {
        to: 'recipient@example.com',
        subject: 'Test Subject',
        text: 'Test Content',
      };

      jest.spyOn(nodemailer.createTransport(), 'sendMail').mockRejectedValue(new Error('Send error'));
      await service.sendEmail(emailDto);
      expect(emailErrorService.handleError).toHaveBeenCalled();
    });
  });
});
