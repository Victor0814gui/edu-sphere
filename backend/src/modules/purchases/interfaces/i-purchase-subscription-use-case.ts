import { Transaction } from "@/src/shared/application/entities/transaction";
import { Product } from "../infra/entities/product";




declare namespace IPurchaseSubscriptionUseCase { }

namespace IPurchaseSubscriptionUseCase {
  export type Params = {
    customerId: string;
    priceId: string;
  }
}

namespace IPurchaseSubscriptionUseCase {
  export type Response = Promise<Transaction>;
}

namespace IPurchaseSubscriptionUseCase {
  export type Implementation = {
    execute: (params: IPurchaseSubscriptionUseCase.Params)
      => IPurchaseSubscriptionUseCase.Response;
  }
}

export { IPurchaseSubscriptionUseCase };