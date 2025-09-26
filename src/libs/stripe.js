import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

let stripe;

if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY environment variable is not defined');
  // Create a mock stripe object for development
  if (process.env.NODE_ENV === 'development') {
    console.warn('Running in development mode without Stripe configuration');
    stripe = {
      customers: { list: async () => ({ data: [] }), create: async () => ({ id: 'mock_customer_id' }) },
      paymentIntents: { create: async () => ({ id: 'mock_payment_intent', client_secret: 'mock_secret' }), retrieve: async () => ({ status: 'succeeded' }) },
      webhooks: { constructEvent: async () => ({ type: 'mock_event' }) }
    };
  } else {
    throw new Error('Please define the STRIPE_SECRET_KEY environment variable inside .env.local');
  }
} else {
  // Initialize Stripe with the secret key
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2023-10-16',
  });
}

// Helper function to determine if we're in test mode
export const isTestMode = () => {
  return process.env.STRIPE_MODE === 'test' || process.env.NODE_ENV === 'development';
};

// Helper function to get the appropriate webhook endpoint secret
export const getWebhookSecret = () => {
  return isTestMode() 
    ? process.env.STRIPE_WEBHOOK_SECRET_TEST 
    : process.env.STRIPE_WEBHOOK_SECRET_LIVE;
};

// Helper function to format amount for Stripe (convert to cents)
export const formatAmountForStripe = (amount) => {
  return Math.round(amount * 100);
};

// Helper function to format amount from Stripe (convert from cents)
export const formatAmountFromStripe = (amount) => {
  return amount / 100;
};

export default stripe;