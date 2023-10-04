import { Room } from "@/src/aplication/entities/room";

export namespace ICreateRoomUseCase {
  export type Params = {
    title: string;
    type: string;
    description: string;
    authorId: string;
    published: boolean;
  }

  export type Response = Promise<Room>;

  export type Implementation = {
    execute: (props: ICreateRoomUseCase.Params) =>
      ICreateRoomUseCase.Response;
  }
}
