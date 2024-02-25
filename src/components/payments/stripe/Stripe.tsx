'use client';

import { Elements, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { useEffect, useState } from 'react';

// Call outside of component so it does not load again on rerender
const stripePromise = loadStripe(
  'pk_test_51MioEJJwHQ2aHYX9tfpoaYateQJJvYO759Of81HSSC8PJ5qIX84j8CZs40kxHoCbUK1l0xJaRcm7C8K7JAfkj3Kh00VJPhOsA9',
);

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/checkout_sessions', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [clientSecret]);

  console.log('CLIENT_SECRET', clientSecret);

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <StripeCheckoutForm />
    </Elements>
  );
}
