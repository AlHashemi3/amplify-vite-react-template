import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Heart, Share2, ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, Award, Music, Camera, Utensils, Gamepad2, Briefcase, GraduationCap, CheckCircle, ExternalLink, Instagram, Twitter, Facebook, Linkedin, Globe, Play, Eye, ThumbsUp } from 'lucide-react';

interface TalentProfilePageProps {
  talentId?: number;
  onBack?: () => void;
  onEventClick?: (eventId: number) => void;
}

export const TalentProfilePage: React.FC<TalentProfilePageProps> = ({ talentId = 1, onBack, onEventClick }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isFollowing, setIsFollowing] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Mock talent data - in real app, this would come from API
  const talent = {
    id: 1,
    name: 'Sarah Al-Mansouri',
    role: 'Event Organizer & Wedding Planner',
    specialty: 'Luxury Weddings & Corporate Events',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800',
    bannerImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    reviews: 156,
    totalEvents: 127,
    followers: 2840,
    yearsExperience: 8,
    location: 'Dubai, UAE',
    verified: true,
    bio: `Sarah Al-Mansouri is a renowned event organizer and wedding planner based in Dubai, with over 8 years of experience creating unforgettable moments for her clients. Specializing in luxury weddings and high-end corporate events, Sarah has built a reputation for her meticulous attention to detail and innovative event concepts.

Her journey began in 2016 when she organized her first wedding for a close friend. What started as a favor quickly turned into a passion, and Sarah discovered her natural talent for bringing people's visions to life. Since then, she has planned over 127 successful events, ranging from intimate gatherings to grand celebrations with over 1,000 guests.

Sarah's approach combines traditional Emirati hospitality with contemporary international trends, creating unique experiences that reflect each client's personality and cultural background. She is fluent in Arabic, English, and French, allowing her to work seamlessly with diverse clientele from around the world.

When she's not planning events, Sarah enjoys photography, traveling to discover new venues and inspiration, and mentoring young event planners entering the industry. She is also actively involved in charity work, organizing fundraising events for local UAE organizations.`,
    
    skills: [
      'Wedding Planning',
      'Corporate Events',
      'Venue Selection',
      'Vendor Management',
      'Budget Planning',
      'Cultural Events',
      'Luxury Events',
      'Event Design',
      'Project Management',
      'Client Relations'
    ],
    
    achievements: [
      {
        title: 'Best Wedding Planner 2023',
        organization: 'Dubai Wedding Awards',
        year: '2023'
      },
      {
        title: 'Top Event Organizer',
        organization: 'UAE Events Association',
        year: '2022'
      },
      {
        title: 'Excellence in Event Management',
        organization: 'Middle East Event Awards',
        year: '2021'
      }
    ],
    
    socialMedia: {
      instagram: '@sarahalmansouri_events',
      twitter: '@sarahevents',
      facebook: 'Sarah Al-Mansouri Events',
      linkedin: 'sarah-al-mansouri',
      website: 'www.sarahevents.ae'
    },
    
    previousEvents: [
      {
        id: 1,
        title: 'Royal Wedding Celebration',
        type: 'Wedding',
        date: '2024-01-15',
        location: 'Burj Al Arab',
        guests: 300,
        image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 5.0,
      },
      {
        id: 2,
        title: 'Tech Summit 2023',
        type: 'Corporate',
        date: '2023-11-20',
        location: 'DIFC Conference Center',
        guests: 500,
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
      },
      {
        id: 3,
        title: 'Charity Gala Night',
        type: 'Charity',
        date: '2023-09-10',
        location: 'Emirates Palace',
        guests: 400,
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
      },
      {
        id: 4,
        title: 'Cultural Heritage Festival',
        type: 'Cultural',
        date: '2023-07-05',
        location: 'Al Fahidi Historical District',
        guests: 800,
        image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7,
      }
    ],
    
    upcomingEvents: [
      {
        id: 5,
        title: 'Spring Wedding Expo',
        type: 'Exhibition',
        date: '2024-03-15',
        location: 'Dubai World Trade Centre',
        expectedGuests: 1000,
        image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'Planning',
        description: 'Annual wedding exhibition showcasing the latest trends and vendors.'
      },
      {
        id: 6,
        title: 'Corporate Leadership Summit',
        type: 'Corporate',
        date: '2024-04-20',
        location: 'Atlantis The Palm',
        expectedGuests: 300,
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'Confirmed',
        description: 'Executive leadership conference for Fortune 500 companies.'
      },
      {
        id: 7,
        title: 'Luxury Fashion Show',
        type: 'Fashion',
        date: '2024-05-10',
        location: 'Madinat Jumeirah',
        expectedGuests: 250,
        image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'Planning',
        description: 'High-end fashion showcase featuring international designers.'
      }
    ]
  };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'wedding': return 'bg-pink-100 text-pink-800';
      case 'corporate': return 'bg-blue-100 text-blue-800';
      case 'charity': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'exhibition': return 'bg-orange-100 text-orange-800';
      case 'fashion': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Sticky Header */}
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
              
              <div className="flex items-center gap-4">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Banner */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={talent.bannerImage} 
            alt={`${talent.name} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Profile Info Overlay */}
          <div className="absolute bottom-8 left-8 flex items-end gap-6">
            <div className="relative">
              <img 
                src={talent.image} 
                alt={talent.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              {talent.verified && (
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <div className="text-white pb-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{talent.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(talent.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{talent.rating}</span>
                </div>
              </div>
              <p className="text-xl text-purple-200 mb-2">{talent.role}</p>
              <p className="text-lg text-gray-200 mb-4">{talent.specialty}</p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {talent.location}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {talent.yearsExperience} years experience
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {talent.followers} followers
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="bg-white rounded-2xl shadow-lg mb-8">
                <div className="flex border-b border-gray-200">
                  {[
                    { id: 'about', label: 'About', icon: User },
                    { id: 'previous', label: 'Previous Events', icon: Calendar },
                    { id: 'upcoming', label: 'Upcoming Events', icon: Clock }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-colors ${
                          activeTab === tab.id
                            ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                            : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-8">
                  {/* About Tab */}
                  {activeTab === 'about' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
                        <div className="prose prose-lg text-gray-600">
                          {talent.bio.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise & Skills</h3>
                        <div className="flex flex-wrap gap-3">
                          {talent.skills.map((skill, index) => (
                            <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                        <div className="space-y-4">
                          {talent.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{achievement.title}</h4>
                                <p className="text-gray-600">{achievement.organization}</p>
                                <p className="text-sm text-gray-500">{achievement.year}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Previous Events Tab */}
                  {activeTab === 'previous' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Previous Events ({talent.previousEvents.length})</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {talent.previousEvents.map((event) => (
                          <div 
                            key={event.id} 
                            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => onEventClick?.(event.id)}
                          >
                            <div className="relative h-48">
                              <img 
                                src={event.image} 
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                                {event.type}
                              </div>
                              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{event.rating}</span>
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                              <div className="space-y-2 mb-4">
                                <div className="flex items-center text-gray-600 text-sm">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {new Date(event.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                  <Users className="w-4 h-4 mr-2" />
                                  {event.guests} guests
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upcoming Events Tab */}
                  {activeTab === 'upcoming' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Upcoming Events ({talent.upcomingEvents.length})</h2>
                      <div className="space-y-6">
                        {talent.upcomingEvents.map((event) => (
                          <div 
                            key={event.id} 
                            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => onEventClick?.(event.id)}
                          >
                            <div className="flex items-start gap-6">
                              <img 
                                src={event.image} 
                                alt={event.title}
                                className="w-24 h-24 rounded-xl object-cover"
                              />
                              
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                                    <div className="flex items-center gap-3">
                                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                                        {event.type}
                                      </span>
                                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                                        {event.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {new Date(event.date).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: 'numeric' 
                                    })}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {event.location}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    {event.expectedGuests} expected guests
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Stats Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Profile Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">{talent.totalEvents}</div>
                      <div className="text-sm text-gray-600">Total Events</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">{talent.followers}</div>
                      <div className="text-sm text-gray-600">Followers</div>
                    </div>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`w-full px-6 py-3 rounded-xl font-semibold transition-all ${
                      isFollowing 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Connect</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">{talent.socialMedia.instagram}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-colors">
                      <Twitter className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{talent.socialMedia.twitter}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="text-gray-700">{talent.socialMedia.linkedin}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg hover:from-green-100 hover:to-teal-100 transition-colors">
                      <Globe className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{talent.socialMedia.website}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Talents</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join as Talent</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Organizers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Planners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DJs & Musicians</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photographers</a></li>
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
    </>
  );
};
