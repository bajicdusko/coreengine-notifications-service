import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import { SendSmsDto } from '@sms/dto/send-sms.dto';
import { SmsConfig } from '@sms/config/sms.config';
import { SmsErrorService } from '@sms/services/sms-error.service';

@Injectable()
export class SmsService implements OnModuleInit {
  private twilioClient: Twilio;
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

      this.twilioClient = new Twilio(this.smsConfig.accountSid, this.smsConfig.authToken);
    } catch (error) {
      this.smsErrorService.handleError(error, 'initialization');
    }
  }

  async sendSms(smsDto: SendSmsDto) {
    try {
      const message = await this.twilioClient.messages.create({
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
