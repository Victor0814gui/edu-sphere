import { Server, Socket } from "socket.io";



type IMessage = {
  message: string;
  type: String;
}

type ICallback = (params: IMessage) => void;

export function notificationsHandler(io: Server, socket: Socket) {
  async function notifications(params: IMessage, callback: ICallback) {
    socket.emit("notifications", (data: IMessage) => {
      console.log(data)
    })
  }

  socket.on("notifications", notifications)
}