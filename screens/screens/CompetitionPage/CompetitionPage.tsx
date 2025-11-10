import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Star, ChevronLeft, ChevronRight, Filter, Grid, List, Trophy, Award, Camera, Video, Palette, Mic, Monitor, Users, Clock, Calendar, CheckCircle, Upload, Download, FileText, Image, Film, Headphones, Brush, Code, Zap, Target, Gift, Crown, Medal, Flame } from 'lucide-react';
import { CompetitionEntryPage } from '../CompetitionEntryPage/CompetitionEntryPage';

interface CompetitionPageProps {
  onBack?: () => void;
}

interface Competition {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  prize: string;
  prizeValue: number;
  prizeImage: string;
  entryFee: number;
  participants: number;
  maxParticipants: number;
  deadline: string;
  timeLeft: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  status: 'active' | 'judging' | 'completed' | 'upcoming';
  featured?: boolean;
  hot?: boolean;
  new?: boolean;
  winner?: string;
  judges: Judge[];
  requirements: string[];
  submissionFormat: string[];
  competitionTypes: ('solo' | 'team' | 'company')[];
}

interface Judge {
  id: number;
  name: string;
  title: string;
  avatar: string;
  expertise: string;
}

export const CompetitionPage: React.FC<CompetitionPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('deadline');
  const [showFilters, setShowFilters] = useState(false);
  const [userEntries, setUserEntries] = useState<number[]>([]);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [showEntryPage, setShowEntryPage] = useState(false);
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<number | null>(null);
  const [selectedCompetitionType, setSelectedCompetitionType] = useState<'solo' | 'team' | 'company'>('solo');

  // Show entry page if requested
  if (showEntryPage && selectedCompetitionId) {
    return (
      <CompetitionEntryPage 
        competitionId={selectedCompetitionId}
        competitionType={selectedCompetitionType}
        onBack={() => {
          setShowEntryPage(false);
          setSelectedCompetitionId(null);
        }}
      />
    );
  }

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Competitions', count: 18 },
    { id: 'Photography', name: 'Photography', count: 6 },
    { id: 'Filmmaking', name: 'Filmmaking', count: 4 },
    { id: 'Design', name: 'Design', count: 3 },
    { id: 'Writing', name: 'Writing', count: 2 },
    { id: 'Music', name: 'Music', count: 2 },
    { id: 'Art', name: 'Digital Art', count: 1 }
  ];

  const competitions: Competition[] = [
    {
      id: 1,
      title: 'Dubai Street Photography Challenge',
      description: 'Capture the essence of Dubai\'s vibrant street life. Show us the city through your unique perspective - from bustling souks to modern skyscrapers.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Photography',
      prize: 'Canon EOS R5 + AED 10,000 Cash',
      prizeValue: 25000,
      prizeImage: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 50,
      participants: 234,
      maxParticipants: 500,
      deadline: '2024-03-15',
      timeLeft: '25 days',
      difficulty: 'All Levels',
      status: 'active',
      featured: true,
      hot: true,
      competitionTypes: ['solo', 'team'],
      competitionTypes: ['solo', 'team'],
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 1, name: 'Ahmed Al-Rashid', title: 'Professional Photographer', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Street Photography' },
        { id: 2, name: 'Sarah Johnson', title: 'National Geographic Photographer', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Documentary Photography' }
      ],
      requirements: [
        'Original photographs taken in Dubai',
        'Minimum 3, maximum 5 submissions',
        'High resolution (minimum 3000px)',
        'No heavy editing or filters',
        'Include location and story behind each photo'
      ],
      submissionFormat: ['JPEG', 'RAW', 'TIFF'],
    },
    {
      id: 2,
      title: 'Short Film Festival 2024',
      description: 'Create a compelling short film (5-15 minutes) that tells a story about modern UAE culture, traditions, or social issues.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Filmmaking',
      prize: 'RED Camera Package + AED 25,000',
      prizeValue: 75000,
      prizeImage: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 100,
      participants: 89,
      maxParticipants: 200,
      deadline: '2024-04-20',
      timeLeft: '60 days',
      difficulty: 'Intermediate',
      status: 'active',
      featured: true,
      competitionTypes: ['solo', 'team', 'company'],
      competitionTypes: ['solo', 'team', 'company'],
      competitionTypes: ['solo', 'team', 'company'],
      judges: [
        { id: 3, name: 'Omar Hassan', title: 'Film Director', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Narrative Filmmaking' },
        { id: 4, name: 'Fatima Al-Zahra', title: 'Documentary Filmmaker', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Documentary Production' }
      ],
      requirements: [
        'Original content only',
        '5-15 minutes duration',
        '4K resolution minimum',
        'English or Arabic with subtitles',
        'Include director\'s statement (500 words)'
      ],
      submissionFormat: ['MP4', 'MOV', 'AVI'],
    },
    {
      id: 3,
      title: 'Logo Design Championship',
      description: 'Design a modern, memorable logo for a new UAE startup. Show your creativity and understanding of brand identity.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Design',
      prize: 'MacBook Pro M3 + Design Software Bundle',
      prizeValue: 15000,
      prizeImage: 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 25,
      participants: 156,
      maxParticipants: 300,
      deadline: '2024-03-01',
      timeLeft: '11 days',
      difficulty: 'All Levels',
      status: 'active',
      new: true,
      competitionTypes: ['solo', 'company'],
      competitionTypes: ['solo', 'company'],
      judges: [
        { id: 5, name: 'Lisa Park', title: 'Creative Director', avatar: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Brand Identity' },
        { id: 6, name: 'David Kim', title: 'Senior Designer', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Logo Design' }
      ],
      competitionTypes: ['solo', 'company'],
      requirements: [
        'Original design concepts',
        'Vector format required',
        'Include brand guidelines',
        'Show logo in different contexts',
        'Provide design rationale'
      ],
      submissionFormat: ['AI', 'EPS', 'SVG', 'PDF']
    },
    {
      id: 4,
      title: 'Mobile App UI/UX Challenge',
      description: 'Design a complete mobile app interface for a food delivery service targeting UAE customers. Focus on user experience and cultural relevance.',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Design',
      prize: 'iPad Pro + Apple Pencil + AED 5,000',
      prizeValue: 8000,
      prizeImage: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 75,
      participants: 67,
      maxParticipants: 150,
      deadline: '2024-03-30',
      timeLeft: '40 days',
      difficulty: 'Advanced',
      status: 'active',
      competitionTypes: ['solo', 'team'],
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 7, name: 'Alex Rivera', title: 'UX Director', avatar: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Mobile UX' },
        { id: 8, name: 'Emma Davis', title: 'Product Designer', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'App Design' }
      ],
      requirements: [
        'Complete app flow design',
        'Minimum 10 screens',
        'Interactive prototype',
        'User research documentation',
        'Accessibility considerations'
      ],
      submissionFormat: ['Figma', 'Sketch', 'Adobe XD', 'PDF']
    },
    {
      id: 5,
      title: 'Creative Writing Contest: UAE Stories',
      description: 'Write a compelling short story (2,000-5,000 words) set in the UAE. Explore themes of culture, tradition, modernity, or personal growth.',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Writing',
      prize: 'Publishing Deal + AED 15,000',
      prizeValue: 20000,
      prizeImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 30,
      participants: 123,
      maxParticipants: 250,
      deadline: '2024-04-10',
      timeLeft: '50 days',
      difficulty: 'All Levels',
      status: 'active',
      competitionTypes: ['solo'],
      competitionTypes: ['solo'],
      judges: [
        { id: 9, name: 'Khalid Rahman', title: 'Published Author', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Fiction Writing' },
        { id: 10, name: 'Layla Al-Zahra', title: 'Literary Editor', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Creative Writing' }
      ],
      requirements: [
        '2,000-5,000 words',
        'Original unpublished work',
        'Set in UAE or featuring UAE themes',
        'English or Arabic accepted',
        'Include author bio (100 words)'
      ],
      submissionFormat: ['PDF', 'DOC', 'DOCX']
    },
    {
      id: 6,
      title: 'Music Production Battle',
      description: 'Produce an original track that blends traditional Arabic music with modern electronic elements. Show your production skills and cultural appreciation.',
      image: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Music',
      prize: 'Professional Studio Time + Equipment',
      prizeValue: 12000,
      prizeImage: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      prizeImage: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 40,
      participants: 78,
      maxParticipants: 100,
      deadline: '2024-03-25',
      timeLeft: '35 days',
      difficulty: 'Intermediate',
      status: 'active',
      featured: true,
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 11, name: 'Mohammed Ali', title: 'Music Producer', avatar: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Electronic Music' },
        { id: 12, name: 'Aisha Al-Zahra', title: 'Traditional Music Expert', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Arabic Music' }
      ],
      requirements: [
        'Original composition',
        '3-6 minutes duration',
        'Include traditional Arabic elements',
        'High quality audio (WAV/FLAC)',
        'Provide production notes'
      ],
      submissionFormat: ['WAV', 'FLAC', 'MP3']
    },
    {
      id: 7,
      title: 'Digital Art Showcase',
      description: 'Create a digital artwork that represents the future of Dubai. Use any digital medium to express your vision of the city in 2050.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Art',
      prize: 'Wacom Cintiq Pro + Software Bundle',
      prizeValue: 10000,
      prizeImage: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 35,
      participants: 145,
      maxParticipants: 200,
      deadline: '2024-04-05',
      timeLeft: '45 days',
      difficulty: 'All Levels',
      status: 'active',
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 13, name: 'Noor Al-Mansouri', title: 'Digital Artist', avatar: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Digital Illustration' },
        { id: 14, name: 'Rashid Al-Maktoum', title: 'Art Director', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Concept Art' }
      ],
      requirements: [
        'Digital medium only',
        'Minimum 2000x2000 pixels',
        'Future Dubai theme',
        'Original artwork',
        'Include artist statement'
      ],
      submissionFormat: ['PSD', 'PNG', 'TIFF', 'JPG']
    },
    {
      id: 8,
      title: 'Documentary Film Competition',
      description: 'Create a 10-20 minute documentary about an inspiring person or community in the UAE. Focus on untold stories and positive impact.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Filmmaking',
      prize: 'Sony FX6 Camera + Post-Production Course',
      prizeValue: 35000,
      prizeImage: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 150,
      participants: 34,
      maxParticipants: 75,
      deadline: '2024-05-15',
      timeLeft: '85 days',
      difficulty: 'Advanced',
      status: 'active',
      featured: true,
      competitionTypes: ['solo', 'team', 'company'],
      judges: [
        { id: 15, name: 'Hamdan Al-Rashid', title: 'Documentary Director', avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Documentary Filmmaking' },
        { id: 16, name: 'Maryam Al-Zahra', title: 'Film Festival Director', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Film Curation' }
      ],
      requirements: [
        '10-20 minutes duration',
        'UAE subject matter',
        '4K resolution preferred',
        'Include signed releases',
        'Director\'s statement required'
      ],
      submissionFormat: ['MP4', 'MOV', 'ProRes']
    },
    {
      id: 9,
      title: 'Portrait Photography Masters',
      description: 'Showcase your portrait photography skills. Capture the personality, emotion, and story of your subjects in powerful portraits.',
      image: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Photography',
      prize: 'Nikon Z9 + Portrait Lens Kit',
      prizeValue: 18000,
      prizeImage: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 60,
      participants: 187,
      maxParticipants: 300,
      deadline: '2024-03-20',
      timeLeft: '30 days',
      difficulty: 'Intermediate',
      status: 'active',
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 17, name: 'Zara Al-Maktoum', title: 'Portrait Specialist', avatar: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Portrait Photography' }
      ],
      requirements: [
        'Portrait photography only',
        '3-7 submissions',
        'Include model releases',
        'Natural lighting preferred',
        'Story behind each portrait'
      ],
      submissionFormat: ['JPEG', 'RAW']
    },
    {
      id: 10,
      title: 'Podcast Creation Challenge',
      description: 'Create a 20-30 minute podcast episode about entrepreneurship in the UAE. Interview local business leaders or share inspiring stories.',
      image: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Music',
      prize: 'Professional Podcast Setup + Mentorship',
      prizeValue: 8000,
      prizeImage: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      entryFee: 45,
      participants: 56,
      maxParticipants: 80,
      deadline: '2024-04-01',
      timeLeft: '42 days',
      difficulty: 'Beginner',
      status: 'active',
      new: true,
      competitionTypes: ['solo', 'team'],
      judges: [
        { id: 18, name: 'Yousef Al-Rashid', title: 'Podcast Host', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', expertise: 'Audio Production' }
      ],
      requirements: [
        '20-30 minutes duration',
        'Entrepreneurship theme',
        'High quality audio',
        'Include transcript',
        'Show notes required'
      ],
      submissionFormat: ['MP3', 'WAV', 'FLAC']
    }
  ];

  const filteredCompetitions = competitions.filter(competition => {
    const matchesCategory = selectedCategory === 'All' || competition.category === selectedCategory;
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedCompetitions = [...filteredCompetitions].sort((a, b) => {
    switch (sortBy) {
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'most-popular':
        return b.participants - a.participants;
      case 'prize-value':
        return b.prizeValue - a.prizeValue;
      case 'newest':
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      default:
        return 0;
    }
  });

  const handleEnterCompetition = (competition: Competition) => {
    setSelectedCompetitionId(competition.id);
    setShowEntryPage(true);
  };

  const confirmEntry = () => {
    if (selectedCompetition) {
      setUserEntries([...userEntries, selectedCompetition.id]);
      setShowSubmissionModal(false);
      setSelectedCompetition(null);
      alert(`Successfully entered ${selectedCompetition.title}! You can now submit your work.`);
    }
  };

  const getProgressPercentage = (participants: number, maxParticipants: number) => {
    return (participants / maxParticipants) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'judging': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-purple-600 bg-purple-100';
      case 'upcoming': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      case 'All Levels': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Photography': return <Camera className="w-5 h-5" />;
      case 'Filmmaking': return <Video className="w-5 h-5" />;
      case 'Design': return <Palette className="w-5 h-5" />;
      case 'Writing': return <FileText className="w-5 h-5" />;
      case 'Music': return <Headphones className="w-5 h-5" />;
      case 'Art': return <Brush className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">Competition Rules</a>
              <a href="#" className="hover:text-purple-200 transition-colors">Past Winners</a>
              <a href="#" className="hover:text-purple-200 transition-colors">Judging Criteria</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">My Submissions</a>
              <button className="hover:text-purple-200 transition-colors">
                <Bell className="w-4 h-4" />
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Hashtags Competitions
                </h1>
                <p className="text-xs text-gray-500">Showcase Your Creativity</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Creative Competitions</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Showcase your talent, compete with the best, and win amazing prizes. Join creative competitions in photography, filmmaking, design, and more.
            </p>
            
            {/* Competition Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">18</h3>
                <p className="text-purple-100">Active Competitions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2,500+</h3>
                <p className="text-purple-100">Participants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">AED 500K</h3>
                <p className="text-purple-100">Total Prizes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">4.9</h3>
                <p className="text-purple-100">Participant Rating</p>
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
                placeholder="Search competitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="deadline">Deadline Soon</option>
                <option value="most-popular">Most Popular</option>
                <option value="prize-value">Highest Prize</option>
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
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {getCategoryIcon(category.name)}
                {category.name}
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  selectedCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-purple-100 text-purple-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCompetitions.map((competition) => (
            <div
              key={competition.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {competition.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  {competition.hot && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Hot
                    </div>
                  )}
                  {competition.new && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      New
                    </div>
                  )}
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {getCategoryIcon(competition.category)}
                </div>

                {/* Timer */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⏰ {competition.timeLeft} left
                </div>

                {/* Prize Value */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AED {competition.prizeValue.toLocaleString()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{competition.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(competition.status)}`}>
                        {competition.status === 'active' ? 'Open' : 
                         competition.status === 'judging' ? 'Judging' : 
                         competition.status === 'completed' ? 'Completed' : 'Coming Soon'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(competition.difficulty)}`}>
                        {competition.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{competition.description}</p>

                {/* Prize Info */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-4 relative overflow-hidden">
                  {/* Prize Image Background */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <img 
                      src={competition.prizeImage} 
                      alt="Prize"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-800">Prize</span>
                  </div>
                  <p className="text-purple-700 font-semibold">{competition.prize}</p>
                  <p className="text-purple-600 text-sm">Value: AED {competition.prizeValue.toLocaleString()}</p>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Participants: {competition.participants}/{competition.maxParticipants}</span>
                    <span>{Math.round(getProgressPercentage(competition.participants, competition.maxParticipants))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(competition.participants, competition.maxParticipants)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Judges */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Judges</span>
                  </div>
                  <div className="flex -space-x-2">
                    {competition.judges.slice(0, 3).map((judge) => (
                      <img
                        key={judge.id}
                        src={judge.avatar}
                        alt={judge.name}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        title={`${judge.name} - ${judge.title}`}
                      />
                    ))}
                    {competition.judges.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                        +{competition.judges.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* Competition Types */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Entry Types</span>
                  </div>
                  <div className="flex gap-1">
                    {competition.competitionTypes.map((type) => (
                      <span key={type} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium capitalize">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {competition.status === 'active' ? (
                  <button
                    onClick={() => handleEnterCompetition(competition)}
                    disabled={userEntries.includes(competition.id)}
                    className={`w-full px-6 py-3 rounded-xl font-bold transition-all ${
                      userEntries.includes(competition.id)
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    {userEntries.includes(competition.id) ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Entered - Submit Work
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Trophy className="w-5 h-5" />
                        Enter Competition - AED {competition.entryFee}
                      </div>
                    )}
                  </button>
                ) : competition.status === 'completed' ? (
                  <button
                    disabled
                    className="w-full px-6 py-3 bg-gray-200 text-gray-500 rounded-xl font-bold cursor-not-allowed"
                  >
                    Competition Ended
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full px-6 py-3 bg-blue-100 text-blue-800 rounded-xl font-bold cursor-not-allowed"
                  >
                    Judging in Progress
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedCompetitions.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No competitions found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters</p>
          </div>
        )}
      </div>

      {/* Entry Modal */}
      {showSubmissionModal && selectedCompetition && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Competition</h3>
              <p className="text-gray-600">Review competition details before entering:</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">{selectedCompetition.title}</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Category</span>
                  <div className="font-semibold flex items-center gap-2">
                    {getCategoryIcon(selectedCompetition.category)}
                    {selectedCompetition.category}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Entry Fee</span>
                  <div className="font-bold text-purple-600">AED {selectedCompetition.entryFee}</div>
                </div>
                <div>
                  <span className="text-gray-500">Prize Value</span>
                  <div className="font-bold text-green-600">AED {selectedCompetition.prizeValue.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-gray-500">Deadline</span>
                  <div className="font-semibold">{new Date(selectedCompetition.deadline).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Requirements:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  {selectedCompetition.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Accepted Formats:</h5>
                <div className="flex gap-2">
                  {selectedCompetition.submissionFormat.map((format, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Judges:</h5>
                <div className="space-y-2">
                  {selectedCompetition.judges.map((judge) => (
                    <div key={judge.id} className="flex items-center gap-3">
                      <img 
                        src={judge.avatar} 
                        alt={judge.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{judge.name}</div>
                        <div className="text-sm text-gray-600">{judge.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowSubmissionModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmEntry}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-bold"
              >
                Enter Competition
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Competitions</h3>
                  <p className="text-xs text-gray-400">Showcase Your Creativity</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Platform for creative professionals to showcase their talents and compete for amazing prizes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Active Competitions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Submissions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Winners Gallery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rules & Guidelines</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Filmmaking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Art</a></li>
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
                  <span className="text-gray-400">competitions@hashtagsstudios.com</span>
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
              © 2024 Hashtags Competitions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};