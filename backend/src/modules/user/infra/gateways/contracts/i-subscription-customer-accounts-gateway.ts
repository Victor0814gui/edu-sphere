





interface IProduct {
  price: string;
  quantity: number;
}

export namespace ISubscriptionCustomerAccountGateway {
  export interface Params extends Array<IProduct> {}

  export type Response = Promise<{
    code: number;
    url: string | null;
  }>;

  export interface Implementation {
    execute: (props: ISubscriptionCustomerAccountGateway.Params) 
    => ISubscriptionCustomerAccountGateway.Response;
  }
}