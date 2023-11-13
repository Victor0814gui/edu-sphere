
import { IDisconnectMultipleRoomsUseCase } from "../interfaces/i-disconnect-multiple-rooms-use-case";



export class DisconnectMultipleRoomsUseCase
  implements IDisconnectMultipleRoomsUseCase.Implementation {

  public async execute(params: IDisconnectMultipleRoomsUseCase.Params):
    IDisconnectMultipleRoomsUseCase.Response {
    const response = {} as IDisconnectMultipleRoomsUseCase.Response;
    return response;
  }
}