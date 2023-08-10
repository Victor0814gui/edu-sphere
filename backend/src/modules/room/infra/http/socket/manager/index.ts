import { Socket,Server } from "socket.io";


export class Manager{
  private static _instance: Manager;

  static get instance(){
    if(!Manager._instance){
      Manager._instance = new Manager();
    }
    return Manager._instance;
  }

  handler(socket: Socket,io: Server) {
  }
}
