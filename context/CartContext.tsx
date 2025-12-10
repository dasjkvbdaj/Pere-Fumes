import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, ProductSize } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size: ProductSize) => void;
  removeFromCart: (productId: string, sizeLabel: string) => void;
  updateQuantity: (productId: string, sizeLabel: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pere-fumes-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('pere-fumes-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, size: ProductSize) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize.label === size.label);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize.label === size.label
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity: quantity, selectedSize: size, price: size.price }];
    });
    // Do not automatically open the cart
  };

  const removeFromCart = (productId: string, sizeLabel: string) => {
    setCart(prev => prev.filter(item => !(item.id === productId && item.selectedSize.label === sizeLabel)));
  };

  const updateQuantity = (productId: string, sizeLabel: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId, sizeLabel);
      return;
    }
    setCart(prev => prev.map(item => 
      (item.id === productId && item.selectedSize.label === sizeLabel) ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  // Use the price from the cart item (which should be the size specific price)
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Count unique items
  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal, 
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};