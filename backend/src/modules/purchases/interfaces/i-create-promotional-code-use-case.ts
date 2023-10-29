import Stripe from "stripe"



declare namespace ICreatePromotionalCodeUseCase { }
type StripeResponse = Stripe.Response<Stripe.PromotionCode>

namespace ICreatePromotionalCodeUseCase {
  export type Params = {
  }
}

namespace ICreatePromotionalCodeUseCase {
  export type Response = Promise<StripeResponse>;
}

namespace ICreatePromotionalCodeUseCase {
  export type Implementation = {
    execute: (params: ICreatePromotionalCodeUseCase.Params)
      => ICreatePromotionalCodeUseCase.Response
  }
}

export { ICreatePromotionalCodeUseCase };