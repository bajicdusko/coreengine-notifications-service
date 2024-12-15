import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from '@email/dto/send-email.dto';
import { EmailConfig } from '@email/config/email.config';
import { EmailErrorService } from '@email/services/email-error.service';

@Injectable()
export class EmailService implements OnModuleInit {
  private transporter: nodemailer.Transporter;
  private emailConfig: EmailConfig | undefined;

  constructor(
    private configService: ConfigService,
    private readonly emailErrorService: EmailErrorService
  ) {}

  async onModuleInit() {
    try {
      this.emailConfig = this.configService.get<EmailConfig>('email');

      if (!this.emailConfig?.user || !this.emailConfig?.pass) {
        throw new Error('Email configuration is missing required credentials');
      }

      this.transporter = nodemailer.createTransport({
        service: this.emailConfig.service,
        auth: {
          user: this.emailConfig.user,
          pass: this.emailConfig.pass,
        },
      });
    } catch (error) {
      this.emailErrorService.handleError(error, 'initialization');
    }
  }

  async sendEmail(emailDto: SendEmailDto) {
    try {
      const result = await this.transporter.sendMail({
        from: this.emailConfig?.from,
        to: emailDto.to,
        subject: emailDto.subject,
        text: emailDto.text,
        html: emailDto.html,
      });

      return {
        status: 'success',
        messageId: result.messageId,
      };
    } catch (error) {
      this.emailErrorService.handleError(error, 'sendEmail');
      throw error;
    }
  }
}
