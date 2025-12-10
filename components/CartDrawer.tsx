import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-cream-100 h-full shadow-2xl flex flex-col animate-slideInRight">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-white">
          <h2 className="font-serif text-xl font-bold text-emerald-800">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-start pt-12 text-center space-y-4 h-full">
              <p className="text-gray-500 font-sans">Your bag is empty.</p>
              <Button onClick={() => setIsCartOpen(false)} variant="outline">Continue Shopping</Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize.label}`} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md border border-gray-200" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-medium text-charcoal-900 line-clamp-1">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize.label)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-emerald-800 uppercase tracking-wide mb-1">{item.brand}</p>
                  <p className="text-xs text-gray-500 mb-2">Size: {item.selectedSize.label}</p>
                  
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-medium text-gold-500">${item.price}</p>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize.label, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize.label, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-sans">Subtotal</span>
              <span className="font-serif text-xl font-bold text-charcoal-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
              <Button fullWidth size="lg">Checkout</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};