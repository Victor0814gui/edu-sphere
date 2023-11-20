import Stripe from "stripe";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { stripe } from "@/src/shared/infra/services/stripe";
import { InvoicePaymentSucceededUseCase } from "@purchases/use-cases/invoice-payment-succeeded-use-case";



export class WebhookListenerStripeController {
  public async handler(request: Request, response: Response): Promise<void> {

    const invoicePaymentSucceededUseCase = container.resolve(InvoicePaymentSucceededUseCase)
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        request.header('Stripe-Signature')!,
        process.env.STRIPE_WEBHOOK_SECRET as string,
      );
    } catch (err) {
      console.log(err);
      console.log(`⚠️  Webhook signature verification failed.`);
      console.log(
        `⚠️  Check the env file and enter the correct webhook secret.`
      );
    }

    switch (event.type) {
      case 'invoice.payment_succeeded':
        console.log("invoice.payment_succeeded", event.payload.data)
        // serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'invoice.payment_failed':
        console.log("invoice.payment_failed", event.payload.data)
        // serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'invoice.finalized':
        console.log("invoice.finalized", event.payload.data)
        // serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'customer.subscription.deleted':
        console.log("customer.subscription.deleted", event.payload.data)
        // serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'customer.subscription.trial_will_end':
        console.log("customer.subscription.trial_will_end", event.payload.data)
        // serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      default:
      // Unexpected event type
    }

  }
}