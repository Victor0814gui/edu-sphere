import { Request, Response } from "express";
import { InvoicePaymentSucceededUseCase } from "../../../use-cases/invoice-payment-succeeded-use-case";
import { container } from "tsyringe";
import Stripe from "stripe";
import { stripe } from "@/src/shared/infra/services/stripe";






export class WebhookListenerStripeController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

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
      return response.json(400);
    }

    let serviceResponse;

    switch (event.type) {
      case 'invoice.payment_succeeded':
        serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'invoice.payment_failed':
        serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'invoice.finalized':
        serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'customer.subscription.deleted':
        serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      case 'customer.subscription.trial_will_end':
        serviceResponse = await invoicePaymentSucceededUseCase.execute(event);
        break;
      default:
      // Unexpected event type
    }

    return response.json(serviceResponse);
  }
}