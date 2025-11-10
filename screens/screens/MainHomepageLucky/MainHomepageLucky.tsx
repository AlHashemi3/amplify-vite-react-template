import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Heart, Share2, Ticket, Award, Music, Camera, Utensils, Gamepad2, Briefcase, GraduationCap, Bell, ShoppingCart, User, Sparkles, Phone, Mail, MessageCircle, ArrowRight, Play, TrendingUp, Zap, Target, Gift, Palette, Megaphone, Building, Gavel, HeadphonesIcon, Monitor, Search, ChevronRight, ChevronLeft, Eye, ThumbsUp, BookOpen, Globe, Shield, CheckCircle } from 'lucide-react';
import { StorePage } from '../StorePage/StorePage';
import { TalentsPage } from '../TalentsPage/TalentsPage';
import { AcademyPage } from '../AcademyPage/AcademyPage';
import { MagazinePage } from '../MagazinePage/MagazinePage';
import { PlatformPage } from '../PlatformPage/PlatformPage';
import { DonationsPage } from '../DonationsPage/DonationsPage';
import { CreateEventPage } from '../CreateEventPage/CreateEventPage';
import { EventDetailPage } from '../EventDetailPage/EventDetailPage';
import { AdvertisementPage } from '../AdvertisementPage/AdvertisementPage';
import { NotificationsPage } from '../NotificationsPage/NotificationsPage';
import { TalentProfilePage } from '../TalentProfilePage/TalentProfilePage';
import { JobsComingSoonPage } from '../JobsComingSoonPage/JobsComingSoonPage';
import { EventRegistrationForm } from '../EventRegistrationForm/EventRegistrationForm';
import { CreatePrivateEventPage } from '../CreatePrivateEventPage/CreatePrivateEventPage';
import { EventsPage } from '../EventsPage/EventsPage';
import { CompetitionPage } from '../CompetitionPage/CompetitionPage';
import { AuctionPage } from '../AuctionPage/AuctionPage';
import { JobsPage } from '../JobsPage/JobsPage';
import { SignUpPage } from '../SignUpPage/SignUpPage';
import { DashboardPage } from '../DashboardPage/DashboardPage';
import { ModelProfilePage } from '../ModelProfilePage/ModelProfilePage';
import { CompetitionEntryPage } from '../CompetitionEntryPage/CompetitionEntryPage';
import { PlayWinPage } from '../PlayWinPage/PlayWinPage';
import { AboutUsPage } from '../AboutUsPage/AboutUsPage';

export const MainHomepageLucky: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedTalentId, setSelectedTalentId] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handlePageNavigation = (page: string, id?: number) => {
    if (id) {
      if (page === 'event-detail') setSelectedEventId(id);
      if (page === 'talent-profile') setSelectedTalentId(id);
    }
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedEventId(null);
    setSelectedTalentId(null);
  };

  // Render different pages based on current state
  if (currentPage === 'store') {
    return <StorePage onBack={handleBackToHome} />;
  }
  if (currentPage === 'talents') {
    return <TalentsPage onBack={handleBackToHome} onTalentClick={(id) => handlePageNavigation('talent-profile', id)} />;
  }
  if (currentPage === 'academy') {
    return <AcademyPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'magazine') {
    return <MagazinePage onBack={handleBackToHome} />;
  }
  if (currentPage === 'platform') {
    return <PlatformPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'donations') {
    return <DonationsPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'create-event') {
    return <CreateEventPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'advertisement') {
    return <AdvertisementPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'notifications') {
    return <NotificationsPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'jobs-coming-soon') {
    return <JobsComingSoonPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'event-registration') {
    return <EventRegistrationForm onBack={handleBackToHome} />;
  }
  if (currentPage === 'create-private-event') {
    return <CreatePrivateEventPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'events') {
    return <EventsPage onBack={handleBackToHome} onEventClick={(id) => handlePageNavigation('event-detail', id)} />;
  }
  if (currentPage === 'competition') {
    return <CompetitionPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'competition-entry') {
    return <CompetitionEntryPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'auctions') {
    return <AuctionPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'jobs') {
    return <JobsPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'signup') {
    return <SignUpPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'dashboard') {
    return <DashboardPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'event-detail' && selectedEventId) {
    return <EventDetailPage eventId={selectedEventId} onBack={handleBackToHome} />;
  }
  if (currentPage === 'talent-profile' && selectedTalentId) {
    return <TalentProfilePage talentId={selectedTalentId} onBack={handleBackToHome} />;
  }
  if (currentPage === 'model-profile' && selectedTalentId) {
    return <ModelProfilePage modelId={selectedTalentId} onBack={handleBackToHome} />;
  }
  if (currentPage === 'gaming') {
    return <PlayWinPage onBack={handleBackToHome} />;
  }
  if (currentPage === 'about') {
    return <AboutUsPage onBack={handleBackToHome} />;
  }

  const services = [
    { id: 'events', name: 'Events', icon: Calendar, description: 'Discover and book amazing events', color: 'from-blue-500 to-blue-600' },
    { id: 'jobs', name: 'Jobs', icon: Briefcase, description: 'Find your dream career', color: 'from-teal-500 to-teal-600' },
    { id: 'talents', name: 'Talents', icon: Users, description: 'Connect with creative professionals', color: 'from-purple-500 to-purple-600' },
    { id: 'platform', name: 'Platform', icon: Zap, description: 'Create and share content', color: 'from-orange-500 to-orange-600' },
    { id: 'store', name: 'Store', icon: ShoppingCart, description: 'Shop premium products', color: 'from-green-500 to-green-600' },
    { id: 'magazine', name: 'Magazine', icon: BookOpen, description: 'Read inspiring stories', color: 'from-pink-500 to-pink-600' },
    { id: 'advertisement', name: 'Advertisement', icon: Megaphone, description: 'Promote your brand', color: 'from-red-500 to-red-600' },
    { id: 'academy', name: 'Academy', icon: GraduationCap, description: 'Learn new skills', color: 'from-indigo-500 to-indigo-600' },
    { id: 'donations', name: 'Donations', icon: Heart, description: 'Support great causes', color: 'from-emerald-500 to-emerald-600' },
    { id: 'competition', name: 'Competition', icon: Award, description: 'Join exciting contests', color: 'from-yellow-500 to-yellow-600' },
    { id: 'auctions', name: 'Auctions', icon: Gavel, description: 'Bid on exclusive items', color: 'from-amber-500 to-orange-500' },
    { id: 'consulting', name: 'Consulting', icon: Target, description: 'Expert business advice', color: 'from-blue-500 to-cyan-500' },
    { id: 'marketplace', name: 'Marketplace', icon: Building, description: 'Buy and sell services', color: 'from-violet-500 to-violet-600' },
    { id: 'streaming', name: 'Streaming', icon: Monitor, description: 'Live video content', color: 'from-red-500 to-pink-500' },
    { id: 'gaming', name: 'Play & Win', icon: Gamepad2, description: 'Esports and tournaments', color: 'from-cyan-500 to-blue-500' }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: 'Dubai Music Festival 2024',
      date: '2024-02-15',
      time: '19:00',
      location: 'Dubai Opera House',
      price: 150,
      originalPrice: 200,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 1250,
      rating: 4.8,
      category: 'Music',
      featured: true
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      date: '2024-02-20',
      time: '09:00',
      location: 'DIFC Conference Center',
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 800,
      rating: 4.9,
      category: 'Business',
      featured: true
    },
    {
      id: 3,
      title: 'Art Gallery Opening',
      date: '2024-02-25',
      time: '18:00',
      location: 'Alserkal Avenue',
      price: 75,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 200,
      rating: 4.7,
      category: 'Arts',
      featured: false
    }
  ];

  const featuredTalents = [
    {
      id: 1,
      name: 'Layla Al-Zahra',
      role: 'Fashion Model',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      followers: 125000,
      verified: true
    },
    {
      id: 2,
      name: 'Omar Hassan',
      role: 'Professional DJ',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 203,
      followers: 89000,
      verified: true
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      role: 'Event Photographer',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 178,
      followers: 67000,
      verified: true
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      role: 'Event Organizer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Hashtags Studios transformed our corporate event into an unforgettable experience. Their attention to detail and professional service exceeded all expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      role: 'Wedding Planner',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working with their talented photographers and event coordinators made our wedding day absolutely perfect. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The platform made it so easy to find and book the perfect venue and services for our product launch. Everything was seamless.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Events Created', icon: Calendar },
    { number: '50,000+', label: 'Happy Clients', icon: Users },
    { number: '500+', label: 'Verified Talents', icon: Award },
    { number: '4.9', label: 'Average Rating', icon: Star }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <header className="relative z-50">
        {/* Theme Toggle Bar */}
        <div className={`border-b transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-end">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-300'
                }`}
              >
                {isDarkMode ? (
                  <>
                    <span className="text-yellow-400">☀️</span>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <span className="text-purple-600">🌙</span>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}>
                  <span className={`font-bold text-xl transition-colors duration-300 ${
                    isDarkMode ? 'text-black' : 'text-white'
                  }`}>#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>HASHTAGS</h1>
                <p className={`text-xs -mt-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>STUDIOS</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Services</a>
              <a href="#events" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Events</a>
              <a href="#talents" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Talents</a>
              <button 
                onClick={() => handlePageNavigation('about')}
                className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>About</button>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handlePageNavigation('notifications')}
                className={`relative p-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className={`p-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handlePageNavigation('signup')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                Sign Up
              </button>
              <button 
                onClick={() => handlePageNavigation('dashboard')}
                className={`px-8 py-4 backdrop-blur-sm rounded-xl font-bold text-lg border transition-all ${
                  isDarkMode 
                    ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' 
                    : 'bg-black/10 text-gray-900 border-gray-300 hover:bg-black/20'
                }`}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDarkMode ? '' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Hero Background"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isDarkMode ? 'opacity-20' : 'opacity-10'
            }`}
          />
          <div className={`absolute inset-0 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-b from-black/50 via-black/70 to-black' 
              : 'bg-gradient-to-b from-white/80 via-white/90 to-white'
          }`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
            isDarkMode 
              ? 'from-white via-gray-100 to-gray-300' 
              : 'from-gray-900 via-gray-700 to-gray-500'
          }`}>
            Create. Connect. Celebrate.
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Your all-in-one creative platform for events, talents, learning, and premium services in the UAE
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => handlePageNavigation('signup')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
            >
              Get Started
            </button>
            <button 
              onClick={() => handlePageNavigation('talents')}
              className={`px-8 py-4 backdrop-blur-sm rounded-xl font-bold text-lg border transition-all ${
                isDarkMode 
                  ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' 
                  : 'bg-black/10 text-gray-900 border-gray-300 hover:bg-black/20'
              }`}
            >
              Explore Talents
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{stat.number}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-300 ${
            isDarkMode ? 'border-white/30' : 'border-gray-400/50'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse transition-colors duration-300 ${
              isDarkMode ? 'bg-white/50' : 'bg-gray-500/70'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 relative transition-colors duration-300 ${
        isDarkMode ? '' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Our Services</h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Comprehensive creative solutions for all your needs - from events and talent management to digital content and premium products.
            </p>
          </div>

          {/* Horizontal Services with Navigation */}
          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('services-container');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('services-container');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Left Fade */}
            <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none transition-all duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-gray-50 to-transparent'
            }`}></div>
            
            {/* Right Fade */}
            <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none transition-all duration-300 ${
              isDarkMode ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-gray-50 to-transparent'
            }`}></div>
            
            {/* Services Container */}
            <div 
              id="services-container"
              className="flex gap-8 overflow-x-auto scrollbar-hide px-32 py-8"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                const opacity = index === 0 || index === services.length - 1 ? 'opacity-30' :
                               index === 1 || index === services.length - 2 ? 'opacity-50' :
                               index === 2 || index === services.length - 3 ? 'opacity-70' :
                               index === 3 || index === services.length - 4 ? 'opacity-85' : 'opacity-100';
                
                return (
                  <div key={service.id} className={`flex-shrink-0 text-center ${opacity}`}>
                    <button
                      onClick={() => {
                        if (service.id === 'events') {
                          handlePageNavigation('events');
                        } else if (service.id === 'competition') {
                          handlePageNavigation('competition');
                        } else if (service.id === 'jobs') {
                          handlePageNavigation('jobs');
                        } else if (service.id === 'gaming') {
                          handlePageNavigation('gaming');
                        } else {
                          handlePageNavigation(service.id);
                        }
                      }}
                      className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group mb-3`}
                    >
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <h3 className={`text-sm font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {service.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="events" className={`py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Featured Events</h2>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Discover amazing events happening in Dubai</p>
            </div>
            <button 
              onClick={() => handlePageNavigation('create-event')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div 
                key={event.id} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
                }`}
                onClick={() => handlePageNavigation('event-detail', event.id)}
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  <div className={`absolute top-4 right-4 backdrop-blur-sm px-2 py-1 rounded-full text-sm ${
                    isDarkMode 
                      ? 'bg-black/50 text-white' 
                      : 'bg-white/80 text-gray-900'
                  }`}>
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isDarkMode 
                      ? 'text-white group-hover:text-purple-400' 
                      : 'text-gray-900 group-hover:text-purple-600'
                  }`}>
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className={`flex items-center text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className={`flex items-center text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-2xl font-bold transition-colors duration-300 ${
                        isDarkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}>AED {event.price}</div>
                      {event.originalPrice && (
                        <div className={`text-sm line-through transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>AED {event.originalPrice}</div>
                      )}
                    </div>
                    <div className={`flex items-center text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees} going
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talents Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? '' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Featured Talents</h2>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Connect with top creative professionals</p>
            </div>
            <button 
              onClick={() => handlePageNavigation('talents')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
              }`}
            >
              View All Talents
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTalents.map((talent) => (
              <div 
                key={talent.id} 
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
                }`}
                onClick={() => handlePageNavigation('talent-profile', talent.id)}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={talent.image} 
                      alt={talent.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    {talent.verified && (
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        isDarkMode ? 'border-gray-800' : 'border-white'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    isDarkMode 
                      ? 'text-white group-hover:text-purple-400' 
                      : 'text-gray-900 group-hover:text-purple-600'
                  }`}>
                    {talent.name}
                  </h3>
                  <p className={`font-medium mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>{talent.role}</p>
                  
                  <div className={`flex items-center justify-center gap-4 text-sm mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {talent.rating}
                    </div>
                    <div>{talent.reviews} reviews</div>
                    <div>{(talent.followers / 1000).toFixed(0)}K followers</div>
                  </div>
                  
                  <button className={`w-full px-4 py-2 rounded-lg font-semibold transition-all ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                  }`}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>What Our Clients Say</h2>
            <p className={`text-xl transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Real stories from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`rounded-2xl p-8 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
              }`}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className={`mb-6 leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{testimonial.name}</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? '' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`rounded-3xl p-12 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className={`text-xl mb-8 transition-colors duration-300 ${
              isDarkMode ? 'text-purple-100' : 'text-purple-50'
            }`}>
              Join thousands of creators, event organizers, and businesses who trust Hashtags Studios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handlePageNavigation('create-event')}
                className={`px-8 py-4 rounded-xl font-bold transition-colors ${
                  isDarkMode 
                    ? 'bg-white text-purple-600 hover:bg-gray-100' 
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}
              >
                Create Your First Event
              </button>
              <button 
                onClick={() => handlePageNavigation('talents')}
                className={`px-8 py-4 backdrop-blur-sm text-white rounded-xl font-bold border transition-all ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20' 
                    : 'bg-white/20 border-white/30 hover:bg-white/30'
                }`}
              >
                Browse Talents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-gray-100 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-white' : 'bg-black'
                  }`}>
                    <span className={`font-bold text-xl transition-colors duration-300 ${
                      isDarkMode ? 'text-black' : 'text-white'
                    }`}>#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Hashtags Studios</h3>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Your Creative Partner</p>
                </div>
              </div>
              <p className={`mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                The UAE's premier creative platform connecting talents, events, and opportunities.
              </p>
              <div className="flex space-x-4">
                <button className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <span className="text-sm font-bold">t</span>
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <span className="text-sm font-bold">ig</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => handlePageNavigation('create-event')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Create Event</button></li>
                <li><button onClick={() => handlePageNavigation('talents')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Browse Talents</button></li>
                <li><button onClick={() => handlePageNavigation('academy')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Academy</button></li>
                <li><button onClick={() => handlePageNavigation('store')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Shop</button></li>
                <li><button onClick={() => handlePageNavigation('jobs-coming-soon')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Jobs</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => handlePageNavigation('platform')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Platform</button></li>
                <li><button onClick={() => handlePageNavigation('magazine')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Magazine</button></li>
                <li><button onClick={() => handlePageNavigation('advertisement')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Advertisement</button></li>
                <li><button onClick={() => handlePageNavigation('donations')} className={`transition-colors text-left ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Donations</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className={`w-5 h-5 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <span className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`w-5 h-5 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <span className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>info@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className={`w-5 h-5 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <span className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={`border-t mt-16 transition-colors duration-300 ${
          isDarkMode ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className={`text-center text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 Hashtags Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};