

declare namespace IUploadFilesRoomUseCase{}

namespace IUploadFilesRoomUseCase {
  export type Params = any
}

namespace IUploadFilesRoomUseCase {
  export type Response = Promise<any>;
}

namespace IUploadFilesRoomUseCase {
  export type Implementation = {
    execute: (params: IUploadFilesRoomUseCase.Params) 
    => IUploadFilesRoomUseCase.Response;
  }
}

export {IUploadFilesRoomUseCase};