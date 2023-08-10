import { container } from "tsyringe";
import { Socket,Server } from "socket.io";
import { CreateMessageController } from "@room/infra/controllers/create-message-controller";




const createMessageController = container.resolve(CreateMessageController)



export class Routes{
  private static _instance: Routes;

  static get instance(){
    if(!Routes._instance){
      Routes._instance = new Routes();
    }
    return Routes._instance;
  }

  handler(socket: Socket,io: Server) {
    io.on("create:message", createMessageController.handler);
  }
}
