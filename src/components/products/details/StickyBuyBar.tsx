import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { designClasses } from '../../../config/design';
import { ProductVariant } from '../../../types/products';

interface StickyBuyBarProps {
  variant: ProductVariant;
  onBuy: () => void;
}

const StickyBuyBar = ({ variant, onBuy }: StickyBuyBarProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 600); // show after user scrolls down a bit
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] md:w-auto z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="bg-orc-black/90 backdrop-blur flex items-center gap-4 px-4 py-3 rounded-xl border border-orc-blue/30 shadow-lg">
        <ShoppingCart className="w-6 h-6 text-orc-blue" />
        <span className="text-white font-semibold whitespace-nowrap hidden md:block">
          {variant.name}
        </span>
        <span className="text-orc-blue font-bold ml-auto">
          EGP {variant.price.toLocaleString()}
        </span>
        <button onClick={onBuy} className={`${designClasses.button} px-5 py-2 text-sm`}>Buy Now</button>
      </div>
    </div>
  );
};

export default StickyBuyBar; 