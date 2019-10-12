import {Body, Controller, Get, Post} from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    getEvent() {
        return this.eventService.getEvents();
    }

    @Post('/create')
    createEvent(@Body() data) {
        this.eventService.createEvent(data);
    }

    @Post('/delete')
    deleteEvent(@Body() data) {
        this.eventService.deleteEvent(data);
    }

    @Post('/complete')
    completeEvent(@Body() data) {
        this.eventService.completeEvent(data);
    }

    @Post('/approve')
    approveEvent(@Body() data) {
        this.eventService.approveEvent(data);
    }

    @Post('/changeParticipantStatus')
    changeParticipantStatus(@Body() data) {
        this.eventService.changeParticipantStatus(data);
    }
}
