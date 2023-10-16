import { stripe } from "@/src/shared/infra/services/stripe";
import { IUpdateSubscriptionUseCase } from "../interfaces/i-update-subscription-use-case";




export class UpdateSubscriptionUseCase
  implements IUpdateSubscriptionUseCase.Implementation {
  public async execute(params: IUpdateSubscriptionUseCase.Params):
    IUpdateSubscriptionUseCase.Response {

    const subscription = await stripe.subscriptions.retrieve(
      params.subscriptionId
    );

    const updatedSubscription = await stripe.subscriptions.update(
      params.subscriptionId,
      {
        cancel_at_period_end: false,
        items: [
          {
            id: subscription.items.data[0].id,
            price: process.env[params.newPriceId],
          },
        ],
      }
    );

    return updatedSubscription
  }
};