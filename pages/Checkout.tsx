import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'confirm'>('details');

  if (cart.length === 0 && step === 'details') {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl mb-4">Your cart is empty</h2>
        <Link to="/shop"><Button>Go to Shop</Button></Link>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center max-w-lg">
        <div className="bg-white p-12 rounded-lg shadow-xl border-t-4 border-emerald-800">
          <div className="text-emerald-800 text-6xl mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100">✓</div>
          <h2 className="font-serif text-3xl mb-2 text-charcoal-900">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">Thank you for shopping with Père-Fumes. Your order regarding the finest scents is being processed.</p>
          <Link to="/"><Button fullWidth>Back Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl mb-8 text-charcoal-900">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-xl font-bold mb-6">Shipping Information</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); clearCart(); setStep('confirm'); }}>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="w-full border p-3 rounded" />
                <input required placeholder="Last Name" className="w-full border p-3 rounded" />
              </div>
              <input required placeholder="Address" className="w-full border p-3 rounded" />
              <input required placeholder="City" className="w-full border p-3 rounded" />
              <div className="grid grid-cols-2 gap-4">
                 <input required placeholder="Phone Number" type="tel" className="w-full border p-3 rounded" />
                 <input required placeholder="Postal Code" className="w-full border p-3 rounded" />
              </div>
              
              <h2 className="font-serif text-xl font-bold mt-8 mb-6">Payment</h2>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" defaultChecked className="text-emerald-800 focus:ring-emerald-800" />
                  <span>Cash on Delivery (Lebanon Only)</span>
                </label>
              </div>
              
              <Button type="submit" fullWidth size="lg" className="mt-8">Complete Order</Button>
            </form>
          </div>

          {/* Summary */}
          <div className="bg-white p-8 rounded-lg shadow-sm h-fit">
            <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-charcoal-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <div className="flex justify-between mt-1 text-sm">
                       <span>Qty: {item.quantity}</span>
                       <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-xl font-serif font-bold text-emerald-800 pt-4">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};