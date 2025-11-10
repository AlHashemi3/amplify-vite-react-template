import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Star, Heart, Share2, Bookmark, TrendingUp, Search, Filter, Grid, List, Play, Eye, ThumbsUp, Users, Award, Camera, Music, Palette, Mic, CheckCircle, ExternalLink, Instagram, Twitter, Facebook, Linkedin, Globe, MoreHorizontal, Send, Zap, Crown, Verified, Plus, Ticket } from 'lucide-react';

interface EventsPageProps {
  onBack?: () => void;
  onEventClick?: (eventId: number) => void;
}

interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  price: number;
  originalPrice?: number;
  image: string;
  attendees: number;
  maxAttendees: number;
  rating: number;
  reviews: number;
  organizer: string;
  organizerImage: string;
  description: string;
  tags: string[];
  featured?: boolean;
  status?: string;
  trending?: boolean;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onBack, onEventClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedEvents, setLikedEvents] = useState<number[]>([]);
  const [bookmarkedEvents, setBookmarkedEvents] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Events', icon: '✨' },
    { id: 'Music', name: 'Music & Concerts', icon: '🎵', count: 24 },
    { id: 'Business', name: 'Business & Corporate', icon: '💼', count: 18 },
    { id: 'Food', name: 'Food & Dining', icon: '🍽️', count: 12 },
    { id: 'Gaming', name: 'Gaming & Esports', icon: '🎮', count: 15 },
    { id: 'Education', name: 'Education & Workshops', icon: '📚', count: 9 },
    { id: 'Photography', name: 'Photography', icon: '📸', count: 8 },
    { id: 'Sports', name: 'Sports & Fitness', icon: '⚽', count: 6 },
    { id: 'Arts', name: 'Arts & Culture', icon: '🎨', count: 11 }
  ];

  const events: Event[] = [
    {
      id: 1,
      title: 'Dubai Music Festival 2024',
      category: 'Music',
      date: '2024-02-15',
      time: '19:00',
      endTime: '23:00',
      location: 'Dubai Opera House',
      price: 150,
      originalPrice: 200,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 1250,
      maxAttendees: 2000,
      rating: 4.8,
      reviews: 324,
      organizer: 'Dubai Events Co.',
      organizerImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experience the best of international and local music artists in this spectacular festival.',
      tags: ['Live Music', 'Festival', 'International Artists'],
      featured: true,
      status: 'Early Bird',
      trending: true
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      category: 'Business',
      date: '2024-02-20',
      time: '09:00',
      endTime: '17:00',
      location: 'DIFC Conference Center',
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 800,
      maxAttendees: 1000,
      rating: 4.9,
      reviews: 156,
      organizer: 'Tech Dubai',
      organizerImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Join industry leaders discussing the future of technology and innovation.',
      tags: ['Technology', 'Innovation', 'Networking'],
      featured: true,
      trending: true
    },
    {
      id: 3,
      title: 'Art Gallery Opening',
      category: 'Arts',
      date: '2024-02-25',
      time: '18:00',
      endTime: '22:00',
      location: 'Alserkal Avenue',
      price: 75,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 200,
      maxAttendees: 300,
      rating: 4.7,
      reviews: 89,
      organizer: 'Art Collective UAE',
      organizerImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover contemporary art from emerging and established artists.',
      tags: ['Art', 'Gallery', 'Contemporary'],
      featured: false
    },
    {
      id: 4,
      title: 'Gourmet Food Festival',
      category: 'Food',
      date: '2024-03-01',
      time: '12:00',
      endTime: '22:00',
      location: 'Dubai Marina Walk',
      price: 120,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 500,
      maxAttendees: 800,
      rating: 4.6,
      reviews: 234,
      organizer: 'Culinary Events',
      organizerImage: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Taste the finest cuisines from around the world in one spectacular event.',
      tags: ['Food', 'Festival', 'International Cuisine'],
      featured: true
    },
    {
      id: 5,
      title: 'Gaming Championship 2024',
      category: 'Gaming',
      date: '2024-03-05',
      time: '10:00',
      endTime: '20:00',
      location: 'Dubai World Trade Centre',
      price: 50,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 2000,
      maxAttendees: 3000,
      rating: 4.8,
      reviews: 445,
      organizer: 'UAE Gaming League',
      organizerImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The biggest gaming tournament in the Middle East with massive prize pools.',
      tags: ['Gaming', 'Esports', 'Tournament'],
      trending: true
    },
    {
      id: 6,
      title: 'Photography Workshop',
      category: 'Photography',
      date: '2024-03-10',
      time: '14:00',
      endTime: '18:00',
      location: 'Creative Hub Dubai',
      price: 180,
      originalPrice: 220,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 45,
      maxAttendees: 60,
      rating: 4.9,
      reviews: 78,
      organizer: 'Photo Masters',
      organizerImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn advanced photography techniques from professional photographers.',
      tags: ['Photography', 'Workshop', 'Learning'],
      featured: false
    },
    {
      id: 7,
      title: 'Business Networking Night',
      category: 'Business',
      date: '2024-03-12',
      time: '18:30',
      endTime: '21:30',
      location: 'Four Seasons Resort Dubai',
      price: 95,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 150,
      maxAttendees: 200,
      rating: 4.5,
      reviews: 67,
      organizer: 'Business Network UAE',
      organizerImage: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Connect with like-minded professionals and expand your business network.',
      tags: ['Networking', 'Business', 'Professional'],
      featured: false
    },
    {
      id: 8,
      title: 'Fitness & Wellness Expo',
      category: 'Sports',
      date: '2024-03-15',
      time: '08:00',
      endTime: '18:00',
      location: 'Dubai International Convention Centre',
      price: 40,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 3000,
      maxAttendees: 5000,
      rating: 4.7,
      reviews: 892,
      organizer: 'Wellness Dubai',
      organizerImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover the latest in fitness, nutrition, and wellness trends.',
      tags: ['Fitness', 'Wellness', 'Health'],
      featured: true,
      trending: true
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'attendees':
        return b.attendees - a.attendees;
      default:
        return 0;
    }
  });

  const toggleLike = (eventId: number) => {
    if (likedEvents.includes(eventId)) {
      setLikedEvents(likedEvents.filter(id => id !== eventId));
    } else {
      setLikedEvents([...likedEvents, eventId]);
    }
  };

  const toggleBookmark = (eventId: number) => {
    if (bookmarkedEvents.includes(eventId)) {
      setBookmarkedEvents(bookmarkedEvents.filter(id => id !== eventId));
    } else {
      setBookmarkedEvents([...bookmarkedEvents, eventId]);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
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
              <button className="hover:text-purple-200 transition-colors">
                <ShoppingCart className="w-4 h-4" />
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
              Back to Home
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
                  Hashtags Events
                </h1>
                <p className="text-xs text-gray-500">Discover Amazing Events</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Discover Amazing Events</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              From music festivals to business conferences, find and book the perfect events in Dubai and across the UAE.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search events, venues, or organizers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-16 text-gray-900 rounded-xl border-0 focus:ring-4 focus:ring-purple-300 text-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-purple-200">Events This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-purple-200">Happy Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-purple-200">Verified Organizers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-purple-200">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                {category.count && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="trending">Trending</option>
                <option value="date">Date</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="attendees">Most Popular</option>
              </select>
            </div>
            
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Date</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Next Month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Price</option>
                    <option>Free</option>
                    <option>Under AED 100</option>
                    <option>AED 100 - 300</option>
                    <option>Above AED 300</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Locations</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Online</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Size</option>
                    <option>Small (Under 100)</option>
                    <option>Medium (100-500)</option>
                    <option>Large (500-1000)</option>
                    <option>Mega (1000+)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Events Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              onClick={() => onEventClick?.(event.id)}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-48'}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {event.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  {event.trending && (
                    <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  {event.status && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {event.status}
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(event.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                      likedEvents.includes(event.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedEvents.includes(event.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(event.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                      bookmarkedEvents.includes(event.id) 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-purple-50 hover:text-purple-500'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedEvents.includes(event.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Ticket className="w-3 h-3 text-purple-600" />
                    <span className="text-sm font-bold text-purple-600">AED {event.price}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-purple-600 font-medium text-sm">{event.category}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time} - {event.endTime}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {formatNumber(event.attendees)} attending
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(event.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {event.rating} ({event.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Organizer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src={event.organizerImage} 
                      alt={event.organizer}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{event.organizer}</span>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">AED {event.price}</div>
                    {event.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">AED {event.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-300 mb-6">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or category filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setShowFilters(false);
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {sortedEvents.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
              Load More Events
            </button>
          </div>
        )}
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
                  <h3 className="text-xl font-bold">Hashtags Events</h3>
                  <p className="text-xs text-gray-400">Discover Amazing Events</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Your premier destination for discovering and booking amazing events across the UAE.
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

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Event Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Music & Concerts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business & Corporate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food & Dining</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arts & Culture</a></li>
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
                  <span className="text-gray-400">events@hashtagsstudios.com</span>
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
              © 2024 Hashtags Events. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};