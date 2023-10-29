import { Room } from "@/src/shared/application/entities/room";
import { IListRoomsRepository } from "../repository/i-list-room-repository";


export namespace IListRoomUseCase {
  export type Params = void;

  export type Response = Promise<Room[] | null>;

  export interface Implementation {
    execute: (props: IListRoomUseCase.Params)
      => IListRoomsRepository.Response;
  }
}
