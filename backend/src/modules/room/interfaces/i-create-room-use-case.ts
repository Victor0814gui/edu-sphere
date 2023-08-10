import { Room } from "@/src/aplication/entities/room";

export namespace ICreateRooomUseCase {
  export interface Params {
    title: string;
    type: string;
    description: string;
    teacherId: string;
    published: boolean;
  }

  export interface Response extends Room {
    studentList?: any[]
  }

  export interface Implementation {
    execute: (props: ICreateRooomUseCase.Params) =>
      Promise<ICreateRooomUseCase.Response>;
  }
}
