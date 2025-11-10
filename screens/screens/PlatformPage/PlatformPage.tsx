import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Mic, Video, Image, Calendar, Clock, Star, ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';

interface PlatformPageProps {
  onBack?: () => void;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface LiveStream {
  id: number;
  title: string;
  streamer: string;
  viewers: number;
  category: string;
  thumbnail: string;
  isLive: boolean;
  currentProducts: Product[];
}

interface ContentItem {
  id: number;
  title: string;
  type: 'article' | 'video' | 'podcast' | 'promotion';
  image: string;
  author?: string;
  duration?: string;
  views?: number;
  likes?: number;
  category: string;
  description?: string;
  publishedAt: string;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentStreamProduct, setCurrentStreamProduct] = useState(0);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const liveStreams: LiveStream[] = [
    {
      id: 1,
      title: 'Fashion & Beauty Live Show - Latest Trends 2024',
      streamer: 'Sarah Al-Mansouri',
      viewers: 3671,
      category: 'Fashion',
      thumbnail: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800',
      isLive: true,
      currentProducts: [
        {
          id: 1,
          name: 'Premium Rose Gold Necklace',
          category: 'Jewelry',
          price: 450,
          image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Elegant rose gold necklace with premium crystals, perfect for special occasions and daily wear.',
          inStock: true
        },
        {
          id: 2,
          name: 'Designer Handbag Collection',
          category: 'Fashion',
          price: 890,
          image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Luxury designer handbag made from premium leather with gold-plated hardware.',
          inStock: true
        },
        {
          id: 3,
          name: 'Professional Makeup Kit',
          category: 'Beauty',
          price: 320,
          image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Complete professional makeup kit with brushes and premium cosmetics.',
          inStock: false
        }
      ]
    }
  ];

  // Auto-rotate products every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStreamProduct((prev) => 
        (prev + 1) % liveStreams[0].currentProducts.length
      );
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product: Product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert('Product already in cart!');
    }
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const tabs = ['All', 'Hashtags', 'Promotions', 'Shorts', 'Links'];

  const relatedArticles: ContentItem[] = [
    {
      id: 1,
      title: 'Chris On Set',
      type: 'article',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      views: 12500,
      likes: 890,
      category: 'Behind the Scenes',
      description: 'Exclusive behind-the-scenes content from our latest production',
      publishedAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Chris On Set',
      type: 'video',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      duration: '5:32',
      views: 8900,
      likes: 567,
      category: 'Production',
      description: 'Watch the creative process unfold in our studio',
      publishedAt: '2024-01-14'
    },
    {
      id: 3,
      title: 'Chris On Set',
      type: 'article',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      views: 15600,
      likes: 1200,
      category: 'Interview',
      description: 'In-depth conversation about the creative industry',
      publishedAt: '2024-01-13'
    },
    {
      id: 4,
      title: 'Chris On Set',
      type: 'video',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chris Johnson',
      duration: '8:45',
      views: 22100,
      likes: 1890,
      category: 'Tutorial',
      description: 'Learn professional techniques from industry experts',
      publishedAt: '2024-01-12'
    }
  ];

  const podcastContent: ContentItem[] = [
    {
      id: 5,
      title: 'Creative Minds Podcast',
      type: 'podcast',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Hashtags Studios',
      duration: '45:20',
      views: 5600,
      likes: 340,
      category: 'Podcast',
      description: 'Weekly discussions about creativity and innovation',
      publishedAt: '2024-01-16'
    },
    {
      id: 6,
      title: 'Industry Insights',
      type: 'podcast',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Hashtags Studios',
      duration: '32:15',
      views: 4200,
      likes: 280,
      category: 'Podcast',
      description: 'Expert insights into the creative industry trends',
      publishedAt: '2024-01-15'
    }
  ];

  const promotionContent: ContentItem[] = [
    {
      id: 7,
      title: 'Summer Campaign 2024',
      type: 'promotion',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Marketing Team',
      views: 18900,
      likes: 1450,
      category: 'Promotion',
      description: 'Our biggest summer campaign featuring top talents',
      publishedAt: '2024-01-17'
    },
    {
      id: 8,
      title: 'Brand Partnership',
      type: 'promotion',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Partnership Team',
      views: 12300,
      likes: 890,
      category: 'Promotion',
      description: 'Exciting collaboration with leading brands',
      publishedAt: '2024-01-16'
    },
    {
      id: 9,
      title: 'Event Highlights',
      type: 'promotion',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Events Team',
      views: 25600,
      likes: 2100,
      category: 'Promotion',
      description: 'Best moments from our recent events and shows',
      publishedAt: '2024-01-15'
    }
  ];

  const trendsContent: ContentItem[] = [
    {
      id: 10,
      title: 'Creative Trends 2024',
      type: 'video',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Trend Analysis',
      duration: '12:30',
      views: 34500,
      likes: 2890,
      category: 'Trends',
      description: 'Latest trends shaping the creative industry',
      publishedAt: '2024-01-18'
    },
    {
      id: 11,
      title: 'Future of Content',
      type: 'video',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Future Insights',
      duration: '15:45',
      views: 28900,
      likes: 2340,
      category: 'Trends',
      description: 'Exploring the future of digital content creation',
      publishedAt: '2024-01-17'
    },
    {
      id: 12,
      title: 'Tech Innovation',
      type: 'video',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Tech Team',
      duration: '9:20',
      views: 19800,
      likes: 1560,
      category: 'Trends',
      description: 'How technology is revolutionizing creative work',
      publishedAt: '2024-01-16'
    },
    {
      id: 13,
      title: 'Market Analysis',
      type: 'video',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Market Research',
      duration: '18:10',
      views: 15600,
      likes: 1200,
      category: 'Trends',
      description: 'Deep dive into market trends and opportunities',
      publishedAt: '2024-01-15'
    }
  ];

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

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'podcast': return <Mic className="w-4 h-4" />;
      case 'article': return <Image className="w-4 h-4" />;
      case 'promotion': return <TrendingUp className="w-4 h-4" />;
      default: return <Image className="w-4 h-4" />;
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
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Explore</a>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
        {/* Live Stream Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Shopping Streams</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Live Stream */}
            <div className="lg:col-span-3">
              <div className="bg-black rounded-2xl overflow-hidden relative aspect-video">
                {/* Stream Video Area */}
                <img 
                  src={liveStreams[0].thumbnail}
                  alt="Live Stream"
                  className="w-full h-full object-cover"
                />
                
                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {liveStreams[0].viewers.toLocaleString()} viewers
                  </div>
                </div>

                {/* Stream Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Overlay */}
                <div className="absolute bottom-20 left-6 right-6">
                  {liveStreams[0].currentProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className={`transition-all duration-500 ${
                        index === currentStreamProduct 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4 pointer-events-none absolute'
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-md">
                        <div className="flex items-center gap-4">
                          {/* Product Image */}
                          <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center overflow-hidden">
                            <img 
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                            <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="text-xl font-bold text-purple-600">
                                AED {product.price}
                              </div>
                              <button
                                onClick={() => product.inStock ? addToCart(product) : openProductModal(product)}
                                disabled={!product.inStock}
                                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                                  product.inStock
                                    ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                              >
                                {product.inStock ? 'Add to cart' : 'Out of Stock'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stream Info Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm text-white p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt={liveStreams[0].streamer}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{liveStreams[0].streamer}</div>
                        <div className="text-sm opacity-80">{liveStreams[0].category}</div>
                      </div>
                      <button className="ml-auto px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                        Follow
                      </button>
                    </div>
                    <h3 className="font-semibold mb-2">{liveStreams[0].title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Channels Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 text-white rounded-2xl p-4 h-full">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  Live Channels
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: 'Fashion Hub', game: 'Fashion & Beauty', viewers: '31.4K', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Tech Reviews', game: 'Electronics', viewers: '17.4K', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Home Decor', game: 'Home & Garden', viewers: '26.5K', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Fitness Gear', game: 'Sports & Fitness', viewers: '5.6K', avatar: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Art Supplies', game: 'Arts & Crafts', viewers: '13.8K', avatar: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Gaming Setup', game: 'Gaming', viewers: '87.3K', avatar: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Books & Learning', game: 'Education', viewers: '18K', avatar: 'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Music Instruments', game: 'Music', viewers: '5.3K', avatar: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=100' }
                  ].map((channel, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                      <div className="relative">
                        <img 
                          src={channel.avatar}
                          alt={channel.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border border-gray-900"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{channel.name}</div>
                        <div className="text-xs text-gray-400 truncate">{channel.game}</div>
                      </div>
                      <div className="text-xs text-gray-400">{channel.viewers}</div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {relatedArticles.map((article) => (
                <div key={article.id} className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    {article.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {article.title}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatViews(article.views || 0)}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleLike(article.id)}
                          className={`flex items-center gap-1 ${likedItems.includes(article.id) ? 'text-red-500' : 'text-gray-600'}`}
                        >
                          <Heart className={`w-4 h-4 ${likedItems.includes(article.id) ? 'fill-current' : ''}`} />
                          {article.likes}
                        </button>
                        <button
                          onClick={() => toggleBookmark(article.id)}
                          className={`${bookmarkedItems.includes(article.id) ? 'text-blue-500' : 'text-gray-600'}`}
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarkedItems.includes(article.id) ? 'fill-current' : ''}`} />
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

        {/* Banner Section */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center text-white text-xl font-semibold">
            banner
          </div>
        </div>

        {/* Podcast Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Podcast</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {podcastContent.map((podcast) => (
              <div key={podcast.id} className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="text-lg font-semibold">{podcast.type === 'podcast' ? 'Video here' : 'Video reel'}</div>
                  <div className="text-sm opacity-80 mt-1">{podcast.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Promotions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotionContent.map((promo) => (
              <div key={promo.id} className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                  <div className="text-lg font-semibold">Video reel</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trends Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trends</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {trendsContent.slice(0, 2).map((trend) => (
                <div key={trend.id} className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
                  <img 
                    src={trend.image} 
                    alt={trend.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <div className="text-lg font-semibold">Video</div>
                    <div className="text-sm opacity-80 mt-1">{trend.duration}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800 rounded-lg h-full flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
              <img 
                src={trendsContent[2]?.image} 
                alt="Video reel"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <div className="text-xl font-semibold">Video reel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <img 
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-32 h-32 mx-auto rounded-xl object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
              <p className="text-purple-600 font-medium">{selectedProduct.category}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">AED {selectedProduct.price}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedProduct.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowProductModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  if (selectedProduct.inStock) {
                    addToCart(selectedProduct);
                    setShowProductModal(false);
                  }
                }}
                disabled={!selectedProduct.inStock}
                className={`flex-1 px-6 py-3 rounded-lg font-bold transition-colors ${
                  selectedProduct.inStock
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <p className="text-xs text-gray-400">Your Creative Platform</p>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Content</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trending</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Podcasts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Articles</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Behind the Scenes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industry News</a></li>
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
                  <span className="text-gray-400">platform@hashtagsstudios.com</span>
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