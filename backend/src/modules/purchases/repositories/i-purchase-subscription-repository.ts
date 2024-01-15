import { Customer } from "@/src/shared/application/entities/user";
import { Product } from "../infra/entities/product";
import { Permission } from "@/src/shared/application/entities/permission";
import { Role } from "@/src/shared/application/entities/role";
import { Transaction } from "@/src/shared/application/entities/transaction";


declare namespace IPurchaseSubscriptionRepository { }

namespace IPurchaseSubscriptionRepository {
  export namespace FindBySubscription {
    export type Params = {
      subscriptionId: string;
    }
    export type Response = Promise<Product | null>
  }
}

namespace IPurchaseSubscriptionRepository {
  export namespace FindByCustomer {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<Customer | null>;
  }
}

namespace IPurchaseSubscriptionRepository {
  export namespace UpdateSubscription {
    export type Params = {
      subscriptionId: string;
      customerId: string;
    }
    export type Response = Promise<Product>
  }
}

namespace IPurchaseSubscriptionRepository {
  export namespace UpdateCustomer {
    export type Params = {
      customerId: string;
      permissions: Permission[];
      roles: Role[];
    }
    export type Response = Promise<Customer>;
  }
}

namespace IPurchaseSubscriptionRepository {
  export namespace FindByPermissions {
    export type Params = {
      level: number;
    }
    export type Response = Promise<Permission>;
  }
}

namespace IPurchaseSubscriptionRepository {
  export namespace FindByRoles {
    export type Params = {
      level: number;
    }
    export type Response = Promise<Role>;
  }
}


namespace IPurchaseSubscriptionRepository {
  export namespace CreateTransaction {
    export type Params = Transaction & {
      subscriptionId: string;
    };
    export type Response = Promise<Transaction>;
  }
}


namespace IPurchaseSubscriptionRepository {
  export type Implementation = {
    findBySubscription: (params: IPurchaseSubscriptionRepository.FindBySubscription.Params)
      => IPurchaseSubscriptionRepository.FindBySubscription.Response;
    findByCustomer: (params: IPurchaseSubscriptionRepository.FindByCustomer.Params)
      => IPurchaseSubscriptionRepository.FindByCustomer.Response;
    updateSubscription: (params: IPurchaseSubscriptionRepository.UpdateSubscription.Params)
      => IPurchaseSubscriptionRepository.UpdateSubscription.Response;
    updateCustomer: (params: IPurchaseSubscriptionRepository.UpdateCustomer.Params)
      => IPurchaseSubscriptionRepository.UpdateCustomer.Response;
    findByPermissions: (params: IPurchaseSubscriptionRepository.FindByPermissions.Params)
      => IPurchaseSubscriptionRepository.FindByPermissions.Response;
    findByRoles: (params: IPurchaseSubscriptionRepository.FindByRoles.Params)
      => IPurchaseSubscriptionRepository.FindByRoles.Response;
    transaction: (params: IPurchaseSubscriptionRepository.CreateTransaction.Params)
      => IPurchaseSubscriptionRepository.CreateTransaction.Response;
  }
}

export { IPurchaseSubscriptionRepository }