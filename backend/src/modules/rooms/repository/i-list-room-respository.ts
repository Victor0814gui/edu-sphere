import { Room } from "../../../aplication/entities/room"



namespace IListRoomsRepository {

  export interface Params { }
  export interface Response extends Array<Room> { };

  export interface Implementation {
    listMany: (props: IListRoomsRepository.Params) =>
      Promise<IListRoomsRepository.Response | null>;
  }
}




export {
  IListRoomsRepository,
}