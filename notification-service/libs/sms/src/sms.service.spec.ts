import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { SmsService } from './sms.service';
import { SmsErrorService } from './services/sms-error.service';
import { SendSmsDto } from './dto/send-sms.dto';
import { ErrorHandlingService } from '@notification/shared/services/error-handling.service';
import { Twilio } from 'twilio';

// Mock Twilio
jest.mock('twilio', () => {
  return {
    Twilio: jest.fn().mockImplementation(() => ({
      messages: {
        create: jest.fn().mockResolvedValue({ sid: 'test-message-sid' }),
      },
    })),
  };
});

describe('SmsService', () => {
  let service: SmsService;
  let configService: ConfigService;
  let smsErrorService: SmsErrorService;

  const mockSmsConfig = {
    accountSid: 'test-account-sid',
    authToken: 'test-auth-token',
    fromNumber: '+1234567890',
  };

  const mockSmsErrorService = {
    handleError: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SmsService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue(mockSmsConfig),
          },
        },
        {
          provide: SmsErrorService,
          useValue: mockSmsErrorService,
        },
      ],
    }).compile();

    service = module.get<SmsService>(SmsService);
    configService = module.get<ConfigService>(ConfigService);
    smsErrorService = module.get<SmsErrorService>(SmsErrorService);

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
    it('should initialize Twilio client with correct config', async () => {
      expect(Twilio).toHaveBeenCalledWith(
        mockSmsConfig.accountSid,
        mockSmsConfig.authToken,
      );
    });

    it('should handle initialization errors', async () => {
      jest.spyOn(configService, 'get').mockReturnValue(null);
      await service.onModuleInit();
      expect(smsErrorService.handleError).toHaveBeenCalled();
    });

    it('should throw error when credentials are missing', async () => {
      jest.spyOn(configService, 'get').mockReturnValue({});
      await service.onModuleInit();
      expect(smsErrorService.handleError).toHaveBeenCalled();
    });
  });

  describe('sendSms', () => {
    const mockSmsDto: SendSmsDto = {
      to: '+1987654321',
      message: 'Test message',
    };

    it('should successfully send an SMS', async () => {
      const result = await service.sendSms(mockSmsDto);
      expect(result).toEqual({
        status: 'success',
        messageId: 'test-message-sid',
      });
    });

    it('should handle send SMS errors', async () => {
      const mockError = new Error('Failed to send SMS');
      const twilioInstance = new Twilio(mockSmsConfig.accountSid, mockSmsConfig.authToken);
      jest.spyOn(twilioInstance.messages, 'create').mockRejectedValue(mockError);

      await expect(service.sendSms(mockSmsDto)).rejects.toThrow();
      expect(smsErrorService.handleError).toHaveBeenCalledWith(mockError, 'sendSms');
    });
  });
});
