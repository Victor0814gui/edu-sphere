import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { Room } from "@/src/shared/application/entities/room";
import { DisconnectMultipleRoomsUseCase } from "@/src/modules/room/use-cases/disconnect-multiple-rooms-use-case";


type IResponse = (params: Room[]) => void;
type IRequest = string[]

export function disconnectMultipleRoomsSocketHandler(io: Server, socket: Socket) {
  const createRoomUseCase = container.resolve(DisconnectMultipleRoomsUseCase)

  async function disconnectAllRooms(request: IRequest, response: IResponse) {
    const createRoomUseCaseResponse = await createRoomUseCase.execute(request)
    response(createRoomUseCaseResponse)
  }
  socket.on("room:disconnect:all", disconnectAllRooms);
}