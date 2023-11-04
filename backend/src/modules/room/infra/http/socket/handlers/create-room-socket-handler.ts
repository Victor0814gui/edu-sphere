import { CreateRoomUseCase } from "@/src/modules/room/use-cases/create-room-use-case";
import { Room } from "@/src/shared/application/entities/room";
import { Server, Socket } from "socket.io";
import { container } from "tsyringe";


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
  }
  socket.on("room:create", createRoom);
}