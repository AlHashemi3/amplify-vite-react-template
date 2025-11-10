import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Star, ChevronLeft, ChevronRight, Filter, Grid, List, Camera, Video, Megaphone, Palette, Monitor, Lightbulb, Target, Award } from 'lucide-react';

interface AdvertisementPageProps {
  onBack?: () => void;
}

interface ServiceItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  featured?: boolean;
}

export const AdvertisementPage: React.FC<AdvertisementPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All', icon: '🎯', color: 'bg-blue-100 text-blue-800' },
    { id: 'Hashtags', name: 'Hashtags', icon: '#️⃣', color: 'bg-purple-100 text-purple-800' },
    { id: 'Advertisement', name: 'Advertisement', icon: '📢', color: 'bg-green-100 text-green-800' },
    { id: 'Production', name: 'Production', icon: '🎬', color: 'bg-red-100 text-red-800' }
  ];

  const services: ServiceItem[] = [
    // All/Mixed Content
    {
      id: 1,
      title: 'Times Square Digital Billboard Campaign',
      category: 'All',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium digital billboard advertising in high-traffic urban locations',
      rating: 4.9,
      reviews: 156,
      price: 'From AED 25,000',
      featured: true
    },
    {
      id: 2,
      title: 'Street Art & Mural Advertising',
      category: 'All',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Creative street art and mural campaigns for brand awareness',
      rating: 4.7,
      reviews: 89,
      price: 'From AED 15,000',
    },
    {
      id: 3,
      title: 'Urban Billboard Network',
      category: 'All',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Strategic billboard placements across major city locations',
      rating: 4.8,
      reviews: 234,
      price: 'From AED 18,000',
    },
    {
      id: 4,
      title: 'Digital Signage Solutions',
      category: 'All',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern digital signage for retail and commercial spaces',
      rating: 4.6,
      reviews: 167,
      price: 'From AED 12,000',
    },
    {
      id: 5,
      title: 'Outdoor Advertising Campaign',
      category: 'All',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive outdoor advertising solutions',
      rating: 4.5,
      reviews: 198,
      price: 'From AED 20,000',
    },
    {
      id: 6,
      title: 'Transit Advertising',
      category: 'All',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bus, metro, and transit system advertising campaigns',
      rating: 4.4,
      reviews: 145,
      price: 'From AED 8,000',
    },

    // Advertisement Specific
    {
      id: 7,
      title: 'Premium Billboard Campaign',
      category: 'Advertisement',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'High-impact billboard advertising in prime locations',
      rating: 4.9,
      reviews: 278,
      price: 'From AED 30,000',
      featured: true
    },
    {
      id: 8,
      title: 'Digital Display Network',
      category: 'Advertisement',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Network of digital displays across shopping centers',
      rating: 4.7,
      reviews: 189,
      price: 'From AED 22,000',
    },
    {
      id: 9,
      title: 'Highway Billboard Advertising',
      category: 'Advertisement',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Strategic highway billboard placements for maximum reach',
      rating: 4.8,
      reviews: 156,
      price: 'From AED 35,000',
    },

    // Production Specific
    {
      id: 10,
      title: 'Commercial Video Production',
      category: 'Production',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional commercial and promotional video production',
      rating: 4.9,
      reviews: 234,
      price: 'From AED 15,000',
      featured: true
    },
    {
      id: 11,
      title: 'Studio Photography Services',
      category: 'Production',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional studio photography for advertising campaigns',
      rating: 4.8,
      reviews: 167,
      price: 'From AED 8,000',
    },
    {
      id: 12,
      title: 'Creative Content Production',
      category: 'Production',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'End-to-end creative content production services',
      rating: 4.7,
      reviews: 198,
      price: 'From AED 12,000',
    }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'All' || service.category === selectedCategory;
  });

  const toggleLike = (itemId: number) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  const toggleBookmark = (itemId: number) => {
    if (bookmarkedItems.includes(itemId)) {
      setBookmarkedItems(bookmarkedItems.filter(id => id !== itemId));
    } else {
      setBookmarkedItems([...bookmarkedItems, itemId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Portfolio</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Case Studies</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">Contact Us</a>
              <button className="hover:text-blue-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-blue-200 transition-colors">
                <ShoppingCart className="w-4 h-4" />
              </button>
              <button className="hover:text-blue-200 transition-colors">
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
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Hashtags Studios
                </h1>
                <p className="text-xs text-gray-500">Advertising & Production</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Advertising Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Advertising & Production Excellence</h1>
            <p className="text-xl mb-8">Creating impactful campaigns that drive results and tell your brand story</p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Megaphone className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-semibold mb-2">500+</h3>
                <p className="text-sm opacity-90">Campaigns</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Camera className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <h3 className="font-semibold mb-2">1000+</h3>
                <p className="text-sm opacity-90">Productions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">95%</h3>
                <p className="text-sm opacity-90">Success Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-3 text-red-300" />
                <h3 className="font-semibold mb-2">50+</h3>
                <p className="text-sm opacity-90">Awards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === 0 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Directly to your needs</h2>
          </div>
          
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="What are you looking for..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-gray-100 rounded">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-800 shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-2xl">
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Services' : selectedCategory}
          </h2>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Item */}
            {filteredServices.slice(0, 1).map((service) => (
              <div key={service.id} className="md:col-span-2 lg:row-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-96">
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
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleLike(service.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                          likedItems.includes(service.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/80 text-gray-700 hover:bg-red-50 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedItems.includes(service.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleBookmark(service.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                          bookmarkedItems.includes(service.id) 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-500'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${bookmarkedItems.includes(service.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
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
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Regular Grid Items */}
            {filteredServices.slice(1).map((service) => (
              <div key={service.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48">
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
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleLike(service.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                          likedItems.includes(service.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/80 text-gray-700 hover:bg-red-50 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedItems.includes(service.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleBookmark(service.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                          bookmarkedItems.includes(service.id) 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-500'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedItems.includes(service.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-500 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {service.rating} ({service.reviews})
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-blue-600">{service.price}</div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all text-sm">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Not sure what you want?</h2>
          <p className="text-xl mb-6">Finding the perfect brand for your next dream project</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Consultation
          </button>
        </div>

        {/* Reviews Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Client Reviews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rating Overview */}
            <div>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-orange-400 fill-current mr-2" />
                <span className="text-3xl font-bold text-gray-900">4.75</span>
                <span className="text-gray-600 ml-2">(719 Rating)</span>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Campaign effectiveness', rating: 4.8 },
                  { label: 'Creative quality', rating: 4.7 },
                  { label: 'Project management', rating: 4.6 },
                  { label: 'Value for money', rating: 4.8 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{item.label}</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-orange-400 rounded-full" 
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Customer Reviews */}
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                          ))}
                          <span className="ml-2 text-sm font-medium">5.0</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        Outstanding creative work and professional execution. The campaign exceeded our expectations and delivered excellent ROI.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press About Us */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">Press About Us</h2>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {['BBC', 'CNN', 'REUTERS', 'VOGUE', 'WIRED', 'TechCrunch'].map((brand) => (
              <div key={brand} className="text-gray-400 font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Studios</h3>
                  <p className="text-xs text-gray-400">Advertising & Production</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Creating impactful advertising campaigns and premium production services across the UAE.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Billboard Advertising</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Campaigns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative Services</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Industries</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retail & Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Real Estate</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">ads@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
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