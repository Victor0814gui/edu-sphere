import { stripe } from "@/src/shared/infra/services/stripe";
import { IInvoicePaymentSucceededUseCase } from "../interfaces/i-invoice-payment-succeeded-use-case";


export class InvoicePaymentSucceededUseCase
  implements IInvoicePaymentSucceededUseCase.Implementation {

  public async execute(params: IInvoicePaymentSucceededUseCase.Params):
    IInvoicePaymentSucceededUseCase.Response {

    const dataObject = params.data.object as any;

    if (dataObject['billing_reason'] == 'subscription_create') {
      // The subscription automatically activates after successful payment
      // Set the payment method used to pay the first invoice
      // as the default payment method for that subscription
      const subscription_id = dataObject['subscription']
      const payment_intent_id = dataObject['payment_intent']

      // Retrieve the payment intent used to pay the subscription
      const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);

      // if(!payment_intent.payment_method){
      //   throw new LessonBusinessException("")
      // }

      const paymentMethod = payment_intent.payment_method as string | undefined;

      const subscription = await stripe.subscriptions.update(
        subscription_id,
        {
          default_payment_method: paymentMethod,
        },
      );

      return subscription
    };
  }
}