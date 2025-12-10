import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS, BRANDS, SCENT_TYPES } from '../constants';
import { Filter, X } from 'lucide-react';
import { Product } from '../types';

export const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(MOCK_PRODUCTS);

  // Filters State
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedScents, setSelectedScents] = useState<string[]>([]);

  // Initialize from URL
  useEffect(() => {
    const genderParam = searchParams.get('gender');
    if (genderParam) {
      setSelectedGender([genderParam]);
    }
  }, [searchParams]);

  // Filter Logic
  useEffect(() => {
    let result = MOCK_PRODUCTS;

    if (selectedGender.length > 0) {
      result = result.filter(p => selectedGender.includes(p.gender));
    }
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }
    if (selectedScents.length > 0) {
      result = result.filter(p => selectedScents.includes(p.scentType));
    }

    setFilteredProducts(result);
  }, [selectedGender, selectedBrands, selectedScents]);

  const toggleFilter = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Gender */}
      <div>
        <h3 className="font-serif font-bold text-charcoal-900 mb-4">Gender</h3>
        <div className="space-y-2">
          {['Men', 'Women', 'Unisex'].map(g => (
            <label key={g} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedGender.includes(g)}
                onChange={() => toggleFilter(g, selectedGender, setSelectedGender)}
                className="form-checkbox h-4 w-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-800"
              />
              <span className="text-gray-600 group-hover:text-emerald-800 transition-colors">{g}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Scent Type */}
      <div>
        <h3 className="font-serif font-bold text-charcoal-900 mb-4">Scent Family</h3>
        <div className="space-y-2">
          {SCENT_TYPES.map(s => (
            <label key={s} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedScents.includes(s)}
                onChange={() => toggleFilter(s, selectedScents, setSelectedScents)}
                className="form-checkbox h-4 w-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-800"
              />
              <span className="text-gray-600 group-hover:text-emerald-800 transition-colors">{s}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-serif font-bold text-charcoal-900 mb-4">Brand</h3>
        <div className="space-y-2">
          {BRANDS.map(b => (
            <label key={b} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedBrands.includes(b)}
                onChange={() => toggleFilter(b, selectedBrands, setSelectedBrands)}
                className="form-checkbox h-4 w-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-800"
              />
              <span className="text-gray-600 group-hover:text-emerald-800 transition-colors">{b}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="bg-emerald-900 text-cream-100 py-12 mb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Collection</h1>
          <p className="font-light max-w-2xl mx-auto">Discover our catalog of premium essences.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSection />
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 bg-charcoal-900 text-white px-4 py-2 rounded"
            >
              <Filter size={18} /> Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
                {filteredProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-serif text-gray-500">No fragrances match your criteria.</p>
                <button 
                  onClick={() => {setSelectedBrands([]); setSelectedGender([]); setSelectedScents([])}}
                  className="text-emerald-800 mt-4 underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="relative bg-white w-80 h-full p-6 overflow-y-auto animate-slideInRight">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-xl font-bold">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}><X /></button>
            </div>
            <FilterSection />
          </div>
        </div>
      )}
    </div>
  );
};