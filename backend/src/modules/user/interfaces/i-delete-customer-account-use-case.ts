
export namespace IDeleteUserAccountUseCase {
  export interface Params {
    email: string;
  }

  export interface Response {
    code: number;
    message: string;
  }

  export interface Implementation {
    execute: (props: IDeleteUserAccountUseCase.Params) => 
    Promise<IDeleteUserAccountUseCase.Response>;
  }
}