import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { UserService } from '../user/user.service';

@Module({
  providers: [EventService, UserService],
  controllers: [EventController],
})
export class EventModule {}
