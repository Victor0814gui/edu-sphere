import Stripe from "stripe";


type StripeType = Stripe.Response<Stripe.Subscription>;

declare namespace IInvoicePaymentSucceededUseCase { }

namespace IInvoicePaymentSucceededUseCase {
  export type Params = Stripe.Event;
}

namespace IInvoicePaymentSucceededUseCase {
  export type Response = Promise<StripeType | undefined>;
}

namespace IInvoicePaymentSucceededUseCase {
  export type Implementation = {
    execute: (params: IInvoicePaymentSucceededUseCase.Params)
      => IInvoicePaymentSucceededUseCase.Response;
  }
}


export { IInvoicePaymentSucceededUseCase };