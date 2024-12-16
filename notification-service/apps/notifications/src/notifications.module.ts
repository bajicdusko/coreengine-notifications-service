import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { EmailModule } from '@notification/email';
import { SmsModule } from '@notification/sms';
import { PushModule } from '@notification/push';
import { SharedModule } from '@notification/shared';

@Module({
  imports: [EmailModule, SmsModule, PushModule, SharedModule],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
