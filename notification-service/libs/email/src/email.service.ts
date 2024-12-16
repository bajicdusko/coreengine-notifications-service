import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailConfig } from './config/email.config';
import { EmailErrorService } from './services/email-error.service';
import { Options as SMTPTransportOptions } from 'nodemailer/lib/smtp-transport';

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

      if (!this.emailConfig?.host || !this.emailConfig?.user || !this.emailConfig?.password) {
        throw new Error('Email configuration is missing required credentials');
      }

      this.transporter = nodemailer.createTransport({
        host: this.emailConfig.host,
        port: this.emailConfig.port,
        secure: this.emailConfig.secure,
        auth: {
          user: this.emailConfig.user,
          password: this.emailConfig.password,
        },
      } as SMTPTransportOptions);
    } catch (error) {
      this.emailErrorService.handleError(error, 'initialization');
    }
  }

  async sendEmail(emailDto: SendEmailDto) {
    try {
      const message = await this.transporter.sendMail({
        from: this.emailConfig?.from,
        to: emailDto.to,
        subject: emailDto.subject,
        text: emailDto.text,
        html: emailDto.html,
      });

      return {
        status: 'success',
        messageId: message.messageId,
      };
    } catch (error) {
      this.emailErrorService.handleError(error, 'sendEmail');
      throw error;
    }
  }
}
