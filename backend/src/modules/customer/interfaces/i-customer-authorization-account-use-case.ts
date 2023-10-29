





export namespace ICustomerAuthorizationAccountUseCase {

  export type Params = {
    token: string;
  }

  export type Response = Promise<{}>

  export type Implementation = {
    execute: (props: ICustomerAuthorizationAccountUseCase.Params) =>
      ICustomerAuthorizationAccountUseCase.Response;
  }
}