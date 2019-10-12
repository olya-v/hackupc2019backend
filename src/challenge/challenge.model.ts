export class Challenge {
    id: string;
    title: string;
    duration: number;
    description: string;
    coins: number;
    image: string;
    creator: number;
    approved: boolean = false;
    completed: boolean = false;
    isProofRequired: boolean;
    completionImage: string = '';

    constructor(title: string,
                duration: number,
                coins: number,
                description: string,
                image: string,
                creator: number,
                approved: boolean,
                completed: boolean,
                isProofReqired: boolean,
                completionImage: string,
                ) {
        this.setId();
        this.title = title;
        this.duration = duration;
        this.coins = coins;
        this.description = description;
        this.image = image;
        this.creator = creator;
        this.approved = approved;
        this.isProofRequired = isProofReqired;
        this.completionImage = completionImage;
    }

    getDuration(): number {
        return this.duration;
    }

    setDuration(duraton: number) {
        this.duration = duraton;
    }

    getId(): string {
        return this.id;
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

    getIsProofRequired(): boolean {
        return this.isProofRequired;
    }

    setIsProofRequired(isProofRequired: boolean) {
        this.isProofRequired = isProofRequired;
    }

    getCompletionImage(): string {
        return this.completionImage;
    }

    setCompletionImage(completionImage: string) {
        this.completionImage = completionImage;
    }

}
