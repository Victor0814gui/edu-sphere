import { Product } from "@/src/shared/application/entities/product";
import { Customer } from "@/src/shared/application/entities/user";







export namespace IPurchaseProductToCustomerRepository {
  export namespace FindProduct {
    export type Params = {
      productId: string;
    }

    export type Response = Promise<Product | null>;
  }

  export namespace FindCustomer {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<Customer | null>;
  }

  export namespace Purchase {
    export type Params = {
      productId: string;
      customerId: string;
    }

    export type Response = Promise<any>;
  }


  export type Implementation = {
    findProduct: (props: IPurchaseProductToCustomerRepository.FindProduct.Params)
      => IPurchaseProductToCustomerRepository.FindProduct.Response;
    findCustomer: (props: IPurchaseProductToCustomerRepository.FindCustomer.Params)
      => IPurchaseProductToCustomerRepository.FindCustomer.Response;
    purchase: (props: IPurchaseProductToCustomerRepository.Purchase.Params)
      => IPurchaseProductToCustomerRepository.Purchase.Response;
  }
}