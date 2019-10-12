import {Controller, Get, Post, Body} from '@nestjs/common';
import { ConfirmationRequestService } from './confirmation-request.service';
import { UserService } from '../user/user.service';

@Controller('confirmation-request')
export class ConfirmationRequestController {
  constructor(private readonly confirmationRequestService: ConfirmationRequestService,
              private readonly userService: UserService) {}

  @Get()
  getConfirmationRequests() {
    return this.confirmationRequestService.getConfirmationRequests();
  }

  @Post('/confirmation-requests-to-review')
  getConfirmationRequestsToReview(@Body() data) {
    const user = this.userService.getUser(data.userId);
    if (!user || !user.isModerator) {
      return 'User is not allowed get requests to review';
    }
    return this.confirmationRequestService.getConfirmationRequests();
  }

  @Post('confirmation-requests-for-user')
  getConfirmationRequestsForUser(@Body() data) {
    return this.confirmationRequestService.getConfirmationRequestsForUser(data);
  }

  @Post('create-confirmation-request')
  createConfirmationRequest(@Body() data) {
    this.confirmationRequestService.createConfirmationRequest(data);
  }

  @Post('evaluate-confirmation-request')
  evaluateConfirmationRequest(@Body() data) {
    const user = this.userService.getUser(data.userId);
    if (!user || !user.isModerator) {
      return 'User is not allowed to review requests';
    }
    this.confirmationRequestService.evaluateConfirmationRequest(data);
  }
}
