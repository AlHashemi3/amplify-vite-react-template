import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Star, ChevronLeft, ChevronRight, Filter, Grid, List, Camera, Video, Image, Calendar, Clock, Users, Award, CheckCircle, ExternalLink, Instagram, Twitter, Facebook, Linkedin, Globe, MoreHorizontal, Send, Zap, Crown, Verified, Plus, Target, Music, Palette, Mic, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { StoryPage } from '../StoryPage/StoryPage';

interface TalentsPageProps {
  onBack?: () => void;
  onTalentClick?: (talentId: number) => void;
  onModelClick?: (modelId: number) => void;
}

interface Story {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  userRole: string;
  verified: boolean;
  timestamp: string;
  type: 'image' | 'video';
  content: string;
  caption?: string;
  views: number;
  likes: number;
  duration: number;
  isLive?: boolean;
}

interface Talent {
  id: number;
  name: string;
  username: string;
  role: string;
  bio: string;
  image: string;
  avatar: string;
  rating: number;
  reviews: number;
  followers: number;
  following: number;
  posts: number;
  hourlyRate: number;
  responseTime: string;
  location: string;
  languages: string[];
  skills: string[];
  verified: boolean;
  online: boolean;
  trending?: boolean;
  featured?: boolean;
  portfolio: string[];
  experience: number;
  completedJobs: number;
}

export const TalentsPage: React.FC<TalentsPageProps> = ({ onBack, onTalentClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [followedTalents, setFollowedTalents] = useState<number[]>([]);
  const [likedTalents, setLikedTalents] = useState<number[]>([]);
  const [bookmarkedTalents, setBookmarkedTalents] = useState<number[]>([]);
  const [showStoryPage, setShowStoryPage] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Talents', count: 156 },
    { id: 'Event Organizers', name: 'Event Organizers', count: 45 },
    { id: 'DJs', name: 'DJs & Musicians', count: 32 },
    { id: 'Photographers', name: 'Photographers', count: 28 },
    { id: 'Models', name: 'Models', count: 25 },
    { id: 'Hosts', name: 'Hosts & MCs', count: 20 },
    { id: 'Designers', name: 'Designers', count: 18 }
  ];

  const stories: Story[] = [
    {
      id: 1,
      userId: 1,
      userName: 'Layla Al-Zahra',
      userAvatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      userRole: 'Event Organizer',
      verified: true,
      timestamp: '2h',
      type: 'image',
      content: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Setting up for tonight\'s luxury wedding at Burj Al Arab ✨',
      views: 1247,
      likes: 89,
      duration: 5,
      isLive: true
    },
    {
      id: 2,
      userId: 2,
      userName: 'Omar Hassan',
      userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      userRole: 'Professional DJ',
      verified: true,
      timestamp: '3h',
      type: 'video',
      content: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Live mixing at Dubai Marina Club 🎵',
      views: 2156,
      likes: 234,
      duration: 10
    },
    {
      id: 3,
      userId: 3,
      userName: 'Sophia Martinez',
      userAvatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      userRole: 'Event Photographer',
      verified: true,
      timestamp: '4h',
      type: 'image',
      content: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Golden hour shots at the beach wedding 📸',
      views: 1567,
      likes: 178,
      duration: 6
    },
    {
      id: 4,
      userId: 4,
      userName: 'Ahmed Al-Rashid',
      userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      userRole: 'Fashion Designer',
      verified: false,
      timestamp: '5h',
      type: 'image',
      content: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'New collection preview for Dubai Fashion Week',
      views: 892,
      likes: 67,
      duration: 4
    },
    {
      id: 5,
      userId: 5,
      userName: 'Noor Al-Zahra',
      userAvatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      userRole: 'Wedding Planner',
      verified: true,
      timestamp: '6h',
      type: 'video',
      content: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Behind the scenes of our floral arrangements 🌹',
      views: 1834,
      likes: 145,
      duration: 8
    }
  ];

  const talents: Talent[] = [
    {
      id: 1,
      name: 'Layla Al-Zahra',
      username: '@layla_events',
      role: 'Event Organizer & Wedding Planner',
      bio: 'Luxury event organizer specializing in high-end weddings and corporate events across the UAE. 8+ years of experience creating unforgettable moments.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      followers: 12500,
      following: 890,
      posts: 234,
      hourlyRate: 350,
      responseTime: '< 1 hour',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic', 'French'],
      skills: ['Wedding Planning', 'Corporate Events', 'Venue Selection', 'Vendor Management', 'Budget Planning'],
      verified: true,
      online: true,
      trending: true,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 8,
      completedJobs: 127
    },
    {
      id: 4,
      name: 'Yasmin Al-Rashid',
      username: '@yasmin_model',
      role: 'Commercial Model',
      bio: 'Professional commercial model with extensive experience in brand campaigns and lifestyle photography.',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 189,
      followers: 95000,
      following: 1200,
      posts: 567,
      hourlyRate: 450,
      responseTime: '< 2 hours',
      location: 'Dubai, UAE',
      languages: ['Arabic', 'English'],
      skills: ['Commercial', 'Lifestyle', 'Product'],
      verified: true,
      online: false,
      trending: false,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 6,
      completedJobs: 234
    },
    {
      id: 5,
      name: 'Zara Al-Maktoum',
      username: '@zara_runway',
      role: 'Runway Model',
      bio: 'High fashion runway model specializing in designer shows and editorial work.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 156,
      followers: 112000,
      following: 890,
      posts: 445,
      hourlyRate: 600,
      responseTime: '< 3 hours',
      location: 'Dubai, UAE',
      languages: ['Arabic', 'English', 'Italian'],
      skills: ['Runway', 'High Fashion', 'Editorial'],
      verified: true,
      online: true,
      trending: true,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 5,
      completedJobs: 167
    },
    {
      id: 6,
      name: 'Hala Al-Zahra',
      username: '@hala_beauty',
      role: 'Beauty Model',
      bio: 'Beauty model specializing in skincare and cosmetics campaigns.',
      image: 'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 167,
      followers: 87000,
      following: 567,
      posts: 334,
      hourlyRate: 380,
      responseTime: '< 1 hour',
      location: 'Sharjah, UAE',
      languages: ['Arabic', 'English'],
      skills: ['Beauty', 'Skincare', 'Cosmetics'],
      verified: true,
      online: false,
      trending: false,
      featured: false,
      portfolio: [
        'https://images.pexels.com/photos/3802511/pexels-photo-3802511.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 3,
      completedJobs: 145
    },
    {
      id: 7,
      name: 'Mira Al-Qasimi',
      username: '@mira_plus',
      role: 'Plus Size Model',
      bio: 'Plus size model promoting inclusive fashion and body positivity.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 143,
      followers: 125000,
      following: 1100,
      posts: 456,
      hourlyRate: 420,
      responseTime: '< 2 hours',
      location: 'Dubai, UAE',
      languages: ['Arabic', 'English'],
      skills: ['Inclusive Fashion', 'Body Positivity'],
      verified: true,
      online: true,
      trending: true,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 4,
      completedJobs: 189
    },
    {
      id: 8,
      name: 'Rania Al-Mansouri',
      username: '@rania_fitness',
      role: 'Fitness Model',
      bio: 'Fitness model specializing in sports and wellness campaigns.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 198,
      followers: 156000,
      following: 890,
      posts: 678,
      hourlyRate: 350,
      responseTime: '< 1 hour',
      location: 'Dubai, UAE',
      languages: ['Arabic', 'English'],
      skills: ['Fitness', 'Sports', 'Wellness'],
      verified: true,
      online: true,
      trending: false,
      featured: false,
      portfolio: [
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 5,
      completedJobs: 234
    },
    {
      id: 9,
      name: 'Omar Hassan',
      username: '@omar_dj',
      role: 'Professional DJ & Music Producer',
      bio: 'International DJ with 10+ years experience. Specializing in electronic, house, and Arabic fusion music for premium events.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 203,
      followers: 8900,
      following: 567,
      posts: 189,
      hourlyRate: 280,
      responseTime: '< 2 hours',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic'],
      skills: ['DJ Performance', 'Music Production', 'Sound Engineering', 'Event Entertainment'],
      verified: true,
      online: false,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 10,
      completedJobs: 89
    },
    {
      id: 15,
      name: 'Sophia Martinez',
      username: '@sophia_photo',
      role: 'Event Photographer & Videographer',
      bio: 'Award-winning photographer capturing life\'s most precious moments. Specializing in weddings, corporate events, and fashion photography.',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 178,
      followers: 6700,
      following: 423,
      posts: 312,
      hourlyRate: 220,
      responseTime: '< 30 min',
      location: 'Dubai, UAE',
      languages: ['English', 'Spanish', 'Arabic'],
      skills: ['Event Photography', 'Wedding Photography', 'Portrait Photography', 'Video Production'],
      verified: true,
      online: true,
      trending: false,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 6,
      completedJobs: 156
    },
    {
      id: 11,
      name: 'Ahmed Al-Rashid',
      username: '@ahmed_host',
      role: 'Professional Host & MC',
      bio: 'Bilingual professional host and master of ceremonies with extensive experience in corporate and social events.',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 134,
      followers: 4500,
      following: 234,
      posts: 156,
      hourlyRate: 180,
      responseTime: '< 1 hour',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic'],
      skills: ['Event Hosting', 'Public Speaking', 'Corporate Events', 'Wedding MC'],
      verified: false,
      online: true,
      featured: false,
      portfolio: [
        'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 5,
      completedJobs: 98
    },
    {
      id: 5,
      name: 'Fatima Al-Zahra',
      username: '@fatima_model',
      role: 'Fashion Model & Brand Ambassador',
      bio: 'Professional fashion model and brand ambassador working with top UAE and international brands.',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89,
      followers: 15600,
      following: 1200,
      posts: 445,
      hourlyRate: 400,
      responseTime: '< 2 hours',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic', 'French'],
      skills: ['Fashion Modeling', 'Brand Ambassador', 'Commercial Photography', 'Runway'],
      verified: true,
      online: false,
      trending: true,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 4,
      completedJobs: 67
    },
    {
      id: 6,
      name: 'Khalid Rahman',
      username: '@khalid_design',
      role: 'Event Designer & Decorator',
      bio: 'Creative event designer transforming spaces into magical experiences. Specializing in luxury weddings and corporate branding.',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 112,
      followers: 3400,
      following: 567,
      posts: 178,
      hourlyRate: 250,
      responseTime: '< 3 hours',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic'],
      skills: ['Event Design', 'Floral Arrangements', 'Space Planning', 'Theme Development'],
      verified: false,
      online: true,
      featured: false,
      portfolio: [
        'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 6,
      completedJobs: 78
    },
    {
      id: 7,
      name: 'Sarah Johnson',
      username: '@sarah_creative',
      role: 'Creative Director & Brand Strategist',
      bio: 'International creative director helping brands tell their stories through innovative event experiences and marketing campaigns.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 167,
      followers: 9800,
      following: 789,
      posts: 267,
      hourlyRate: 450,
      responseTime: '< 1 hour',
      location: 'Dubai, UAE',
      languages: ['English', 'French', 'Spanish'],
      skills: ['Creative Direction', 'Brand Strategy', 'Campaign Development', 'Event Conceptualization'],
      verified: true,
      online: true,
      trending: false,
      featured: true,
      portfolio: [
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 12,
      completedJobs: 145
    },
    {
      id: 8,
      name: 'Hassan Mohammed',
      username: '@hassan_chef',
      role: 'Executive Chef & Catering Specialist',
      bio: 'Award-winning chef specializing in luxury catering for high-end events. Expert in international and Middle Eastern cuisine.',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=600',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 145,
      followers: 5600,
      following: 345,
      posts: 198,
      hourlyRate: 320,
      responseTime: '< 2 hours',
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic', 'French'],
      skills: ['Luxury Catering', 'Menu Development', 'Food Presentation', 'Event Dining'],
      verified: true,
      online: false,
      featured: false,
      portfolio: [
        'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      experience: 15,
      completedJobs: 234
    }
  ];

  const filteredTalents = talents.filter(talent => {
    const matchesCategory = selectedCategory === 'All' || talent.role.includes(selectedCategory.replace(/s$/, ''));
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTalents = [...filteredTalents].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'followers':
        return b.followers - a.followers;
      case 'price-low':
        return a.hourlyRate - b.hourlyRate;
      case 'price-high':
        return b.hourlyRate - a.hourlyRate;
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const toggleFollow = (talentId: number) => {
    if (followedTalents.includes(talentId)) {
      setFollowedTalents(followedTalents.filter(id => id !== talentId));
    } else {
      setFollowedTalents([...followedTalents, talentId]);
    }
  };

  const toggleLike = (talentId: number) => {
    if (likedTalents.includes(talentId)) {
      setLikedTalents(likedTalents.filter(id => id !== talentId));
    } else {
      setLikedTalents([...likedTalents, talentId]);
    }
  };

  const toggleBookmark = (talentId: number) => {
    if (bookmarkedTalents.includes(talentId)) {
      setBookmarkedTalents(bookmarkedTalents.filter(id => id !== talentId));
    } else {
      setBookmarkedTalents([...bookmarkedTalents, talentId]);
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

  const handleStoryClick = (storyId: number) => {
    setSelectedStoryId(storyId);
    setShowStoryPage(true);
  };

  const handleCloseStory = () => {
    setShowStoryPage(false);
    setSelectedStoryId(null);
  };

  if (showStoryPage) {
    return <StoryPage storyId={selectedStoryId} onClose={handleCloseStory} />;
  }

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
                  Hashtags Talents
                </h1>
                <p className="text-xs text-gray-500">Connect with Professionals</p>
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
            <h1 className="text-5xl font-bold mb-6">Connect with Top Talents</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Discover and book verified creative professionals for your next project. From event organizers to photographers, find the perfect talent for any occasion.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search talents, skills, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-16 text-gray-900 rounded-xl border-0 focus:ring-4 focus:ring-purple-300 text-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Stories</h2>
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('stories-container');
                if (container) {
                  container.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('stories-container');
                if (container) {
                  container.scrollBy({ left: 200, behavior: 'smooth' });
                }
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
            
            {/* Stories Container */}
            <div 
              id="stories-container"
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            >
              {/* Your Story */}
              <div className="flex-shrink-0 text-center cursor-pointer">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center border-2 border-gray-300">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600 font-medium">Your Story</p>
              </div>

              {/* Talent Stories */}
              {stories.map((story) => (
                <div 
                  key={story.id} 
                  className="flex-shrink-0 text-center cursor-pointer"
                  onClick={() => handleStoryClick(story.id)}
                >
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full p-0.5 ${
                      story.isLive 
                        ? 'bg-gradient-to-r from-red-500 to-red-600' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      <img 
                        src={story.userAvatar} 
                        alt={story.userName}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    {story.isLive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                        LIVE
                      </div>
                    )}
                    {!story.isLive && (
                      <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <p className="text-xs mt-2 text-gray-600 font-medium truncate w-16">
                    {story.userName.split(' ')[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('categories-container');
                if (container) {
                  container.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-3 h-3 text-gray-600" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('categories-container');
                if (container) {
                  container.scrollBy({ left: 200, behavior: 'smooth' });
                }
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-3 h-3 text-gray-600" />
            </button>
            
            {/* Categories Container */}
            <div 
              id="categories-container"
              className="flex gap-3 overflow-x-auto scrollbar-hide px-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
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
                <option value="featured">Featured</option>
                <option value="rating">Highest Rated</option>
                <option value="followers">Most Followed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Experience</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Price</option>
                    <option>Under AED 200</option>
                    <option>AED 200 - 400</option>
                    <option>AED 400 - 600</option>
                    <option>Above AED 600</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Locations</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Remote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Availability</option>
                    <option>Available Now</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Custom Date</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Talents Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {sortedTalents.map((talent) => (
            <div
              key={talent.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => onTalentClick?.(talent.id)}
            >
              {/* Large Hero Image */}
              <div className="relative h-80">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badges - Top Left */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {talent.verified && (
                    <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                  {talent.trending && (
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  {talent.online && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Online
                    </div>
                  )}
                </div>

                {/* Quick Actions - Top Right */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(talent.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                      likedTalents.includes(talent.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedTalents.includes(talent.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(talent.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                      bookmarkedTalents.includes(talent.id) 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-500'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedTalents.includes(talent.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Profile Info Overlay - Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{talent.name}</h3>
                        <p className="text-sm text-purple-200">{talent.username}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">AED {talent.hourlyRate}</div>
                      <div className="text-xs text-gray-200">per hour</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                {/* Role & Bio */}
                <div className="mb-4">
                  <p className="text-purple-600 font-semibold mb-2">{talent.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{talent.bio}</p>
                </div>

                {/* Stats - 3 Columns */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{talent.posts}</div>
                    <div className="text-xs text-gray-600">Posts</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{formatNumber(talent.followers)}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-bold">{talent.rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({talent.reviews})</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {talent.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                    {talent.skills.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{talent.skills.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{talent.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{talent.location.split(',')[0]}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFollow(talent.id);
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      followedTalents.includes(talent.id)
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                    }`}
                  >
                    {followedTalents.includes(talent.id) ? 'Following' : 'Follow'}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle message action
                    }}
                    className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">2,500+</div>
              <div className="text-purple-200">Verified Talents</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">15,000+</div>
              <div className="text-purple-200">Successful Bookings</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">4.9</div>
              <div className="text-purple-200">Average Rating</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-purple-200">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rating Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Clients Say</h2>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600 ml-2">(2,847 Reviews)</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { label: 'Professionalism', rating: 4.9 },
                  { label: 'Quality of Work', rating: 4.8 },
                  { label: 'Communication', rating: 4.9 },
                  { label: 'Value for Money', rating: 4.7 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <div className="flex items-center">
                      <div className="w-24 h-1.5 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-1.5 bg-yellow-400 rounded-full" 
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 w-8">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Customer Reviews */}
            <div className="space-y-4">
              {[
                {
                  name: 'Ahmed Al-Mansouri',
                  avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Layla organized our wedding perfectly. Every detail was flawless!',
                  talent: 'Layla Al-Zahra',
                  service: 'Wedding Planning'
                },
                {
                  name: 'Sarah Johnson',
                  avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Omar\'s DJ skills made our corporate event unforgettable.',
                  talent: 'Omar Hassan',
                  service: 'DJ Services'
                },
                {
                  name: 'Mike Chen',
                  avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Sophia captured our special moments beautifully.',
                  talent: 'Sophia Martinez',
                  service: 'Event Photography'
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 text-sm">{review.name}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs mb-1">{review.review}</p>
                      <p className="text-purple-600 text-xs">Booked {review.talent} for {review.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I book a talent?',
                answer: 'Simply browse our verified talents, check their availability, and send a booking request with your event details.'
              },
              {
                question: 'Are all talents verified?',
                answer: 'We verify all talents through background checks, portfolio reviews, and client feedback to ensure quality.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and digital payment methods for your convenience.'
              },
              {
                question: 'Can I cancel or reschedule bookings?',
                answer: 'Yes, you can cancel or reschedule based on our flexible cancellation policy and talent availability.'
              },
              {
                question: 'Do you offer event planning packages?',
                answer: 'Yes, many of our talents offer complete event planning packages including venue, catering, and entertainment.'
              },
              {
                question: 'How do you ensure quality service?',
                answer: 'All talents are rated by clients, and we maintain high standards through continuous monitoring and feedback.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {sortedTalents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-300 mb-6">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No talents found</h3>
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
        {sortedTalents.length > 0 && (
          <div className="text-center">
            <button className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
              Load More Talents
            </button>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Talents</h3>
                  <p className="text-xs text-gray-400">Connect with Professionals</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Your premier destination for discovering and booking verified creative professionals across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Talents</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join as Talent</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Talent Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Organizers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DJs & Musicians</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photographers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Models</a></li>
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
                  <span className="text-gray-400">talents@hashtagsstudios.com</span>
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
              © 2024 Hashtags Talents. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};