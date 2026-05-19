import React, { useEffect, useRef } from 'react';

const RazorpayPaymentButton = ({ paymentButtonId }) => {
  const formRef = useRef(null);

  useEffect(() => {
    // Check if the script is already added to prevent duplicates (especially in React Strict Mode)
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', paymentButtonId);
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, [paymentButtonId]);

  return (
    <div className="w-full flex justify-center mt-6">
      <form ref={formRef}></form>
    </div>
  );
};

export default RazorpayPaymentButton;
