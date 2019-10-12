export class User {
    username: string;
    id: string;
    isModerator: boolean;
    coins: number;

    constructor(username: string,
                isModerator: boolean,
                coins: number) {
        this.username = username;
        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.isModerator = isModerator;
        this.coins = coins;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }

    getIsModerator(): boolean {
        return this.isModerator;
    }

    setIsModerator(isModerator: boolean) {
        this.isModerator = isModerator;
    }

    getCoins(): number {
        return this.coins;
    }

    setCoins(coins: number) {
        this.coins = coins;
    }
}
