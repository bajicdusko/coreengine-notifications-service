import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { PushService } from './push.service';
import { PushErrorService } from './services/push-error.service';
import { SendPushDto } from './dto/send-push.dto';
import { ErrorHandlingService } from '@notification/shared/services/error-handling.service';
import * as admin from 'firebase-admin';

describe('PushService', () => {
  let service: PushService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushService],
    }).compile();

    service = module.get<PushService>(PushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
