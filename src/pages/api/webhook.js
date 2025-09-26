import stripe, { getWebhookSecret } from '@/libs/stripe';
import connectToDatabase from '@/libs/mongodb';
import Membership from '@/models/Membership';

// Disable body parsing for webhook
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to get raw body
const getRawBody = async (req) => {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(data);
    });
    req.on('error', err => {
      reject(err);
    });
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const rawBody = await getRawBody(req);
    const signature = req.headers['stripe-signature'];
    const webhookSecret = getWebhookSecret();

    if (!webhookSecret) {
      console.error('Webhook secret not configured');
      return res.status(500).json({ message: 'Webhook secret not configured' });
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).json({ message: 'Webhook signature verification failed' });
    }

    console.log('Received webhook event:', event.type);

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object);
        break;
      case 'payment_intent.canceled':
        await handlePaymentIntentCanceled(event.data.object);
        break;
      case 'customer.created':
        console.log('Customer created:', event.data.object.id);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ message: 'Webhook error' });
  }
}

// Handle successful payment - Update existing membership or log if not found
async function handlePaymentIntentSucceeded(paymentIntent) {
  try {
    // Check if membership already exists
    const existingMembership = await Membership.findOne({
      stripePaymentIntentId: paymentIntent.id
    });

    if (existingMembership) {
      // Update existing membership to ensure it's marked as succeeded
      await Membership.findByIdAndUpdate(
        existingMembership._id,
        {
          paymentStatus: 'succeeded',
          applicationStatus: 'submitted',
        },
        { new: true }
      );
      console.log(`Membership updated via webhook for payment: ${paymentIntent.id}`);
    } else {
      // Log that no membership was found (it should have been created by frontend)
      console.log(`No membership found for payment intent: ${paymentIntent.id} - this is expected if frontend created it first`);
    }
    
    // Here you can add additional logic like:
    // - Send confirmation email
    // - Update user account status
    // - Trigger notifications

  } catch (error) {
    console.error('Error handling payment success:', error);
  }
}

// Handle failed payment - just log (no membership record created)
async function handlePaymentIntentFailed(paymentIntent) {
  try {
    console.log(`Payment failed for payment intent: ${paymentIntent.id}`);
    
    // Optional: You could parse formData and send failure notification
    if (paymentIntent.metadata.formData) {
      try {
        const formData = JSON.parse(paymentIntent.metadata.formData);
        console.log(`Payment failed for user: ${formData.email}`);
        
        // Here you can add logic like:
        // - Send payment failure email
        // - Log failed attempt for analytics
      } catch (parseError) {
        console.error('Failed to parse formData for failed payment:', parseError);
      }
    }
    
  } catch (error) {
    console.error('Error handling payment failure:', error);
  }
}

// Handle canceled payment - just log (no membership record created)
async function handlePaymentIntentCanceled(paymentIntent) {
  try {
    console.log(`Payment canceled for payment intent: ${paymentIntent.id}`);
    
    // Optional: You could parse formData and send cancellation notification
    if (paymentIntent.metadata.formData) {
      try {
        const formData = JSON.parse(paymentIntent.metadata.formData);
        console.log(`Payment canceled for user: ${formData.email}`);
      } catch (parseError) {
        console.error('Failed to parse formData for canceled payment:', parseError);
      }
    }
    
  } catch (error) {
    console.error('Error handling payment cancellation:', error);
  }
}