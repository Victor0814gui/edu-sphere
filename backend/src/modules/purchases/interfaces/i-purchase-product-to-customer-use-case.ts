import { Transaction } from "@/src/shared/application/entities/transaction";



declare namespace IPurchaseProductToCustomerUseCase { }
namespace IPurchaseProductToCustomerUseCase {
  export type Params = {
    productId: string;
    customerId: string;
  }
}

namespace IPurchaseProductToCustomerUseCase {
  export type Response = Promise<Transaction>;
}

namespace IPurchaseProductToCustomerUseCase {
  export type Implementation = {
    execute: (props: IPurchaseProductToCustomerUseCase.Params)
      => IPurchaseProductToCustomerUseCase.Response;
  }
}

export { IPurchaseProductToCustomerUseCase };