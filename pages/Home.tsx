import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Clock, Store, Truck, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn pt-16">
      
      {/* Hero Section */}
      <section className="bg-cream-100 min-h-[85vh] flex items-center py-12 lg:py-0 relative overflow-hidden">
        {/* Background Blob Effect (Optional for feel) */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 lg:pr-12 text-center lg:text-left">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal-900 leading-[1.1]">
                Where <span className="text-gold-500">Scent</span> and <span className="text-emerald-800">Elegance</span> Come Together
              </h1>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover a magical world of niche perfumes, designer fragrances, and olfactory masterpieces that spark memory and create lasting impressions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full px-8 shadow-xl shadow-emerald-800/20 w-full sm:w-auto">Explore Collections</Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-white hover:bg-emerald-50 w-full sm:w-auto">Find Our Store</Button>
                </Link>
              </div>

              <div className="flex gap-4 pt-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-emerald-100/50 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium">
                  <Store size={16} /> In-Store Consultation
                </div>
                <div className="flex items-center gap-2 bg-gold-100/50 text-gold-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Truck size={16} /> Delivery Available
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/public/hero.png" 
                  alt="Premium Perfume Collection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Summary (Replaces Testimonials) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="aspect-square rounded-full overflow-hidden border-8 border-cream-100 shadow-2xl max-w-md mx-auto">
                 <img src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800" alt="About Père-Fumes" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-2 block">Our Story</span>
              <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-6">A Legacy of Luxury</h2>
              <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                Père-Fumes started with a simple dream: to create a magical space where people could discover scents that spark joy, creativity, and memory. Located in the heart of Haret Hreik, we have dedicated ourselves to curating the finest essences from around the globe.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                ✨ Visit Us Today
              </span>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Come Explore Our Store!</h2>
              <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                Experience the magic in person. Browse our complete collection and let our friendly staff help you find the perfect perfume.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-400" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-gold-400" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-gold-400" />
                  <span>Mon - Sat: 4PM - 11PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold-400 text-charcoal-900 hover:bg-gold-500 border-none rounded-full px-10 min-w-[200px]">
                    Get Directions
                  </Button>
                </Link>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 min-w-[200px]">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};