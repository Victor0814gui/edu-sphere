import { container } from "tsyringe";
import { Request, Response } from "express";
import { SyncProductWithGatewayUseCase } from "@purchases/use-cases/sync-product-with-gateway-use-case";


type SyncProductWithGatewayControllerParams = {
  priceId: string
};

export class SyncProductWithGatewayController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const body = request.body as SyncProductWithGatewayControllerParams;

    const syncProductWithGatewayUseCase = container.resolve(SyncProductWithGatewayUseCase)

    const syncProductWithGatewayUseCaseResponse =
      await syncProductWithGatewayUseCase.execute(body)

    return response.json(syncProductWithGatewayUseCaseResponse);
  }
}