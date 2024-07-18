import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import QRCodeDisplay from './components/QRCodeDisplay';
import PaymentSuccess from './components/PaymentSuccess';
import './App.css';

function App() {
  const [invoice, setInvoice] = useState(null);

  const handleInvoiceGenerated = (invoiceData) => {
    setInvoice(invoiceData);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>BTCPay Server Payment Portal</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<PaymentForm onInvoiceGenerated={handleInvoiceGenerated} />} />
            <Route 
              path="/qr-code" 
              element={
                invoice ? (
                  <QRCodeDisplay invoiceUrl={invoice.checkoutLink} invoiceId={invoice.id} />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route path="/success" element={<PaymentSuccess />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
