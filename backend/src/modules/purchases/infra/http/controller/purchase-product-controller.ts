import { container } from "tsyringe";
import { Request, Response } from "express";
import { PurchaseProductToCustomerUseCase } from "@purchases/use-cases/purchase-product-to-customer-use-case";

type PurchaseProductControllerParams = {
  productId: string;
  customerId: string;
}

export class PurchaseProductController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const body = request.body as PurchaseProductControllerParams;
    const purchaseProductUseCase = container.resolve(PurchaseProductToCustomerUseCase)

    const purchaseProductUseCaseResponse =
      await purchaseProductUseCase.execute(body);

    return response.json(
      purchaseProductUseCaseResponse
    );
  }
}