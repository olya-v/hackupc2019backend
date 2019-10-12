export class Event {
  id: string;
  title: string;
  estimatedWorkHours: number;
  coins: number;
  utcTimestamp: number;
  image: string;
  creator: number;
  location: object;
  participantIds: object[];
  completed: boolean = false;
  completionImage: string = '';

  constructor(title: string,
              estimatedWorkHours: number,
              coins: number,
              utcTimestamp: number,
              image: string,
              creator: number,
              location: object,
              participantIds: object[]) {
    this.setId();
    this.title = title;
    this.estimatedWorkHours = estimatedWorkHours;
    this.coins = coins;
    this.utcTimestamp = utcTimestamp;
    this.image = image;
    this.creator = creator;
    this.location = location;
    this.participantIds = participantIds;
  }

  setId() {
    this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
