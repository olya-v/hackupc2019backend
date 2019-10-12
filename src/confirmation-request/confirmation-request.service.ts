import { Injectable } from '@nestjs/common';
import { ConfirmationRequest} from "./confirmationRequest.model";

@Injectable()
export class ConfirmationRequestService {
  confirmationRequests = [];

  getConfirmationRequests(): any[] {
    return this.confirmationRequests;
  }

  getConfirmationRequestsToReview(): any[] {
    return this.confirmationRequests.filter((request) => { return request.confirmed === true });
  }

  addConfirmationRequest(userId, eventId, confirmationImage): void {
    const newConfirmationRequest = new ConfirmationRequest(userId, eventId, confirmationImage);
    this.confirmationRequests.push(newConfirmationRequest);
  }

  getConfirmationRequestsForUser(data) {
    return data.userId ? this.confirmationRequests.filter((request) => { return request.userId === data.userId}) : 'No requests for that user';
  }
}
