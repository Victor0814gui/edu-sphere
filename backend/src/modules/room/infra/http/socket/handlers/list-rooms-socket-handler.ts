import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { Room } from "@/src/shared/application/entities/room";
import { ListRoomsUseCase } from "@/src/modules/room/use-cases/list-rooms-use-case";
import { routeName } from "@/src/shared/infra/interfaces/routes";


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
  socket.on(routeName.LIST_ROOMS, ListRooms);
}