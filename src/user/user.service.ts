import { Injectable } from '@nestjs/common';
import {User} from './user.model';

@Injectable()
export class UserService {
    user1 = new User('moderator',
        true,
        50);

    user2 = new User('average',
        false,
        50);

    users = [this.user1, this.user2];

    getUsers(): any[] {
        return this.users;
    }

    userMap: Map<string, User> = new Map();

    getUser(): any[] {
        return Array.from(this.userMap.entries());
    }

    createUser(user) {
        const newUser = new User(
            user.username,
            user.isModerator,
            user.coins,
        );
        this.userMap.set(newUser.getId(), newUser);
    }
}
