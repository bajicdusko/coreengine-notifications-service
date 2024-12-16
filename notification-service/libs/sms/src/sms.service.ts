import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as twilio from 'twilio';
import { SendSmsDto } from './dto/send-sms.dto';
import { SmsConfig } from './config/sms.config';
import { SmsErrorService } from './services/sms-error.service';

@Injectable()
export class SmsService implements OnModuleInit {
  private client: twilio.Twilio;
  private smsConfig: SmsConfig | undefined;

  constructor(
    private configService: ConfigService,
    private readonly smsErrorService: SmsErrorService
  ) {}

  async onModuleInit() {
    try {
      this.smsConfig = this.configService.get<SmsConfig>('sms');

      if (!this.smsConfig?.accountSid || !this.smsConfig?.authToken) {
        throw new Error('SMS configuration is missing required credentials');
      }

      this.client = twilio(this.smsConfig.accountSid, this.smsConfig.authToken);
    } catch (error) {
      this.smsErrorService.handleError(error, 'initialization');
    }
  }

  async sendSms(smsDto: SendSmsDto) {
    try {
      const message = await this.client.messages.create({
        body: smsDto.message,
        to: smsDto.to,
        from: this.smsConfig?.fromNumber,
      });

      return {
        status: 'success',
        messageId: message.sid,
      };
    } catch (error) {
      this.smsErrorService.handleError(error, 'sendSms');
      throw error;
    }
  }
}
