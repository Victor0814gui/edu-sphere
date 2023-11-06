import { stripe } from "@/src/shared/infra/services/stripe";
import { IListProductsUseCase } from "../interfaces/i-list-products-use-cases";





export class ListProductsUseCase
  implements IListProductsUseCase.Implementation {
  public async execute(params: IListProductsUseCase.Params):
    IListProductsUseCase.Response {

    const listProductsResponse = await stripe.products.list({
      limit: 3,
    });

    return listProductsResponse;
  }
}