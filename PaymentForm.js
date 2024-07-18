import React, { useState } from 'react';
import axios from 'axios';

function PaymentForm({ onInvoiceGenerated }) {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://mainnet.demo.btcpayserver.org/api/v1/stores/HGb3jzH8JJYEzEyLCfMXs518fi6j4kDgbetJqDKKG62U/invoices', {
        amount,
        currency,
        metadata: { buyerEmail: email }
      }, {
        headers: {
          'Authorization': 'Basic WkvWdk1ZdEVoZUdWYDoy0Q7PDvMdiMYiikookrZhv0E',
          'Content-Type': 'application/json',
        },
      });
      onInvoiceGenerated(response.data);
    } catch (error) {
      console.error('Error generating invoice:', error.response ? error.response.data : error.message);
      setError('Failed to generate invoice. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="BTC">BTC</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Generating Invoice...' : 'Generate Invoice'}
      </button>
    </form>
  );
}

export default PaymentForm;
