

type Message = {
  code: number;
  message: string;
}

export namespace IDeleteUserAccountUseCase {
  export type Params = {
    customerId: string;
  }

  export type Response = Promise<Message>;

  export type Implementation = {
    execute: (props: IDeleteUserAccountUseCase.Params)
      => IDeleteUserAccountUseCase.Response;
  }
}