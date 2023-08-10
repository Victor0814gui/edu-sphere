

export namespace IDeleteRoomUseCase {
  export type Params = {
    code: string;
  }

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
    execute: (props: IDeleteRoomUseCase.Params) =>
      Promise<IDeleteRoomUseCase.Response>
  }
}