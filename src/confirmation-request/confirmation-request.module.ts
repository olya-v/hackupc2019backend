import { Module } from '@nestjs/common';
import { ConfirmationRequestService } from './confirmation-request.service';
import { ConfirmationRequestController } from './confirmation-request.controller';

@Module({
  providers: [ConfirmationRequestService],
  controllers: [ConfirmationRequestController],
})
export class ConfirmationRequestModule {}
