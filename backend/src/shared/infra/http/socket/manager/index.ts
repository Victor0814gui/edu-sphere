import { Socket,Server } from "socket.io";

const registerOrderHandlers = require("./orderHandler");
const registerUserHandlers = require("./userHandler");


export class Manager{
  private static _instance: Manager;

  static get instance(){
    if(!Manager._instance){
      Manager._instance = new Manager();
    }
    return Manager._instance;
  }

  handler(socket: Socket,io: Server) {
    registerOrderHandlers(io, socket);
    registerUserHandlers(io, socket);
  }
}
