import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Star, Heart, Share2, Bookmark, TrendingUp, Search, Filter, Grid, List, Play, Eye, ThumbsUp, Users, Award, Camera, Music, Palette, Mic, CheckCircle, ExternalLink, Instagram, Twitter, Facebook, Linkedin, Globe, MoreHorizontal, Send, Download, Upload, Edit, Settings, Plus, Minus, X, Menu, Home, BarChart3, PieChart, LineChart, Activity, DollarSign, Package, GraduationCap, Trophy, Target, Zap, Shield, Database, Server, Wifi, HardDrive, Cpu, Monitor, Smartphone, Tablet, CreditCard, CreditCard as PaymentCard, Banknote, Wallet, Receipt, FileText, Folder, Archive, Image as ImageIcon, Video, FileImage, File as FilePdf, FileSpreadsheet, Building, Briefcase, UserCheck, UserPlus, UserMinus, UserX, Crown, Gift, Percent, Tag, ShoppingBag, Truck, Package2, AlertTriangle, AlertCircle, Info, HelpCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, RotateCcw, RefreshCw, Maximize2, Minimize2, Copy, Link, Share, Save, Trash2, Archive as ArchiveIcon, Lock, Unlock, Key, Eye as EyeIcon, EyeOff, Volume2, VolumeX, Pause, SkipBack, SkipForward, FastForward, Rewind, Repeat, Shuffle, Radio, Headphones, Speaker, Microscope as Microphone, Camera as CameraIcon, VideoIcon as VideoCamera, Scissors, Crop, Rotate3D, Layers, Move, MousePointer, Hand, Grab, Navigation, Compass, Map, Route, Car, Plane, Train, Bus, Bike, Wallet as Walk } from 'lucide-react';

interface DashboardPageProps {
  onBack?: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview', 'events', 'talents']);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const toggleSidebarSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const sidebarSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Home,
      subsections: [
        { id: 'dashboard', title: 'Dashboard', icon: BarChart3 },
        { id: 'analytics', title: 'Analytics', icon: LineChart },
        { id: 'reports', title: 'Reports', icon: FileText }
      ]
    },
    {
      id: 'events',
      title: 'Events',
      icon: Calendar,
      subsections: [
        { id: 'all-events', title: 'All Events', icon: Calendar },
        { id: 'create-event', title: 'Create Event', icon: Plus },
        { id: 'venues', title: 'Venues', icon: Building },
        { id: 'bookings', title: 'Bookings', icon: CheckCircle }
      ]
    },
    {
      id: 'talents',
      title: 'Talents',
      icon: Users,
      subsections: [
        { id: 'all-talents', title: 'All Talents', icon: Users },
        { id: 'models', title: 'Models', icon: Camera },
        { id: 'applications', title: 'Applications', icon: UserPlus },
        { id: 'verification', title: 'Verification', icon: Shield }
      ]
    },
    {
      id: 'store',
      title: 'Store',
      icon: ShoppingCart,
      subsections: [
        { id: 'products', title: 'Products', icon: Package },
        { id: 'orders', title: 'Orders', icon: ShoppingBag },
        { id: 'inventory', title: 'Inventory', icon: Package2 },
        { id: 'shipping', title: 'Shipping', icon: Truck }
      ]
    },
    {
      id: 'academy',
      title: 'Academy',
      icon: GraduationCap,
      subsections: [
        { id: 'courses', title: 'Courses', icon: BookOpen },
        { id: 'students', title: 'Students', icon: Users },
        { id: 'instructors', title: 'Instructors', icon: UserCheck },
        { id: 'certificates', title: 'Certificates', icon: Award }
      ]
    },
    {
      id: 'jobs',
      title: 'Jobs',
      icon: Briefcase,
      subsections: [
        { id: 'job-listings', title: 'Job Listings', icon: Briefcase },
        { id: 'applications', title: 'Applications', icon: FileText },
        { id: 'companies', title: 'Companies', icon: Building },
        { id: 'candidates', title: 'Candidates', icon: Users }
      ]
    },
    {
      id: 'platform',
      title: 'Platform',
      icon: Monitor,
      subsections: [
        { id: 'content', title: 'Content', icon: ImageIcon },
        { id: 'live-streams', title: 'Live Streams', icon: Video },
        { id: 'creators', title: 'Creators', icon: Users },
        { id: 'moderation', title: 'Moderation', icon: Shield }
      ]
    },
    {
      id: 'magazine',
      title: 'Magazine',
      icon: BookOpen,
      subsections: [
        { id: 'articles', title: 'Articles', icon: FileText },
        { id: 'authors', title: 'Authors', icon: Edit },
        { id: 'categories', title: 'Categories', icon: Tag },
        { id: 'publishing', title: 'Publishing', icon: Send }
      ]
    },
    {
      id: 'advertisement',
      title: 'Advertisement',
      icon: Megaphone,
      subsections: [
        { id: 'campaigns', title: 'Campaigns', icon: Target },
        { id: 'billboards', title: 'Billboards', icon: Monitor },
        { id: 'clients', title: 'Clients', icon: Building },
        { id: 'analytics', title: 'Ad Analytics', icon: BarChart3 }
      ]
    },
    {
      id: 'donations',
      title: 'Donations',
      icon: Heart,
      subsections: [
        { id: 'causes', title: 'Causes', icon: Heart },
        { id: 'donors', title: 'Donors', icon: Users },
        { id: 'campaigns', title: 'Campaigns', icon: Target },
        { id: 'reports', title: 'Impact Reports', icon: FileText }
      ]
    },
    {
      id: 'competitions',
      title: 'Competitions',
      icon: Trophy,
      subsections: [
        { id: 'active', title: 'Active Draws', icon: Trophy },
        { id: 'winners', title: 'Winners', icon: Crown },
        { id: 'prizes', title: 'Prize Management', icon: Gift },
        { id: 'participants', title: 'Participants', icon: Users }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      icon: User,
      subsections: [
        { id: 'all-users', title: 'All Users', icon: Users },
        { id: 'user-roles', title: 'User Roles', icon: UserCheck },
        { id: 'permissions', title: 'Permissions', icon: Lock },
        { id: 'activity', title: 'User Activity', icon: Activity }
      ]
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: DollarSign,
      subsections: [
        { id: 'revenue', title: 'Revenue', icon: TrendingUp },
        { id: 'expenses', title: 'Expenses', icon: TrendingDown },
        { id: 'payments', title: 'Payments', icon: CreditCard },
        { id: 'invoices', title: 'Invoices', icon: Receipt }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      subsections: [
        { id: 'general', title: 'General', icon: Settings },
        { id: 'security', title: 'Security', icon: Shield },
        { id: 'integrations', title: 'Integrations', icon: Link },
        { id: 'system', title: 'System', icon: Server }
      ]
    }
  ];

  const overviewStats = [
    { title: 'Total Revenue', value: 'AED 2.4M', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'from-green-500 to-emerald-600' },
    { title: 'Active Users', value: '45,231', change: '+8.2%', trend: 'up', icon: Users, color: 'from-blue-500 to-cyan-600' },
    { title: 'Total Events', value: '1,247', change: '+15.3%', trend: 'up', icon: Calendar, color: 'from-purple-500 to-pink-600' },
    { title: 'Verified Talents', value: '892', change: '+5.7%', trend: 'up', icon: Award, color: 'from-orange-500 to-red-600' }
  ];

  const secondaryStats = [
    { title: 'Store Orders', value: '3,456', icon: ShoppingCart },
    { title: 'Academy Students', value: '12,890', icon: GraduationCap },
    { title: 'Active Competitions', value: '24', icon: Trophy },
    { title: 'Job Applications', value: '567', icon: Briefcase }
  ];

  const recentActivities = [
    { id: 1, type: 'event', message: 'New event "Dubai Music Festival" created', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'talent', message: 'Model "Layla Al-Zahra" profile verified', time: '5 minutes ago', status: 'success' },
    { id: 3, type: 'order', message: 'Order #HS-2024-001 shipped', time: '10 minutes ago', status: 'info' },
    { id: 4, type: 'course', message: 'New course "Photography Basics" published', time: '15 minutes ago', status: 'success' },
    { id: 5, type: 'competition', message: 'iPhone 15 Pro Max draw completed', time: '20 minutes ago', status: 'warning' },
    { id: 6, type: 'user', message: '25 new user registrations', time: '30 minutes ago', status: 'info' }
  ];

  const eventsData = [
    { id: 1, title: 'Dubai Music Festival 2024', date: '2024-02-15', attendees: 1250, revenue: 187500, status: 'Active' },
    { id: 2, title: 'Tech Innovation Summit', date: '2024-02-20', attendees: 800, revenue: 239200, status: 'Active' },
    { id: 3, title: 'Art Gallery Opening', date: '2024-02-25', attendees: 200, revenue: 15000, status: 'Planning' },
    { id: 4, title: 'Gourmet Food Festival', date: '2024-03-01', attendees: 500, revenue: 60000, status: 'Active' }
  ];

  const talentsData = [
    { id: 1, name: 'Layla Al-Zahra', category: 'Model', rating: 4.9, earnings: 45000, status: 'Verified' },
    { id: 2, name: 'Omar Hassan', category: 'DJ', rating: 4.8, earnings: 32000, status: 'Verified' },
    { id: 3, name: 'Sophia Martinez', category: 'Photographer', rating: 4.9, earnings: 28000, status: 'Verified' },
    { id: 4, name: 'Ahmed Al-Rashid', category: 'Event Planner', rating: 4.7, earnings: 38000, status: 'Pending' }
  ];

  const storeData = [
    { id: 1, product: 'Premium Rose Bouquet', customer: 'Sarah Johnson', amount: 350, status: 'Shipped' },
    { id: 2, product: 'Designer Handbag', customer: 'Fatima Al-Zahra', amount: 890, status: 'Processing' },
    { id: 3, product: 'Luxury Watch', customer: 'Ahmed Al-Mansouri', amount: 2500, status: 'Delivered' },
    { id: 4, product: 'Jewelry Set', customer: 'Layla Al-Rashid', amount: 1200, status: 'Pending' }
  ];

  const academyData = [
    { id: 1, course: 'Adobe Photoshop Masterclass', students: 1247, rating: 4.8, revenue: 372300 },
    { id: 2, course: 'Professional Photography', students: 892, rating: 4.9, revenue: 177480 },
    { id: 3, course: 'Video Editing Mastery', students: 634, rating: 4.7, revenue: 221190 },
    { id: 4, course: 'Digital Marketing Strategy', students: 456, rating: 4.6, revenue: 113544 }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                }`}>
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {secondaryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Revenue Overview</h3>
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <LineChart className="w-12 h-12 mx-auto mb-2" />
              <p>Revenue Chart</p>
              <p className="text-xs">Integration with Chart.js</p>
            </div>
          </div>
        </div>

        {/* Service Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue by Service</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <PieChart className="w-12 h-12 mx-auto mb-2" />
              <p>Service Distribution</p>
              <p className="text-xs">Integration with Chart.js</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Activities</h3>
          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'success' ? 'bg-green-500' :
                activity.status === 'warning' ? 'bg-yellow-500' :
                activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">{activity.message}</p>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEventsManagement = () => (
    <div className="space-y-8">
      {/* Events Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">127</div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Active Events</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">18</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-8 h-8 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 502K</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Recent Events</h3>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Create Event
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendees</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {eventsData.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{event.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {event.attendees.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    AED {event.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.status === 'Active' ? 'bg-green-100 text-green-800' :
                      event.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-purple-600 hover:text-purple-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTalentsManagement = () => (
    <div className="space-y-8">
      {/* Talents Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">892</div>
              <div className="text-sm text-gray-600">Verified Talents</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <UserPlus className="w-8 h-8 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Pending Applications</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-8 h-8 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 143K</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Talents Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Talent Management</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Approve All
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Add Talent
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Talent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {talentsData.map((talent) => (
                <tr key={talent.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{talent.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {talent.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{talent.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    AED {talent.earnings.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      talent.status === 'Verified' ? 'bg-green-100 text-green-800' :
                      talent.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {talent.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-purple-600 hover:text-purple-900">Edit</button>
                      <button className="text-green-600 hover:text-green-900">Approve</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStoreManagement = () => (
    <div className="space-y-8">
      {/* Store Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">3,456</div>
              <div className="text-sm text-gray-600">Total Orders</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">1,234</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Low Stock</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 890K</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Orders
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {storeData.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{order.product}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    AED {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">Track</button>
                      <button className="text-purple-600 hover:text-purple-900">Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAcademyManagement = () => (
    <div className="space-y-8">
      {/* Academy Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Total Courses</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">12,890</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <UserCheck className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">67</div>
              <div className="text-sm text-gray-600">Instructors</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-8 h-8 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">4.7</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Courses */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Top Performing Courses</h3>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Add Course
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {academyData.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{course.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {course.students.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    AED {course.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-purple-600 hover:text-purple-900">Edit</button>
                      <button className="text-green-600 hover:text-green-900">Promote</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderFinancialManagement = () => (
    <div className="space-y-8">
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 2.4M</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
              <div className="text-xs text-green-600 font-medium">+12.5% vs last month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingDown className="w-8 h-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 890K</div>
              <div className="text-sm text-gray-600">Total Expenses</div>
              <div className="text-xs text-red-600 font-medium">+5.2% vs last month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">AED 1.51M</div>
              <div className="text-sm text-gray-600">Net Profit</div>
              <div className="text-xs text-green-600 font-medium">+18.7% vs last month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue by Service</h3>
          <div className="space-y-4">
            {[
              { service: 'Events', amount: 890000, percentage: 37, color: 'bg-purple-500' },
              { service: 'Store', amount: 560000, percentage: 23, color: 'bg-blue-500' },
              { service: 'Academy', amount: 480000, percentage: 20, color: 'bg-green-500' },
              { service: 'Talents', amount: 320000, percentage: 13, color: 'bg-orange-500' },
              { service: 'Other', amount: 150000, percentage: 7, color: 'bg-gray-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 ${item.color} rounded`}></div>
                  <span className="font-medium text-gray-900">{item.service}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">AED {item.amount.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h3>
          <div className="space-y-4">
            {[
              { method: 'Credit Card', transactions: 2456, percentage: 65, color: 'bg-blue-500' },
              { method: 'Bank Transfer', transactions: 892, percentage: 24, color: 'bg-green-500' },
              { method: 'Digital Wallet', transactions: 234, percentage: 6, color: 'bg-purple-500' },
              { method: 'Cash', transactions: 189, percentage: 5, color: 'bg-orange-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 ${item.color} rounded`}></div>
                  <span className="font-medium text-gray-900">{item.method}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{item.transactions}</div>
                  <div className="text-sm text-gray-600">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">1.2M</div>
              <div className="text-sm text-gray-600">Page Views</div>
              <div className="text-xs text-green-600 font-medium">+15.3% vs last month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">45,231</div>
              <div className="text-sm text-gray-600">Active Users</div>
              <div className="text-xs text-green-600 font-medium">+8.2% vs last month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-8 h-8 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">4m 32s</div>
              <div className="text-sm text-gray-600">Avg Session</div>
              <div className="text-xs text-green-600 font-medium">+12.1% vs last month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">User Engagement</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Engagement Chart</p>
              <p className="text-xs">Daily active users, sessions, interactions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <PieChart className="w-12 h-12 mx-auto mb-2" />
              <p>Traffic Sources</p>
              <p className="text-xs">Direct, Social, Search, Referral</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-8">
      {/* General Settings */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">General Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
            <input 
              type="text" 
              defaultValue="Hashtags Studios"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>AED - UAE Dirham</option>
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>Asia/Dubai (GMT+4)</option>
              <option>UTC (GMT+0)</option>
              <option>America/New_York (GMT-5)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>English</option>
              <option>Arabic</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900">Session Timeout</h4>
              <p className="text-sm text-gray-600">Automatically log out inactive users</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>Never</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900">Login Notifications</h4>
              <p className="text-sm text-gray-600">Get notified of new login attempts</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enabled
            </button>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <Server className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-green-600">Online</div>
            <div className="text-sm text-gray-600">Server Status</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-green-600">Healthy</div>
            <div className="text-sm text-gray-600">Database</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <Wifi className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
      case 'dashboard':
        return renderOverview();
      case 'all-events':
      case 'events':
        return renderEventsManagement();
      case 'all-talents':
      case 'talents':
        return renderTalentsManagement();
      case 'products':
      case 'store':
        return renderStoreManagement();
      case 'courses':
      case 'academy':
        return renderAcademyManagement();
      case 'revenue':
      case 'finance':
        return renderFinancialManagement();
      case 'analytics':
        return renderAnalytics();
      case 'general':
      case 'settings':
        return renderSystemSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarExpanded ? 'w-80' : 'w-16'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarExpanded && (
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Dashboard
                  </h1>
                  <p className="text-xs text-gray-500">Control Center</p>
                </div>
              </div>
            )}
            <button 
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {sidebarSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              
              return (
                <div key={section.id}>
                  <button
                    onClick={() => {
                      if (sidebarExpanded) {
                        toggleSidebarSection(section.id);
                      } else {
                        setActiveSection(section.id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      activeSection === section.id || activeSection.startsWith(section.id)
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarExpanded && (
                      <>
                        <span className="font-medium flex-1 text-left">{section.title}</span>
                        {section.subsections && (
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        )}
                      </>
                    )}
                  </button>
                  
                  {sidebarExpanded && isExpanded && section.subsections && (
                    <div className="ml-8 mt-2 space-y-1">
                      {section.subsections.map((subsection) => {
                        const SubIcon = subsection.icon;
                        return (
                          <button
                            key={subsection.id}
                            onClick={() => setActiveSection(subsection.id)}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                              activeSection === subsection.id
                                ? 'bg-purple-100 text-purple-700'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <SubIcon className="w-4 h-4" />
                            <span className="text-sm">{subsection.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          {sidebarExpanded && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Admin"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">Admin User</div>
                <div className="text-xs text-gray-600">Super Administrator</div>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {activeSection.replace('-', ' ')}
                </h1>
                <p className="text-gray-600 text-sm">
                  {activeSection === 'overview' ? 'Platform overview and key metrics' :
                   activeSection === 'events' ? 'Manage events and bookings' :
                   activeSection === 'talents' ? 'Manage talents and applications' :
                   activeSection === 'store' ? 'Manage products and orders' :
                   activeSection === 'academy' ? 'Manage courses and students' :
                   activeSection === 'finance' ? 'Financial overview and reports' :
                   activeSection === 'analytics' ? 'Platform analytics and insights' :
                   activeSection === 'settings' ? 'System configuration and settings' :
                   'Dashboard management'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dashboard..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Quick Actions Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </button>
          
          {/* Quick Actions Menu */}
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <div className="space-y-1 w-48">
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm">Create Event</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <UserPlus className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Add Talent</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Package className="w-4 h-4 text-green-600" />
                <span className="text-sm">Add Product</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Create Course</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};