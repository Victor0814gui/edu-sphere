import { Request, Response } from "express";
import { container } from "tsyringe";
import { CancelSubscriptionUseCase } from "../../../use-cases/cancel-subscription-use-case";


type CancelSubscriptionControllerParams = {
  subscriptionId: string;
}

export class CancelSubscriptionController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const params = request.body as CancelSubscriptionControllerParams;
    const cancelSubscriptionUseCase = container.resolve(CancelSubscriptionUseCase);

    const cancelSubscriptionUseCaseResponse =
      await cancelSubscriptionUseCase.execute(params);

    return response.json(cancelSubscriptionUseCaseResponse);;
  }
}