import { stripe } from "@/src/shared/infra/services/stripe";
import Stripe from "stripe";



declare namespace ICancelSubscriptionUseCase { };
type StripeResponse = Stripe.Response<Stripe.Subscription>;

namespace ICancelSubscriptionUseCase {
  export type Params = {
    subscriptionId: string;
  }
}

namespace ICancelSubscriptionUseCase {
  export type Response = Promise<StripeResponse>;
}

namespace ICancelSubscriptionUseCase {
  export type Implementation = {
    execute: (params: ICancelSubscriptionUseCase.Params)
      => ICancelSubscriptionUseCase.Response;
  }
}

export { ICancelSubscriptionUseCase };