import { ICreateNotification } from '@notifications/interfaces/notifications.interface';
export class CreateNotificationDto implements ICreateNotification {
  userId: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}
