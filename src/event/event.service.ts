import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
    fakeEvent = {
      name: 'park aufräumen',
      duration: 1,
      coins: 20,
    };
    events = [this.fakeEvent];

    getEvents(): any[] {
        return this.events;
    }
}
