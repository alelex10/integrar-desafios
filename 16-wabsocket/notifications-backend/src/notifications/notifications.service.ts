import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './interfaces/notifications.interface';

@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [];

  create(createNotificationDto: CreateNotificationDto): Notification {
    // create notification
    const newNotification: Notification = {
      id: (this.notifications.length + 1).toString(),
      ...createNotificationDto,
      timestamp: new Date(),
      read: false,
    };
    // save notification
    this.notifications.push(newNotification);
    return newNotification;
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
