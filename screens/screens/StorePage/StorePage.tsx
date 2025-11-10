import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Heart, Star, Plus, Minus, X, ChevronLeft, ChevronRight, Filter, Grid, List, Eye, Share2, Clock, Truck, Shield, RotateCcw, Award, Zap, Gift, Percent, Tag, TrendingUp, ChevronDown, Play, Menu, SlidersHorizontal, Crown, Siren as Fire, Bookmark, ExternalLink } from 'lucide-react';

interface StorePageProps {
  onBack?: () => void;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  inStock: boolean;
  features?: string[];
  colors?: string[];
  bestseller?: boolean;
  newArrival?: boolean;
  deal?: boolean;
  quickView?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

export const StorePage: React.FC<StorePageProps> = ({ onBack }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Products', count: 48, icon: '🛍️', color: 'from-blue-500 to-purple-500' },
    { id: 'Flowers', name: 'Flowers & Plants', count: 12, icon: '🌹', color: 'from-pink-500 to-rose-500' },
    { id: 'Gifts', name: 'Luxury Gifts', count: 15, icon: '🎁', color: 'from-green-500 to-emerald-500' },
    { id: 'Jewelry', name: 'Fine Jewelry', count: 8, icon: '💎', color: 'from-yellow-500 to-orange-500' },
    { id: 'Fragrance', name: 'Perfumes', count: 6, icon: '🌸', color: 'from-purple-500 to-pink-500' },
    { id: 'Food', name: 'Gourmet Food', count: 7, icon: '🍫', color: 'from-orange-500 to-red-500' }
  ];

  const banners = [
    {
      id: 1,
      title: 'Valentine\'s Day Collection',
      subtitle: 'Express your love with premium gifts',
      discount: '30% OFF',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Shop Now',
      color: 'from-pink-600 to-red-600'
    },
    {
      id: 2,
      title: 'Luxury Jewelry Sale',
      subtitle: 'Exquisite pieces for special moments',
      discount: 'Up to 50% OFF',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Discover',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 3,
      title: 'Fresh Flower Delivery',
      subtitle: 'Same-day delivery across Dubai',
      discount: 'Free Delivery',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Order Now',
      color: 'from-green-600 to-teal-600'
    }
  ];

  const products: Product[] = [
    // Bestsellers
    {
      id: 1,
      name: 'Premium Red Rose Bouquet',
      brand: 'Hashtags Flowers',
      price: 125,
      originalPrice: 150,
      discount: 17,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Flowers',
      badge: 'Best Seller',
      inStock: true,
      bestseller: true,
      features: ['Fresh Flowers', 'Same Day Delivery', 'Gift Wrapping']
    },
    {
      id: 2,
      name: 'Luxury Chocolate Gift Box',
      brand: 'Premium Chocolates',
      price: 89,
      originalPrice: 120,
      discount: 26,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gifts',
      badge: 'Premium',
      inStock: true,
      bestseller: true,
      features: ['Belgian Chocolate', 'Elegant Packaging', 'Personalized Message']
    },
    {
      id: 3,
      name: 'Elegant Diamond Necklace',
      brand: 'Luxury Jewelry',
      price: 2999,
      originalPrice: 3999,
      discount: 25,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Jewelry',
      badge: 'Exclusive',
      inStock: true,
      bestseller: true,
      features: ['18K Gold', 'Certified Diamonds', 'Lifetime Warranty']
    },
    {
      id: 4,
      name: 'Artisan Perfume Collection',
      brand: 'Signature Scents',
      price: 179,
      originalPrice: 220,
      discount: 19,
      rating: 4.6,
      reviews: 167,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fragrance',
      badge: 'Limited Edition',
      inStock: true,
      bestseller: true,
      features: ['Handcrafted', 'Long Lasting', 'Elegant Bottle']
    },
    // New Arrivals
    {
      id: 5,
      name: 'Exotic Orchid Arrangement',
      brand: 'Hashtags Flowers',
      price: 95,
      originalPrice: 125,
      discount: 24,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Flowers',
      inStock: true,
      newArrival: true,
      features: ['Exotic Flowers', 'Long Lasting', 'Care Instructions']
    },
    {
      id: 6,
      name: 'Smart Watch Collection',
      brand: 'Tech Luxury',
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.8,
      reviews: 145,
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Jewelry',
      inStock: true,
      newArrival: true,
      features: ['Smart Features', 'Premium Materials', 'Warranty']
    },
    {
      id: 7,
      name: 'Gourmet Gift Hamper',
      brand: 'Deluxe Treats',
      price: 199,
      originalPrice: 250,
      discount: 20,
      rating: 4.8,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food',
      badge: 'Gourmet',
      inStock: true,
      newArrival: true,
      features: ['Premium Selection', 'Wicker Basket', 'Ribbon Wrapped']
    },
    {
      id: 8,
      name: 'Luxury Spa Set',
      brand: 'Wellness Pro',
      price: 149,
      originalPrice: 189,
      discount: 21,
      rating: 4.7,
      reviews: 178,
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gifts',
      badge: 'Trending',
      inStock: true,
      newArrival: true,
      features: ['Organic Products', 'Aromatherapy', 'Luxury Packaging']
    },
    // Flash Sale Items
    {
      id: 9,
      name: 'Designer Handbag',
      brand: 'Fashion Elite',
      price: 459,
      originalPrice: 699,
      discount: 34,
      rating: 4.9,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gifts',
      badge: 'Flash Sale',
      inStock: true,
      deal: true,
      features: ['Genuine Leather', 'Designer Brand', 'Limited Stock']
    },
    {
      id: 10,
      name: 'Premium Coffee Set',
      brand: 'Gourmet Roasters',
      price: 75,
      originalPrice: 95,
      discount: 21,
      rating: 4.4,
      reviews: 67,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food',
      inStock: true,
      deal: true,
      features: ['Single Origin', 'Freshly Roasted', 'Gift Box']
    },
    {
      id: 11,
      name: 'Pearl Earring Set',
      brand: 'Luxury Jewelry',
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Jewelry',
      inStock: true,
      deal: true,
      features: ['Cultured Pearls', 'Sterling Silver', 'Gift Box']
    },
    {
      id: 12,
      name: 'Luxury Candle Set',
      brand: 'Aromatherapy Co.',
      price: 55,
      originalPrice: 75,
      discount: 27,
      rating: 4.3,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fragrance',
      inStock: true,
      deal: true,
      features: ['Natural Wax', 'Long Burn Time', 'Gift Set']
    },
    // Additional products for variety
    {
      id: 13,
      name: 'Vintage Wine Collection',
      brand: 'Wine Masters',
      price: 350,
      originalPrice: 450,
      discount: 22,
      rating: 4.7,
      reviews: 134,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food',
      inStock: true,
      features: ['Aged Wine', 'Premium Selection', 'Gift Packaging']
    },
    {
      id: 14,
      name: 'Silk Flower Arrangement',
      brand: 'Eternal Blooms',
      price: 85,
      rating: 4.5,
      reviews: 76,
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Flowers',
      inStock: true,
      features: ['Silk Flowers', 'Long Lasting', 'Elegant Vase']
    },
    {
      id: 15,
      name: 'Luxury Watch Box',
      brand: 'Timepiece Storage',
      price: 189,
      originalPrice: 249,
      discount: 24,
      rating: 4.6,
      reviews: 112,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gifts',
      inStock: true,
      features: ['Premium Wood', 'Velvet Interior', 'Lock & Key']
    },
    {
      id: 16,
      name: 'Artisan Chocolate Truffles',
      brand: 'Sweet Delights',
      price: 45,
      rating: 4.4,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food',
      inStock: true,
      features: ['Handmade', 'Premium Cocoa', 'Gift Box']
    }
  ];

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      case 'featured':
      default: return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    }
  });

  const bestsellerProducts = products.filter(p => p.bestseller);
  const newArrivalProducts = products.filter(p => p.newArrival);
  const flashSaleProducts = products.filter(p => p.deal);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                Free delivery on orders over AED 200
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                100% Authentic products
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span>24/7 Customer Support</span>
              <button className="hover:text-blue-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              {/* Logo */}
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    HASHTAGS STORE
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Premium Shopping</p>
                </div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setShowCart(true)}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-80`}></div>
              
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center max-w-2xl px-4">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {banner.discount}
                  </div>
                  <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-xl mb-8 text-white/90">{banner.subtitle}</p>
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Banner Navigation */}
        <button 
          onClick={prevBanner}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button 
          onClick={nextBanner}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Banner Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
          
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('categories-container');
                if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('categories-container');
                if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Categories Container */}
            <div 
              id="categories-container"
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 text-center p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-white'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {category.count} items
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Bestsellers</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellerProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #{product.id} Bestseller
                  </div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </button>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-blue-600">AED {product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">AED {product.originalPrice}</div>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Fire className="w-6 h-6 text-orange-300" />
            <h2 className="text-2xl font-bold">Flash Sale - Limited Time!</h2>
            <Fire className="w-6 h-6 text-orange-300" />
          </div>
          <p className="text-lg mb-6 text-green-100">Up to 50% off on selected items. Hurry, sale ends soon!</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="font-bold text-lg">02</div>
              <div className="text-xs">Days</div>
            </div>
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="font-bold text-lg">14</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-white/20 px-3 py-2 rounded-lg">
              <div className="font-bold text-lg">32</div>
              <div className="text-xs">Minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Fire className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Flash Sale</h2>
            </div>
            <button className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flashSaleProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{product.discount}% OFF
                  </div>
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    SALE
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-red-600">AED {product.price}</div>
                      <div className="text-sm text-gray-500 line-through">AED {product.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            </div>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivalProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-green-600">AED {product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">AED {product.originalPrice}</div>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header with Controls */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex gap-6 p-6' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'aspect-square'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.bestseller && (
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                        Bestseller
                      </span>
                    )}
                    {product.newArrival && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        New
                      </span>
                    )}
                    {product.deal && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        Sale
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </button>

                  {/* Quick View (Grid only) */}
                  {viewMode === 'grid' && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Quick View
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
                  <h3 className={`font-bold text-gray-900 line-clamp-2 mb-1 ${viewMode === 'list' ? 'text-xl' : 'text-sm'}`}>
                    {product.name}
                  </h3>
                  <p className={`text-gray-600 mb-2 ${viewMode === 'list' ? 'text-base' : 'text-xs'}`}>
                    {product.brand}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`${viewMode === 'list' ? 'w-4 h-4' : 'w-3 h-3'} ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className={`text-gray-600 ${viewMode === 'list' ? 'text-sm' : 'text-xs'}`}>
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Features (List view only) */}
                  {viewMode === 'list' && product.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-bold text-blue-600 ${viewMode === 'list' ? 'text-2xl' : 'text-lg'}`}>
                        AED {product.price}
                      </div>
                      {product.originalPrice && (
                        <div className={`text-gray-500 line-through ${viewMode === 'list' ? 'text-base' : 'text-sm'}`}>
                          AED {product.originalPrice}
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => addToCart(product)}
                      className={`bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ${
                        viewMode === 'list' ? 'px-6 py-3' : 'px-4 py-2'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      {viewMode === 'list' ? 'Add to Cart' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-8 border-t border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-900 text-sm">Free Delivery</h3>
              <p className="text-xs text-gray-600">On orders over AED 200</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 text-sm">Secure Payment</h3>
              <p className="text-xs text-gray-600">SSL encrypted checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-900 text-sm">Easy Returns</h3>
              <p className="text-xs text-gray-600">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-900 text-sm">Premium Quality</h3>
              <p className="text-xs text-gray-600">Authentic products only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section - Compact */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rating Overview */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-400 fill-current mr-2" />
                <span className="text-2xl font-bold text-gray-900">4.8</span>
                <span className="text-gray-600 ml-2">(1,247 reviews)</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { label: 'Product Quality', rating: 4.9 },
                  { label: 'Delivery Speed', rating: 4.7 },
                  { label: 'Customer Service', rating: 4.8 },
                  { label: 'Value for Money', rating: 4.6 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Customer Reviews */}
            <div className="space-y-4">
              {[
                { name: 'Ahmed Al-Mansouri', rating: 5, review: 'Excellent quality and fast delivery. The flowers were fresh and beautiful!', verified: true },
                { name: 'Sarah Johnson', rating: 5, review: 'Amazing customer service and premium products. Highly recommended!', verified: true },
                { name: 'Omar Hassan', rating: 4, review: 'Great selection and competitive prices. Will definitely order again.', verified: false }
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-sm">{review.name}</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Compact */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                question: 'What is your return policy?',
                answer: '30-day returns for all products in original condition with receipt.'
              },
              {
                question: 'Do you offer same-day delivery?',
                answer: 'Yes, same-day delivery available for orders before 2 PM in Dubai.'
              },
              {
                question: 'Are your products authentic?',
                answer: 'All products are 100% authentic with certificates of authenticity.'
              },
              {
                question: 'How can I track my order?',
                answer: 'Tracking number sent via SMS and email once order ships.'
              },
              {
                question: 'Do you offer gift wrapping?',
                answer: 'Complimentary gift wrapping available for orders over AED 100.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'All major credit cards, debit cards, and cash on delivery.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full overflow-y-auto">
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Shopping Cart ({getTotalItems()})</h3>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h4>
                  <p className="text-gray-500 mb-6">Add some products to get started!</p>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600 text-sm">{item.brand}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">AED {item.price * item.quantity}</div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center text-xl font-bold mb-6">
                      <span>Total:</span>
                      <span className="text-blue-600">AED {getTotalPrice()}</span>
                    </div>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-lg">
                      Proceed to Checkout
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Secure checkout with SSL encryption</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">#</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">HASHTAGS STORE</h3>
                  <p className="text-xs text-gray-400">Premium Shopping</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your premium destination for luxury gifts, flowers, and special occasions.
              </p>
              <div className="flex space-x-3">
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </button>
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">ig</span>
                </button>
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">tw</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flowers & Plants</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Gifts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fine Jewelry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Perfumes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gourmet Food</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">store@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Hashtags Store. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};