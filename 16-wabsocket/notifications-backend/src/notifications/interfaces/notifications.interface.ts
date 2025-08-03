// interfaces/notification.interface.ts
export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  timestamp: Date;
}

export interface ICreateNotification
  extends Pick<Notification, 'userId' | 'message' | 'type'> {}

export interface NotificationUser {
  id: string;
  socketId: string;
  userId: string;
}
