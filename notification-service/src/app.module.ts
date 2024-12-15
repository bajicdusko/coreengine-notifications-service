import { Module } from '@nestjs/common';
import { NotificationsModule } from '@notifications/notifications.module';
import { EmailModule } from '@email/email.module';
import { SmsModule } from '@sms/sms.module';
import { PushModule } from '@push/push.module';
import { SharedModule } from '@shared/shared.module';

@Module({
  imports: [
    NotificationsModule,
    EmailModule,
    SmsModule,
    PushModule,
    SharedModule
  ],
})
export class AppModule {}
