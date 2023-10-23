import { Server, Socket } from "socket.io";




export function purchasesSocketEventsHandler(io: Server, socket: Socket) {
  function createOrder(params: any): void {

  }
  socket.on("order:create", createOrder);
}