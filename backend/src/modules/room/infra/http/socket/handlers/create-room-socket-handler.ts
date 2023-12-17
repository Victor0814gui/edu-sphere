import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { Room } from "@shared/application/entities/room";
import { CreateRoomUseCase } from "@room/use-cases/create-room-use-case";
import { routeName } from "@/src/shared/infra/interfaces/routes";


type ICreateRoomSocketHandlerParams = {
  title: string;
  type: string;
  description: string;
  authorId: string;
  published: boolean;
}

type ICreateRoomSocketHandlerResponse = (params: Room) => void;


export function createRoomSocketHandler(io: Server, socket: Socket) {
  const createRoomUseCase = container.resolve(CreateRoomUseCase)

  async function createRoom(
    params: ICreateRoomSocketHandlerParams,
    callback: ICreateRoomSocketHandlerResponse
  ): Promise<void> {
    const createRoomResponse =
      await createRoomUseCase.execute(params);

    callback(createRoomResponse)
    socket.emit("room:create", createRoomResponse);
  }

  socket.on(routeName.CREATE_ROOM, createRoom);
}