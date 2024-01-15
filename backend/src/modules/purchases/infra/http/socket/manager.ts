import { Server, Socket } from "socket.io";
import { notificationsHandler } from "./handlers/notifications";



export function manager(io: Server, socket: Socket) {
  notificationsHandler(io, socket)
}