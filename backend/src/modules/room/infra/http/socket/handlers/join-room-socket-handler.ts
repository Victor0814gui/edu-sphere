import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { JoinRoomUseCase } from "@room/use-cases/join-room-use-cases";
import { routeName } from "@/src/shared/infra/interfaces/routes";



type IRequest = {
  roomId: string;
  customerId: string;
}

type IResponse = (params: any) => void;

export function joinRoomSocketHandler(socket: Socket) {
  const joinRoomUseCase = container.resolve(JoinRoomUseCase);

  async function join(params: IRequest, response: IResponse) {
    const joinRoomUseCaseResponse = await joinRoomUseCase.execute(params)

    socket.join(params.roomId);
    response(joinRoomUseCaseResponse)
  }

  socket.on(routeName.JOIN_ROOM, join);
}