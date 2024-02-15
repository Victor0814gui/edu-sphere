import { createRoomSocketHandler, listRoomsSocketHandler,uploadFilesRoomHandler } from "@/src/modules/room/infra/http/socket/handlers";
import { Socket, Server } from "socket.io";

export function manager(io: Server, socket: Socket) {
  // listRoomsSocketHandler(io, socket);
  // createRoomSocketHandler(io, socket);
  uploadFilesRoomHandler(io,socket);
}
