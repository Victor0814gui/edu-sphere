import { Room } from "@/src/aplication/entities/room";


export namespace IUpdateRoomUseCase {
  export type Params = {
    code: string;
    title: string;
    type: string;
    description: string;
    teacherId: string;
    published: boolean;
  }

  export type Response = Promise<Room>;

  export type Implementation = {
    execute: (props: IUpdateRoomUseCase.Params)
      => IUpdateRoomUseCase.Response;
  }
}
