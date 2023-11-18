import { Product } from "@/src/shared/application/entities/product";






declare namespace IPurchaseProductToCustomerUseCase { }
namespace IPurchaseProductToCustomerUseCase {
  export type Params = {
    productId: string;
    customerId: string;
  }
}

namespace IPurchaseProductToCustomerUseCase {
  export type Response = Promise<Product>;
}

namespace IPurchaseProductToCustomerUseCase {
  export type Implementation = {
    execute: (props: IPurchaseProductToCustomerUseCase.Params)
      => IPurchaseProductToCustomerUseCase.Response;
  }
}

export { IPurchaseProductToCustomerUseCase };