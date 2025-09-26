import stripe from '@/libs/stripe';
import connectToDatabase from '@/libs/mongodb';
import Membership from '@/models/Membership';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to database first
    await connectToDatabase();
    console.log('Database connected successfully');

    const { paymentIntentId, formData } = req.body;
    console.log('Received data:', { paymentIntentId, formData });

    if (!paymentIntentId || !formData) {
      return res.status(400).json({ 
        message: 'Payment intent ID and form data are required' 
      });
    }

    // Verify payment intent status with Stripe
    console.log('Retrieving payment intent from Stripe...');
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    console.log('Payment intent status:', paymentIntent.status);

    if (!paymentIntent) {
      return res.status(404).json({ message: 'Payment intent not found' });
    }

    // Only proceed if payment was successful
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ 
        message: 'Payment was not successful',
        paymentStatus: paymentIntent.status
      });
    }

    // Check if membership already exists for this payment intent (prevent duplicates)
    const existingMembership = await Membership.findOne({
      stripePaymentIntentId: paymentIntentId
    });

    if (existingMembership) {
      return res.status(200).json({
        success: true,
        message: 'Membership already exists for this payment',
        membership: existingMembership,
        membershipId: existingMembership._id
      });
    }

    // Validate form data
    const { name, email, phone, membershipType, investedAmount, referralCode } = formData;
    console.log('Form data fields:', { name, email, phone, membershipType, investedAmount, referralCode });

    if (!name || !email || !phone || !membershipType || !investedAmount) {
      return res.status(400).json({ 
        message: 'Missing required form data fields',
        missingFields: {
          name: !name,
          email: !email,
          phone: !phone,
          membershipType: !membershipType,
          investedAmount: !investedAmount
        }
      });
    }

    // Validate that payment amount matches form data
    const paidAmount = paymentIntent.amount / 100; // Convert cents to dollars
    const formAmount = parseFloat(investedAmount);
    console.log('Amount validation:', { paidAmount, formAmount });
    
    if (Math.abs(paidAmount - formAmount) > 0.01) { // Allow for small floating point differences
      return res.status(400).json({ 
        message: 'Payment amount does not match form data',
        paidAmount,
        formAmount
      });
    }

    // Create membership record
    console.log('Creating membership record...');
    const membershipData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      membershipType: membershipType,
      investedAmount: formAmount,
      referralCode: referralCode ? referralCode.trim() : '',
      stripePaymentIntentId: paymentIntentId,
      stripeCustomerId: paymentIntent.customer,
      paymentStatus: 'succeeded',
      applicationStatus: 'submitted',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('Membership data to save:', membershipData);

    const membership = new Membership(membershipData);
    
    // Save with error handling
    const savedMembership = await membership.save();
    console.log(`Membership created successfully:`, savedMembership);

    res.status(200).json({
      success: true,
      message: 'Membership application stored successfully',
      membership: savedMembership,
      membershipId: savedMembership._id
    });

  } catch (error) {
    console.error('Error storing membership:', error);
    console.error('Error stack:', error.stack);
    
    // Handle specific error types
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error',
        details: error.errors
      });
    }
    
    if (error.name === 'MongoError' || error.name === 'MongoServerError') {
      return res.status(500).json({ 
        success: false, 
        message: 'Database error',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Database operation failed'
      });
    }
    
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