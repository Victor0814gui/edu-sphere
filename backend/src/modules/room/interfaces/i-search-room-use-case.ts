import { Room } from "@/src/shared/application/entities/room";


declare namespace ISearchRoomUseCase { }


namespace ISearchRoomUseCase {
  export type Params = {
    code: string;
  }
}

namespace ISearchRoomUseCase {
  export type Response = Promise<Room | null>;
}

namespace ISearchRoomUseCase {
  export type Implementation = {
    execute: (params: ISearchRoomUseCase.Params)
      => ISearchRoomUseCase.Response;
  }
}

export { ISearchRoomUseCase };