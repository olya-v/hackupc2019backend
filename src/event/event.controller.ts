import {Body, Controller, Get, Post} from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    getEvent() {
        const events = this.eventService.getEvents();
        return events.map(event => ({...event, participantIds: Array.from(event.participantIds.values())}));
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

    @Post('/get-events-for-x-days')
    getEventsForXDays(@Body() data) {
        this.eventService.getEventsOfXDays(data);
    }

    @Post('/approve')
    approveEvent(@Body() data) {
        this.eventService.approveEvent(data);
    }

    @Post('/participate')
    participateInEvent(@Body() data) {
        this.eventService.addParticipant(data);
        return this.eventService.getEventById(data.userId);
    }

    @Post('/changeParticipantStatus')
    changeParticipantStatus(@Body() data) {
        this.eventService.changeParticipantStatus(data);
    }
}
