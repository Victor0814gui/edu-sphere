import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountGateway } from "./contracts/i-subscription-customer-accounts-gateway";
import CustomerBusinessException from "../exceptions/business-exception";







export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountGateway.Implementation {

  public async create(props: ISubscriptionCustomerAccountGateway.Create.Params):
    ISubscriptionCustomerAccountGateway.Create.Response {

    const stripeGatewayCreateProductResponse = await stripe.products.create({
      name: props.name,
      description: props.description,
    });

    const stripeGatewayCreatePriceProductResponse = await stripe.prices.create({
      unit_amount: props.price,
      currency: 'usd',
      recurring: {
        interval: props.recurrence,
      },
      product: stripeGatewayCreateProductResponse.id,
    });

    stripeGatewayCreatePriceProductResponse.id

    if (!stripeGatewayCreatePriceProductResponse.created) {
      throw new CustomerBusinessException("Product not created", 500);
    }

    return {
      code: 200,
      url: stripeGatewayCreatePriceProductResponse.id
    };
  }

  public async findById(props: ISubscriptionCustomerAccountGateway.FindById.Params):
    ISubscriptionCustomerAccountGateway.FindById.Response {

    const response = {} as ISubscriptionCustomerAccountGateway.FindById.Response

    return response;
  }
}