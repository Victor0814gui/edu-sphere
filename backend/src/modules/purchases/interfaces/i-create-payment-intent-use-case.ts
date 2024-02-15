import { PaymentIntent } from "@/src/shared/application/entities/payment-intent"



declare namespace ICreatePaymentIntentUseCase{}

namespace ICreatePaymentIntentUseCase{
  export type Params = {
    amount: number;
  }
}

namespace ICreatePaymentIntentUseCase{
  export type Response = Promise<PaymentIntent>
}


namespace ICreatePaymentIntentUseCase{
  export type Implementation = {
    execute: (params: ICreatePaymentIntentUseCase.Params) 
    =>  ICreatePaymentIntentUseCase.Response
  }
}

export {ICreatePaymentIntentUseCase};