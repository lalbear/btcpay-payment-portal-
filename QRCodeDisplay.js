import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QRCodeDisplay({ invoiceUrl, invoiceId }) {
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(`https://mainnet.demo.btcpayserver.org/api/v1/stores/HGb3jzH8JJYEzEyLCfMXs518fi6j4kDgbetJqDKKG62U/invoices/${invoiceId}`, {
          headers: {
            'Authorization': 'Basic WkvWdk1ZdEVoZUdWYDoy0Q7PDvMdiMYiikookrZhv0E',
          },
        });
        setPaymentStatus(response.data.status);
        if (response.data.status === 'Paid') {
          navigate('/success');
        }
      } catch (error) {
        console.error('Error checking payment status:', error.response ? error.response.data : error.message);
      }
    };

    const intervalId = setInterval(checkPaymentStatus, 5000);
    return () => clearInterval(intervalId);
  }, [invoiceId, navigate]);

  return (
    <div className="qr-code-display">
      <h2>Scan QR Code to Pay</h2>
      <QRCode value={invoiceUrl} size={256} />
      <p>Or click <a href={invoiceUrl} target="_blank" rel="noopener noreferrer">here</a> to pay</p>
      <p>Payment Status: {paymentStatus}</p>
    </div>
  );
}

export default QRCodeDisplay;
