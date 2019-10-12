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

  constructor(id: string,
              title: string,
              estimatedWorkHours: number,
              coins: number,
              utcTimestamp: number,
              image: string,
              creator: number,
              location: object,
              participantIds: object[]) {
    this.id = id;
    this.title = title;
    this.estimatedWorkHours = estimatedWorkHours;
    this.coins = coins;
    this.utcTimestamp = utcTimestamp;
    this.image = image;
    this.creator = creator;
    this.location = location;
    this.participantIds = participantIds;
  }
}
