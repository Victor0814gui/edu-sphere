



interface IProduct {
  productId: string;
  price: number;
  quantity: number;
  recurrence: 'day' | 'month' | 'week' | 'year';
  name: string;
  description: string;
}

interface ICreateResponse {
  code: number;
  url: string | null;
}

export namespace ISubscriptionCustomerAccountGateway {
  export namespace Create {
    export type Params = IProduct;

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