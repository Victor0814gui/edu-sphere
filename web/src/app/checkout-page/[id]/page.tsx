"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../../../components/payment-form";

import styles from "./styles.module.css";
import { Ticket } from "@src/components/ticket";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY as string
);

export default function CheckoutPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    return (
      <div className={styles.container}>
        <h1>id doest not exits</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: params.id,
        }}
      >
        <PaymentForm />
      </Elements>
    </div>
  );
}
