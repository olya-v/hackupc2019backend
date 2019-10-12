import { Injectable } from '@nestjs/common';
import { Event } from './event.model';

@Injectable()
export class EventService {
    fakeEvent = new Event(
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
      const newEvent = new Event(
          event.title,
          event.estimatedWorkHours,
          event.coins,
          event.utcTimestamp,
          event.image,
          event.creator,
          event.location,
          [],
      );
      while (this.eventMap.has(newEvent.id)) {
        newEvent.setId();
      }
      this.eventMap.set(newEvent.id, newEvent);
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
