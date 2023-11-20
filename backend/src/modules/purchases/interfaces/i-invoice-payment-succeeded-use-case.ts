import { Transaction } from "@/src/shared/application/entities/transaction";
import Stripe from "stripe";



declare namespace IInvoicePaymentSucceededUseCase { }

namespace IInvoicePaymentSucceededUseCase {
  export type Params = {
    userId: string;
    paymentIntent?: string | null
    subscriptionId?: string | null
    amount: number;
    currency: string
  };
}

namespace IInvoicePaymentSucceededUseCase {
  export type Response = Promise<Transaction | null>;
}

namespace IInvoicePaymentSucceededUseCase {
  export type Implementation = {
    execute: (params: IInvoicePaymentSucceededUseCase.Params)
      => IInvoicePaymentSucceededUseCase.Response;
  }
}

export { IInvoicePaymentSucceededUseCase };