# BTCPay Server Payment Portal

This project is a React-based web application that integrates with BTCPay Server to create a user-friendly payment portal. It allows customers to easily generate invoices and make payments using various cryptocurrencies and fiat currencies.

## Project Overview

The BTCPay Server Payment Portal serves as a bridge between merchants and customers, leveraging the power of BTCPay Server's robust payment processing capabilities. This application simplifies the payment process by providing an intuitive interface for users to enter payment details and generate invoices.

## Key Features

1. **Multi-Currency Support**: The portal supports multiple currencies, including BTC, USD, EUR, and INR, catering to a global audience.
2. **Dynamic Invoice Generation**: Users can input their email, payment amount, and preferred currency to generate a custom invoice on-the-fly.
3. **QR Code Integration**: For cryptocurrency payments, the system generates a QR code that users can scan with their wallet apps for quick and easy transactions.
4. **Real-time Payment Status Updates**: The application continuously checks the payment status and updates the user interface accordingly.
5. **Responsive Design**: The user interface is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## How It Works

1. **User Input**: The user enters their email, payment amount, and selects a currency on the main form.
2. **Invoice Creation**: Upon form submission, the application communicates with the BTCPay Server API to create a new invoice.
3. **Payment Options**: The generated invoice is displayed to the user, along with a QR code for cryptocurrency payments.
4. **Status Monitoring**: The application polls the BTCPay Server API at regular intervals to check the payment status.
5. **Confirmation**: Once the payment is confirmed, the user is redirected to a success page.

## Technical Implementation

The project is built using React and utilizes modern JavaScript features. It integrates with BTCPay Server's API using axios for HTTP requests. The application uses react-router-dom for navigation and qrcode.react for generating QR codes.

This payment portal demonstrates the power of combining React's frontend capabilities with BTCPay Server's robust payment processing, creating a seamless and efficient payment experience for both merchants and customers.
