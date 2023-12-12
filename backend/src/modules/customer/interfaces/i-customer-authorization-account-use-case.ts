





export namespace ICustomerAuthorizationAccountUseCase {

  export type Params = {
    code: string;
    customerId: string;
  }

  export type Response = Promise<{}>

  export type Implementation = {
    execute: (props: ICustomerAuthorizationAccountUseCase.Params) =>
      ICustomerAuthorizationAccountUseCase.Response;
  }
}