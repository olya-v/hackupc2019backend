export class Event {
  id: string;
  title: string;
  estimatedWorkHours: number;
  description: string;
  coins: number;
  utcTimestamp: number;
  image: string;
  creator: number;
  location: object;
  participantIds: Map<string, object> = new Map();
  approved: boolean = false;
  completed: boolean = false;
  completionImage: string = '';

  constructor(title: string,
              estimatedWorkHours: number,
              description: string,
              coins: number,
              utcTimestamp: number,
              image: string,
              creator: number,
              location: object) {
    this.setId();
    this.title = title;
    this.description = description;
    this.estimatedWorkHours = estimatedWorkHours;
    this.coins = coins;
    this.utcTimestamp = utcTimestamp;
    this.image = image;
    this.creator = creator;
    this.location = location;
  }

  setId() {
    this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getEstimatedWorkHours(): number {
        return this.estimatedWorkHours;
    }

    setEstimatedWorkHours(estimatedWorkHours: number) {
        this.estimatedWorkHours = estimatedWorkHours;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getCoins(): number {
        return this.coins;
    }

    setCoins(coins: number) {
        this.coins = coins;
    }

    getUtcTimestamp(): number {
        return this.utcTimestamp;
    }

    setUtcTimestamp(utcTimestamp: number) {
        this.utcTimestamp = utcTimestamp;
    }

    getImage(): string {
        return this.image;
    }

    setImage(image: string) {
        this.image = image;
    }

    getCreator(): number {
        return this.creator;
    }

    setCreator(creator: number) {
        this.creator = creator;
    }

    getLocation(): object {
        return this.location;
    }

    setLocation(location: object) {
        this.location = location;
    }

    getParticipants(): any[] {
        return Array.from(this.participantIds.values());
    }

    addParticipant(userId: string, completed: boolean, completionImage: string) {
        if (!this.participantIds.has(userId)) {
          const details = {userId, completed, completionImage};
          this.participantIds.set(userId, details);
        }
    }

    changeParticipantStatus(userId: string, completed: boolean, completionImage: string) {
        if (this.participantIds.has(userId)) {
            const details = {completed, completionImage};
            this.participantIds.set(userId, details);
        }
    }

    getApproved(): boolean {
        return this.approved;
    }

    setApproved(approved: boolean) {
        this.approved = approved;
    }

    getCompleted(): boolean {
        return this.completed;
    }

    setCompleted(completed: boolean) {
        this.completed = completed;
    }

    getCompletionImage(): string {
        return this.completionImage;
    }

    setCompletionImage(completionImage: string) {
        this.completionImage = completionImage;
    }
}
