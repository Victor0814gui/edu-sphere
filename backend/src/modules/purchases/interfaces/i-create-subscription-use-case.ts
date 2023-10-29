import { Product } from "../infra/entities/product";




declare namespace ICreateSubscriptionUseCase { }

namespace ICreateSubscriptionUseCase {
  export type Params = {
    paymentMethodId: string;
    customerId: string;
    priceId: string;
    subscriptionId: string;
  }
}

namespace ICreateSubscriptionUseCase {
  export type Response = Promise<Product>;
}

namespace ICreateSubscriptionUseCase {
  export type Implementation = {
    execute: (params: ICreateSubscriptionUseCase.Params)
      => ICreateSubscriptionUseCase.Response;
  }
}

export { ICreateSubscriptionUseCase };