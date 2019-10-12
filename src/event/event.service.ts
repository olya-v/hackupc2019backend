import { Injectable } from '@nestjs/common';
import { Event } from './event.model';

@Injectable()
export class EventService {
    fakeEvent = new Event(
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      'park aufräumen',
      1,
      20,
      Date.now(),
      '',
      2,
      {long: 150, lang: 150},
      [{
        id: 1,
        completed: false,
        completedImage: '',
      }],
    );
    eventMap: Map<string, Event> = new Map();

    getEvents(): any[] {
        return Array.from(this.eventMap.entries());
    }

    createEvent(event) {
      const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const newEvent = new Event(
          uuid,
          event.title,
          event.estimatedWorkHours,
          event.coins,
          event.utcTimestamp,
          event.image,
          event.creator,
          event.location,
          [],
      );
      this.eventMap.set(uuid, newEvent);
    }

    deleteEvent(data) {
      const eventId = data.eventId;
      this.eventMap.delete(eventId);
    }

    completeEvent(data) {
      const eventId = data.eventId;
      const event = this.eventMap.get(eventId);
      event.completed = true;
      this.eventMap.set(eventId, event);
    }
}
