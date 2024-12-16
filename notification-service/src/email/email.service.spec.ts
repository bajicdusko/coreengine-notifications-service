import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '@email/email.service';
import { EmailErrorService } from '@email/services/email-error.service';
import { SendEmailDto } from '@email/dto/send-email.dto';
import * as nodemailer from 'nodemailer';

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

  const mockEmailConfig = {
    service: 'gmail',
    user: 'test@example.com',
    pass: 'test-password',
    from: 'test@example.com',
  };

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
        service: mockEmailConfig.service,
        auth: {
          user: mockEmailConfig.user,
          pass: mockEmailConfig.pass,
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
    const mockEmailDto: SendEmailDto = {
      to: 'recipient@example.com',
      subject: 'Test Subject',
      text: 'Test Content',
      html: '<p>Test HTML Content</p>',
    };

    it('should successfully send an email', async () => {
      const result = await service.sendEmail(mockEmailDto);
      expect(result).toEqual({
        status: 'success',
        messageId: 'test-message-id',
      });
    });

    it('should handle send email errors', async () => {
      const mockError = new Error('Send email failed');
      const mockTransporter = nodemailer.createTransport();
      jest.spyOn(mockTransporter, 'sendMail').mockRejectedValue(mockError);

      await expect(service.sendEmail(mockEmailDto)).rejects.toThrow();
      expect(emailErrorService.handleError).toHaveBeenCalledWith(mockError, 'sendEmail');
    });
  });
});
