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

    @Get(':name')
    getUserByName(@Param('name') name) {
        return this.userService.getUserByName(name);
    }

    @Get(':userId')
    getUserExperience(@Param('userId') userId) {
        const user = this.userService.getUser(userId);
        return user.getExperience();
    }

    @Get(':userId')
    getUserExperienceProLevel(@Param('userId') userId) {
        return this.userService.calculateExperienceProLevel(userId);
    }

    @Get(':userId')
    getUserLevel(@Param('userId') userId) {
        return this.userService.calculateLevel(userId);
    }

    @Get(':userId')
    getUserEvents(@Param('userId') userId) {
        const user = this.userService.getUser(userId);
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
