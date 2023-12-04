"use client"
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

import styles from './styles.module.css';

export const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5000/success",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };


  return (
    <form className={styles.container}>
      <PaymentElement
        options={{
          layout: {
            type: "accordion",
          },
        }}
        className={styles.form}
      />
      <button onClick={handleSubmit} className={styles.button}>COMPRAR</button>
    </form>
  );
};

// `http://localhost:5000/success?
// payment_intent=pi_3OGqnTGx9zfdiazs0veL54gh
// &payment_intent_client_secret=pi_3OGqnTGx9zfdiazs0veL54gh_secret_xZW0CiNo9W3VfqfP58mLJSokX
// &redirect_status=succeeded
// `