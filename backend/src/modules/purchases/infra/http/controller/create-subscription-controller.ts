import { container } from "tsyringe";
import { CreateSubscriptionUseCase } from "../../../use-cases/create-subscription-use-case";
import { Request, Response } from "express";

type CreateSubscriptionControllerParams = {
  paymentMethodId: string;
  customerId: string;
  priceId: string;
}

export class CreateSubscriptionController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const params = request.body as CreateSubscriptionControllerParams;
    const createSubscriptionUseCase = container.resolve(CreateSubscriptionUseCase)

    const createSubscriptionUseCaseResponse =
      await createSubscriptionUseCase.execute(params);


    return response.json(
      createSubscriptionUseCaseResponse
    );
  }
}