import { Product } from "@/src/aplication/entities/product";







export namespace ICreateProductUseCase {
  export type Params = {
    userId: string;
    permiissions: string[];
    name: string;
    type: string;
    status: string;
    startDate: Date;
    endDate: Date;
    paymentMethod: string;
    price: number;
    billingCycle: string;
    nextBilling: Date;
    autoRenew: boolean;
    paymentDetails: string;
  }
  export type Response = Promise<Product>

  export type Implementation = {
    execute: (props: ICreateProductUseCase.Params) => ICreateProductUseCase.Response
  }
}