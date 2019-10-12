export class ConfirmationRequest {
  userId: number;
  eventId: string;
  confirmed: boolean = false;
  confirmationImage: string = null;

  constructor(userId: number,
              eventId: string,
              confirmationImage: string) {
    this.userId = userId;
    this.eventId = eventId;
    this.confirmationImage = confirmationImage;
  }
}
