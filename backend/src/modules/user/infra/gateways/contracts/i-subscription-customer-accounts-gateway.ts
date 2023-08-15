





interface IProduct {
  price: string;
  quantity: number;
}

export namespace ISubscriptionCustomerAccountsGateway {
  export interface Params extends Array<IProduct> {}

  export type Response = {
    code: number;
    url: string | null;
  };

  export interface Implementation {
    execute: (props: ISubscriptionCustomerAccountsGateway.Params) => 
      Promise<ISubscriptionCustomerAccountsGateway.Response>;
  }
}