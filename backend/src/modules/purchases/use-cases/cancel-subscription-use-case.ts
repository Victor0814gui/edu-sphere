import { stripe } from "@/src/shared/infra/services/stripe";
import { ICancelSubscriptionUseCase } from "../interfaces/i-cancel-subscription-use-case";



export class CancelSubscriptionUseCase
  implements ICancelSubscriptionUseCase.Implementation {
  public async execute(params: ICancelSubscriptionUseCase.Params):
    ICancelSubscriptionUseCase.Response {

    const deletedSubscription = await stripe.subscriptions.del(
      params.subscriptionId
    );

    return deletedSubscription;
  }
}