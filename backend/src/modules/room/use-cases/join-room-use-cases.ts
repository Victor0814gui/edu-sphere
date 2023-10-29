import { IJoinRoomUseCase } from "../interfaces/i-join-room-use-cases";





export class JoinRoomUseCase
  implements IJoinRoomUseCase.Implementation {
  public async execute(params: IJoinRoomUseCase.Params):
    IJoinRoomUseCase.Response {
    const { socket, data } = params;

    socket.join(data.roomId);
  }
}