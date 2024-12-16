import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SendSmsDto } from './dto/send-sms.dto';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('send')
  async sendSms(@Body(ValidationPipe) sendSmsDto: SendSmsDto) {
    return this.smsService.sendSms(sendSmsDto);
  }
}
