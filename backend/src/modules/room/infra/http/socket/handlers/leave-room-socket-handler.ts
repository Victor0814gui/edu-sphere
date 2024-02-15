import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { Room } from "@/src/shared/application/entities/room";
import { routeName } from "@/src/shared/infra/interfaces/routes";
import { LeaveRoomUseCase } from "@/src/modules/room/use-cases/leave-room-use-case";


type IParams = {
  customerId: string;
  roomId: string;
}

type IResponse = (params: Room | null) => void;

export function LeaveRoomSocketHandler(io: Server, socket: Socket) {
  const leaveRoomUseCase = container.resolve(LeaveRoomUseCase)

  async function leave(params: IParams, response: IResponse) {
    const leaveRoomUseCaseResponse = await leaveRoomUseCase.execute(params)

    if (!leaveRoomUseCaseResponse?.id) {

      socket.leave(leaveRoomUseCaseResponse?.id!);
      response(leaveRoomUseCaseResponse);
    }
  }
  socket.on(routeName.LEAVE_ROOM, leave)
}