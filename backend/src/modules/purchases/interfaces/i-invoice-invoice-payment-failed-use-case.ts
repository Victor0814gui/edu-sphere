import Stripe from "stripe";





declare namespace IInvoicePaymentFailedUseCase { };

namespace IInvoicePaymentFailedUseCase {
  export type Params = Stripe.Event;
}

namespace IInvoicePaymentFailedUseCase {
  export type Response = Promise<void>;
}

namespace IInvoicePaymentFailedUseCase {
  export type Implementation = {
    execute: (params: IInvoicePaymentFailedUseCase.Params)
      => IInvoicePaymentFailedUseCase.Response
  }
}

export { IInvoicePaymentFailedUseCase };
