import { Injectable } from '@nestjs/common';
import {UserModel} from './user.model';

@Injectable()
export class UserService {
    user1 = new UserModel('moderator',
        123456,
        true,
        50);

    user2 = new UserModel('average',
        123456,
        false,
        50);

    users = [this.user1, this.user2];

    getUser(): any[] {
        return this.users;
    }
}
