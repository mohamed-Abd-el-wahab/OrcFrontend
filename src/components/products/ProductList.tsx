import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {products.map((product, index) => (
            <div key={product.id} className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-transparent rounded-3xl blur-3xl opacity-20" />
              
              {/* Product Content */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-4xl font-bold text-white mb-4">{product.name}</h2>
                  <p className="text-xl text-gray-400 mb-8">{product.title}</p>
                  <p className="text-gray-300 mb-12">{product.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="space-y-4">
                        <feature.icon className="w-8 h-8 text-blue-500" />
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mt-12 px-8 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;