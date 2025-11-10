import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Star, Heart, ChevronLeft, ChevronRight, Filter, Grid, List, Search, Plus, Check, ShoppingBag, X } from 'lucide-react';

interface CreateEventPageProps {
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
  capacity: string;
  spaceType: string;
}

interface CartItem extends ServiceItem {
  quantity: number;
}

export const CreateEventPage: React.FC<CreateEventPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('Venue');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
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
    { 
      id: 'Venue', 
      name: 'Venue', 
      icon: '🏢',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    { 
      id: 'Decoration', 
      name: 'Decoration', 
      icon: '🎨',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    { 
      id: 'Talents', 
      name: 'talents', 
      icon: '🎭',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    { 
      id: 'Hosting', 
      name: 'Hosting', 
      icon: '🎤',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    { 
      id: 'Transportation', 
      name: 'Transportation', 
      icon: '🚗',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    { 
      id: 'F&B', 
      name: 'F&B', 
      icon: '🍽️',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const services: ServiceItem[] = [
    // Venues
    {
      id: 1,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      originalPrice: 10500,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: true,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 2,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      originalPrice: 10500,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 3,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 4,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 5,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 6,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 7,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 8,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    {
      id: 9,
      title: 'Versatile Industrial Chic Venue in Al Quoz',
      location: 'Al Quoz, Dubai',
      price: 8640,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Venue',
      featured: false,
      description: 'Event Space • Indoor • Dubai',
      availability: 'Available',
      capacity: '251 m² / 300 Person',
      spaceType: 'Indoor'
    },
    
    // Decorations
    {
      id: 10,
      title: 'Premium Floral Arrangements',
      location: 'Dubai Florist',
      price: 2500,
      originalPrice: 3200,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Decoration',
      description: 'Decoration Service • Premium • Dubai',
      availability: 'Available',
      capacity: 'Custom Size',
      spaceType: 'Any Venue'
    },
    {
      id: 11,
      title: 'LED Lighting & Stage Setup',
      location: 'Event Tech Dubai',
      price: 4500,
      rating: 4.8,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Decoration',
      featured: true,
      description: 'Lighting Service • Professional • Dubai',
      availability: 'Available',
      capacity: 'Large Events',
      spaceType: 'Indoor/Outdoor'
    },

    // Talents
    {
      id: 12,
      title: 'Professional DJ & Sound System',
      location: 'Dubai Entertainment',
      price: 3500,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 134,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talents',
      featured: true,
      description: 'DJ Service • Professional • Dubai',
      availability: 'Available',
      capacity: '500+ Guests',
      spaceType: 'Any Venue'
    },
    {
      id: 13,
      title: 'Live Band Performance',
      location: 'UAE Musicians',
      price: 6000,
      rating: 4.7,
      reviews: 87,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Talents',
      description: 'Music Service • Live Band • Dubai',
      availability: 'Limited',
      capacity: '200+ Guests',
      spaceType: 'Indoor/Outdoor'
    },

    // Hosting
    {
      id: 14,
      title: 'Professional Event Host/MC',
      location: 'Dubai Events',
      price: 2200,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hosting',
      description: 'Hosting Service • Bilingual • Dubai',
      availability: 'Available',
      capacity: 'Any Size',
      spaceType: 'Any Venue'
    },

    // Transportation
    {
      id: 15,
      title: 'Luxury Car Fleet Rental',
      location: 'Premium Auto Dubai',
      price: 5500,
      originalPrice: 7000,
      rating: 4.7,
      reviews: 112,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Transportation',
      description: 'Transport Service • Luxury • Dubai',
      availability: 'Available',
      capacity: '10 Vehicles',
      spaceType: 'City Wide'
    },

    // F&B
    {
      id: 16,
      title: 'Gourmet Catering Service',
      location: 'Dubai Catering Co.',
      price: 8500,
      originalPrice: 10200,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'F&B',
      featured: true,
      description: 'Catering Service • Gourmet • Dubai',
      availability: 'Available',
      capacity: '500+ Guests',
      spaceType: 'Any Venue'
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

  const handleNextStep = () => {
    if (cart.length === 0) {
      alert('Please select at least one service before proceeding.');
      return;
    }
    setShowCheckoutModal(true);
  };

  const proceedToCheckout = () => {
    setShowCheckoutModal(false);
    setCurrentStep(2);
    // In real app, navigate to checkout page
    alert('Proceeding to checkout...');
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

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                  step.active ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-400'
                }`}>
                  <span>{step.icon}</span>
                </div>
                <div className="ml-4 mr-8">
                  <div className={`text-lg font-bold ${step.active ? 'text-purple-600' : 'text-gray-500'}`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-1 ${step.active ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-300'} mr-8`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Your Selection Bar */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-gray-900">Your selection</span>
                <div className="flex gap-3">
                  {cart.slice(0, 6).map((item) => (
                    <div key={item.id} className="relative group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-lg"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {cart.length > 6 && (
                    <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                      +{cart.length - 6}
                    </div>
                  )}
                  {cart.length === 0 && (
                    <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={handleNextStep}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
              >
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                >
                  <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Services / Items</h2>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                <option value="featured">New to old</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex flex-col items-center p-4 rounded-2xl transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    selectedItems.includes(service.id) ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {service.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}
                    <button
                      onClick={() => addToCart(service)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all shadow-lg ${
                        selectedItems.includes(service.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      {selectedItems.includes(service.id) ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>
                    <button className="absolute bottom-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <p className="text-sm text-gray-500">{service.capacity}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xl font-bold text-purple-600">
                          AED {service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">per day</div>
                        {service.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            AED {service.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => addToCart(service)}
                      className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                        selectedItems.includes(service.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      }`}
                    >
                      {selectedItems.includes(service.id) ? (
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5" />
                          Added to Selection
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Plus className="w-5 h-5" />
                          Add to Selection
                        </div>
                      )}
                    </button>
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
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Verification Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Review Your Selection</h3>
              <p className="text-gray-600">Please verify your selected services before proceeding to checkout</p>
            </div>
            
            {/* Selected Services Review */}
            <div className="space-y-6 mb-8">
              {categories.map((category) => {
                const categoryItems = cart.filter(item => item.category === category.id);
                if (categoryItems.length === 0) return null;
                
                return (
                  <div key={category.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-2xl">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{category.name}</h4>
                        <p className="text-sm text-gray-600">{categoryItems.length} item{categoryItems.length !== 1 ? 's' : ''} selected</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {categoryItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {item.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                {item.rating} ({item.reviews} reviews)
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-purple-600">
                              AED {(item.price * item.quantity).toLocaleString()}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                AED {(item.originalPrice * item.quantity).toLocaleString()}
                              </div>
                            )}
                            <div className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">AED {getTotalPrice().toLocaleString()}</span>
                </div>
                
                {getTotalSavings() > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Total Savings</span>
                    <span className="font-semibold">-AED {getTotalSavings().toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-semibold">AED 200</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">VAT (5%)</span>
                  <span className="font-semibold">AED {Math.round((getTotalPrice() + 200) * 0.05).toLocaleString()}</span>
                </div>
                
                <div className="border-t border-purple-200 pt-3">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="text-purple-600">
                      AED {Math.round(getTotalPrice() + 200 + ((getTotalPrice() + 200) * 0.05)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details Form */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Event Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
                  <input
                    type="text"
                    placeholder="Enter event venue or address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Guests</label>
                  <input
                    type="number"
                    placeholder="Number of guests"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Anniversary</option>
                    <option>Conference</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Any special requests or requirements for your event..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="terms" className="text-sm text-blue-800">
                  <span className="font-semibold">I agree to the terms and conditions</span>
                  <br />
                  By proceeding, I confirm that all selected services are correct and I understand the pricing, 
                  cancellation policy, and service terms. I authorize Hashtags Studios to process this booking.
                </label>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Back to Selection
              </button>
              <button 
                onClick={proceedToCheckout}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

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
                Creating unforgettable events and connecting communities across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Planning</a></li>
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