export class ConfirmationRequest {
  id: string;
  userId: string;
  eventId: string;
  confirmed: boolean = false;
  confirmationImage: string = null;

  constructor(userId: string,
              eventId: string,
              confirmationImage: string) {
    this.setId();
    this.userId = userId;
    this.eventId = eventId;
    this.confirmationImage = confirmationImage;
  }

  setId() {
    this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
