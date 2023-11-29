import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountGateway } from "./contracts/i-subscription-customer-accounts-gateway";
import { PurchaseBusinessException } from "../exceptions/business-exception";



export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountGateway.Implementation {

  public async create(props: ISubscriptionCustomerAccountGateway.Create.Params):
    ISubscriptionCustomerAccountGateway.Create.Response {



    if (!stripeGatewayCreatePriceProductResponse.created) {
      throw new PurchaseBusinessException("Product not created", 500);
    }

    return null

  }

  public async purchase(params: ISubscriptionCustomerAccountGateway.Purchase.Params):
    ISubscriptionCustomerAccountGateway.Purchase.Response {

    const subscription = await stripe.subscriptions.create({
      customer: 'cus_P4DrLfw9Bt1ynX',
      items: [
        { price: params.productId },
      ],
    });


    const subscriptionDTO = {
      currency: subscription.currency,
      description: subscription.description,
      recurrence: 'month',
      id: subscription.id,
    }

    return subscriptionDTO;
  }

  public async findById(props: ISubscriptionCustomerAccountGateway.FindById.Params):
    ISubscriptionCustomerAccountGateway.FindById.Response {

    const subscription = await stripe.subscriptions.search({
      query: `active:\'true\' AND metadata[\'price_id\']:\'${props.productId}\'`,
      limit: 1,
    });

    console.log({ subscription });

    const response = {} as ISubscriptionCustomerAccountGateway.FindById.Response;
    return response;
  }
}