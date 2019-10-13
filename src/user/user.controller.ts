import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id) {
        return this.userService.getUser(id);
    }

    @Get()
    getUserByName(@Body() data) {
        return this.userService.getUserByName(data.username);
    }

    @Get()
    getUserExperience(@Body() data) {
        const user = this.userService.getUser(data.getId());
        return user.getExperience();
    }

    @Get()
    getUserExperienceProLevel(@Body() data) {
        return this.userService.calculateExperienceProLevel(data.getId());
    }

    @Get()
    getUserLevel(@Body() data) {
        return this.userService.calculateLevel(data.getId());
    }

    @Get()
    getUserEvents(@Body() data) {
        const user = this.userService.getUser(data.userId);
        return this.userService.getUser(user.getId()).getUserEvents();
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

    @Post('/addEvent')
    addEventToUser(@Body() data) {
        this.userService.addEventToUser(data.userId, data.eventId);
    }

    @Post('/changeEvent')
    changeEventStatus(@Body() data) {
        this.userService.changeEventStatus(data.userId, data.eventId, data.completed);
    }

    @Post('/coinTransaction')
    coinTransaction(@Body() data) {
        this.userService.coinTransaction(data.userId, data.coins);
    }
}
