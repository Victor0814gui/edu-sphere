






export namespace IPurchaseProductToCustomerUseCase {
  export type Params = {
    productId: string;
    customerId: string;
  }

  export type Response = Promise<any>;

  export type Implementation = {
    execute: (props: IPurchaseProductToCustomerUseCase.Params)
      => IPurchaseProductToCustomerUseCase.Response;
  }
}