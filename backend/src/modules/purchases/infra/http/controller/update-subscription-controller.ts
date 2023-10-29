import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSubscriptionUseCase } from "../../../use-cases/update-subscription-use-case";


type UpdateSubscriptionControllerParams = {
  subscriptionId: string;
  newPriceId: string;
}

export class UpdateSubscriptionController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const params = request.body as UpdateSubscriptionControllerParams;

    const updateSubscriptionUseCase = container.resolve(UpdateSubscriptionUseCase)

    const updateSubscriptionUseCaseResponse =
      await updateSubscriptionUseCase.execute(params)


    return response.json(updateSubscriptionUseCaseResponse);
  }
};