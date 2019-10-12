import {Controller, Get, Post, Body} from '@nestjs/common';
import { ConfirmationRequestService } from "./confirmation-request.service";

@Controller('confirmation-request')
export class ConfirmationRequestController {
  constructor(private readonly confirmationRequestService: ConfirmationRequestService) {}

  @Get()
  getConfirmationRequests() {
    return this.confirmationRequestService.getConfirmationRequests();
  }

  @Post('/requests-to-review')
  getConfirmationRequestsToReview(@Body() data) {
    // TODO check if user is moderator
    return this.confirmationRequestService.getConfirmationRequests();
  }

  @Post('requests-for-user')
  getConfirmationRequestsForUser(@Body() data) {
    return this.confirmationRequestService.getConfirmationRequestsForUser(data);
  }
}
