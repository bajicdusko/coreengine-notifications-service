import { Module } from '@nestjs/common';
import { NotificationsModule } from './notifications.module';
import { SharedModule } from '@notification/shared';

@Module({
  imports: [
    NotificationsModule,
    SharedModule
  ],
})
export class AppModule {}
