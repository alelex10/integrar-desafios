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

  read(idNotification: string, userId: string): Notification[] {
    // find notification by id
    const notification = this.notifications.find(
      (notif) => notif.id === idNotification,
    );

    if (notification) {
      // mark notification as read
      notification.read = true;
    } 
    return this.notificationsForUser(userId);
  }

  notificationsForUser(userId: string): Notification[] {
    // filter notifications for a specific user
    return this.notifications.filter(
      (notificationo) => notificationo.userId === userId,
    );
  }
}
