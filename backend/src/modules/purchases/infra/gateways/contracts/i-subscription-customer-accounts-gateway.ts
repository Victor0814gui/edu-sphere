import { Permission, Role } from "@prisma/client";


interface IProduct {
  productId: string | null;
  price: number | null;
  quantity: number | null;
  recurrence: 'day' | 'month' | 'week' | 'year' | null;
  name: string | null;
  description: string | null;
}

type ISubscription = {
  currency: string | null
  description: string | null
  recurrence: string | null
  id: string | null
}

interface ICreateResponse {
  code: number;
  url: string | null;
}

declare namespace ISubscriptionCustomerAccountGateway { }

namespace ISubscriptionCustomerAccountGateway {
  export namespace Create {
    export type Params = IProduct;

    export type Response = Promise<ICreateResponse>;
  }
}

namespace ISubscriptionCustomerAccountGateway {
  export namespace FindById {
    export type Params = {
      productId: string
    }
    export type Response = Promise<IProduct>;
  }
}

namespace ISubscriptionCustomerAccountGateway {
  export namespace Purchase {
    export type Params = {
      subscriptionId: string;
      customerId: string;
    }
    export type Response = Promise<ISubscription>;
  }
}




namespace ISubscriptionCustomerAccountGateway {
  export interface Implementation {
    create: (props: ISubscriptionCustomerAccountGateway.Create.Params)
      => ISubscriptionCustomerAccountGateway.Create.Response;
    findById: (props: ISubscriptionCustomerAccountGateway.FindById.Params)
      => ISubscriptionCustomerAccountGateway.FindById.Response;
  }
}

export { ISubscriptionCustomerAccountGateway };