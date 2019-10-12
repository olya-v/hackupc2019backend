import { Injectable } from '@nestjs/common';
import { Event } from './event.model';
import { UserService } from '../user/user.service';

@Injectable()
export class EventService {
  constructor(private readonly userService: UserService) {
    this.createFakeEvent();
  }

    eventMap: Map<string, Event> = new Map();

    getEventById(id) {
      return this.eventMap.get(id);
    }

    getEvents(): any[] {
        return Array.from(this.eventMap.values());
    }

    getEventsOfXDays(days): any[] {
        const daysInSeconds = days * (24 * 60 * 60);
        let events = Array.from(this.eventMap.values());
        const now = Date.now();
        const limit = now + daysInSeconds;
        if (days >= 0) {
          events = events.filter((event) => event.getUtcTimestamp() > now && event.getUtcTimestamp() < limit)
        } else {
          events = events.filter((event) => event.getUtcTimestamp() < now && event.getUtcTimestamp() > limit)
        }
        return events;
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
      console.log('addding participant');
        const eventId = data.eventId;
        console.log(this.eventMap.has(eventId));
        if (this.eventMap.has(eventId)) {
            console.log(eventId);
            const event = this.eventMap.get(eventId);
            const participantId = data.userId;
            if(!this.userService.getUser(participantId)) {
              console.log('in if', participantId);
                this.userService.createUser({username: 'Mathew', isModerator: true, coins: 1000000, icon: '', id: participantId})
            }
            event.addParticipant(participantId, false, '');
            this.eventMap.set(eventId, event);
            console.log(this.userService.getAllUsers());
            this.userService.getUser(participantId).addEvent(eventId, false);
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
                this.userService.updateTotalExperience(participant, event.getCoins());
            }
        }

    }

    createFakeEvent() {
      this.userService.createUser({username: 'Susi', isModerator: false, coins: 475, icon: ''});
      this.userService.createUser({username: 'Freddy', isModerator: false, coins: 15, icon: ''});
      this.userService.createUser({username: 'Justin', isModerator: true, coins: 50, icon: ''});
      let users = this.userService.getAllUsers();
      for (let i = 0; i < 5; i++) {
        let user = users[Math.floor(Math.random() * users.length)];
        let fakeEvent = this.getFakeEvent(user, i);
        while (this.eventMap.has(fakeEvent.id)) {
          fakeEvent.setId();
        }
        fakeEvent.addParticipant(user.id, false, '');
        this.eventMap.set(fakeEvent.id, fakeEvent);
      }
    }

    getFakeEvent(user, index) {
      const fakeHours = [1, 3, 4, 5, 7, 12];
      const event1 = new Event(
        'Collect trash in the park',
          fakeHours[Math.floor(Math.random() * fakeHours.length)],
          'There is so much waste, that wasnt thrown into the bin',
          35,
          Date.now(),
          'http://theweeklynabe.com/wp-content/uploads/2014/05/Prospect-Park-Memorial-Day-trash-3.jpg',
          user.id,
          {lat: 52.546937, long: 13.385961, location: 'Southpark'},
      );
      const event2 = new Event(
          'Join a climate Demo',
          fakeHours[Math.floor(Math.random() * fakeHours.length)],
          'Get active!',
          25,
          Date.now(),
          'https://media.giphy.com/media/g5SW7jjVccIMM/giphy.gif',
          user.id,
          {lat: 52.521423, long: 13.409919, location: 'Unknown'},
      );
      const event3 = new Event(
          'Clean up the beach',
          fakeHours[Math.floor(Math.random() * fakeHours.length)],
          'Ugly!',
          50,
          Date.now(),
          'https://media.treehugger.com/assets/images/2018/05/trash_covered_beach.jpg.1200x0_q70_crop-smart.jpg',
          user.id,
          {lat: 52.549140, long: 13.484379, location: 'Northbeach'},
      );
      const event4 = new Event(
          'Help the settlement being flooded',
          fakeHours[Math.floor(Math.random() * fakeHours.length)],
          'URGENT: Todo: ...',
          80,
          Date.now(),
          'http://www.yorkmix.com/wp-content/uploads/2015/12/york-floods-dec-2015-nigel-holland-28.jpg',
          user.id,
          {lat: 52.454969, long: 13.597965, location: 'Northbeach'},
      );
      const event5 = new Event(
          'Recycling Event!',
          fakeHours[Math.floor(Math.random() * fakeHours.length)],
          'Share your recycling tips!',
          20,
          Date.now(),
          'http://alu.ch/wp-content/uploads/2016/04/recycling.jpg',
          user.id,
          {lat: 52.530006, long: 13.383785, location: 'Congress hall'},
      );
      const events = [event1, event2, event3, event4, event5];
      return events[index];
    }
}
