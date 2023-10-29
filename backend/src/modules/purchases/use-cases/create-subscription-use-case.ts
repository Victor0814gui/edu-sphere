import { stripe } from "@/src/shared/infra/services/stripe";
import { ICreateSubscriptionUseCase } from "../interfaces/i-create-subscription-use-case";



export class CreateSubscriptionUseCase
  implements ICreateSubscriptionUseCase.Implementation {
  public async execute(params: ICreateSubscriptionUseCase.Params):
    ICreateSubscriptionUseCase.Response {
    await stripe.paymentMethods.attach(params.paymentMethodId, {
      customer: params.customerId,
    });

    await stripe.customers.update(
      params.customerId,
      {
        invoice_settings: {
          default_payment_method: params.paymentMethodId,
        },
      }
    );

    const subscription = await stripe.subscriptions.create({
      customer: params.customerId,
      items: [{ price: process.env[params.priceId] }],
      expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
    });

    return subscription;
  }
}