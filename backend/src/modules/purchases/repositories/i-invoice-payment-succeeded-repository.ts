import { Transaction } from "@/src/shared/application/entities/transaction";

declare namespace IInvoicePaymentSucceededRepository { }


namespace IInvoicePaymentSucceededRepository {
  export namespace Create {
    export type Params = Transaction;

    export type Response = Promise<Transaction>;
  }
}

namespace IInvoicePaymentSucceededRepository {
  export type Implementation = {
    create: (params: IInvoicePaymentSucceededRepository.Create.Params)
      => IInvoicePaymentSucceededRepository.Create.Response;
  }
}

export { IInvoicePaymentSucceededRepository };