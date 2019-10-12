import { Injectable } from '@nestjs/common';
import { ConfirmationRequest} from './confirmationRequest.model';

@Injectable()
export class ConfirmationRequestService {
  confirmationRequests = [];

  getConfirmationRequestById(id) {
    return this.confirmationRequests.find((request) => request.id === id);
  }

  getConfirmationRequests(): any[] {
    return this.confirmationRequests;
  }

  getConfirmationRequestsToReview(): any[] {
    return this.confirmationRequests.filter((request) => request.confirmed === '');
  }

  createConfirmationRequest(data): void {
    const { userId, eventId, confirmationImage } = data;
    const newConfirmationRequest = new ConfirmationRequest(userId, eventId, confirmationImage);
    while (this.confirmationRequests.find((request) => { request.id === newConfirmationRequest.id; }) !== 'undefined') {
      newConfirmationRequest.setId();
    }
    this.confirmationRequests.push(newConfirmationRequest);
  }

  getConfirmationRequestsForUser(data) {
    return data.userId ? this.confirmationRequests.filter((request) => request.userId === data.userId) : 'No requests for that user';
  }

  evaluateConfirmationRequest(data) {
    const { confirmationRequestId, accepted } = data;
    const request = this.getConfirmationRequestById(confirmationRequestId);
    if (request) {
      request.confirmed = accepted ? 'accepted' : 'declined';
    }
  }
}
