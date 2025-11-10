import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Search, Play, Eye, Heart, Share2, Bookmark, TrendingUp, Star, Clock, Users, Award, Filter, Grid, List, ChevronDown, PlayCircle, BookOpen, AlignCenterVertical as Certificate, Globe, Zap, Target, CheckCircle } from 'lucide-react';

interface AcademyPageProps {
  onBack?: () => void;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorImage: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  lessons: number;
  level: string;
  image: string;
  category: string;
  bestseller?: boolean;
  new?: boolean;
  description: string;
  skills: string[];
  lastUpdated: string;
  language: string;
  certificate: boolean;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('most-popular');
  const [priceFilter, setPriceFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const categories = [
    { id: 'All', name: 'All Courses', count: 150 },
    { id: 'Design', name: 'Design', count: 45 },
    { id: 'Photography', name: 'Photography', count: 32 },
    { id: 'Video', name: 'Video Editing', count: 28 },
    { id: 'Business', name: 'Business', count: 25 },
    { id: 'Marketing', name: 'Marketing', count: 20 }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: 'Complete Adobe Photoshop Masterclass: Beginner to Expert',
      instructor: 'Sarah Johnson',
      instructorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 299,
      originalPrice: 599,
      rating: 4.8,
      reviews: 12847,
      students: 45623,
      duration: '42 hours',
      lessons: 156,
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design',
      bestseller: true,
      description: 'Master Adobe Photoshop from scratch with hands-on projects and real-world examples.',
      skills: ['Photo Editing', 'Digital Art', 'Retouching', 'Compositing'],
      lastUpdated: 'December 2024',
      language: 'English',
      certificate: true
    },
    {
      id: 2,
      title: 'Professional Photography: Complete Course for Beginners',
      instructor: 'Mike Chen',
      instructorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 199,
      originalPrice: 399,
      rating: 4.9,
      reviews: 8934,
      students: 32156,
      duration: '28 hours',
      lessons: 98,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Photography',
      bestseller: true,
      description: 'Learn professional photography techniques from composition to post-processing.',
      skills: ['Camera Settings', 'Composition', 'Lighting', 'Post-Processing'],
      lastUpdated: 'November 2024',
      language: 'English',
      certificate: true
    },
    {
      id: 3,
      title: 'Video Editing Mastery: Premiere Pro & After Effects',
      instructor: 'Alex Rivera',
      instructorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 349,
      originalPrice: 699,
      rating: 4.7,
      reviews: 6789,
      students: 28934,
      duration: '38 hours',
      lessons: 142,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Video',
      new: true,
      description: 'Master video editing and motion graphics with industry-standard software.',
      skills: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Audio Editing'],
      lastUpdated: 'December 2024',
      language: 'English',
      certificate: true
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy: Complete Guide 2024',
      instructor: 'Emma Davis',
      instructorImage: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 249,
      originalPrice: 499,
      rating: 4.6,
      reviews: 5432,
      students: 19876,
      duration: '32 hours',
      lessons: 118,
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Marketing',
      description: 'Learn modern digital marketing strategies that actually work in 2024.',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      lastUpdated: 'October 2024',
      language: 'English',
      certificate: true
    },
    {
      id: 5,
      title: 'UI/UX Design Complete Course: Figma to Prototype',
      instructor: 'David Kim',
      instructorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 279,
      originalPrice: 559,
      rating: 4.8,
      reviews: 7654,
      students: 25432,
      duration: '35 hours',
      lessons: 128,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design',
      bestseller: true,
      description: 'Design beautiful user interfaces and create amazing user experiences.',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'User Testing'],
      lastUpdated: 'November 2024',
      language: 'English',
      certificate: true
    },
    {
      id: 6,
      title: 'Business Strategy & Entrepreneurship Masterclass',
      instructor: 'Lisa Park',
      instructorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      price: 399,
      originalPrice: 799,
      rating: 4.9,
      reviews: 4321,
      students: 15678,
      duration: '45 hours',
      lessons: 168,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Business',
      description: 'Learn how to build and scale successful businesses from industry experts.',
      skills: ['Strategy', 'Leadership', 'Finance', 'Operations'],
      lastUpdated: 'September 2024',
      language: 'English',
      certificate: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'free' && course.price === 0) ||
                        (priceFilter === 'paid' && course.price > 0);
    const matchesLevel = levelFilter === 'all' || course.level.toLowerCase().includes(levelFilter);
    
    return matchesCategory && matchesSearch && matchesPrice && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'most-popular':
        return b.students - a.students;
      case 'highest-rated':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const toggleWishlist = (courseId: number) => {
    if (wishlist.includes(courseId)) {
      setWishlist(wishlist.filter(id => id !== courseId));
    } else {
      setWishlist([...wishlist, courseId]);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">Teach on Academy</a>
              <a href="#" className="hover:text-purple-200 transition-colors">Business</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-200 transition-colors">Help</a>
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Hashtags Academy
                </h1>
                <p className="text-xs text-gray-500">Learn. Create. Succeed.</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Learn Without Limits</h1>
              <p className="text-xl mb-8 text-purple-100">
                Start, switch, or advance your career with more than 150 courses, Professional Certificates, and degrees from world-class instructors.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pr-16 text-gray-900 rounded-xl border-0 focus:ring-4 focus:ring-purple-300 text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors">
                  <Search className="w-6 h-6" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-purple-200">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-purple-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="text-purple-200">Avg Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
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
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
              
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="most-popular">Most Popular</option>
              <option value="highest-rated">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Duration</option>
                    <option>0-2 hours</option>
                    <option>3-6 hours</option>
                    <option>7-17 hours</option>
                    <option>17+ hours</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-purple-600" />
                      <span className="ml-2 text-sm">Certificate</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-purple-600" />
                      <span className="ml-2 text-sm">Subtitles</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Rating</option>
                    <option>4.5 & up</option>
                    <option>4.0 & up</option>
                    <option>3.5 & up</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Course Results */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {filteredCourses.length} results for "{selectedCategory === 'All' ? 'All Courses' : selectedCategory}"
          </h3>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.bestseller && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    Bestseller
                  </div>
                )}
                {course.new && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    New
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(course.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(course.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <PlayCircle className="w-3 h-3" />
                  {course.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <img 
                    src={course.instructorImage} 
                    alt={course.instructor}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{course.instructor}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-gray-500">({formatNumber(course.reviews)})</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {formatNumber(course.students)}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {course.level}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {course.certificate && (
                    <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                      <Certificate className="w-3 h-3" />
                      Certificate
                    </div>
                  )}
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {course.language}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      AED {course.price}
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        AED {course.originalPrice}
                      </div>
                    )}
                  </div>
                  
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Load More */}
        {sortedCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
              Load More Courses
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Hashtags Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn at Your Pace</h3>
              <p className="text-gray-600">Access courses anytime, anywhere. Learn on your schedule with lifetime access.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of real-world experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Certificate className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificates</h3>
              <p className="text-gray-600">Earn certificates upon completion to showcase your new skills.</p>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Academy</h3>
                  <p className="text-xs text-gray-400">Learn. Create. Succeed.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering creators and professionals with world-class online education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become Instructor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Popular Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Editing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
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
                  <span className="text-gray-400">academy@hashtagsstudios.com</span>
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
              © 2024 Hashtags Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};