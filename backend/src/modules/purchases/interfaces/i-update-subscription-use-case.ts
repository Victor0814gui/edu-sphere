import Stripe from "stripe";




declare namespace IUpdateSubscriptionUseCase { };
type StripeResponse = Stripe.Response<Stripe.Subscription>;

namespace IUpdateSubscriptionUseCase {
  export type Params = {
    subscriptionId: string;
    newPriceId: string;
  }
}

namespace IUpdateSubscriptionUseCase {
  export type Response = Promise<StripeResponse>;
}

namespace IUpdateSubscriptionUseCase {
  export type Implementation = {
    execute: (params: IUpdateSubscriptionUseCase.Params)
      => IUpdateSubscriptionUseCase.Response;
  }
}



export { IUpdateSubscriptionUseCase }