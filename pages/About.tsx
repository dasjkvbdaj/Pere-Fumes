import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="animate-fadeIn pt-20">
      
      {/* Intro Hero */}
      <section className="py-20 bg-gradient-to-b from-cream-100 to-white text-center px-4">
        
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal-900 mb-6">
          Welcome to <span className="text-gold-500">Père-Fumes</span>
        </h1>
        <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto leading-relaxed">
          We’re more than just a perfume store — we’re a destination where elegance comes alive. Located in the heart of Haret Hreik, we've been bringing joy to individuals and families with our carefully curated selection of designer and niche fragrances.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Collage */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000" 
                 alt="Perfume Display" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed font-light">
              Père-Fumes started with a simple dream: to create a magical space where people could discover scents that spark joy, creativity, and memory. Our founder believed that every individual deserves access to quality fragrances that nurture their confidence.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              Today, we offer a wide selection of products ranging from rare niche brands to classic designer bottles. Our educational approach involves guiding you through notes and accords. Our niche collection is particularly loved by enthusiasts who want to combine fun with learning.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              What makes us special? Our commitment to quality, our knowledgeable staff, and our genuine love for what we do. Every bottle on our shelves is handpicked with care.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500 font-light">Our values guide everything we do, from selecting brands to serving our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { 
                 icon: Heart, 
                 title: "Passion for Scent", 
                 desc: "We view perfume as an invisible art form. Each bottle captures emotions and memories, allowing you to express your unique identity through the power of scent.", 
                 color: "text-red-500 bg-red-50" 
               },
               { 
                 icon: ShieldCheck, 
                 title: "Quality & Authenticity", 
                 desc: "We strictly source original, high-concentration essences. Our commitment ensures that every spritz delivers a pure, long-lasting, and safe olfactory experience.", 
                 color: "text-emerald-600 bg-emerald-50" 
               },
               { 
                 icon: Sparkles, 
                 title: "Olfactory Education", 
                 desc: "Beyond selling bottles, we teach the language of perfume. Learn to distinguish between top notes, heart notes, and base notes to truly appreciate your collection.", 
                 color: "text-gold-500 bg-gold-50" 
               },
               { 
                 icon: Users, 
                 title: "Personalized Styling", 
                 desc: "Finding a signature scent is a journey. We analyze your preferences and skin chemistry to recommend fragrances that perfectly complement your aura.", 
                 color: "text-purple-500 bg-purple-50" 
               }
             ].map((value, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${value.color}`}>
                   <value.icon size={28} />
                 </div>
                 <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-3">{value.title}</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-emerald-800 rounded-[2.5rem] p-12 text-center text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="font-serif text-4xl font-bold mb-4">Come Say Hello!</h2>
               <p className="text-emerald-100 mb-8 max-w-xl mx-auto font-light">
                 Visit our store and experience the magic in person. Our friendly team is always ready to help!
               </p>
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <Link to="/contact" className="w-full md:w-auto">
                   <Button size="lg" className="bg-gold-400 text-charcoal-900 hover:bg-gold-500 border-none rounded-full px-8 w-full md:w-auto">Visit Our Store</Button>
                 </Link>
                 <Link to="/shop" className="w-full md:w-auto">
                   <Button size="lg" variant="outline" className="border-emerald-200 text-white hover:bg-emerald-700 rounded-full px-8 w-full md:w-auto">Browse Products</Button>
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};