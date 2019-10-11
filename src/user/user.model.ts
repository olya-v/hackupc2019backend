export class UserModel {
    username: string;
    id: number;
    isModerator: boolean;
    coins: number;

    constructor(username: string,
                id: number,
                isModerator: boolean,
                coins: number) {
        this.username = username;
        this.id = id;
        this.isModerator = isModerator;
        this.coins = coins;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getUserId(): number {
        return this.id;
    }

    setUserId(id: number) {
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
