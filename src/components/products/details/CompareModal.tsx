import React, { Fragment } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { ProductType, ProductVariant } from '../../../types/products';
import { designClasses } from '../../../config/design';

interface CompareModalProps {
  product: ProductType;
  isOpen: boolean;
  onClose: () => void;
  onBuy: (variant: ProductVariant) => void;
}

const keySpecs = ['payload', 'speed', 'runtime', 'dimensions', 'weight'];

const CompareModal = ({ product, isOpen, onClose, onBuy }: CompareModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose}></div>

      {/* modal */}
      <div className="relative max-h-[90vh] overflow-y-auto w-[90%] md:w-4/5 bg-orc-black border border-gray-700 rounded-2xl p-6">
        {/* Close */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Compare <span className="text-orc-blue">{product.name}</span> Variants
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="p-3 text-gray-400 font-semibold sticky left-0 bg-orc-black/90 backdrop-blur">Variant</th>
                {product.variants.map(v => (
                  <th key={v.id} className="p-3 text-gray-100 font-semibold text-center border-l border-gray-700">
                    {v.name}
                    <div className="text-orc-blue font-bold text-lg">EGP {v.price.toLocaleString()}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {keySpecs.map(spec => (
                <tr key={spec} className="border-t border-gray-800">
                  <td className="p-3 text-gray-300 capitalize sticky left-0 bg-orc-black/90 backdrop-blur">
                    {spec}
                  </td>
                  {product.variants.map(v => (
                    <td key={v.id + spec} className="p-3 text-center text-gray-200 border-l border-gray-800">
                      {v.specs[spec as keyof typeof v.specs] || '—'}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Buy Row */}
              <tr className="border-t border-gray-800">
                <td className="p-3 text-gray-300 sticky left-0 bg-orc-black/90 backdrop-blur">Action</td>
                {product.variants.map(v => (
                  <td key={v.id + 'buy'} className="p-3 text-center border-l border-gray-800">
                    <button onClick={() => onBuy(v)} className={`${designClasses.button} px-4 py-2 text-sm inline-flex items-center gap-2`}>
                      <ShoppingCart className="w-4 h-4" /> Buy
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareModal; 