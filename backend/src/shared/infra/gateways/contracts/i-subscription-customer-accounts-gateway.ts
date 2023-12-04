import { Product } from "@/src/shared/application/entities/product";
import { Permission, Role } from "@prisma/client";



declare namespace ISubscriptionCustomerAccountGateway { }

namespace ISubscriptionCustomerAccountGateway {
  export namespace Create {
    export type Params = {
      name: string;
      description: string;
      thumbnailUrl: string;
      currency: string;
      recurrence: "day" | "week" | "month" | "year";
      amount: number;
      active: boolean;
    };

    export type Response = Promise<Product>;
  }
}

namespace ISubscriptionCustomerAccountGateway {
  export namespace FindById {
    export type Params = {
      subscriptionId: string
    }
    export type Response = Promise<{
      name: string;
      description: string;
      priceId: string;
      productId: string;
      status: string;
    }>;
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