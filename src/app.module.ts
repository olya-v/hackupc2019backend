import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { ConfirmationRequestModule } from './confirmation-request/confirmation-request.module';

@Module({
  imports: [EventModule, UserModule, ConfirmationRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
