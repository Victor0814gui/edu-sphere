import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountsGateway } from "./contracts/i-subscription-customer-accounts-gateway";







export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountsGateway.Implementation {
  public async execute(props: ISubscriptionCustomerAccountsGateway.Params):
    Promise<ISubscriptionCustomerAccountsGateway.Response>{

    const session = await stripe.checkout.sessions.create({
      line_items: [...props],
      mode: 'payment',
      success_url: process.env.DOMAIN_SUBSCRIPTION_URL as string,
      cancel_url: process.env.DOMAIN_SUBSCRIPTION_URL as string,
    });

    const response = {
      code: 303,
      url: session.url
    };

    return response;
  }
}