import { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripePayment1 = ({ 
  formData, 
  clientSecret, 
  onPaymentSuccess, 
  onBack, 
  onError 
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'zipCode') {
      const updatedFormData = { ...formData, [name]: value };
      // Call parent component's update function if provided
      if (onError) {
        onError(null, updatedFormData);
      }
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'zipCode' && !value.trim()) {
      setErrors(prev => ({
        ...prev,
        zipCode: 'Zip code is required'
      }));
    }
  };

  const processPayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    // Validate zip code
    if (!formData.zipCode || !formData.zipCode.trim()) {
      setErrors(prev => ({
        ...prev,
        zipCode: 'Zip code is required'
      }));
      return;
    }

    setPaymentProcessing(true);
    
    try {
      const cardNumberElement = elements.getElement(CardNumberElement);

      // Confirm the payment with the card elements
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
              postal_code: formData.zipCode,
            },
          },
        },
      });

      if (error) {
        console.error('Payment failed:', error);
        if (onError) {
          onError('Payment failed: ' + error.message);
        }
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Payment successful - now store the membership data
        try {
          const membershipResponse = await fetch('/api/memberships', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              paymentIntentId: paymentIntent.id,
              formData: formData
            }),
          });

          const membershipData = await membershipResponse.json();

          if (!membershipResponse.ok) {
            throw new Error(membershipData.message || 'Failed to store membership data');
          }

          console.log('Membership stored successfully:', membershipData);

          // Optionally confirm payment with your backend (if you have additional confirmation logic)
          try {
            const confirmResponse = await fetch('/api/confirm-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                paymentIntentId: paymentIntent.id,
                membershipId: membershipData.membership?.id, // Include membership ID if available
              }),
            });

            const confirmData = await confirmResponse.json();
            
            if (!confirmData.success) {
              console.warn('Payment confirmation warning:', confirmData.message);
              // Don't throw error here as membership is already stored
            }
          } catch (confirmError) {
            console.warn('Payment confirmation failed:', confirmError);
            // Don't throw error here as membership is already stored
          }

          // Call success callback with membership data
          if (onPaymentSuccess) {
            onPaymentSuccess(membershipData.membership);
          }

        } catch (membershipError) {
          console.error('Error storing membership:', membershipError);
          if (onError) {
            onError('Payment successful but failed to store membership data. Please contact support.');
          }
        }
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      if (onError) {
        onError('Payment failed: ' + error.message);
      }
    } finally {
      setPaymentProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '14px',
        color: '#111827',
        fontFamily: 'system-ui, sans-serif',
        '::placeholder': {
          color: '#ADAEBC',
        },
      },
      invalid: {
        color: '#ef4444',
      },
    },
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-[24px] max-sm:text-[20px] pb-[20px] max-sm:pb-[16px] text-[#111827]">Payment Details</h2>
      
      {/* Application Summary */}
      <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
        <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
          Application Summary
        </label>
        <div className="border-[1px] border-[#D1D5DB] bg-white p-[10px] max-sm:p-[8px] rounded-xl">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[14px] max-sm:text-[12px] text-[#1F2937]">Name:</span>
              <span className="text-[14px] max-sm:text-[12px] font-semibold text-[#111827] text-right break-words max-w-[60%]">{formData.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] max-sm:text-[12px] text-[#1F2937]">Email:</span>
              <span className="text-[14px] max-sm:text-[12px] font-semibold text-[#111827] text-right break-words max-w-[60%]">{formData.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] max-sm:text-[12px] text-[#1F2937]">Membership:</span>
              <span className="text-[14px] max-sm:text-[12px] font-semibold text-[#111827] text-right break-words max-w-[60%] capitalize">{formData.membershipType}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-[16px] max-sm:text-[14px] text-[#1F2937] font-medium">Total Amount:</span>
              <span className="text-[16px] max-sm:text-[14px] font-bold text-[#111827]">${formData.investedAmount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
        <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
          Card Number
        </label>
        <div className="border-[1px] border-[#D1D5DB] bg-white p-[12px] max-sm:p-[10px] rounded-xl">
          <CardNumberElement options={cardElementOptions} />
        </div>
      </div>

      {/* Expiry Date and CVV */}
      <div className="flex gap-4 pb-[16px] max-sm:pb-[14px]">
        <div className="flex flex-col flex-1">
          <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Expiry Date
          </label>
          <div className="border-[1px] border-[#D1D5DB] bg-white p-[12px] max-sm:p-[10px] rounded-xl">
            <CardExpiryElement options={cardElementOptions} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            CVV
          </label>
          <div className="border-[1px] border-[#D1D5DB] bg-white p-[12px] max-sm:p-[10px] rounded-xl">
            <CardCvcElement options={cardElementOptions} />
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
        <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
          Billing Name
        </label>
        <input 
          className="border-[1px] border-[#D1D5DB] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl bg-gray-50"
          type="text" 
          value={formData.name}
          readOnly
          placeholder="Billing Name"
        />
      </div>

      <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
        <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
          Email Address
        </label>
        <input 
          className="border-[1px] border-[#D1D5DB] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl bg-gray-50"
          type="email" 
          value={formData.email}
          readOnly
          placeholder="Email Address"
        />
      </div>

      <div className="flex gap-4 pb-[16px] max-sm:pb-[14px]">
        <div className="flex flex-col flex-1">
          <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Phone Number
          </label>
          <input 
            className="border-[1px] border-[#D1D5DB] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl bg-gray-50"
            type="tel" 
            value={formData.phone}
            readOnly
            placeholder="Phone Number"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Zip Code
          </label>
          <input 
            className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl ${
              errors.zipCode ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            type="text" 
            name="zipCode"
            value={formData.zipCode || ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Zip Code"
          />
          {errors.zipCode && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.zipCode}</span>}
        </div>
      </div>

      {/* Payment Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-[4px]">
        <button 
          type="button"
          onClick={onBack}
          className="flex-1 pt-[12px] pb-[12px] max-sm:pt-[10px] max-sm:pb-[10px] text-[16px] max-sm:text-[14px] font-semibold text-[#111827] bg-gray-200 rounded-[8px] hover:bg-gray-300 transition-colors"
          disabled={paymentProcessing}
        >
          Back
        </button>
        <button 
          type="button"
          onClick={processPayment}
          className="flex-1 pt-[12px] pb-[12px] max-sm:pt-[10px] max-sm:pb-[10px] text-[16px] max-sm:text-[14px] font-semibold text-[#000000] bg-[#CA8A04] rounded-[8px] hover:bg-[#CA8A04]/90 transition-colors disabled:opacity-50"
          disabled={paymentProcessing || !stripe}
        >
          {paymentProcessing ? 'Processing...' : `Pay $${formData.investedAmount}`}
        </button>
      </div>
    </div>
  );
};

export default StripePayment1;