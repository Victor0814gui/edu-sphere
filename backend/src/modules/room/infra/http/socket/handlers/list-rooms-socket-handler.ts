import { ListRoomsUseCase } from "@/src/modules/room/use-cases/list-rooms-use-case";
import { Room } from "@/src/shared/application/entities/room";
import { Server, Socket } from "socket.io";
import { container } from "tsyringe";


type IListRoomSocketHandlerResponse = (params: Room[] | null) => void;


export function listRoomsSocketHandler(io: Server, socket: Socket) {
  const listRoomsUseCase = container.resolve(ListRoomsUseCase)

  async function ListRooms(
    callback: IListRoomSocketHandlerResponse
  ): Promise<void> {
    const listRoomsUseCaseResponse =
      await listRoomsUseCase.execute();

    callback(listRoomsUseCaseResponse)
  }
  socket.on("room:list", ListRooms);
}