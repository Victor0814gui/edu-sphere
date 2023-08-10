import { Room } from "@/src/aplication/entities/room";


export namespace IUpdateRooomUseCase {
  export type Params = {
    code: string;
    title: string;
    type: string;
    description: string;
    teacherId: string;
    published: boolean;
  }

  export interface Response extends Room { }

  export interface Implementation {
    execute: (props: IUpdateRooomUseCase.Params) =>
      Promise<IUpdateRooomUseCase.Response>
  }
}
