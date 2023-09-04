





interface IProduct {
  price: string;
  quantity: number;
}

interface ICreateResponse {
  code: number;
  url: string | null;
}

export namespace ISubscriptionCustomerAccountGateway {
  export namespace Create {
    export interface Params extends Array<IProduct> { }

    export type Response = Promise<ICreateResponse>;
  }

  export namespace FindById {
    export interface Params {
      productId: string
    }

    export type Response = Promise<IProduct>;
  }
  export interface Implementation {
    create: (props: ISubscriptionCustomerAccountGateway.Create.Params)
      => ISubscriptionCustomerAccountGateway.Create.Response;
    findById: (props: ISubscriptionCustomerAccountGateway.FindById.Params)
      => ISubscriptionCustomerAccountGateway.FindById.Response;
  }
}