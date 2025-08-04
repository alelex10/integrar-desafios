import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';
import { ResponseDTO } from './dto/response.dto';
import { ConectedResponseDto } from './dto/conected-response.dto';
import { Notification } from './interfaces/notifications.interface';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private usersIDs: string[] = [];

  constructor(private readonly notificationsService: NotificationsService) {}

  afterInit(server: Server) {
    console.log(`🚀Gateway initialized in path ${server.path()}`);
  }

  handleConnection(client: Socket) {
    this.usersIDs.push(client.id);
    console.log(`🚀Client connected: ${client.id}`);
    const response = new ResponseDTO<ConectedResponseDto>(
      {
        usersIds: this.usersIDs,
      },
      true,
      'Users connected',
    );
    this.server.emit('users-conected', response);

    client.emit(
      'my-user-id',
      new ResponseDTO<string>(client.id, true, 'My user id'),
    );
  }

  handleDisconnect(client: Socket) {
    this.usersIDs.splice(this.usersIDs.indexOf(client.id), 1);

    console.log(`🚀Client disconnected: ${client.id}`);
    const response = new ResponseDTO<ConectedResponseDto>(
      {
        usersIds: this.usersIDs,
      },
      true,
      'Users connected',
    );
    this.server.emit('users-conected', response);
  }

  @SubscribeMessage('create-notification')
  handleCreateNotification(client: Socket, payload: CreateNotificationDto) {
    console.log(` 🚀Notification created: ${JSON.stringify(payload.message)}`);
    // create notification
    const notifications: Notification[] =
      this.notificationsService.create(payload);

    // get user id
    const userId = this.usersIDs.find((userID) => userID === payload.userId);
    const responseNotifications = new ResponseDTO<Notification[]>(
      notifications,
      true,
      'Notification created',
    );

    if (userId) {
      // send notification to user specified in payload
      this.server.to(userId).emit('notification', responseNotifications);
    }
  }

  @SubscribeMessage('notification-read')
  readNotification(client: Socket, payload: { idNotification: string }) {
    const notifications = this.notificationsService.read(
      payload.idNotification,
      client.id,
    );
    const responseNotifications = new ResponseDTO<Notification[]>(
      notifications,
      true,
      'Notification read',
    )
    // emit updated notifications for the user
    client.emit('notifications', responseNotifications);
  }
}
