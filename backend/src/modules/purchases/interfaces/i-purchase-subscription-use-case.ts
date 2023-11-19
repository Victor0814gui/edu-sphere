import { Product } from "../infra/entities/product";




declare namespace IPurchaseSubscriptionUseCase { }

namespace IPurchaseSubscriptionUseCase {
  export type Params = {
    paymentMethodId: string;
    customerId: string;
    priceId: string;
    subscriptionId: string;
  }
}

namespace IPurchaseSubscriptionUseCase {
  export type Response = Promise<Product>;
}

namespace IPurchaseSubscriptionUseCase {
  export type Implementation = {
    execute: (params: IPurchaseSubscriptionUseCase.Params)
      => IPurchaseSubscriptionUseCase.Response;
  }
}

export { IPurchaseSubscriptionUseCase };