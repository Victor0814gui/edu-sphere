import { container } from "tsyringe"
import { Request, Response } from "express";
import { ListSubscriptionsUseCase } from "@purchases/use-cases/list-subscriptions-use-case";


export class ListSubscriptionController {
  public async handler(request: Request, response: Response): Promise<Response> {

    const listSubscriptionUseCase = container.resolve(ListSubscriptionsUseCase);

    const listSubscriptionUseCaseResponse =
      await listSubscriptionUseCase.execute()

    return response.json(listSubscriptionUseCaseResponse);
  }
}