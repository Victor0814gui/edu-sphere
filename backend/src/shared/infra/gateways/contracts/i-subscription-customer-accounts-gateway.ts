import { Permission, Role } from "@prisma/client";




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
  export namespace FindPermissionsByLevel {
    export type Params = {
      productId: string
    }
    export type Response = Promise<Permission[] | null>;
  }
}

namespace ISubscriptionCustomerAccountGateway {
  export namespace FindRolesByLevel {
    export type Params = {
      productId: string
    }
    export type Response = Promise<Role[] | null>;
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