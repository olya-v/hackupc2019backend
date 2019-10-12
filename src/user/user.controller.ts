import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get()
    getUser(@Body() data) {
        const user = this.userService.getUser(data.userId);
        return this.userService.getUser(user.getId());
    }

    @Post('/create')
    createUser(@Body() data) {
        this.userService.createUser(data);
    }

    @Post('/delete')
    deleteUser(@Body() data) {
        const user = this.userService.getUser(data.userId);
        this.userService.deleteUser(user.id);
    }

    @Post('/become')
    becomeModerator(@Body() data) {
        const user = this.userService.getUser(data.userId);
        this.userService.changeModeratorState(user.id, true);
    }

    @Post('/lose')
    loseModeratorState(@Body() data) {
        const user = this.userService.getUser(data.userId);
        this.userService.changeModeratorState(user.id, false);
    }

    @Post('/become')
    addEventToUser(@Body() data) {
        this.userService.addEventToUser(data.userId, data.eventId);
    }
}
