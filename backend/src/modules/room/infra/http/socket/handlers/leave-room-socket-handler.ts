import { LeaveRoomUseCase } from "@/src/modules/room/use-cases/leave-room-use-case";
import { Server, Socket } from "socket.io";
import { container } from "tsyringe";


type Params = {
  customerId: string;
  roomId: string;
}

export function LeaveRoomSocketHandler(io: Server, socket: Socket) {

  const leaveRoomUseCase = container.resolve(LeaveRoomUseCase)

  async function leave(params: Params) {

    const leaveRoomUseCaseResponse =
      await leaveRoomUseCase.execute(params)
    if (!leaveRoomUseCaseResponse?.id) {

      socket.leave(leaveRoomUseCaseResponse?.id!);
    }
  }

  socket.on("room:leave", leave)

}