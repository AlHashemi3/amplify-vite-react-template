import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Heart, Share2, ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, Award, Music, Camera, Utensils, Gamepad2, Briefcase, GraduationCap, CheckCircle, ExternalLink, Instagram, Twitter, Facebook, Linkedin, Globe, Play, Eye, ThumbsUp, Ruler, Weight, Palette, Crown, Zap, Target, Gift, Bookmark, Send, Download, Upload, Filter, Grid, List, Search, Plus, Edit, Settings, MoreHorizontal } from 'lucide-react';

interface ModelProfilePageProps {
  modelId?: number;
  onBack?: () => void;
}

export const ModelProfilePage: React.FC<ModelProfilePageProps> = ({ modelId = 1, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Mock model data based on the reference image
  const model = {
    id: 1,
    name: 'Phil Ebiner',
    stageName: 'Phil E.',
    role: 'Professional Model',
    specialty: 'Fashion & Commercial Modeling',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800',
    bannerImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    reviews: 156,
    totalShots: 247,
    followers: 1649,
    following: 1147,
    yearsExperience: 5,
    location: 'Dubai, UAE',
    verified: true,
    
    // Model-specific measurements
    measurements: {
      height: "5'8\"",
      bust: "32G",
      waist: "28\"",
      hips: "41\"",
      dress: "10",
      shoe: "9",
      hair: "Blonde",
      eyes: "Green",
      ethnicity: "Mixed"
    },
    
    // Languages and skills
    languages: ['English', 'Arabic', 'Spanish'],
    skills: [
      'Fashion Photography',
      'Commercial Modeling',
      'Runway Walking',
      'Product Photography',
      'Editorial Shoots',
      'Brand Campaigns',
      'Social Media Content',
      'Video Modeling'
    ],
    
    bio: `Phil Ebiner is a professional model based in Dubai with over 5 years of experience in the fashion and commercial modeling industry. Known for her versatility and professionalism, Phil has worked with numerous international brands and photographers.

Her journey began in 2019 when she was discovered at a local fashion event in Dubai. Since then, she has graced the covers of several magazines and walked the runway for major fashion weeks across the Middle East.

Phil specializes in fashion photography, commercial campaigns, and editorial shoots. Her unique look and professional attitude have made her a favorite among photographers and brands looking for authentic, engaging content.

When not modeling, Phil enjoys fitness, traveling, and mentoring aspiring models entering the industry. She is passionate about promoting body positivity and diversity in the modeling world.`,
    
    achievements: [
      {
        title: 'Model of the Year 2023',
        organization: 'Dubai Fashion Awards',
        year: '2023'
      },
      {
        title: 'Best Commercial Model',
        organization: 'UAE Modeling Association',
        year: '2022'
      },
      {
        title: 'Rising Star Award',
        organization: 'Middle East Fashion Week',
        year: '2021'
      }
    ],
    
    socialMedia: {
      instagram: '@phil_ebiner_model',
      twitter: '@philebiner',
      facebook: 'Phil Ebiner Official',
      linkedin: 'phil-ebiner-model',
      website: 'www.philebiner.com'
    },
    
    portfolio: [
      {
        id: 1,
        title: 'Fashion Editorial - Vogue Arabia',
        type: 'Editorial',
        date: '2024-01-15',
        photographer: 'Ahmed Al-Rashid',
        brand: 'Vogue Arabia',
        image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: true
      },
      {
        id: 2,
        title: 'Luxury Watch Campaign',
        type: 'Commercial',
        date: '2023-12-20',
        photographer: 'Sarah Johnson',
        brand: 'Rolex Middle East',
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: true
      },
      {
        id: 3,
        title: 'Summer Collection 2024',
        type: 'Fashion',
        date: '2023-11-10',
        photographer: 'Mike Chen',
        brand: 'Dubai Fashion House',
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: false
      },
      {
        id: 4,
        title: 'Beauty Campaign - Skincare',
        type: 'Beauty',
        date: '2023-10-05',
        photographer: 'Emma Davis',
        brand: 'Luxury Cosmetics',
        image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: false
      },
      {
        id: 5,
        title: 'Bridal Collection Shoot',
        type: 'Bridal',
        date: '2023-09-15',
        photographer: 'Alex Rivera',
        brand: 'Elite Bridal',
        image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: true
      },
      {
        id: 6,
        title: 'Fitness Brand Campaign',
        type: 'Fitness',
        date: '2023-08-20',
        photographer: 'Lisa Park',
        brand: 'Active Wear Dubai',
        image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: false
      },
      {
        id: 7,
        title: 'Luxury Resort Campaign',
        type: 'Lifestyle',
        date: '2023-07-10',
        photographer: 'David Kim',
        brand: 'Atlantis The Palm',
        image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: true
      },
      {
        id: 8,
        title: 'Street Style Editorial',
        type: 'Street',
        date: '2023-06-25',
        photographer: 'Omar Hassan',
        brand: 'Urban Magazine',
        image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: false
      },
      {
        id: 9,
        title: 'High Fashion Runway',
        type: 'Runway',
        date: '2023-05-30',
        photographer: 'Fatima Al-Zahra',
        brand: 'Dubai Fashion Week',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: true
      }
    ],
    
    upcomingShots: [
      {
        id: 10,
        title: 'Spring Collection 2024',
        type: 'Fashion',
        date: '2024-03-15',
        photographer: 'TBA',
        brand: 'International Fashion House',
        status: 'Confirmed',
        description: 'Spring/Summer collection shoot for international brand.'
      },
      {
        id: 11,
        title: 'Jewelry Campaign',
        type: 'Commercial',
        date: '2024-04-20',
        photographer: 'Ahmed Al-Mansouri',
        brand: 'Diamond Gallery',
        status: 'Pending',
        description: 'Luxury jewelry campaign for premium brand.'
      }
    ],
    
    rates: {
      hourly: 500,
      halfDay: 2000,
      fullDay: 3500,
      editorial: 1500,
      commercial: 4000,
      runway: 2500
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'editorial': return 'bg-purple-100 text-purple-800';
      case 'commercial': return 'bg-blue-100 text-blue-800';
      case 'fashion': return 'bg-pink-100 text-pink-800';
      case 'beauty': return 'bg-rose-100 text-rose-800';
      case 'bridal': return 'bg-emerald-100 text-emerald-800';
      case 'fitness': return 'bg-orange-100 text-orange-800';
      case 'lifestyle': return 'bg-teal-100 text-teal-800';
      case 'street': return 'bg-gray-100 text-gray-800';
      case 'runway': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          {/* Top Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-pink-200 transition-colors">Careers</a>
                <a href="#" className="hover:text-pink-200 transition-colors">About Us</a>
                <a href="#" className="hover:text-pink-200 transition-colors">Blog</a>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-pink-200 transition-colors">Contact Us</a>
                <a href="#" className="hover:text-pink-200 transition-colors">Profile</a>
                <a href="#" className="hover:text-pink-200 transition-colors">Upgrade</a>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Talents
              </button>
              
              {/* Logo */}
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    HASHTAGS
                  </h1>
                  <p className="text-xs text-gray-500">STUDIOS</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Image */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="relative">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-96 rounded-2xl object-cover shadow-2xl"
                  />
                  {model.verified && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full">
                    <span className="font-bold">Available</span>
                  </div>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-4xl font-bold text-gray-900">{model.name}</h1>
                      {model.verified && (
                        <CheckCircle className="w-8 h-8 text-blue-500" />
                      )}
                    </div>
                    <p className="text-xl text-pink-600 font-semibold mb-2">{model.role}</p>
                    <p className="text-lg text-gray-600 mb-4">{model.specialty}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {model.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {model.yearsExperience} years experience
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        {model.totalShots} shoots completed
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{model.followers}</div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{model.following}</div>
                        <div className="text-sm text-gray-600">Following</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-2xl font-bold text-gray-900">{model.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{model.reviews} reviews</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Languages:</span>
                      </div>
                      <div className="flex gap-2">
                        {model.languages.map((lang, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                        isFollowing 
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                          : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg'
                      }`}
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="px-8 py-3 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-all"
                    >
                      Contact
                    </button>
                  </div>
                </div>

                {/* Model Measurements - Key Feature */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-pink-600" />
                    Model Measurements
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-9 gap-4 text-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.height}</div>
                      <div className="text-xs text-gray-600 font-medium">Height</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.bust}</div>
                      <div className="text-xs text-gray-600 font-medium">Bust</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.waist}</div>
                      <div className="text-xs text-gray-600 font-medium">Waist</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.hips}</div>
                      <div className="text-xs text-gray-600 font-medium">Hips</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.dress}</div>
                      <div className="text-xs text-gray-600 font-medium">Dress</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">{model.measurements.shoe}</div>
                      <div className="text-xs text-gray-600 font-medium">Shoe</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-sm font-bold text-pink-600">{model.measurements.hair}</div>
                      <div className="text-xs text-gray-600 font-medium">Hair</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-sm font-bold text-pink-600">{model.measurements.eyes}</div>
                      <div className="text-xs text-gray-600 font-medium">Eyes</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs font-bold text-pink-600">{model.measurements.ethnicity}</div>
                      <div className="text-xs text-gray-600 font-medium">Ethnicity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Navigation Tabs */}
              <div className="bg-white rounded-2xl shadow-lg mb-8">
                <div className="flex border-b border-gray-200">
                  {[
                    { id: 'about', label: 'About', icon: User },
                    { id: 'portfolio', label: 'Portfolio', icon: Camera },
                    { id: 'rates', label: 'Rates', icon: Star },
                    { id: 'upcoming', label: 'Upcoming', icon: Calendar }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-colors ${
                          activeTab === tab.id
                            ? 'text-pink-600 border-b-2 border-pink-600 bg-pink-50'
                            : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
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
                          {model.bio.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Modeling Expertise</h3>
                        <div className="flex flex-wrap gap-3">
                          {model.skills.map((skill, index) => (
                            <span key={index} className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                        <div className="space-y-4">
                          {model.achievements.map((achievement, index) => (
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

                  {/* Portfolio Tab */}
                  {activeTab === 'portfolio' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Portfolio ({model.portfolio.length} shoots)</h2>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg font-medium hover:bg-pink-200 transition-colors">
                            Featured Only
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            All Work
                          </button>
                        </div>
                      </div>
                      
                      {/* Portfolio Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {model.portfolio.map((shoot) => (
                          <div 
                            key={shoot.id} 
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => setSelectedImageIndex(shoot.id)}
                          >
                            <div className="relative h-64">
                              <img 
                                src={shoot.image} 
                                alt={shoot.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {shoot.featured && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                  Featured
                                </div>
                              )}
                              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(shoot.type)}`}>
                                {shoot.type}
                              </div>
                              
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center">
                                  <Eye className="w-8 h-8 mx-auto mb-2" />
                                  <span className="font-semibold">View Details</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-4">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{shoot.title}</h3>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center justify-between">
                                  <span>Brand:</span>
                                  <span className="font-medium">{shoot.brand}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Photographer:</span>
                                  <span className="font-medium">{shoot.photographer}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Date:</span>
                                  <span className="font-medium">{new Date(shoot.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rates Tab */}
                  {activeTab === 'rates' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Modeling Rates</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(model.rates).map(([type, rate]) => (
                          <div key={type} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
                            <div className="text-center">
                              <h3 className="text-lg font-bold text-gray-900 mb-2 capitalize">
                                {type.replace(/([A-Z])/g, ' $1').trim()}
                              </h3>
                              <div className="text-3xl font-bold text-pink-600 mb-2">
                                AED {rate.toLocaleString()}
                              </div>
                              <p className="text-sm text-gray-600">
                                {type === 'hourly' && 'Per hour rate'}
                                {type === 'halfDay' && '4-hour session'}
                                {type === 'fullDay' && '8-hour session'}
                                {type === 'editorial' && 'Magazine shoots'}
                                {type === 'commercial' && 'Brand campaigns'}
                                {type === 'runway' && 'Fashion shows'}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-bold text-blue-900 mb-2">Booking Information</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Minimum 2-hour booking for all sessions</li>
                          <li>• Travel expenses additional for locations outside Dubai</li>
                          <li>• 50% deposit required to confirm booking</li>
                          <li>• Cancellation policy: 48 hours notice required</li>
                          <li>• Usage rights negotiable based on project scope</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Upcoming Tab */}
                  {activeTab === 'upcoming' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Upcoming Projects ({model.upcomingShots.length})</h2>
                      <div className="space-y-6">
                        {model.upcomingShots.map((shoot) => (
                          <div 
                            key={shoot.id} 
                            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{shoot.title}</h3>
                                <div className="flex items-center gap-3">
                                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(shoot.type)}`}>
                                    {shoot.type}
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shoot.status)}`}>
                                    {shoot.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{shoot.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center text-gray-600">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(shoot.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Camera className="w-4 h-4 mr-2" />
                                {shoot.photographer}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Award className="w-4 h-4 mr-2" />
                                {shoot.brand}
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
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <button className="w-full px-4 py-3 border border-pink-500 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-all flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Request Call
                    </button>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Availability</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">This Week</span>
                      <span className="text-green-600 font-bold">Available</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Next Week</span>
                      <span className="text-yellow-600 font-bold">Limited</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium">March 15-20</span>
                      <span className="text-red-600 font-bold">Booked</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Connect</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">{model.socialMedia.instagram}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-colors">
                      <Twitter className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{model.socialMedia.twitter}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg hover:from-green-100 hover:to-teal-100 transition-colors">
                      <Globe className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{model.socialMedia.website}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Completed shoot with Vogue Arabia</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Updated portfolio with 3 new images</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Received 5-star review from client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <img 
                  src={model.image}
                  alt={model.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact {model.name}</h3>
                <p className="text-gray-600">Send a message to discuss your project</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                    <option>Fashion Photography</option>
                    <option>Commercial Campaign</option>
                    <option>Editorial Shoot</option>
                    <option>Product Photography</option>
                    <option>Event Modeling</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                    <option>AED 500 - 1,000</option>
                    <option>AED 1,000 - 2,500</option>
                    <option>AED 2,500 - 5,000</option>
                    <option>AED 5,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowContactModal(false);
                    alert('Message sent successfully!');
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-bold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                Connecting top models with leading brands and photographers across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Models</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book a Model</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join as Model</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Model Guidelines</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Model Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fashion Models</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Models</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Runway Models</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Editorial Models</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-400">models@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400" />
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
    </>
  );
};