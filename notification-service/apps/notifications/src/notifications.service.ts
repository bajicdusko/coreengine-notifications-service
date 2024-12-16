import { Injectable } from '@nestjs/common';
import { CreateNotificationDto, NotificationType } from './dto/create-notification.dto';
import { EmailService } from '@notification/email';
import { SmsService } from '@notification/sms';
import { PushService } from '@notification/push';
import { ErrorHandlingService } from '@notification/shared/services/error-handling.service';
import { LoggerService } from '@notification/shared/services/logger.service';
import { NotificationValidationException, NotificationProviderException } from './exceptions/notification.exceptions';

@Injectable()
export class NotificationsService {
  private readonly MODULE_NAME = 'NotificationsService';

  constructor(
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
    private readonly pushService: PushService,
    private readonly errorHandlingService: ErrorHandlingService,
    private readonly logger: LoggerService,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    const { type, title, message, recipientId } = createNotificationDto;

    this.logger.log(
      `Processing ${type} notification request`,
      this.MODULE_NAME,
      { recipientId, title }
    );

    try {
      let result;
      switch (type) {
        case NotificationType.EMAIL:
          result = await this.emailService.sendEmail({
            to: recipientId,
            subject: title,
            text: message,
          });
          break;

        case NotificationType.SMS:
          result = await this.smsService.sendSms({
            to: recipientId,
            message: message,
          });
          break;

        case NotificationType.PUSH:
          result = await this.pushService.sendPush({
            token: recipientId,
            title: title,
            body: message,
          });
          break;

        default:
          this.logger.error(
            `Invalid notification type: ${type}`,
            this.MODULE_NAME,
            undefined,
            { recipientId }
          );
          throw new NotificationValidationException(
            `Unsupported notification type: ${type}`
          );
      }

      //todo: we need to sanitize the result before logging and enable dynamic logging levels.
      this.logger.log(
        `Successfully sent ${type} notification`,
        this.MODULE_NAME,
        { recipientId, result }
      );

      return result;
    } catch (error) {
      this.logger.error(
        `Failed to send ${type} notification`,
        this.MODULE_NAME,
        error.stack,
        { recipientId, error: error.message }
      );

      if (error instanceof NotificationValidationException) {
        throw error;
      }

      throw new NotificationProviderException(
        `Failed to send ${type} notification`,
        { originalError: error.message }
      );
    }
  }
}
