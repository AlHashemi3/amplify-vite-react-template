import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MapPin, Star, Heart, Gift, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Trophy, Crown, Zap, Target, Award, Coins, CreditCard, Smartphone, Building, HelpCircle, Lock, Unlock, Play, Pause, RotateCcw, RefreshCw, Package, Box, Ticket, Gem, Diamond, Flame, CloudLightning as Lightning, Magnet as Magic, Wand2, Sparkle, Gamepad2, Joystick, TowerControl as Controller, Shuffle, ArrowRight, ChevronRight, Plus, Minus, X, Check, AlertCircle, CheckCircle, Timer, Clock, Calendar, Users, Eye, ThumbsUp, Share2, Bookmark, Download, Upload, Settings, Filter, Search, Grid, List, MoreHorizontal } from 'lucide-react';

interface PlayWinPageProps {
  onBack?: () => void;
}

interface Bear {
  id: number;
  name: string;
  level: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  image: string;
  description: string;
  owned: boolean;
  count: number;
  maxLevel: number;
  evolutionItems: string[];
  costume: {
    hat?: string;
    outfit?: string;
    accessory?: string;
  };
}

interface Game {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  basePrice: number;
  image: string;
  type: 'draw' | 'box' | 'cards' | 'scratch' | 'wheel' | 'slots';
  minLevel: number;
}

interface GameResult {
  type: 'bear' | 'item' | 'coins' | 'nothing';
  item?: Bear | string;
  value?: number;
  rarity?: string;
}

export const PlayWinPage: React.FC<PlayWinPageProps> = ({ onBack }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [userCoins, setUserCoins] = useState(500);
  const [userBears, setUserBears] = useState<Bear[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('coins');
  const [showCollection, setShowCollection] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const levels = [
    { level: 1, name: 'Beginner', multiplier: 1.0, color: 'from-green-400 to-green-600' },
    { level: 2, name: 'Amateur', multiplier: 1.4, color: 'from-blue-400 to-blue-600' },
    { level: 3, name: 'Pro', multiplier: 1.96, color: 'from-purple-400 to-purple-600' },
    { level: 4, name: 'Expert', multiplier: 2.74, color: 'from-orange-400 to-orange-600' },
    { level: 5, name: 'Master', multiplier: 3.84, color: 'from-red-400 to-red-600' },
    { level: 6, name: 'Legend', multiplier: 5.38, color: 'from-yellow-400 to-yellow-600' },
    { level: 7, name: 'Mythic', multiplier: 7.53, color: 'from-pink-400 to-pink-600' },
    { level: 8, name: 'Divine', multiplier: 10.54, color: 'from-indigo-400 to-indigo-600' },
    { level: 9, name: 'Cosmic', multiplier: 14.76, color: 'from-cyan-400 to-cyan-600' },
    { level: 10, name: 'Eternal', multiplier: 20.66, color: 'from-gradient-rainbow' }
  ];

  const games: Game[] = [
    {
      id: 'lucky-draw',
      name: 'Lucky Draw',
      description: 'Draw from a magical box filled with rare bears and items',
      icon: Gift,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'draw',
      minLevel: 1
    },
    {
      id: 'mystery-box',
      name: 'Mystery Box',
      description: 'Open mysterious boxes containing legendary bears',
      icon: Package,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'box',
      minLevel: 1
    },
    {
      id: 'card-packs',
      name: 'Card Packs',
      description: 'Collect rare bear cards and evolution items',
      icon: Ticket,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'cards',
      minLevel: 2
    },
    {
      id: 'scratch-cards',
      name: 'Scratch Cards',
      description: 'Scratch to reveal hidden treasures and golden bears',
      icon: Gem,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'scratch',
      minLevel: 1
    },
    {
      id: 'fortune-wheel',
      name: 'Fortune Wheel',
      description: 'Spin the wheel of fortune for epic rewards',
      icon: Target,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'wheel',
      minLevel: 3
    },
    {
      id: 'magic-slots',
      name: 'Magic Slots',
      description: 'Hit the jackpot with magical slot machines',
      icon: Zap,
      basePrice: 10,
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'slots',
      minLevel: 4
    }
  ];

  const bearCollection: Bear[] = [
    {
      id: 1,
      name: 'Honey Bear',
      level: 1,
      rarity: 'Common',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'A sweet and cuddly bear who loves honey',
      owned: false,
      count: 0,
      maxLevel: 10,
      evolutionItems: ['Honey Pot', 'Golden Nectar', 'Royal Jelly'],
      costume: {}
    },
    {
      id: 2,
      name: 'Forest Guardian',
      level: 1,
      rarity: 'Rare',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'A mystical bear that protects the enchanted forest',
      owned: false,
      count: 0,
      maxLevel: 10,
      evolutionItems: ['Magic Leaf', 'Ancient Bark', 'Forest Crown'],
      costume: {}
    },
    {
      id: 3,
      name: 'Crystal Bear',
      level: 1,
      rarity: 'Epic',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'A rare bear made of pure crystal energy',
      owned: false,
      count: 0,
      maxLevel: 10,
      evolutionItems: ['Crystal Shard', 'Prism Core', 'Diamond Heart'],
      costume: {}
    },
    {
      id: 4,
      name: 'Golden Emperor',
      level: 1,
      rarity: 'Legendary',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'The legendary golden bear ruler of all bears',
      owned: false,
      count: 0,
      maxLevel: 10,
      evolutionItems: ['Golden Crown', 'Royal Scepter', 'Emperor Robe'],
      costume: {}
    },
    {
      id: 5,
      name: 'Cosmic Deity',
      level: 1,
      rarity: 'Mythic',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'The ultimate mythic bear with cosmic powers',
      owned: false,
      count: 0,
      maxLevel: 10,
      evolutionItems: ['Star Fragment', 'Cosmic Orb', 'Divine Essence'],
      costume: {}
    }
  ];

  const paymentMethods = [
    { id: 'coins', name: 'Game Coins', icon: Coins, description: 'Use your earned coins' },
    { id: 'credit', name: 'Credit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'sms', name: 'SMS Payment', icon: Smartphone, description: 'Charge to your mobile' },
    { id: 'bank', name: 'Bank Transfer', icon: Building, description: 'Direct bank transfer' }
  ];

  const getCurrentPrice = (basePrice: number) => {
    const levelData = levels.find(l => l.level === selectedLevel);
    return Math.round(basePrice * (levelData?.multiplier || 1));
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-gray-400 to-gray-600';
      case 'Rare': return 'from-blue-400 to-blue-600';
      case 'Epic': return 'from-purple-400 to-purple-600';
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      case 'Mythic': return 'from-pink-400 to-red-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const playGame = (game: Game) => {
    if (selectedPayment === 'coins' && userCoins < getCurrentPrice(game.basePrice)) {
      alert('Not enough coins! Please buy more coins or choose another payment method.');
      return;
    }

    setIsPlaying(true);
    
    // Simulate game animation
    setTimeout(() => {
      const result = generateGameResult(game);
      setGameResult(result);
      setIsPlaying(false);
      setShowResultModal(true);
      
      // Deduct payment
      if (selectedPayment === 'coins') {
        setUserCoins(prev => prev - getCurrentPrice(game.basePrice));
      }
      
      // Add rewards
      if (result.type === 'bear' && result.item) {
        // Add bear to collection logic here
      } else if (result.type === 'coins' && result.value) {
        setUserCoins(prev => prev + result.value);
      }
    }, 3000);
  };

  const generateGameResult = (game: Game): GameResult => {
    const random = Math.random();
    const levelMultiplier = levels.find(l => l.level === selectedLevel)?.multiplier || 1;
    
    // Higher level = better chances
    const rarityChances = {
      nothing: Math.max(0.4 - (levelMultiplier * 0.05), 0.1),
      common: Math.max(0.35 - (levelMultiplier * 0.03), 0.2),
      rare: Math.min(0.15 + (levelMultiplier * 0.02), 0.3),
      epic: Math.min(0.08 + (levelMultiplier * 0.015), 0.2),
      legendary: Math.min(0.02 + (levelMultiplier * 0.01), 0.15),
      mythic: Math.min(0.005 + (levelMultiplier * 0.005), 0.05)
    };

    if (random < rarityChances.nothing) {
      return { type: 'nothing' };
    } else if (random < rarityChances.nothing + rarityChances.common) {
      return { 
        type: 'bear', 
        item: bearCollection.find(b => b.rarity === 'Common'),
        rarity: 'Common'
      };
    } else if (random < rarityChances.nothing + rarityChances.common + rarityChances.rare) {
      return { 
        type: 'bear', 
        item: bearCollection.find(b => b.rarity === 'Rare'),
        rarity: 'Rare'
      };
    } else if (random < rarityChances.nothing + rarityChances.common + rarityChances.rare + rarityChances.epic) {
      return { 
        type: 'bear', 
        item: bearCollection.find(b => b.rarity === 'Epic'),
        rarity: 'Epic'
      };
    } else if (random < 0.98) {
      return { 
        type: 'bear', 
        item: bearCollection.find(b => b.rarity === 'Legendary'),
        rarity: 'Legendary'
      };
    } else {
      return { 
        type: 'bear', 
        item: bearCollection.find(b => b.rarity === 'Mythic'),
        rarity: 'Mythic'
      };
    }
  };

  const buyCoins = (amount: number, price: number) => {
    // In real app, integrate with payment gateway
    setUserCoins(prev => prev + amount);
    alert(`Successfully purchased ${amount} coins for AED ${price}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors"
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
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Play & Win
                </h1>
                <p className="text-xs text-white/60">Lucky Games & Prizes</p>
              </div>
            </div>
            
            {/* User Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-bold">{userCoins.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => setShowCollection(true)}
                className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-black/40 transition-colors"
              >
                <Trophy className="w-5 h-5 text-purple-400" />
                <span>Collection</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8">
            <Gamepad2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">Play & Win Amazing Prizes!</h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Collect rare bears, evolve them through 10 levels, and win incredible prizes. Each game offers unique chances to build your ultimate collection!
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/60">Collectible Bears</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Crown className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold text-white">10</div>
              <div className="text-white/60">Evolution Levels</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Gem className="w-8 h-8 mx-auto mb-3 text-pink-400" />
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-white/60">Lucky Games</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-white">AED 10</div>
              <div className="text-white/60">Starting Price</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Level Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Level</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {levels.map((level) => (
              <button
                key={level.level}
                onClick={() => setSelectedLevel(level.level)}
                className={`relative p-4 rounded-xl transition-all transform hover:scale-105 ${
                  selectedLevel === level.level
                    ? `bg-gradient-to-r ${level.color} shadow-2xl ring-4 ring-white/30`
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{level.level}</div>
                  <div className="text-xs text-white/80 font-medium">{level.name}</div>
                  <div className="text-xs text-white/60 mt-1">
                    x{level.multiplier.toFixed(1)}
                  </div>
                </div>
                {selectedLevel === level.level && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-white/60">
              Higher levels = Better rewards + Higher costs (40% increase per level)
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Lucky Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => {
              const Icon = game.icon;
              const price = getCurrentPrice(game.basePrice);
              const canPlay = selectedLevel >= game.minLevel;
              
              return (
                <div
                  key={game.id}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${
                    canPlay 
                      ? 'hover:bg-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => canPlay && setSelectedGame(game)}
                >
                  <div className="relative h-48">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {!canPlay && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Lock className="w-8 h-8 mx-auto mb-2" />
                          <div className="text-sm font-medium">Level {game.minLevel} Required</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full font-bold">
                      AED {price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{game.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/60">
                        Min Level: {game.minLevel}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (canPlay) {
                            setSelectedGame(game);
                            setShowPaymentModal(true);
                          }
                        }}
                        disabled={!canPlay}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${
                          canPlay
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-lg'
                            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        {canPlay ? 'Play Now' : 'Locked'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bear Collection Preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Bear Collection</h2>
            <button 
              onClick={() => setShowCollection(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2"
            >
              <Trophy className="w-5 h-5" />
              View Full Collection
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {bearCollection.slice(0, 5).map((bear) => (
              <div
                key={bear.id}
                className={`relative bg-gradient-to-br ${getRarityColor(bear.rarity)} rounded-2xl p-6 text-center ${
                  bear.owned ? 'ring-4 ring-yellow-400' : 'opacity-60'
                }`}
              >
                <img 
                  src={bear.image} 
                  alt={bear.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-white font-bold mb-1">{bear.name}</h3>
                <div className="text-white/80 text-sm mb-2">{bear.rarity}</div>
                <div className="text-white/60 text-xs">
                  {bear.owned ? `Level ${bear.level}` : 'Not Collected'}
                </div>
                
                {!bear.owned && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Coin Packages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Buy Game Coins</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { coins: 100, price: 10, bonus: 0, popular: false },
              { coins: 500, price: 45, bonus: 50, popular: true },
              { coins: 1000, price: 85, bonus: 150, popular: false },
              { coins: 2500, price: 200, bonus: 500, popular: false }
            ].map((pack, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all hover:bg-white/20 hover:scale-105 ${
                  pack.popular ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <Coins className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <div className="text-3xl font-bold text-white mb-2">
                  {(pack.coins + pack.bonus).toLocaleString()}
                </div>
                <div className="text-white/60 text-sm mb-1">
                  {pack.coins.toLocaleString()} coins
                  {pack.bonus > 0 && (
                    <span className="text-green-400"> + {pack.bonus} bonus</span>
                  )}
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-4">
                  AED {pack.price}
                </div>
                
                <button
                  onClick={() => buyCoins(pack.coins + pack.bonus, pack.price)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedGame && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <selectedGame.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Play {selectedGame.name}</h3>
              <p className="text-gray-600">Level {selectedLevel} - AED {getCurrentPrice(selectedGame.basePrice)}</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-gray-900">Payment Method</h4>
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const disabled = method.id === 'coins' && userCoins < getCurrentPrice(selectedGame.basePrice);
                
                return (
                  <button
                    key={method.id}
                    onClick={() => !disabled && setSelectedPayment(method.id)}
                    disabled={disabled}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === method.id
                        ? 'border-purple-500 bg-purple-50'
                        : disabled
                          ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                          : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${
                      selectedPayment === method.id ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-900">{method.name}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                      {method.id === 'coins' && (
                        <div className="text-xs text-gray-500">
                          Balance: {userCoins} coins
                          {disabled && <span className="text-red-500 ml-2">(Insufficient)</span>}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowPaymentModal(false);
                  playGame(selectedGame);
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-bold"
              >
                Play Game
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Playing Modal */}
      {isPlaying && selectedGame && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
              <selectedGame.icon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Playing {selectedGame.name}...</h3>
            <p className="text-gray-600 mb-6">The magic is happening! ✨</p>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            
            <p className="text-sm text-gray-500">Generating your reward...</p>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {showResultModal && gameResult && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            {gameResult.type === 'nothing' ? (
              <>
                <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Luck Next Time!</h3>
                <p className="text-gray-600 mb-6">No prize this time, but don't give up!</p>
              </>
            ) : gameResult.type === 'bear' && gameResult.item ? (
              <>
                <div className={`w-24 h-24 bg-gradient-to-r ${getRarityColor(gameResult.rarity || 'Common')} rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce`}>
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations! 🎉</h3>
                <h4 className="text-xl font-semibold text-purple-600 mb-4">
                  You won: {(gameResult.item as Bear).name}
                </h4>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-bold mb-4 bg-gradient-to-r ${getRarityColor(gameResult.rarity || 'Common')}`}>
                  {gameResult.rarity} Bear
                </div>
                <p className="text-gray-600 mb-6">{(gameResult.item as Bear).description}</p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coins className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coins Won!</h3>
                <p className="text-gray-600 mb-6">You earned {gameResult.value} coins!</p>
              </>
            )}
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowResultModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setShowResultModal(false);
                  if (selectedGame) {
                    setShowPaymentModal(true);
                  }
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-bold"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Collection Modal */}
      {showCollection && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">My Bear Collection</h3>
              <button 
                onClick={() => setShowCollection(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {bearCollection.map((bear) => (
                <div
                  key={bear.id}
                  className={`relative bg-gradient-to-br ${getRarityColor(bear.rarity)} rounded-xl p-4 text-center ${
                    bear.owned ? 'ring-2 ring-yellow-400' : 'opacity-40'
                  }`}
                >
                  <img 
                    src={bear.image} 
                    alt={bear.name}
                    className="w-16 h-16 mx-auto rounded-full mb-3 object-cover"
                  />
                  <h4 className="text-white font-bold text-sm mb-1">{bear.name}</h4>
                  <div className="text-white/80 text-xs mb-1">{bear.rarity}</div>
                  <div className="text-white/60 text-xs">
                    {bear.owned ? `Level ${bear.level}/${bear.maxLevel}` : 'Locked'}
                  </div>
                  
                  {bear.owned && bear.count > 1 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {bear.count}
                    </div>
                  )}
                  
                  {!bear.owned && (
                    <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Collect all {bearCollection.length} bears and evolve them to max level!
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {userBears.filter(b => b.owned).length}/{bearCollection.length}
                  </div>
                  <div className="text-sm text-gray-600">Collected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {userBears.reduce((sum, b) => sum + b.level, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Play & Win</h3>
                  <p className="text-xs text-white/60">Lucky Games & Prizes</p>
                </div>
              </div>
              <p className="text-white/60 mb-6">
                The ultimate gaming platform for collecting rare bears and winning amazing prizes through luck-based games.
              </p>
            </div>

            {/* Game Types */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Game Types</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Lucky Draw</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Mystery Box</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Card Packs</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Scratch Cards</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Game Rules</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Fair Play</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Responsible Gaming</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/60">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/60">games@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/60">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center text-white/60 text-sm">
              © 2024 Hashtags Play & Win. All rights reserved. | 18+ Only | Play Responsibly
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};