export namespace ICreateRooomUseCase {
  export type Params = {
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
    execute: (props: ICreateRooomUseCase.Params) =>
      Promise<ICreateRooomUseCase.Response>;
  }
}
