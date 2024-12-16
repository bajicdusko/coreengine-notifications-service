import { Test, TestingModule } from '@nestjs/testing';
import { PushController } from './push.controller';
import { PushService } from './push.service';
import { SendPushDto } from './dto/send-push.dto';
import { ConfigService } from '@nestjs/config';
import { PushErrorService } from './services/push-error.service';

describe('PushController', () => {
  let controller: PushController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushController],
    }).compile();

    controller = module.get<PushController>(PushController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
