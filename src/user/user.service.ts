import { Injectable } from '@nestjs/common';
import {User} from './user.model';

@Injectable()
export class UserService {
    user1 = new User('moderator',
        true,
        50,
        '');

    user2 = new User('average',
        false,
        50,
        '');

    users = [this.user1, this.user2];

    userMap: Map<string, User> = new Map();

    getUser(userId: string): User {
        if (this.userMap.has(userId)) {
            return this.userMap.get(userId);
        }
    }

    getUserByName(username: string): any {
        const users = Array.from(this.userMap.values());
        let i: number = 0;
        for (i < this.users.length; i++;) {

            if (users[i].getUsername().match(username)) {
                return users[i];
            }
        }
    }

    getAllUsers(): any[] {
        return Array.from(this.userMap.values());
    }

    createUser(user) {
        const newUser = new User(
            user.username,
            user.isModerator,
            user.coins,
            user.icon,
        );
        while (this.userMap.has(newUser.getId())) {
            newUser.setId();
        }
        this.userMap.set(newUser.getId(), newUser);
    }

    addEventToUser(userId: string, eventId: string) {
        this.getUser(userId).addEvent(eventId, false);
    }

    changeEventStatus(userId: string, eventId: string, completed: boolean) {
        this.getUser(userId).getUserEvents().set(eventId, completed);
    }

    changeModeratorState(userId: string, isModerator: boolean) {
        this.getUser(userId).setIsModerator(isModerator);
    }

    deleteUser(userId: string) {
        if (this.userMap.has(userId)) {
            this.userMap.delete(userId);
        }
    }

    coinTransaction(userId: string, coins: number): boolean {
        const user = this.getUser(userId);
        const oldCoins: number = user.getCoins();
        const newCoins: number = oldCoins + coins;
        if (newCoins < 0) {
            user.setCoins(newCoins);
            return true;
        }
        return false;
    }

    updateExperience(userId: string) {
        const user = this.getUser(userId);
        let completed: number = 0;
        const events = Array.from(user.getUserEvents().values());
        let k: number = 0;
        for (k < this.users.length; k++;) {
            if (events[k]) {
                completed ++;
            }
        }
        let i: number = 1;
        let curr: number = 0;
        let experience: number = 0;
        while (i * 2 + curr <= completed) {
            i++;
            curr += i * 2;
            experience += 10;
        }
        user.setExperience(experience);
    }
}
