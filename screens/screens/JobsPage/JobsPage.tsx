import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Filter, Grid, List, Briefcase, Building, Clock, DollarSign, Users, Star, Heart, Bookmark, Eye, TrendingUp, Award, Zap, Target, CheckCircle, ExternalLink, ChevronDown, ChevronRight, ChevronLeft, Plus, Send, Globe, Calendar, GraduationCap, Code, Palette, BarChart3, Camera, Megaphone, Wrench, Stethoscope, Scale, Truck, ChefHat, Scissors, Gamepad2, Music, PenTool, Laptop, Smartphone, Database, Shield, Cpu, Wifi, Monitor, Settings } from 'lucide-react';

interface JobsPageProps {
  onBack?: () => void;
}

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Remote';
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  experience: string;
  category: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  deadline: string;
  applicants: number;
  featured?: boolean;
  urgent?: boolean;
  remote?: boolean;
  verified?: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export const JobsPage: React.FC<JobsPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [salaryFilter, setSalaryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Jobs', icon: Briefcase, count: 1247 },
    { id: 'Design', name: 'Design & Creative', icon: Palette, count: 156 },
    { id: 'Marketing', name: 'Marketing & Sales', icon: Megaphone, count: 234 },
    { id: 'Programming', name: 'Programming & Tech', icon: Code, count: 189 },
    { id: 'Business', name: 'Business & Finance', icon: BarChart3, count: 145 },
    { id: 'Photography', name: 'Photography & Video', icon: Camera, count: 89 },
    { id: 'Engineering', name: 'Engineering', icon: Wrench, count: 67 },
    { id: 'Healthcare', name: 'Healthcare', icon: Stethoscope, count: 78 },
    { id: 'Legal', name: 'Legal', icon: Scale, count: 34 },
    { id: 'Logistics', name: 'Logistics & Supply', icon: Truck, count: 56 },
    { id: 'Hospitality', name: 'Hospitality & Food', icon: ChefHat, count: 123 },
    { id: 'Beauty', name: 'Beauty & Wellness', icon: Scissors, count: 45 },
    { id: 'Gaming', name: 'Gaming & Esports', icon: Gamepad2, count: 23 },
    { id: 'Music', name: 'Music & Audio', icon: Music, count: 34 },
    { id: 'Writing', name: 'Writing & Content', icon: PenTool, count: 67 }
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      company: 'Creative Studios Dubai',
      companyLogo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: { min: 12000, max: 18000, currency: 'AED' },
      experience: '3-5 years',
      category: 'Design',
      description: 'We are looking for a talented Senior UI/UX Designer to join our creative team. You will be responsible for designing user interfaces and experiences for web and mobile applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Experience with user research and testing'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Annual leave and sick leave',
        'Professional development opportunities',
        'Flexible working hours',
        'Modern office environment'
      ],
      postedDate: '2024-01-15',
      deadline: '2024-02-15',
      applicants: 45,
      featured: true,
      verified: true,
      rating: 4.8,
      reviews: 156,
      tags: ['UI Design', 'UX Research', 'Figma', 'Mobile Design']
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      company: 'Marketing Pro UAE',
      companyLogo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      salary: { min: 10000, max: 15000, currency: 'AED' },
      experience: '2-4 years',
      category: 'Marketing',
      description: 'Join our dynamic marketing team as a Digital Marketing Manager. Lead digital campaigns, manage social media presence, and drive brand growth.',
      requirements: [
        'Bachelor\'s degree in Marketing or Business',
        '2+ years in digital marketing',
        'Experience with Google Ads, Facebook Ads',
        'Strong analytical skills',
        'Excellent communication skills'
      ],
      benefits: [
        'Performance bonuses',
        'Health and dental insurance',
        'Training and certifications',
        'Team building activities',
        'Career advancement opportunities'
      ],
      postedDate: '2024-01-14',
      deadline: '2024-02-20',
      applicants: 67,
      urgent: true,
      verified: true,
      rating: 4.6,
      reviews: 89,
      tags: ['Digital Marketing', 'Google Ads', 'Social Media', 'Analytics']
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Tech Innovations LLC',
      companyLogo: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: { min: 15000, max: 22000, currency: 'AED' },
      experience: '3-6 years',
      category: 'Programming',
      description: 'We\'re seeking a skilled Full Stack Developer to build and maintain web applications using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years of full stack development',
        'Proficiency in React, Node.js, MongoDB',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Stock options',
        'Health insurance',
        'Learning budget',
        'Remote work options',
        'Latest tech equipment'
      ],
      postedDate: '2024-01-13',
      deadline: '2024-02-25',
      applicants: 123,
      featured: true,
      remote: true,
      verified: true,
      rating: 4.9,
      reviews: 234,
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Full Stack']
    },
    {
      id: 4,
      title: 'Business Analyst',
      company: 'Financial Services Group',
      companyLogo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Sharjah, UAE',
      type: 'Full-time',
      salary: { min: 8000, max: 12000, currency: 'AED' },
      experience: '1-3 years',
      category: 'Business',
      description: 'Analyze business processes, identify improvement opportunities, and support strategic decision-making.',
      requirements: [
        'Bachelor\'s degree in Business or Finance',
        '1+ years of business analysis experience',
        'Strong Excel and PowerBI skills',
        'Excellent presentation skills',
        'Analytical mindset'
      ],
      benefits: [
        'Professional development',
        'Health insurance',
        'Annual bonus',
        'Flexible schedule',
        'Career growth path'
      ],
      postedDate: '2024-01-12',
      deadline: '2024-02-18',
      applicants: 78,
      verified: true,
      rating: 4.5,
      reviews: 67,
      tags: ['Business Analysis', 'Excel', 'PowerBI', 'Finance']
    },
    {
      id: 5,
      title: 'Event Photographer',
      company: 'Dubai Photography Studio',
      companyLogo: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Freelance',
      salary: { min: 500, max: 1500, currency: 'AED' },
      experience: '2-5 years',
      category: 'Photography',
      description: 'Capture stunning moments at corporate events, weddings, and social gatherings across Dubai.',
      requirements: [
        'Professional photography portfolio',
        '2+ years of event photography',
        'Own professional camera equipment',
        'Excellent interpersonal skills',
        'Ability to work flexible hours'
      ],
      benefits: [
        'Flexible schedule',
        'High-profile events',
        'Networking opportunities',
        'Equipment allowance',
        'Performance bonuses'
      ],
      postedDate: '2024-01-11',
      deadline: '2024-02-10',
      applicants: 34,
      featured: true,
      rating: 4.7,
      reviews: 45,
      tags: ['Event Photography', 'Wedding Photography', 'Corporate Events']
    },
    {
      id: 6,
      title: 'Software Engineer',
      company: 'StartupTech Dubai',
      companyLogo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: { min: 13000, max: 20000, currency: 'AED' },
      experience: '2-4 years',
      category: 'Programming',
      description: 'Join our innovative startup as a Software Engineer and help build cutting-edge applications.',
      requirements: [
        'Computer Science degree or equivalent',
        '2+ years of software development',
        'Experience with Python, JavaScript',
        'Knowledge of databases and APIs',
        'Agile development experience'
      ],
      benefits: [
        'Startup equity',
        'Health insurance',
        'Learning opportunities',
        'Casual work environment',
        'Growth potential'
      ],
      postedDate: '2024-01-10',
      deadline: '2024-02-28',
      applicants: 89,
      remote: true,
      urgent: true,
      verified: true,
      rating: 4.4,
      reviews: 78,
      tags: ['Python', 'JavaScript', 'APIs', 'Startup', 'Agile']
    },
    {
      id: 7,
      title: 'Graphic Designer',
      company: 'Brand Agency Dubai',
      companyLogo: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: { min: 7000, max: 11000, currency: 'AED' },
      experience: '1-3 years',
      category: 'Design',
      description: 'Create compelling visual designs for brands, marketing materials, and digital campaigns.',
      requirements: [
        'Degree in Graphic Design or related field',
        '1+ years of graphic design experience',
        'Proficiency in Adobe Creative Suite',
        'Strong creative portfolio',
        'Understanding of brand guidelines'
      ],
      benefits: [
        'Creative environment',
        'Health insurance',
        'Professional development',
        'Flexible hours',
        'Modern equipment'
      ],
      postedDate: '2024-01-09',
      deadline: '2024-02-12',
      applicants: 56,
      verified: true,
      rating: 4.3,
      reviews: 34,
      tags: ['Graphic Design', 'Adobe Creative Suite', 'Branding', 'Print Design']
    },
    {
      id: 8,
      title: 'Content Marketing Specialist',
      company: 'Digital Growth Agency',
      companyLogo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: { min: 9000, max: 14000, currency: 'AED' },
      experience: '2-4 years',
      category: 'Marketing',
      description: 'Develop and execute content marketing strategies to drive engagement and conversions.',
      requirements: [
        'Bachelor\'s in Marketing or Communications',
        '2+ years in content marketing',
        'Excellent writing skills',
        'SEO knowledge',
        'Social media expertise'
      ],
      benefits: [
        'Performance bonuses',
        'Health coverage',
        'Remote work options',
        'Training budget',
        'Team events'
      ],
      postedDate: '2024-01-08',
      deadline: '2024-02-22',
      applicants: 92,
      remote: true,
      verified: true,
      rating: 4.6,
      reviews: 112,
      tags: ['Content Marketing', 'SEO', 'Social Media', 'Copywriting']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = locationFilter === 'All' || job.location.includes(locationFilter);
    const matchesType = typeFilter === 'All' || job.type === typeFilter;
    const matchesExperience = experienceFilter === 'All' || job.experience.includes(experienceFilter);
    
    return matchesCategory && matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      case 'salary-high':
        return b.salary.max - a.salary.max;
      case 'salary-low':
        return a.salary.min - b.salary.min;
      case 'applicants':
        return a.applicants - b.applicants;
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      default:
        return 0;
    }
  });

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const handleApply = (jobId: number, isEasyApply: boolean = false) => {
    if (isEasyApply) {
      setAppliedJobs([...appliedJobs, jobId]);
      alert('Application submitted successfully! The employer will review your profile and contact you if interested.');
    } else {
      alert('Redirecting to detailed application form...');
      // In real app, navigate to application form
    }
  };

  const formatSalary = (salary: Job['salary']) => {
    if (salary.min === salary.max) {
      return `${salary.currency} ${salary.min.toLocaleString()}`;
    }
    return `${salary.currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const diffTime = deadlineDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day left';
    return `${diffDays} days left`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">For Employers</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Career Resources</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Salary Guide</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">My Applications</a>
              <button className="hover:text-blue-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-blue-200 transition-colors">
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
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Hashtags Jobs
                </h1>
                <p className="text-xs text-gray-500">Find Your Dream Career</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Find Your Dream Job</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Discover amazing career opportunities with top companies across the UAE. Your next adventure starts here.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, company, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 text-lg"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="pl-12 pr-8 py-4 text-gray-900 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 text-lg appearance-none bg-white"
                  >
                    <option value="All">All Locations</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Search Jobs
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">1,247</div>
                <div className="text-blue-200">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">350+</div>
                <div className="text-blue-200">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-blue-200">Job Seekers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl transition-all text-left ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${
                    selectedCategory === category.id ? 'text-white' : 'text-blue-600'
                  }`} />
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className={`text-xs ${
                    selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {category.count} jobs
                  </p>
                </button>
              );
            })}
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
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Remote">Remote</option>
              </select>
              
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Experience</option>
                <option value="Entry">Entry Level</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="salary-high">Highest Salary</option>
                <option value="salary-low">Lowest Salary</option>
                <option value="applicants">Fewest Applicants</option>
                <option value="deadline">Deadline Soon</option>
              </select>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                  <select 
                    value={salaryFilter}
                    onChange={(e) => setSalaryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">Any Salary</option>
                    <option value="0-5000">Under AED 5,000</option>
                    <option value="5000-10000">AED 5,000 - 10,000</option>
                    <option value="10000-15000">AED 10,000 - 15,000</option>
                    <option value="15000+">Above AED 15,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Any Size</option>
                    <option>Startup (1-50)</option>
                    <option>Medium (51-200)</option>
                    <option>Large (201-1000)</option>
                    <option>Enterprise (1000+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Posted Date</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Any Time</option>
                    <option>Last 24 hours</option>
                    <option>Last 3 days</option>
                    <option>Last week</option>
                    <option>Last month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="ml-2 text-sm">Remote OK</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="ml-2 text-sm">Verified Company</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="ml-2 text-sm">Easy Apply</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} jobs found {selectedCategory !== 'All' && `in ${selectedCategory}`}
          </h3>
          <p className="text-gray-600">
            Showing {sortedJobs.length} results {searchTerm && `for "${searchTerm}"`}
          </p>
        </div>

        {/* Jobs List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
          {sortedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={job.companyLogo} 
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      {job.verified && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleSaveJob(job.id)}
                  className={`p-2 rounded-full transition-colors ${
                    savedJobs.includes(job.id) 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold">
                    Featured
                  </span>
                )}
                {job.urgent && (
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                    Urgent
                  </span>
                )}
                {job.remote && (
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">
                    Remote OK
                  </span>
                )}
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {job.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {tag}
                  </span>
                ))}
                {job.tags.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    +{job.tags.length - 4} more
                  </span>
                )}
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Salary</span>
                  <div className="font-semibold text-green-600">{formatSalary(job.salary)}</div>
                </div>
                <div>
                  <span className="text-gray-500">Posted</span>
                  <div className="font-semibold">{getTimeAgo(job.postedDate)}</div>
                </div>
                <div>
                  <span className="text-gray-500">Deadline</span>
                  <div className="font-semibold text-orange-600">{getDaysUntilDeadline(job.deadline)}</div>
                </div>
                <div>
                  <span className="text-gray-500">Applicants</span>
                  <div className="font-semibold">{job.applicants}</div>
                </div>
              </div>

              {/* Company Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(job.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{job.rating}</span>
                  <span className="text-sm text-gray-500">({job.reviews} reviews)</span>
                </div>
                <div className="text-sm text-gray-500">
                  Company Rating
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleApply(job.id, true)}
                  disabled={appliedJobs.includes(job.id)}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                    appliedJobs.includes(job.id)
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 transform hover:scale-105'
                  }`}
                >
                  {appliedJobs.includes(job.id) ? (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Applied
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Easy Apply
                    </div>
                  )}
                </button>
                <button
                  onClick={() => handleApply(job.id, false)}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Full Application
                </button>
                <button className="p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setLocationFilter('All');
                setTypeFilter('All');
                setExperienceFilter('All');
                setSalaryFilter('All');
                setShowFilters(false);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {sortedJobs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
              Load More Jobs
            </button>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'How do I apply for jobs on the platform?',
                answer: 'You can apply using two methods: "Easy Apply" for quick applications using your profile information, or "Full Application" for detailed applications with custom cover letters and additional documents.'
              },
              {
                question: 'What is the difference between Easy Apply and Full Application?',
                answer: 'Easy Apply uses your existing profile information to submit applications instantly. Full Application allows you to customize your cover letter, upload specific documents, and provide additional information tailored to the specific role.'
              },
              {
                question: 'How can I track my job applications?',
                answer: 'All your applications are tracked in your dashboard. You\'ll receive notifications about application status updates, interview invitations, and employer responses. You can also see which jobs you\'ve applied to with the "Applied" status on job listings.'
              },
              {
                question: 'Can I save jobs to apply later?',
                answer: 'Yes! Click the heart icon on any job listing to save it to your favorites. You can access all saved jobs from your profile dashboard and apply when you\'re ready.'
              },
              {
                question: 'Are all companies on the platform verified?',
                answer: 'We verify company information and legitimacy before allowing job postings. Verified companies display a blue checkmark badge. We also show company ratings and reviews from previous employees and candidates.'
              },
              {
                question: 'How do I know if a job is still available?',
                answer: 'Job listings show the number of applicants and application deadlines. We also display when jobs were posted and remove expired listings automatically. Companies update job status in real-time.'
              },
              {
                question: 'Can I filter jobs by salary range?',
                answer: 'Yes! Use our advanced filters to search by salary range, location, job type (full-time, part-time, contract), experience level, and company features like remote work options.'
              },
              {
                question: 'Do you offer career guidance and resume help?',
                answer: 'We provide career resources including resume templates, interview tips, salary guides, and career advice articles. Premium users get access to one-on-one career coaching sessions.'
              },
              {
                question: 'How do companies contact me after I apply?',
                answer: 'Companies will contact you through the platform messaging system and/or your provided email address. You\'ll receive notifications for all communication and can respond directly through our platform.'
              },
              {
                question: 'Is the platform free for job seekers?',
                answer: 'Yes! Job searching, applying, and basic features are completely free for job seekers. We offer premium features like priority application placement and advanced analytics for a small monthly fee.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    const content = document.getElementById(`job-faq-${index}`);
                    if (content) {
                      content.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div id={`job-faq-${index}`} className="hidden px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rating Overview */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What Job Seekers Say</h2>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-orange-400 fill-current mr-2" />
                <span className="text-3xl font-bold text-gray-900">4.8</span>
                <span className="text-gray-600 ml-2">(2,847 Reviews)</span>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Job Quality', rating: 4.9 },
                  { label: 'Application Process', rating: 4.8 },
                  { label: 'Company Verification', rating: 4.7 },
                  { label: 'Response Time', rating: 4.6 },
                  { label: 'Platform Experience', rating: 4.8 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{item.label}</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" 
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium">
                Read All Reviews →
              </button>
            </div>
            
            {/* Customer Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: 'Ahmed Al-Mansouri',
                  avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Found my dream job as a UI/UX Designer through this platform! The Easy Apply feature made the process so smooth, and I got responses from multiple companies within days.',
                  position: 'UI/UX Designer at Creative Studios',
                  date: '2 weeks ago',
                  hired: true
                },
                {
                  name: 'Fatima Al-Zahra',
                  avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Excellent platform with verified companies and transparent salary information. The job recommendations were spot-on for my marketing background.',
                  position: 'Marketing Manager at Digital Growth',
                  date: '1 month ago',
                  hired: true
                },
                {
                  name: 'Omar Hassan',
                  avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 4,
                  review: 'Great variety of tech jobs and the filtering system is very helpful. Applied to several positions and got interview calls from 3 companies.',
                  position: 'Software Engineer',
                  date: '3 weeks ago',
                  hired: false
                },
                {
                  name: 'Layla Al-Zahra',
                  avatar: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'The platform helped me transition from photography to event planning. Found amazing opportunities and the company ratings helped me choose the right employer.',
                  position: 'Event Coordinator at Dubai Events',
                  date: '1 week ago',
                  hired: true
                },
                {
                  name: 'Khalid Rahman',
                  avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
                  rating: 5,
                  review: 'Professional platform with high-quality job listings. The application tracking feature is excellent and I always knew the status of my applications.',
                  position: 'DevOps Engineer at Cloud Infrastructure',
                  date: '2 months ago',
                  hired: true
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              review.hired 
                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {review.hired && <CheckCircle className="w-3 h-3 inline mr-1" />}
                              {review.hired ? 'Successfully Hired' : 'Job Seeker'}
                            </span>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{review.review}</p>
                      <p className="text-xs text-blue-600 font-medium">{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Job?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who found their perfect career match through our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Create Job Alert
            </button>
            <button className="px-8 py-4 bg-white/20 text-white rounded-xl font-bold border border-white/30 hover:bg-white/30 transition-colors">
              Upload Resume
            </button>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Jobs</h3>
                  <p className="text-xs text-gray-400">Find Your Dream Career</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting talented professionals with amazing opportunities across the UAE.
              </p>
            </div>

            {/* For Job Seekers */}
            <div>
              <h4 className="text-lg font-semibold mb-6">For Job Seekers</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Salary Guide</a></li>
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h4 className="text-lg font-semibold mb-6">For Employers</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Resumes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recruitment Solutions</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">jobs@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
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
              © 2024 Hashtags Jobs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};