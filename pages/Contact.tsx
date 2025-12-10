import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Button } from '../components/Button';
import { Phone, MapPin, Clock, Truck, Store, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen animate-fadeIn">
      
      {/* Header */}
      <div className="text-center mb-16 pt-8">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">
          Visit <span className="text-gold-500">Our Store</span>
        </h1>
        <p className="text-gray-600 font-light max-w-xl mx-auto">
          Come experience the magic of Père-Fumes in person. We're here to help you find the perfect scent!
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            
            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-red-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal-900 mb-1">Location</h3>
                <p className="text-gray-500 text-sm mb-4">{CONTACT_INFO.address}</p>
                <a 
                  href="https://www.google.com/maps/place/Père-Fumes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-500 text-sm font-bold border border-red-200 px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
                >
                  <MapPin size={14} className="mr-2"/> Get Directions
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-full text-emerald-600 shrink-0">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal-900 mb-1">Phone</h3>
                <p className="text-xl font-serif text-charcoal-900 mb-1">{CONTACT_INFO.phone}</p>
                <p className="text-xs text-gray-400">Tap to call us directly</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-gold-50 p-3 rounded-full text-gold-500 shrink-0">
                <Clock size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal-900 mb-1">Store Hours</h3>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>Mon - Sat: <span className="text-charcoal-900 font-medium">4:00 PM - 11:00 PM</span></p>
                  <p>Sunday: <span className="text-red-500 font-medium">Closed</span></p>
                </div>
              </div>
            </div>

            {/* Services Title */}
            <h3 className="font-serif text-xl font-bold text-charcoal-900 pt-4">Our Services</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                 <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-2 shadow-sm">
                   <Store size={20} />
                 </div>
                 <p className="font-bold text-emerald-900 text-sm">In-Store Pickup</p>
                 <p className="text-[10px] text-emerald-700">Ready within hours</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                 <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-2 shadow-sm">
                   <Truck size={20} />
                 </div>
                 <p className="font-bold text-orange-900 text-sm">Delivery</p>
                 <p className="text-[10px] text-orange-700">Local delivery available</p>
              </div>
            </div>

          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-2 h-[500px] lg:h-auto bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53008.67134968606!2d35.4453595216797!3d33.86280950000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172f1bc2586b%3A0x37c8e7013749383c!2sP%C3%A8re-Fumes!5e0!3m2!1sen!2slb!4v1765313442309!5m2!1sen!2slb" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Store Location"
             />
          </div>

        </div>
      </div>

      {/* WhatsApp Question Section */}
      <div className="text-center py-12 px-4">
        <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-4">Have Questions?</h2>
        <p className="text-gray-500 mb-8 font-light">Reach out to us on WhatsApp for quick responses about products, availability, or any inquiries!</p>
        
        <a 
          href={`https://wa.me/961${CONTACT_INFO.phone}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#1faa53] transition-colors inline-flex items-center gap-2 text-lg">
            <MessageCircle /> Chat on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};