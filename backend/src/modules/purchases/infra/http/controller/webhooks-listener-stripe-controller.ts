import Stripe from "stripe";
// import { buffer } from 'micro';
import { container } from "tsyringe";
import { Request, Response } from "express";
import { stripe } from "@/src/shared/infra/services/stripe";
import { InvoicePaymentSucceededUseCase } from "@purchases/use-cases/invoice-payment-succeeded-use-case";
import { Readable } from 'stream';

type SignatureProps = {
  t: string,
  v1: string,
  v0: string;
}
 

function makeHMACContent(payload, details) {
  return `${details.timestamp}.${payload}`;
}

async function buffer(readable: Readable): Promise<Buffer> {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === 'string' ? Buffer.from(chunk, 'utf-8') : chunk
    );
  }

  return Buffer.concat(chunks);
}

export class WebhookListenerStripeController {
  public async handler(request: Request, response: Response): Promise<any> {
    let event: Stripe.Event;
    const signature = request.headers['stripe-signature'];
    console.log({signature})

   console.log(JSON.parse(request.body))
    try {

      const payload  = await buffer(request.body)
      event = stripe.webhooks.constructEvent(
        payload,
        signature!,
        "sk_test_51NkVZaBPcqkomYlRTIAsfucmaXWDOpvDgSeWQfKBqAr5HY4o0XO1pFMTDDvUPfmNA3ax991Xs6JtyY5bDlPSb4Qd00w2I5xbEM",
        60 * 5
      );
      console.log(event)

      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          console.log('PaymentIntent was successful!');
          break;
        case 'payment_method.attached':
          const paymentMethod = event.data.object;
          console.log('PaymentMethod was attached to a Customer!');
          break;
        // ... handle other event types
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
      response.sendStatus(200);

    }
    catch (err) {
      console.error(`⚠ Error message: ${err.message}`)
      return response.sendStatus(400);
    }  
    return response.sendStatus(200);
  }
}