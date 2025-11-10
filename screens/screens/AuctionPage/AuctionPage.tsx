import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Star, ChevronLeft, ChevronRight, ChevronDown, Filter, Grid, List, Trophy, Gift, Clock, Users, Zap, Target, Crown, Award, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Timer, CheckCircle, AlertCircle, DollarSign, Percent, Calendar, Ticket, Flame, TrendingDown, Gavel, Hammer } from 'lucide-react';

interface AuctionPageProps {
  onBack?: () => void;
}

interface AuctionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  startingBid: number;
  currentBid: number;
  buyNowPrice?: number;
  timeLeft: string;
  category: string;
  brand: string;
  condition: string;
  featured?: boolean;
  hot?: boolean;
  new?: boolean;
  winner?: string;
  status: 'active' | 'completed' | 'upcoming';
  endDate: string;
  bidders: Bidder[];
  totalBids: number;
}

interface Bidder {
  id: number;
  name: string;
  avatar: string;
  bidAmount: number;
  bidTime: string;
}

export const AuctionPage: React.FC<AuctionPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('ending-soon');
  const [showFilters, setShowFilters] = useState(false);
  const [userBids, setUserBids] = useState<number[]>([]);
  const [showBidModal, setShowBidModal] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState<AuctionItem | null>(null);
  const [bidAmount, setBidAmount] = useState('');

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Auctions', count: 24 },
    { id: 'Electronics', name: 'Electronics', count: 8 },
    { id: 'Fashion', name: 'Fashion & Jewelry', count: 6 },
    { id: 'Art', name: 'Art & Collectibles', count: 4 },
    { id: 'Luxury', name: 'Luxury Items', count: 3 },
    { id: 'Vintage', name: 'Vintage & Antiques', count: 3 }
  ];

  const auctions: AuctionItem[] = [
    {
      id: 1,
      title: 'Vintage Rolex Submariner 1970',
      description: 'Rare vintage Rolex Submariner from 1970 in excellent condition. Comes with original box and papers. A true collector\'s piece.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 15000,
      currentBid: 28500,
      buyNowPrice: 45000,
      timeLeft: '2h 45m',
      category: 'Luxury',
      brand: 'Rolex',
      condition: 'Excellent',
      featured: true,
      hot: true,
      status: 'active',
      endDate: '2024-02-18T18:00:00',
      totalBids: 23,
      bidders: [
        { id: 1, name: 'Ahmed Al-Mansouri', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 28500, bidTime: '2m ago' },
        { id: 2, name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 27000, bidTime: '15m ago' },
        { id: 3, name: 'Omar Hassan', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 25500, bidTime: '1h ago' }
      ]
    },
    {
      id: 2,
      title: 'Original Picasso Sketch 1960',
      description: 'Authentic Pablo Picasso sketch from 1960. Professionally authenticated with certificate of authenticity. Museum quality piece.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 50000,
      currentBid: 125000,
      timeLeft: '1d 12h',
      category: 'Art',
      brand: 'Picasso Estate',
      condition: 'Excellent',
      featured: true,
      status: 'active',
      endDate: '2024-02-19T20:00:00',
      totalBids: 45,
      bidders: [
        { id: 4, name: 'Ali Al-Rashid', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 125000, bidTime: '30m ago' },
        { id: 5, name: 'Noor Al-Zahra', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 120000, bidTime: '2h ago' }
      ]
    },
    {
      id: 3,
      title: 'Limited Edition Ferrari Model',
      description: 'Rare 1:18 scale Ferrari F40 limited edition model. Only 500 pieces made worldwide. Perfect condition with original packaging.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 2000,
      currentBid: 8500,
      buyNowPrice: 15000,
      timeLeft: 'Auction ended',
      category: 'Collectibles',
      brand: 'Ferrari',
      condition: 'Mint',
      hot: true,
      status: 'completed',
      endDate: '2024-02-17T15:00:00',
      winner: 'Khalid Al-Mansouri',
      totalBids: 67,
      bidders: []
    },
    {
      id: 4,
      title: 'Hermès Birkin Bag 35cm',
      description: 'Authentic Hermès Birkin bag in Togo leather, 35cm size in Étoupe color. Comes with original box, dust bag, and authenticity card.',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 25000,
      currentBid: 42000,
      timeLeft: '3d 8h',
      category: 'Fashion',
      brand: 'Hermès',
      condition: 'Like New',
      new: true,
      status: 'active',
      endDate: '2024-02-21T16:00:00',
      totalBids: 18,
      bidders: [
        { id: 6, name: 'Zara Ahmed', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 42000, bidTime: '1h ago' },
        { id: 7, name: 'Maryam Ali', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 38000, bidTime: '4h ago' }
      ]
    },
    {
      id: 5,
      title: 'Vintage Persian Carpet 1920s',
      description: 'Exquisite hand-woven Persian carpet from the 1920s. Museum quality piece with intricate patterns and natural dyes.',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 8000,
      currentBid: 18500,
      timeLeft: '5h 20m',
      category: 'Vintage',
      brand: 'Persian Artisans',
      condition: 'Very Good',
      status: 'active',
      endDate: '2024-02-18T23:00:00',
      totalBids: 31,
      bidders: [
        { id: 8, name: 'Yousef Al-Rashid', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 18500, bidTime: '45m ago' },
        { id: 9, name: 'Laila Mohammed', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 17000, bidTime: '2h ago' }
      ]
    },
    {
      id: 6,
      title: 'Diamond Tennis Bracelet',
      description: 'Stunning 18k white gold tennis bracelet with 5 carats of VS1 diamonds. Professionally appraised and certified.',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=600',
      startingBid: 12000,
      currentBid: 19500,
      buyNowPrice: 35000,
      timeLeft: '6d 14h',
      category: 'Fashion',
      brand: 'Luxury Jewelers',
      condition: 'New',
      featured: true,
      status: 'active',
      endDate: '2024-02-24T18:00:00',
      totalBids: 12,
      bidders: [
        { id: 10, name: 'Sheikha Al-Qasimi', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', bidAmount: 19500, bidTime: '3h ago' }
      ]
    }
  ];

  const filteredAuctions = auctions.filter(auction => {
    const matchesCategory = selectedCategory === 'All' || auction.category === selectedCategory;
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedAuctions = [...filteredAuctions].sort((a, b) => {
    switch (sortBy) {
      case 'ending-soon':
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      case 'most-popular':
        return b.totalBids - a.totalBids;
      case 'highest-bid':
        return b.currentBid - a.currentBid;
      case 'newest':
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      default:
        return 0;
    }
  });

  const handlePlaceBid = (auction: AuctionItem) => {
    setSelectedAuction(auction);
    setBidAmount((auction.currentBid + 100).toString());
    setShowBidModal(true);
  };

  const confirmBid = () => {
    if (selectedAuction && bidAmount) {
      const bid = parseFloat(bidAmount);
      if (bid > selectedAuction.currentBid) {
        setUserBids([...userBids, selectedAuction.id]);
        setShowBidModal(false);
        setSelectedAuction(null);
        setBidAmount('');
        alert(`Bid placed successfully! You bid AED ${bid.toLocaleString()} on ${selectedAuction.title}`);
      } else {
        alert('Bid must be higher than current bid');
      }
    }
  };

  const formatTimeLeft = (timeLeft: string) => {
    if (timeLeft.includes('ended')) return timeLeft;
    return `⏰ ${timeLeft} left`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-amber-200 transition-colors">How Auctions Work</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Seller Center</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Authentication</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-amber-200 transition-colors">My Bids</a>
              <button className="hover:text-amber-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-amber-200 transition-colors">
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
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-amber-600 transition-colors"
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
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Hashtags Auctions
                </h1>
                <p className="text-xs text-gray-500">Bid on Exclusive Items</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8">
              <Gavel className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Exclusive Auctions</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
              Bid on rare, luxury, and collectible items. From vintage watches to original artwork - find unique treasures at competitive prices.
            </p>
            
            {/* How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Browse Items</h3>
                <p className="text-amber-100">Discover authenticated luxury items</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Place Bids</h3>
                <p className="text-amber-100">Bid competitively on items you love</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Win & Own</h3>
                <p className="text-amber-100">Highest bidder wins the item</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex-1 relative max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search auctions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="ending-soon">Ending Soon</option>
                <option value="most-popular">Most Bids</option>
                <option value="highest-bid">Highest Bid</option>
                <option value="newest">Recently Added</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  selectedCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-amber-100 text-amber-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Auctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {auction.featured && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  {auction.hot && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Hot
                    </div>
                  )}
                  {auction.new && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      New
                    </div>
                  )}
                </div>

                {/* Condition */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    {auction.condition}
                  </span>
                </div>

                {/* Timer */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {formatTimeLeft(auction.timeLeft)}
                </div>

                {/* Current Bid */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AED {auction.currentBid.toLocaleString()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{auction.title}</h3>
                    <p className="text-amber-600 font-medium text-sm">{auction.brand}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{auction.description}</p>

                {/* Bid Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Starting bid:</span>
                    <span className="font-semibold text-gray-900">AED {auction.startingBid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current bid:</span>
                    <span className="font-bold text-amber-600 text-lg">AED {auction.currentBid.toLocaleString()}</span>
                  </div>
                  {auction.buyNowPrice && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Buy now:</span>
                      <span className="font-semibold text-green-600">AED {auction.buyNowPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total bids:</span>
                    <span className="font-semibold">{auction.totalBids}</span>
                  </div>
                </div>

                {/* Winner Display */}
                {auction.status === 'completed' && auction.winner && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-5 h-5 text-yellow-500" />
                      <span className="font-bold text-green-800">Auction Won!</span>
                    </div>
                    <p className="text-green-700">🎉 Winner: <strong>{auction.winner}</strong></p>
                    <p className="text-green-600 text-sm">Final bid: AED {auction.currentBid.toLocaleString()}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {auction.status === 'active' ? (
                    <>
                      <button
                        onClick={() => handlePlaceBid(auction)}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Gavel className="w-4 h-4" />
                        Place Bid
                      </button>
                      {auction.buyNowPrice && (
                        <button className="px-4 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all">
                          Buy Now
                        </button>
                      )}
                    </>
                  ) : auction.status === 'completed' ? (
                    <button
                      disabled
                      className="w-full px-4 py-3 bg-gray-200 text-gray-500 rounded-xl font-bold cursor-not-allowed"
                    >
                      Auction Ended
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full px-4 py-3 bg-blue-100 text-blue-800 rounded-xl font-bold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedAuctions.length === 0 && (
          <div className="text-center py-12">
            <Gavel className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No auctions found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters</p>
          </div>
        )}
      </div>

      {/* Bid Modal */}
      {showBidModal && selectedAuction && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Place Your Bid</h3>
              <p className="text-gray-600">You're bidding on:</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={selectedAuction.image} 
                  alt={selectedAuction.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{selectedAuction.title}</h4>
                  <p className="text-amber-600 font-medium">{selectedAuction.brand}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Current Bid</span>
                  <div className="font-bold text-amber-600 text-lg">AED {selectedAuction.currentBid.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-gray-500">Time Left</span>
                  <div className="font-bold">{selectedAuction.timeLeft}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Bid Amount (AED)</label>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                min={selectedAuction.currentBid + 100}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg font-semibold"
                placeholder={`Minimum: ${(selectedAuction.currentBid + 100).toLocaleString()}`}
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum bid increment: AED 100
              </p>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowBidModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmBid}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all font-bold"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Auction Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Gavel className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <div className="text-4xl font-bold mb-2">2,847</div>
              <div className="text-amber-200">Items Sold</div>
            </div>
            <div className="text-center">
              <Crown className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <div className="text-4xl font-bold mb-2">AED 15.2M</div>
              <div className="text-amber-200">Total Sales</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <div className="text-4xl font-bold mb-2">12,500+</div>
              <div className="text-amber-200">Active Bidders</div>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-amber-200">Seller Rating</div>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Auctions</h3>
                  <p className="text-xs text-gray-400">Bid on Exclusive Items</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Premium auction platform for authenticated luxury items, collectibles, and rare finds.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Bids</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sell Items</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Authentication</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Watches</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fine Art</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Designer Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collectibles</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">auctions@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
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
              © 2024 Hashtags Auctions. All rights reserved. | Licensed Auction House
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};