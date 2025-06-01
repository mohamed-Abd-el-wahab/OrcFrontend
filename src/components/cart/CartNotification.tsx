import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, X } from 'lucide-react';

interface CartNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

const CartNotification = ({ isOpen, onClose, itemName }: CartNotificationProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-slideIn">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 w-[320px]">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5 text-green-500 mr-2" />
            <p className="text-white">Added to cart!</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-400 mt-2 mb-4">
          {itemName} has been added to your cart.
        </p>
        
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              navigate('/cart');
            }}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Cart
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartNotification;