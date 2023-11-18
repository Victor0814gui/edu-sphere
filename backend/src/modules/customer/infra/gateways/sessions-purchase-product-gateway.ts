import { stripe } from "@/src/shared/infra/services/stripe";
import { ISessionPurchaseProductGateway } from "./contracts/i-sessions-purchase-product-gateway";



export class SessionPurchaseProductGateway
  implements ISessionPurchaseProductGateway.Implementation {

  async execute(props: ISessionPurchaseProductGateway.Params):
    ISessionPurchaseProductGateway.Response {
    const customerId = props.customerId;
    const priceId = props.priceId;

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{
        price: priceId,
      }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    const response = {
      subscriptionId: subscription.id,
      trialStart: subscription.trial_start,
      trialEnd: subscription.trial_end,
    }

    return response;
  }
}