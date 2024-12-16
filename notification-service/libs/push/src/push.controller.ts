import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { PushService } from './push.service';
import { SendPushDto } from './dto/send-push.dto';

@Controller('push')
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @Post('send')
  async sendPush(@Body(ValidationPipe) sendPushDto: SendPushDto) {
    return this.pushService.sendPush(sendPushDto);
  }
}
