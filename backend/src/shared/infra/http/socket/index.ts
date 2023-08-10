import { Server } from "socket.io";
import { httpServer } from "../server";
import { Manager } from "./manager";
import { Socket } from "socket.io";


const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  Manager.instance.handler(socket, io);
});