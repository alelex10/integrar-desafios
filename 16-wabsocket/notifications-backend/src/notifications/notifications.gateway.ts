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

  handleConnection(client: Socket, ...args: any[]) {
    this.usersIDs.push(client.id);

    console.log(`🚀Client connected: ${client.id}`);

    this.server.emit('users', this.usersIDs);
  }

  handleDisconnect(client: Socket) {
    this.usersIDs.splice(this.usersIDs.indexOf(client.id), 1);
    console.log(`🚀Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('create-notification')
  handleCreateNotification(client: Socket, payload: CreateNotificationDto) {
    // create notification
    const notification = this.notificationsService.create(payload);

    // get user id
    const userId = this.usersIDs.find((userID) => userID === payload.userId);

    if (userId) {
      // send notification to user specified in payload
      this.server.to(userId).emit('notification', notification);
    }
  }

  @SubscribeMessage('notification-read')
  handleUsers(client: Socket) {
    this.notificationsService.read(client.id);
  }
}
