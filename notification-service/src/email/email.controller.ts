import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { EmailService } from '@email/email.service';
import { SendEmailDto } from '@email/dto/send-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body(ValidationPipe) sendEmailDto: SendEmailDto) {
    return this.emailService.sendEmail(sendEmailDto);
  }
}
