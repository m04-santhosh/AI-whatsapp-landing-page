import React, { useState } from 'react';

const CheckoutButton = ({ amount = 50000, currency = 'INR', className = '', children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Create Order
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency })
      });
      
      const orderData = await orderRes.json();
      
      if (!orderRes.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // 2. Initialize Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use Vite env prefix
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'WhatsAuto.ai',
        description: 'Pro Plan Subscription',
        order_id: orderData.id,
        handler: async function (response) {
          // 3. Verify Payment Signature
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              })
            });
            
            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok && verifyData.success) {
              alert('Payment successful!');
            } else {
              alert('Payment verification failed!');
            }
          } catch (err) {
            console.error('Verify error:', err);
            alert('Error verifying payment');
          }
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#10b981' // emerald-500
        }
      };

      const rzp1 = new window.Razorpay(options);
      
      rzp1.on('payment.failed', function (response){
        console.error(response.error);
        alert('Payment failed: ' + response.error.description);
      });

      rzp1.open();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button 
        onClick={handlePayment} 
        disabled={loading}
        className={`${loading ? 'opacity-50 cursor-not-allowed ' : ''}${className}`}
      >
        {loading ? 'Processing...' : (children || 'Complete Checkout')}
      </button>
      {error && <p className="text-red-500 mt-2 text-sm text-center">{error}</p>}
    </div>
  );
};

export default CheckoutButton;
