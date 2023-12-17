import { Room } from "@/src/shared/application/entities/room";


declare namespace ISearchRoomRepository { }


namespace ISearchRoomRepository {
  export namespace FindRoom {
    export type Params = {
      code: string;
    }
    export type Response = Promise<Room | null>;
  }
}


namespace ISearchRoomRepository {
  export type Implementation = {
    findRoom: (params: ISearchRoomRepository.FindRoom.Params)
      => ISearchRoomRepository.FindRoom.Response;
  }
}

export { ISearchRoomRepository };