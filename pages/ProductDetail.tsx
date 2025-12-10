import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { Truck, ShieldCheck, Minus, Plus } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = MOCK_PRODUCTS.find(p => p.id === id);
  // Initialize size state only if product exists
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || { label: 'Standard', price: 0 });

  if (!product) {
    return (
      <div className="pt-32 text-center h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  // Update selectedSize if it was initialized with fallback/empty
  if (selectedSize.price === 0 && product.price > 0 && product.sizes.length > 0) {
      // Logic handled by initial state mostly, but ensures safety
  }

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="pt-24 pb-20 animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
           <span className="cursor-pointer hover:text-emerald-800" onClick={() => navigate('/')}>Home</span> / 
           <span className="cursor-pointer hover:text-emerald-800 ml-1" onClick={() => navigate('/shop')}>Shop</span> / 
           <span className="ml-1 text-emerald-800 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section - Removed bg-white and border */}
          <div className="flex items-center justify-center p-8">
             <img src={product.image} alt={product.name} className="w-full max-w-md h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-lg" />
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2">{product.brand}</h2>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-3">{product.name}</h1>
            </div>

            <p className="text-3xl font-serif text-charcoal-800">${selectedSize.price}</p>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Size</label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                      selectedSize.label === size.label
                        ? 'bg-emerald-800 text-white border-emerald-800 ring-2 ring-emerald-100'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-800'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6 space-y-4">
               <p className="text-gray-600 leading-relaxed font-light">{product.description}</p>
               <div className="flex flex-wrap gap-2">
                 {product.notes.map(note => (
                   <span key={note} className="bg-cream-200 text-charcoal-800 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                     {note}
                   </span>
                 ))}
               </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col gap-6 pt-2">
               <div className="flex items-center gap-4">
                 <label className="font-medium text-charcoal-900">Quantity</label>
                 <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button 
                      onClick={handleDecrement}
                      className="p-3 text-gray-500 hover:text-emerald-800 hover:bg-gray-50 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center text-base border-none focus:ring-0 p-0 appearance-none bg-transparent font-medium text-charcoal-900"
                    />
                    <button 
                      onClick={handleIncrement}
                      className="p-3 text-gray-500 hover:text-emerald-800 hover:bg-gray-50 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                 </div>
               </div>

              <Button size="lg" fullWidth onClick={() => addToCart(product, quantity, selectedSize)}>
                Add to Cart - ${(selectedSize.price * quantity).toFixed(2)}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Truck className="text-emerald-800" size={20} />
                <span>Free shipping in Lebanon</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-800" size={20} />
                <span>Authenticity Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section (No Tabs) */}
        <div className="mt-20">
           <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6 border-b border-gray-200 pb-4">Description</h3>
           <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p>Experience the allure of {product.name} by {product.brand}. Crafted for the modern individual, this {product.scentType.toLowerCase()} fragrance leaves a lasting impression. 
                Perfect for {product.gender === 'Unisex' ? 'anyone' : (product.gender === 'Men' ? 'him' : 'her')}, it combines top notes of {product.notes[0]} with a heart of {product.notes[1]} and a base of {product.notes[2]}.</p>
                <p className="mt-4">Suitable for evening wear and special occasions.</p>
           </div>
        </div>
      </div>
    </div>
  );
};