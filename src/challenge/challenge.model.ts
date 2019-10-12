export class Challenge {
    id: string;
    title: string;
    duration: number;
    description: string;
    coins: number;
    image: string;
    creator: number;
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
        this.coins = coins;
        this.image = image;
        this.creator = creator;
    }

    setId() {
        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}