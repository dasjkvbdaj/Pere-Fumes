import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || { label: 'Standard', price: product.price });

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const currentPrice = selectedSize.price;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        
        {/* Badge */}
        <div className="absolute top-2 left-2 bg-emerald-800/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
          {product.gender}
        </div>

        {/* Floating Add to Cart Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product, quantity, selectedSize);
          }}
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-emerald-800 text-white shadow-lg flex items-center justify-center hover:bg-emerald-900 hover:scale-105 transition-all active:scale-95 z-10"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-3 md:p-4 flex flex-col flex-1 gap-1">
        
        <div className="min-h-[2.5rem]">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest truncate">{product.brand}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-sm md:text-base font-bold text-charcoal-900 leading-tight line-clamp-2 hover:text-emerald-800 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        {/* Size Selector - Compact */}
        <div className="flex flex-wrap gap-1 mt-2 mb-1">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              onClick={(e) => {
                e.preventDefault();
                setSelectedSize(size);
              }}
              className={`text-[10px] px-2 py-1 rounded-full border transition-colors ${
                selectedSize.label === size.label
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-800'
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        <div className="flex items-end justify-between mt-auto pt-2">
           <div className="font-serif text-base md:text-lg font-bold text-gold-500">
              ${currentPrice}
           </div>

           {/* Elegant Quantity Selector */}
           <div className="flex items-center bg-cream-100 rounded-full border border-cream-200 h-8 px-1">
              <button 
                onClick={(e) => { e.preventDefault(); handleDecrement(); }}
                className="w-6 h-full flex items-center justify-center text-emerald-800 hover:bg-white hover:shadow-sm rounded-full transition-all disabled:opacity-50"
              >
                <Minus size={12} strokeWidth={3} />
              </button>
              
              <span className="w-5 text-center text-xs font-bold text-charcoal-800 tabular-nums">{quantity}</span>
              
              <button 
                onClick={(e) => { e.preventDefault(); handleIncrement(); }}
                className="w-6 h-full flex items-center justify-center text-emerald-800 hover:bg-white hover:shadow-sm rounded-full transition-all"
              >
                <Plus size={12} strokeWidth={3} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};