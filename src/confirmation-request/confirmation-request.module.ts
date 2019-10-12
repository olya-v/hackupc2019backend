import { Module } from '@nestjs/common';
import { ConfirmationRequestService } from './confirmation-request.service';
import { ConfirmationRequestController } from './confirmation-request.controller';
import { UserService } from '../user/user.service';

@Module({
  providers: [ConfirmationRequestService, UserService],
  controllers: [ConfirmationRequestController],
})
export class ConfirmationRequestModule {}
