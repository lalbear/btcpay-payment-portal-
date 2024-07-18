import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <div className="payment-success">
      <h2>Payment Successful!</h2>
      <p>Thank you for your payment.</p>
      <Link to="/" className="button">Make Another Payment</Link>
    </div>
  );
}

export default PaymentSuccess;
