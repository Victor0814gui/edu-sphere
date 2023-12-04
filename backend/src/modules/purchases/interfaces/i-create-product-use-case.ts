import { ProductStatus } from "@/src/shared/application/entities/enums/i-product-status";
import { Product } from "../infra/entities/product";


declare namespace ICreateProductUseCase {
  export type Params = {
    thumbnailUrl: string;
    description: string;
    name: string;
    status: ProductStatus;
    amount: number;
  }
}

namespace ICreateProductUseCase {
  export type Response = Promise<Product>
}

namespace ICreateProductUseCase {
  export type Implementation = {
    execute: (props: ICreateProductUseCase.Params)
      => ICreateProductUseCase.Response
  }
}

export { ICreateProductUseCase };