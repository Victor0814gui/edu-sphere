import { ProductStatus } from "@/src/shared/application/entities/enums/i-product-status";
import { Product } from "../infra/entities/product";




enum ProductType {
  Recurrent = "recurrent",
}


export namespace ICreateProductUseCase {
  export type Params = {
    description: string;
    name: string;
    status: ProductStatus;
    price: number;
  }

  export type Response = Promise<Product>

  export type Implementation = {
    execute: (props: ICreateProductUseCase.Params) => ICreateProductUseCase.Response
  }
}