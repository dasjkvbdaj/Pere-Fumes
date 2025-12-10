import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-cream-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-gold-400">PÈRE-FUMES</h2>
            <p className="text-sm leading-relaxed text-gray-300 font-light">
              Curating the world's finest scents for the discerning souls of Beirut. We blend modern sophistication with timeless elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Explore</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/shop?gender=Men" className="hover:text-gold-400 transition-colors">Men's Collection</Link></li>
              <li><Link to="/shop?gender=Women" className="hover:text-gold-400 transition-colors">Women's Collection</Link></li>
              <li><Link to="/shop?gender=Unisex" className="hover:text-gold-400 transition-colors">Unisex Niche</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Opening Hours</h3>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gold-400 shrink-0 mt-1" />
                <div>
                  <p>{CONTACT_INFO.hours.weekdays}</p>
                  <p>{CONTACT_INFO.hours.saturday}</p>
                  <p>{CONTACT_INFO.hours.monday}</p>
                  <p className="text-gold-400/80 mt-1">{CONTACT_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} Père-Fumes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};