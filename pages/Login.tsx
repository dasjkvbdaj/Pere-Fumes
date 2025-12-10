import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log('Logging in with:', email, password);
    navigate('/');
  };

  return (
    <div className="bg-cream-100 flex items-center justify-center pt-24 pb-12 px-4 animate-fadeIn min-h-[70vh]">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md border border-emerald-50 relative overflow-hidden">
        
        {/* Decorative Top Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-800 to-gold-400"></div>

        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-emerald-800 mb-2">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-charcoal-800 mb-2 font-serif">
              Email Address
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all bg-cream-100/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-800 mb-2 font-serif">
              Password
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all bg-cream-100/30"
              placeholder="••••••••"
            />
            <div className="flex justify-end mt-2">
              <a href="#" className="text-xs text-gold-500 hover:text-emerald-800 transition-colors">Forgot Password?</a>
            </div>
          </div>

          <Button 
            type="submit" 
            fullWidth 
            size="lg" 
            className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};