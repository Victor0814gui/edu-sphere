import { container } from "tsyringe";
import { Request, Response } from "express";
import { PurchaseSubscriptionUseCase } from "@purchases/use-cases/purchase-subscription-use-case";

type PurchaseSubscriptionControllerParams = {
  customerId: string;
  priceId: string;
}

export class PurchaseSubscriptionController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const body = request.body as PurchaseSubscriptionControllerParams;
    const purchaseSubscriptionUseCase = container.resolve(PurchaseSubscriptionUseCase)

    const purchaseSubscriptionUseCaseResponse =
      await purchaseSubscriptionUseCase.execute(body);

    return response.json(
      purchaseSubscriptionUseCaseResponse
    );
  }
}