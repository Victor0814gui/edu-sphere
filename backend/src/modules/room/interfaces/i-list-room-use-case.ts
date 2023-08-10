import { IListRoomsRepository } from "../repository/i-list-room-respository";


export namespace IListRooomUseCase {
  export type Params = {}

  export type Response = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date | null;
    teacherId: string;
    studentList?: any[]
  }

  export interface Implementation {
    execute: (props: IListRooomUseCase.Params) =>
      Promise<IListRoomsRepository.Response | null>
  }
}
