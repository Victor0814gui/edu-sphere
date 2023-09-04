import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountGateway } from "./contracts/i-subscription-customer-accounts-gateway";







export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountGateway.Implementation {

  public async create(props: ISubscriptionCustomerAccountGateway.Create.Params):
    ISubscriptionCustomerAccountGateway.Create.Response {

    const stripeGatewayCreateProductResponse = await stripe.products.create({
      name: 'Starter Subscription',
      description: '$12/Month subscription',
    })

    const stripeGatewayCreatePriceProductResponse = stripe.prices.create({
      unit_amount: 1200,
      currency: 'usd',
      recurring: {
        interval: 'month',
      },
      product: stripeGatewayCreateProductResponse.id,
    });

    return {
      code: 200,
      url: "akjsdklfjçaksjdfkjasdf"
    };
  }

  public async findById(props: ISubscriptionCustomerAccountGateway.FindById.Params):
    ISubscriptionCustomerAccountGateway.FindById.Response {

    const response = {} as ISubscriptionCustomerAccountGateway.FindById.Response

    return response;
  }
}