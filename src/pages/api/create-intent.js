import stripe, { formatAmountForStripe, isTestMode } from '@/libs/stripe';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {

    const { amount, name, email, phone, membershipType, referralCode } = req.body;

    // Validate required fields
    if (!amount || !name || !email || !phone || !membershipType) {
      return res.status(400).json({ 
        message: 'Missing required fields: amount, name, email, phone, membershipType' 
      });
    }

    // Validate amount based on membership type
    const minAmounts = {
      premium: 1000,
      vip: 2500
    };

    if (amount < minAmounts[membershipType]) {
      return res.status(400).json({ 
        message: `Amount must be at least $${minAmounts[membershipType]} for ${membershipType} membership` 
      });
    }

    // Create or retrieve Stripe customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: email.toLowerCase(),
      limit: 1
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        name: name,
        email: email.toLowerCase(),
        phone: phone,
        metadata: {
          membershipType: membershipType,
          referralCode: referralCode || '',
        }
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(amount),
      currency: 'usd',
      customer: customer.id,
      metadata: {
        membershipType: membershipType,
        referralCode: referralCode || '',
        isTestMode: isTestMode().toString(),
      },
      description: `${membershipType.charAt(0).toUpperCase() + membershipType.slice(1)} Membership Application - ${name}`,
    });

    console.log(`Payment intent created: ${paymentIntent.id} for ${email} (${isTestMode() ? 'TEST' : 'LIVE'} mode)`);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      customerId: customer.id,
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    
    // Handle specific Stripe errors
    if (error.type === 'StripeCardError') {
      return res.status(400).json({ message: error.message });
    }
    
    res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
}