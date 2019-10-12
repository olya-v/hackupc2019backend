export class User {
    username: string;
    id: string;
    isModerator: boolean;
    coins: number;
    icon: string = '';

    constructor(username: string,
                isModerator: boolean,
                coins: number,
                icon: string) {
        this.username = username;
        this.setId();
        this.isModerator = isModerator;
        this.coins = coins;
        this.icon = icon;
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

    setId() {
        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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

    getIcon(): string {
        return this.icon;
    }

    setIcon(icon: string) {
        this.icon = icon;
    }
}