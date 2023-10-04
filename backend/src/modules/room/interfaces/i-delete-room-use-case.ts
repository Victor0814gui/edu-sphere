import { Room } from "@/src/aplication/entities/room";


export namespace IDeleteRoomUseCase {
  export type Params = {
    code: string;
  }

  export type Response = Promise<Room>

  export interface Implementation {
    // findById: (props: IDeleteRoomUseCase.Params)
    //   => IDeleteRoomUseCase.Response; 
    execute: (props: IDeleteRoomUseCase.Params)
      => IDeleteRoomUseCase.Response;
  }
}