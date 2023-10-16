import Stripe from "stripe";





declare namespace ICreateSubscriptionUseCase { }
type StripeResponse = Stripe.Response<Stripe.Subscription>;

namespace ICreateSubscriptionUseCase {
  export type Params = {
    paymentMethodId: string;
    customerId: string;
    priceId: string;
  }
}

namespace ICreateSubscriptionUseCase {
  export type Response = Promise<StripeResponse>;
}

namespace ICreateSubscriptionUseCase {
  export type Implementation = {
    execute: (params: ICreateSubscriptionUseCase.Params)
      => ICreateSubscriptionUseCase.Response;
  }
}

export { ICreateSubscriptionUseCase };