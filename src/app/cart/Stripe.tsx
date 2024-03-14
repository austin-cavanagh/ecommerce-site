// STRIPE DOCS - CUSTOM PAYMENT FLOW

'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import StripeCheckoutForm from './StripeCheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

// const stripePromise = loadStripe(
//   process.env.STRIPE_PUBLISHABLE_KEY,
// );

const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51MioEJJwHQ2aHYX9tfpoaYateQJJvYO759Of81HSSC8PJ5qIX84j8CZs40kxHoCbUK1l0xJaRcm7C8K7JAfkj3Kh00VJPhOsA9';
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt', amount: 1000 }] }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
}
