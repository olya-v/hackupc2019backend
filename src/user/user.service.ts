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
        return this.userMap.get(userId);
    }

    getUsers(): any[] {
        return Array.from(this.userMap.entries());
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
        this.getUser(userId).addEvent(eventId);
    }
}
