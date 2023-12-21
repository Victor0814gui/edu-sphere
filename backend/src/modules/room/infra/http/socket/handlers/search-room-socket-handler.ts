import { container } from "tsyringe";
import { Socket } from "socket.io";
import { routeName } from "@/src/shared/infra/interfaces/routes";
import { SearchRoomUseCase } from "@/src/modules/room/use-cases/search-room-use-case";
import { Room } from "@/src/shared/application/entities/room";



type IRequest = {
  code: string;
}

type IResponse = (params: Room | null) => Promise<void>;

export function searchRoomSocketHandler(socket: Socket) {
  const searchRoomUseCase = container.resolve(SearchRoomUseCase);

  async function search(params: IRequest, response: IResponse) {
    const searchRoomUseCaseResponse =
      await searchRoomUseCase.execute(params)

    response(searchRoomUseCaseResponse)
  }

  socket.on(routeName.SEARCH_ROOM, search);
}