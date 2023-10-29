import { Customer } from "@/src/shared/application/entities/user";
import { Product } from "../infra/entities/product";
import { Permission } from "@/src/shared/application/entities/permission";
import { Role } from "@/src/shared/application/entities/role";


declare namespace ICreateSubscriptionRepository { }

namespace ICreateSubscriptionRepository {
  export namespace FindBySubscription {
    export type Params = {
      subscriptionId: string;
    }
    export type Response = Promise<Product | null>
  }
}

namespace ICreateSubscriptionRepository {
  export namespace FindByCustomer {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<Customer | null>;
  }
}

namespace ICreateSubscriptionRepository {
  export namespace UpdateSubscription {
    export type Params = {
      subscriptionId: string;
      customerId: string;
    }
    export type Response = Promise<Product>
  }
}

namespace ICreateSubscriptionRepository {
  export namespace UpdateCustomer {
    export type Params = {
      customerId: string;
      permissions: Permission[];
      roles: Role[];
    }
    export type Response = Promise<Customer>;
  }
}

namespace ICreateSubscriptionRepository {
  export namespace FindByPermissions {
    export type Params = {
      level: number;
    }
    export type Response = Promise<Permission>;
  }
}

namespace ICreateSubscriptionRepository {
  export namespace FindByRoles {
    export type Params = {
      level: number;
    }
    export type Response = Promise<Role>;
  }
}

namespace ICreateSubscriptionRepository {
  export type Implementation = {
    findBySubscription: (params: ICreateSubscriptionRepository.FindBySubscription.Params)
      => ICreateSubscriptionRepository.FindBySubscription.Response;
    findByCustomer: (params: ICreateSubscriptionRepository.FindByCustomer.Params)
      => ICreateSubscriptionRepository.FindByCustomer.Response;
    updateSubscription: (params: ICreateSubscriptionRepository.UpdateSubscription.Params)
      => ICreateSubscriptionRepository.UpdateSubscription.Response;
    updateCustomer: (params: ICreateSubscriptionRepository.UpdateCustomer.Params)
      => ICreateSubscriptionRepository.UpdateCustomer.Response;
    findByPermissions: (params: ICreateSubscriptionRepository.FindByPermissions.Params)
      => ICreateSubscriptionRepository.FindByPermissions.Response;
    findByRoles: (params: ICreateSubscriptionRepository.FindByRoles.Params)
      => ICreateSubscriptionRepository.FindByRoles.Response;
  }
}

export { ICreateSubscriptionRepository }