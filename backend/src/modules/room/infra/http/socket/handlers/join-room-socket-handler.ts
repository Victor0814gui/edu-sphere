import { JoinRoomUseCase } from "@room/use-cases/join-room-use-cases";
import { Server, Socket } from "socket.io";
import { container } from "tsyringe";



type IRequest = {
  roomId: string;
  customerId: string;
}

type IResponse = (params: any) => void;

export function joinRoomSocketHandler(io: Server, socket: Socket) {
  const joinRoomUseCase = container.resolve(JoinRoomUseCase);

  async function join(params: IRequest, response: IResponse) {
    const joinRoomUseCaseResponse = await joinRoomUseCase.execute(params)

    socket.join(params.roomId);
    response(joinRoomUseCaseResponse)
  }

  socket.on("room:join", join);
}