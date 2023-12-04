import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountGateway } from "./contracts/i-subscription-customer-accounts-gateway";
import { PurchaseBusinessException } from "../exceptions/business-exception";
import Stripe from "stripe";



export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountGateway.Implementation {

  public async create(props: ISubscriptionCustomerAccountGateway.Create.Params):
    ISubscriptionCustomerAccountGateway.Create.Response {
    const response = {} as ISubscriptionCustomerAccountGateway.Create.Response;

    return response;
  }

  public async purchase(params: ISubscriptionCustomerAccountGateway.Purchase.Params):
    ISubscriptionCustomerAccountGateway.Purchase.Response {

    const customer = await stripe.customers.retrieve(
      params.customerId,
    );

    const subscription = await stripe.subscriptions.create({
      customer: params.customerId,
      items: [
        { price: params.subscriptionId },
      ],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    const transaction = subscription!.latest_invoice! as Stripe.Invoice
    const paymentIntent = transaction.payment_intent as Stripe.PaymentIntent

    if (!paymentIntent.client_secret) {
      throw new PurchaseBusinessException("Gateway error", 500);
    }

    const subscriptionDTO = {
      currency: subscription.currency,
      description: subscription.description,
      recurrence: 'month',
      id: subscription.id,
      transactionId: paymentIntent.client_secret,
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