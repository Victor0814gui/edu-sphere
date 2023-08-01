

export namespace IUpdateRooomUseCase {
  export type Params = {
    code: string;
    name: string;
    type: string;
    description: string;
    teacherId: string;
    published: boolean;
  }

  export type Response = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date | null;
    teacherId: string;
    studentList?: any[]
  }

  export interface Implementation {
    execute: (props: IUpdateRooomUseCase.Params) =>
      Promise<IUpdateRooomUseCase.Response>
  }
}
