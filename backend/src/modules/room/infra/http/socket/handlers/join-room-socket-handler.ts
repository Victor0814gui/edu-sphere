import { JoinRoomUseCase } from "@room/use-cases/join-room-use-cases";
import { Server, Socket } from "socket.io";
import { container } from "tsyringe";



type JoinRoomSocketHandlerRequest = {
  roomId: string;
  customerId: string;
  callback: (params: any) => void;
}

export function joinRoomSocketHandler(io: Server, socket: Socket) {
  const joinRoomUseCase = container.resolve(JoinRoomUseCase);

  async function join(params: JoinRoomSocketHandlerRequest) {
    const joinRoomUseCaseResponse =
      await joinRoomUseCase.execute(params)
    socket.join(params.roomId);
    params.callback(joinRoomUseCaseResponse)
  }

  socket.on("room:join", join);
}