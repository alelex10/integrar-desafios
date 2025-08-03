import { Notification } from '@notifications/interfaces/notifications.interface';
export class CreateNotificationDto
  implements Pick<Notification, 'userId' | 'message' | 'type'> {
    userId: string;
    message: string;
    type: 'info' | 'warning' | 'error' | 'success';
  }
