import { Injectable } from '@nestjs/common';
import { Event } from './event.model';
import { UserService } from '../user/user.service';

@Injectable()
export class EventService {
  constructor(private readonly userService: UserService) {
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
    this.createFakeEvent();
  }

    eventMap: Map<string, Event> = new Map();

    getEvents(): any[] {
        return Array.from(this.eventMap.values());
    }

    createEvent(event) {
      const newEvent = new Event(
          event.title,
          event.estimatedWorkHours,
          event.description,
          event.coins,
          event.utcTimestamp,
          event.image,
          event.creator,
          event.location,
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
      event.setCompleted(true);
      this.eventMap.set(eventId, event);
    }

    approveEvent(data) {
        const eventId = data.eventId;
        const event = this.eventMap.get(eventId);
        event.setApproved(true);
        this.eventMap.set(eventId, event);
    }

    addParticipant(data) {
        const eventId = data.eventId;
        if (this.eventMap.has(eventId)) {
            const event = this.eventMap.get(eventId);
            const participant = data.userId;
            event.addParticipant(participant, false, '');
            this.eventMap.set(eventId, event);
            this.userService.getUser(participant).addEvent(eventId, false);
        }
    }

    changeParticipantStatus(data) {
        const eventId = data.eventId;
        const event = this.eventMap.get(eventId);
        const participant = data.userId;
        const completed = data.completed;
        const completionImage = data.completionImage;
        event.addParticipant(participant, completed, completionImage);
        this.eventMap.set(eventId, event);
        const user = this.userService.getUser(participant);
        const userEvents = user.getUserEvents();
        if (userEvents.get(eventId) !== completed) {
            userEvents.set(eventId, completed);
            if (completed) {
                this.userService.updateExperience(participant);
            }
        }

    }

    createFakeEvent() {
      let users = this.userService.getAllUsers();
      if (users.length === 0) {
        this.userService.createUser({username: 'Susi', isModerator: false, coins: 0, icon: ''});
        users = this.userService.getAllUsers();
      }
      const user = users[Math.floor(Math.random() * users.length)];
      const fakeEvent = new Event(
          'Park aufräumen',
          1,
          'just some stuff',
          20,
          Date.now(),
          'https://media.giphy.com/media/g5SW7jjVccIMM/giphy.gif',
          2,
          {long: 150, lang: 150, location: 'park'},
      );
      while (this.eventMap.has(fakeEvent.id)) {
        fakeEvent.setId();
      }
      fakeEvent.addParticipant(user.id, false, '');
      this.eventMap.set(fakeEvent.id, fakeEvent);
    }
}
