import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

describe('EmailController', () => {
  let controller: EmailController;
  let emailService: EmailService;

  const mockEmailService = {
    sendEmail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
      ],
    }).compile();

    controller = module.get<EmailController>(EmailController);
    emailService = module.get<EmailService>(EmailService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('sendEmail', () => {
    const mockEmailDto: SendEmailDto = {
      to: 'test@example.com',
      subject: 'Test Subject',
      text: 'Test Content',
      html: '<p>Test HTML Content</p>',
    };

    const mockResponse = {
      status: 'success',
      messageId: 'test-message-id',
    };

    it('should successfully send an email', async () => {
      mockEmailService.sendEmail.mockResolvedValue(mockResponse);

      const result = await controller.sendEmail(mockEmailDto);
      
      expect(result).toEqual(mockResponse);
      expect(emailService.sendEmail).toHaveBeenCalledWith(mockEmailDto);
    });

    it('should throw an error when email service fails', async () => {
      const mockError = new Error('Failed to send email');
      mockEmailService.sendEmail.mockRejectedValue(mockError);

      await expect(controller.sendEmail(mockEmailDto)).rejects.toThrow(mockError);
      expect(emailService.sendEmail).toHaveBeenCalledWith(mockEmailDto);
    });
  });
});
