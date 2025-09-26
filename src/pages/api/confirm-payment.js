import stripe from '@/libs/stripe';
import connectToDatabase from '@/libs/mongodb';
import Membership from '@/models/Membership';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { paymentIntentId } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({ message: 'Payment intent ID is required' });
    }

    // Retrieve the payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (!paymentIntent) {
      return res.status(404).json({ message: 'Payment intent not found' });
    }

    // Check if membership already exists for this payment intent
    const membership = await Membership.findOne({
      stripePaymentIntentId: paymentIntentId
    });

    // If payment succeeded and membership exists, return success
    if (paymentIntent.status === 'succeeded' && membership) {
      return res.status(200).json({
        success: true,
        message: 'Payment confirmed successfully',
        paymentStatus: paymentIntent.status,
        membershipId: membership._id,
      });
    }

    // If payment succeeded but no membership exists, this means webhook hasn't processed yet
    if (paymentIntent.status === 'succeeded' && !membership) {
      return res.status(202).json({
        success: true,
        message: 'Payment successful, processing membership application...',
        paymentStatus: paymentIntent.status,
        note: 'Membership record is being created. Please check back in a moment.'
      });
    }

    // If payment failed or canceled
    if (paymentIntent.status === 'payment_failed' || paymentIntent.status === 'canceled') {
      return res.status(400).json({
        success: false,
        message: 'Payment was not successful',
        paymentStatus: paymentIntent.status,
      });
    }

    // If payment is still processing
    return res.status(202).json({
      success: false,
      message: 'Payment is still processing',
      paymentStatus: paymentIntent.status,
    });

  } catch (error) {
    console.error('Error confirming payment:', error);
    
    // Handle specific Stripe errors
    if (error.type === 'StripeInvalidRequestError') {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid payment intent ID' 
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
}