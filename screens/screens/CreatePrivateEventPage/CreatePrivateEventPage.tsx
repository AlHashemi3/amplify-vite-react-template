import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Star, Heart, ChevronLeft, ChevronRight, Filter, Grid, List, Search, Plus, Check, ShoppingBag, X } from 'lucide-react';

interface CreatePrivateEventPageProps {
  onBack?: () => void;
}

interface ServiceItem {
  id: number;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  featured?: boolean;
  description: string;
  availability: string;
}

interface CartItem extends ServiceItem {
  quantity: number;
}

export const CreatePrivateEventPage: React.FC<CreatePrivateEventPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('Venue');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    attend: '',
    language: '',
    level: '',
    certificate: '',
    privacy: '',
    budget: '',
    rate: ''
  });

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'Venue', name: 'Venue', icon: '🏢', color: 'bg-blue-100 text-blue-800' },
    { id: 'Decoration', name: 'Decoration', icon: '🎨', color: 'bg-pink-100 text-pink-800' },
    { id: 'Talents', name: 'Talents', icon: '🎭', color: 'bg-purple-100 text-purple-800' },
    { id: 'Hosting', name: 'Hosting', icon: '🎤', color: 'bg-green-100 text-green-800' },
    { id: 'Transportation', name: 'Transportation', icon: '🚗', color: 'bg-red-100 text-red-800' },
    { id: 'F&B', name: 'F&B', icon: '🍽️', color: 'bg-orange-100 text-orange-800' }
  ];

  const services: ServiceItem[] = [
    // Venues
    {
      id: 1,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8400,
      originalPrice: 10500,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: true,
      description: 'Modern industrial space perfect for private events and celebrations',
      availability: 'Available'
    },
    {
      id: 2,
      title: 'Luxury Rooftop Venue with City Views',
      location: 'Downtown Dubai',
      price: 12000,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: true,
      description: 'Stunning rooftop venue with panoramic city views',
      availability: 'Available'
    },
    {
      id: 3,
      title: 'Elegant Ballroom at 5-Star Hotel',
      location: 'Jumeirah, Dubai',
      price: 18000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      description: 'Grand ballroom with crystal chandeliers and luxury amenities',
      availability: 'Limited'
    },
    
    // Decorations
    {
      id: 4,
      title: 'Premium Floral Arrangements',
      location: 'Dubai Florist',
      price: 2500,
      originalPrice: 3200,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Decoration',
      description: 'Luxury floral arrangements with premium roses and exotic flowers',
      availability: 'Available'
    },
    {
      id: 5,
      title: 'LED Lighting & Stage Setup',
      location: 'Event Tech Dubai',
      price: 4500,
      rating: 4.8,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Decoration',
      featured: true,
      description: 'Professional LED lighting system with stage and backdrop',
      availability: 'Available'
    },
    {
      id: 6,
      title: 'Elegant Table Settings & Linens',
      location: 'Luxury Events Co.',
      price: 1800,
      originalPrice: 2400,
      rating: 4.5,
      reviews: 64,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Decoration',
      description: 'Premium table linens, centerpieces, and elegant place settings',
      availability: 'Available'
    },

    // Talents
    {
      id: 7,
      title: 'Professional DJ & Sound System',
      location: 'Dubai Entertainment',
      price: 3500,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 134,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talents',
      featured: true,
      description: 'Experienced DJ with premium sound system and lighting',
      availability: 'Available'
    },
    {
      id: 8,
      title: 'Live Band Performance',
      location: 'UAE Musicians',
      price: 6000,
      rating: 4.7,
      reviews: 87,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talents',
      description: '5-piece live band specializing in international and Arabic music',
      availability: 'Limited'
    },
    {
      id: 9,
      title: 'Professional Photographer',
      location: 'Dubai Photography',
      price: 2800,
      originalPrice: 3500,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talents',
      description: 'Award-winning photographer with full event coverage',
      availability: 'Available'
    },

    // Hosting
    {
      id: 10,
      title: 'Professional Event Host/MC',
      location: 'Dubai Events',
      price: 2200,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hosting',
      description: 'Bilingual professional host with 10+ years experience',
      availability: 'Available'
    },
    {
      id: 11,
      title: 'Celebrity Guest Speaker',
      location: 'VIP Speakers Bureau',
      price: 15000,
      originalPrice: 18000,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hosting',
      featured: true,
      description: 'Renowned business leader and motivational speaker',
      availability: 'Limited'
    },

    // Transportation
    {
      id: 12,
      title: 'Luxury Car Fleet Rental',
      location: 'Premium Auto Dubai',
      price: 5500,
      originalPrice: 7000,
      rating: 4.7,
      reviews: 112,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Transportation',
      description: 'Fleet of luxury vehicles with professional chauffeurs',
      availability: 'Available'
    },
    {
      id: 13,
      title: 'VIP Bus Transportation',
      location: 'Dubai Transport Co.',
      price: 3200,
      rating: 4.5,
      reviews: 76,
      image: 'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Transportation',
      description: 'Comfortable VIP bus service for group transportation',
      availability: 'Available'
    },

    // F&B
    {
      id: 14,
      title: 'Gourmet Catering Service',
      location: 'Dubai Catering Co.',
      price: 8500,
      originalPrice: 10200,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'F&B',
      featured: true,
      description: 'Premium catering with international and local cuisine options',
      availability: 'Available'
    },
    {
      id: 15,
      title: 'Premium Bar Service',
      location: 'Elite Bartenders',
      price: 4200,
      rating: 4.6,
      reviews: 134,
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'F&B',
      description: 'Professional bartenders with premium beverage selection',
      availability: 'Available'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const addToCart = (service: ServiceItem) => {
    const existingItem = cart.find(item => item.id === service.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === service.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
    
    if (!selectedItems.includes(service.id)) {
      setSelectedItems([...selectedItems, service.id]);
    }
  };

  const removeFromCart = (serviceId: number) => {
    setCart(cart.filter(item => item.id !== serviceId));
    setSelectedItems(selectedItems.filter(id => id !== serviceId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalSavings = () => {
    return cart.reduce((total, item) => {
      const originalPrice = item.originalPrice || item.price;
      return total + ((originalPrice - item.price) * item.quantity);
    }, 0);
  };

  const steps = [
    { number: 1, title: 'Select Services', icon: '📋', active: currentStep === 1 },
    { number: 2, title: 'Customize', icon: '⚙️', active: currentStep === 2 },
    { number: 3, title: 'Checkout', icon: '🛒', active: currentStep === 3 }
  ];

  const filterOptions = {
    attend: ['10-50', '50-100', '100-200', '200-500', '500+'],
    language: ['English', 'Arabic', 'French', 'Spanish', 'Hindi'],
    level: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    certificate: ['Yes', 'No'],
    privacy: ['Public', 'Private', 'Invite Only'],
    budget: ['Under 5K', '5K-10K', '10K-25K', '25K-50K', '50K+'],
    rate: ['1-2 Stars', '2-3 Stars', '3-4 Stars', '4-5 Stars', '5 Stars']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">About Us</a>
              <a href="#" className="hover:text-purple-200 transition-colors">Careers</a>
              <a href="#" className="hover:text-purple-200 transition-colors">Blogs</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">Contact Us</a>
              <button className="hover:text-purple-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-purple-200 transition-colors relative">
                <ShoppingCart className="w-4 h-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="hover:text-purple-200 transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Events
            </button>
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hashtags Studios
                </h1>
                <p className="text-xs text-gray-500">Your Creative Partner</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Let's create your event</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  step.active ? 'bg-purple-600' : 'bg-gray-400'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="ml-3 mr-8">
                  <div className={`text-sm font-medium ${step.active ? 'text-purple-600' : 'text-gray-500'}`}>
                    Step {step.number}
                  </div>
                  <div className={`text-xs ${step.active ? 'text-purple-600' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 ${step.active ? 'bg-purple-600' : 'bg-gray-300'} mr-8`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Your Selection Bar */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Your selection</span>
                <div className="flex gap-2">
                  {cart.slice(0, 6).map((item) => (
                    <div key={item.id} className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {cart.length > 6 && (
                    <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                      +{cart.length - 6}
                    </div>
                  )}
                  {cart.length === 0 && (
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Plus className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Next step
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key}>
                <select
                  value={filters[key as keyof typeof filters]}
                  onChange={(e) => setFilters({...filters, [key]: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Sort and View Options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="featured">New to old</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Services / Items</h2>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-white'
                    }`}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Your Selection Summary */}
              {selectedItems.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Your Selection</h3>
                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
                          <div className="text-xs text-purple-600">AED {item.price} x {item.quantity}</div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total:</span>
                      <span className="font-bold text-purple-600">AED {getTotalPrice().toLocaleString()}</span>
                    </div>
                    {getTotalSavings() > 0 && (
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-green-600">You save:</span>
                        <span className="font-bold text-green-600">AED {getTotalSavings().toLocaleString()}</span>
                      </div>
                    )}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                      Next Step
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Services Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    selectedItems.includes(service.id) ? 'ring-2 ring-purple-500' : ''
                  } ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'h-48'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {service.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-sm font-medium ${
                      service.availability === 'Available' ? 'bg-green-100 text-green-800' :
                      service.availability === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {service.availability}
                    </div>
                    <button className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{service.title}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {service.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-500 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          AED {service.price.toLocaleString()}
                        </div>
                        {service.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            AED {service.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => addToCart(service)}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                          selectedItems.includes(service.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        }`}
                      >
                        {selectedItems.includes(service.id) ? (
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Added
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Studios</h3>
                  <p className="text-xs text-gray-400">Your Creative Partner</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Creating unforgettable private events and connecting communities across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Venue Booking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Decoration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Catering Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transportation</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">info@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center text-gray-400 text-sm">
              © 2024 Hashtags Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};