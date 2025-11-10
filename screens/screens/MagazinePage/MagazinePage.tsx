import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Mic, Video, Image, Calendar, Clock, Star, ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';

interface MagazinePageProps {
  onBack?: () => void;
}

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  author?: string;
  readTime?: string;
  views?: number;
  likes?: number;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const MagazinePage: React.FC<MagazinePageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Models');
  const [likedArticles, setLikedArticles] = useState<number[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const tabs = ['Models', 'Creatives', 'News', 'Gallery', 'Beauty'];

  const featuredArticles: Article[] = [
    {
      id: 1,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Tutorial',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      readTime: '8 min read',
      views: 15600,
      likes: 892,
      featured: true,
      size: 'large'
    },
    {
      id: 2,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Behind the Scenes',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Mike Chen',
      readTime: '5 min read',
      views: 8900,
      likes: 456,
      size: 'medium'
    },
    {
      id: 3,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Fashion',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emma Davis',
      readTime: '6 min read',
      views: 12300,
      likes: 678,
      size: 'medium'
    },
    {
      id: 4,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Rivera',
      readTime: '4 min read',
      views: 6700,
      likes: 234,
      size: 'small'
    },
    {
      id: 5,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Creative Process',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Lisa Park',
      readTime: '7 min read',
      views: 9800,
      likes: 567,
      size: 'small'
    },
    {
      id: 6,
      title: 'Adobe Premiere Pro Masterclass: Video Editing in Premiere',
      category: 'Industry News',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Kim',
      readTime: '10 min read',
      views: 18900,
      likes: 1234,
      size: 'large'
    }
  ];

  const newArticles: Article[] = [
    {
      id: 7,
      title: 'Chris On Set',
      category: 'Behind the Scenes',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      readTime: '3 min read',
      views: 4500,
      likes: 189
    },
    {
      id: 8,
      title: 'Chris On Set',
      category: 'Production',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      readTime: '5 min read',
      views: 6200,
      likes: 298
    },
    {
      id: 9,
      title: 'Chris On Set',
      category: 'Interview',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      readTime: '4 min read',
      views: 3800,
      likes: 156
    },
    {
      id: 10,
      title: 'Chris On Set',
      category: 'Tutorial',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      readTime: '6 min read',
      views: 7100,
      likes: 345
    }
  ];

  const advertisementImages = [
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const toggleLike = (articleId: number) => {
    if (likedArticles.includes(articleId)) {
      setLikedArticles(likedArticles.filter(id => id !== articleId));
    } else {
      setLikedArticles([...likedArticles, articleId]);
    }
  };

  const toggleBookmark = (articleId: number) => {
    if (bookmarkedArticles.includes(articleId)) {
      setBookmarkedArticles(bookmarkedArticles.filter(id => id !== articleId));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, articleId]);
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Navigation */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={onBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back</span>
                </button>
                
                <nav className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Categories</a>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
                </nav>
              </div>
              
              {/* Logo */}
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">#</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">HASHTAGS</h1>
                  <p className="text-xs text-gray-500 -mt-1">STUDIOS</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Magazine</a>
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                    Subscribe
                  </button>
                </nav>
                
                <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
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
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-gray-100 rounded">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'text-gray-900 border-gray-900'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Articles Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Large Featured Article */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-96 lg:h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <img 
                  src={featuredArticles[0].image} 
                  alt={featuredArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {featuredArticles[0].category}
                    </span>
                    <span className="text-sm opacity-80">{featuredArticles[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 leading-tight">{featuredArticles[0].title}</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm opacity-80">
                      <span>By {featuredArticles[0].author}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatViews(featuredArticles[0].views || 0)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLike(featuredArticles[0].id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          likedArticles.includes(featuredArticles[0].id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedArticles.includes(featuredArticles[0].id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleBookmark(featuredArticles[0].id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          bookmarkedArticles.includes(featuredArticles[0].id) 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedArticles.includes(featuredArticles[0].id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Articles */}
            {featuredArticles.slice(1, 3).map((article) => (
              <div key={article.id} className="lg:col-span-1">
                <div className="relative h-48 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold mb-2 leading-tight line-clamp-2">{article.title}</h3>
                    <div className="flex items-center justify-between text-xs opacity-80">
                      <span>By {article.author}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {formatViews(article.views || 0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Small Articles */}
            {featuredArticles.slice(3, 5).map((article) => (
              <div key={article.id} className="lg:col-span-1">
                <div className="relative h-32 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2 inline-block">
                      {article.category}
                    </span>
                    <h3 className="text-xs font-bold leading-tight line-clamp-2">{article.title}</h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Large Bottom Article */}
            <div className="lg:col-span-1">
              <div className="relative h-48 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <img 
                  src={featuredArticles[5].image} 
                  alt={featuredArticles[5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      {featuredArticles[5].category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-tight line-clamp-2">{featuredArticles[5].title}</h3>
                  <div className="flex items-center justify-between text-xs opacity-80">
                    <span>By {featuredArticles[5].author}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatViews(featuredArticles[5].views || 0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New Articles</h2>
          
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {newArticles.map((article) => (
                <div key={article.id} className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {article.title}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatViews(article.views || 0)}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleLike(article.id)}
                          className={`flex items-center gap-1 ${likedArticles.includes(article.id) ? 'text-red-500' : 'text-gray-600'}`}
                        >
                          <Heart className={`w-4 h-4 ${likedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                          {article.likes}
                        </button>
                        <button
                          onClick={() => toggleBookmark(article.id)}
                          className={`${bookmarkedArticles.includes(article.id) ? 'text-blue-500' : 'text-gray-600'}`}
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === 0 ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              />
            ))}
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

        {/* Advertisement */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Advertisement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
              <img 
                src={advertisementImages[0]} 
                alt="Advertisement"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
              <img 
                src={advertisementImages[1]} 
                alt="Advertisement"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <img 
                src={advertisementImages[2]} 
                alt="Advertisement"
                className="w-full h-full object-cover rounded-xl"
              />
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
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Studios</h3>
                  <p className="text-xs text-gray-400">Your Creative Magazine</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Discover amazing content, connect with creators, and explore the latest trends in the creative industry.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Articles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Featured Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Subscribe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Models</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creatives</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauty</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">magazine@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
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