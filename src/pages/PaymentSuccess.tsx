import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;