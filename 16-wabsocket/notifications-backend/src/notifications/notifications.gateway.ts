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

  private usersID:[] = [];

  constructor(private readonly notificationsService: NotificationsService) {}

  afterInit(server: Server) {
    console.log(`🚀Gateway initialized in path ${server.path}`);
  }

  handleConnection(client: Socket, ...args: any[]) {

  }

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('create-notification')
  handleMessage(client: Socket, payload: CreateNotificationDto) {
    // create notification
    const notification = this.notificationsService.create(payload);

    const userId = this.usersID.find((userID) => userID === client.id);

    if (userId) {
      this.server.to(userId).emit('notification', notification);
    }
    // send notification to user specified in payload
  }
}
