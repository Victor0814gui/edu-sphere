
import { IDisconnectMultipleRoomsUseCase } from "../interfaces/i-disconnect-multiple-rooms-use-case";



export class DisconnectMultipleRoomsUseCase
  implements IDisconnectMultipleRoomsUseCase.Implementation {

  public async execute(params: IDisconnectMultipleRoomsUseCase.Params):
    IDisconnectMultipleRoomsUseCase.Response {
    const { io, socket } = params;

    const response = {} as IDisconnectMultipleRoomsUseCase.Response;

    io.of("/admin").in("room1").except("room2").local.disconnectSockets();

    return response;
  }
}