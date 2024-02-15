import { writeFile } from "fs";
import { IUploadFilesRoomUseCase } from "../interfaces/i-upload-files-room-use-case";





export class UploadFilesRoomUseCase
  implements IUploadFilesRoomUseCase.Implementation{
  public async execute(params: IUploadFilesRoomUseCase.Params):
  IUploadFilesRoomUseCase.Response{
    console.log(params)

    const response = {} as IUploadFilesRoomUseCase.Response;
    return response;
  }
}