import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Background Layer */}
        <div 
          className={`absolute inset-0 transition-all duration-300 -z-10 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-cream-100'
          }`} 
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-20">
              <h1 className={`font-serif text-2xl md:text-3xl font-bold text-emerald-800 tracking-tight`}>
                PÈRE-FUMES
              </h1>
            </Link>

            {/* Desktop Nav - Flexible Centering */}
            {/* Removed absolute positioning to prevent overlap on tablets */}
            <nav className="hidden md:flex flex-1 items-center justify-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 font-sans whitespace-nowrap ${
                    location.pathname === link.path ? 'text-emerald-800 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-5 flex-shrink-0 z-20">
              <button 
                className="text-gray-600 hover:text-emerald-800 transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-emerald-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <Link to="/login">
                <Button size="sm" className="rounded-full px-6 bg-gold-400 hover:bg-gold-500 text-charcoal-900 border-none">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button 
                className="text-gray-600 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-emerald-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="text-charcoal-800"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-fadeIn">
          {/* Header in Menu */}
          <div className="px-4 py-5 flex items-center justify-between border-b border-gray-100 shrink-0">
             <h1 className="font-serif text-2xl font-bold text-emerald-800 tracking-tight">
              PÈRE-FUMES
            </h1>
            <div className="flex items-center space-x-4">
               <button 
                  className="text-charcoal-800 relative"
                  onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}
                >
                  <ShoppingBag size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-emerald-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal-800">
                  <X size={28} />
                </button>
            </div>
          </div>

          {/* Links & Button Container */}
          <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-full text-lg font-medium transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Login Button moved here */}
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 pt-2">
               <Button 
                 fullWidth 
                 size="lg" 
                 className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 border-none text-white shadow-lg text-lg py-4"
               >
                 Login
               </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};