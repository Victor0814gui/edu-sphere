import { Room } from "@aplication/entities/room"



namespace IListRoomsRepository {

  export type Params = void;

  export type Response = Promise<Room[] | null>;

  export type Implementation = {
    listMany: (props: IListRoomsRepository.Params)
      => IListRoomsRepository.Response
  }
}


export {
  IListRoomsRepository,
}