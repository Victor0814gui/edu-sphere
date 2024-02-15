import { container } from "tsyringe";
import { Server, Socket } from "socket.io";
import { Room } from "@/src/shared/application/entities/room";
import { routeName } from "@/src/shared/infra/interfaces/routes";
import { LeaveRoomUseCase } from "@/src/modules/room/use-cases/leave-room-use-case";
import { UploadFilesRoomUseCase } from "@/src/modules/room/use-cases/upload-files-room-use-case";
import { writeFile } from "fs";


type IParams = any;

type IContentResponse = {
  message: string;
}

type IResponse = (params: IContentResponse | null) => void;

export function uploadFilesRoomHandler(io: Server, socket: Socket) {
  const uploadFilesRoomUseCase = container.resolve(UploadFilesRoomUseCase)
  async function upload(params: IParams) {
    await uploadFilesRoomUseCase.execute(params);
  }
  socket.on(routeName.UPLOAD_FILES_ROOM, upload)
}