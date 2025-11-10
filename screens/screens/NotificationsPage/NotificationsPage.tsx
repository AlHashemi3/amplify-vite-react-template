import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Star, Heart, Share2, Bookmark, TrendingUp, X, Check, Trash2, Settings, Filter, Search, MoreVertical, Eye, EyeOff, Smartphone, GraduationCap, Users, Award, BookOpen, Package, Truck, Car, Plane, Ship, CheckCircle, AlertCircle, Info, Gift, Percent, Briefcase, Building, Camera, Music, ChevronDown, ChevronUp } from 'lucide-react';

interface NotificationsPageProps {
  onBack?: () => void;
}

interface Notification {
  id: number;
  service: string;
  type: 'tracking' | 'offer' | 'job' | 'event' | 'payment' | 'social' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  image?: string;
  priority: 'low' | 'medium' | 'high';
  details?: any;
  expandable: boolean;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ onBack }) => {
  const [expandedNotifications, setExpandedNotifications] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('All');

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const toggleExpand = (id: number) => {
    if (expandedNotifications.includes(id)) {
      setExpandedNotifications(expandedNotifications.filter(nId => nId !== id));
    } else {
      setExpandedNotifications([...expandedNotifications, id]);
    }
  };

  const services = [
    { id: 'All', name: 'All', icon: Bell, count: 12 },
    { id: 'Store', name: 'Store', icon: ShoppingCart, count: 3 },
    { id: 'Events', name: 'Events', icon: Calendar, count: 2 },
    { id: 'Academy', name: 'Academy', icon: GraduationCap, count: 1 },
    { id: 'Jobs', name: 'Jobs', icon: Briefcase, count: 2 },
    { id: 'Talents', name: 'Talents', icon: Users, count: 1 },
    { id: 'Platform', name: 'Platform', icon: Camera, count: 1 },
    { id: 'System', name: 'System', icon: Settings, count: 2 }
  ];

  const notifications: Notification[] = [
    // Store Notifications
    {
      id: 1,
      service: 'Store',
      type: 'tracking',
      title: 'Premium Rose Bouquet - Out for Delivery',
      message: 'Your order #HS-2024-001 is on the way and will arrive today.',
      timestamp: '2 hours ago',
      read: false,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'high',
      expandable: true,
      details: {
        orderNumber: 'HS-2024-001',
        price: 350,
        orderedDate: '15 June 2024',
        estimatedDelivery: 'Today, 6:00 PM',
        currentLocation: 'Dubai Marina',
        carrier: 'Express Delivery',
        progress: 85,
        trackingSteps: [
          { title: 'Order Placed', completed: true, timestamp: '15 Jun, 10:30 AM' },
          { title: 'Preparing', completed: true, timestamp: '15 Jun, 2:15 PM' },
          { title: 'Ready for Pickup', completed: true, timestamp: '16 Jun, 9:00 AM' },
          { title: 'Out for Delivery', completed: true, timestamp: '17 Jun, 11:30 AM', active: true },
          { title: 'Delivered', completed: false, timestamp: 'Pending' }
        ]
      }
    },
    {
      id: 2,
      service: 'Store',
      type: 'offer',
      title: '30% Off All Jewelry - Limited Time',
      message: 'Special discount on premium jewelry collection. Valid until midnight!',
      timestamp: '4 hours ago',
      read: false,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'medium',
      expandable: true,
      details: {
        discount: '30%',
        validUntil: 'Tonight at 11:59 PM',
        minPurchase: 'AED 500',
        code: 'JEWELRY30'
      }
    },
    {
      id: 3,
      service: 'Store',
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment of AED 350 for Premium Rose Bouquet has been processed.',
      timestamp: '1 day ago',
      read: true,
      priority: 'low',
      expandable: false
    },

    // Events Notifications
    {
      id: 4,
      service: 'Events',
      type: 'event',
      title: 'Dubai Music Festival 2024 - Ticket Confirmed',
      message: 'Your tickets have been confirmed! Event starts in 3 days.',
      timestamp: '6 hours ago',
      read: false,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'high',
      expandable: true,
      details: {
        eventDate: 'February 15, 2024',
        eventTime: '7:00 PM - 11:00 PM',
        venue: 'Dubai Opera House',
        tickets: 2,
        seatNumbers: 'A12, A13',
        ticketType: 'VIP Experience'
      }
    },
    {
      id: 5,
      service: 'Events',
      type: 'event',
      title: 'New Event: Tech Innovation Summit',
      message: 'A new tech event has been added that matches your interests.',
      timestamp: '1 day ago',
      read: true,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'medium',
      expandable: true,
      details: {
        eventDate: 'February 20, 2024',
        venue: 'DIFC Conference Center',
        price: 'AED 299',
        earlyBird: 'Save AED 100 with early bird pricing'
      }
    },

    // Jobs Notifications
    {
      id: 6,
      service: 'Jobs',
      type: 'job',
      title: 'New Job: Event Coordinator at Dubai Events Co.',
      message: 'A company you follow posted a job that matches your profile.',
      timestamp: '3 hours ago',
      read: false,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'medium',
      expandable: true,
      details: {
        company: 'Dubai Events Co.',
        position: 'Senior Event Coordinator',
        salary: 'AED 8,000 - 12,000',
        location: 'Dubai, UAE',
        type: 'Full-time',
        posted: '2 hours ago'
      }
    },
    {
      id: 7,
      service: 'Jobs',
      type: 'job',
      title: 'Application Update: Photography Assistant',
      message: 'Your application has been reviewed and moved to the next stage.',
      timestamp: '1 day ago',
      read: true,
      priority: 'high',
      expandable: true,
      details: {
        company: 'Creative Studios Dubai',
        position: 'Photography Assistant',
        status: 'Interview Scheduled',
        nextStep: 'Video interview on February 18, 2024 at 2:00 PM'
      }
    },

    // Academy Notifications
    {
      id: 8,
      service: 'Academy',
      type: 'system',
      title: 'Course Completed: Adobe Photoshop Masterclass',
      message: 'Congratulations! You\'ve completed the course and earned a certificate.',
      timestamp: '2 days ago',
      read: true,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'medium',
      expandable: true,
      details: {
        course: 'Adobe Photoshop Masterclass',
        instructor: 'Sarah Johnson',
        completionDate: 'February 14, 2024',
        grade: '95%',
        certificate: 'Available for download'
      }
    },

    // Talents Notifications
    {
      id: 9,
      service: 'Talents',
      type: 'social',
      title: 'New Follower: Sarah Al-Mansouri',
      message: 'A verified talent started following your profile.',
      timestamp: '5 hours ago',
      read: false,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      priority: 'low',
      expandable: true,
      details: {
        followerName: 'Sarah Al-Mansouri',
        followerRole: 'Event Organizer & Wedding Planner',
        verified: true,
        mutualConnections: 12
      }
    },

    // Platform Notifications
    {
      id: 10,
      service: 'Platform',
      type: 'social',
      title: 'Your Post Got 100 Likes!',
      message: 'Your recent photography post is trending with 100+ likes.',
      timestamp: '8 hours ago',
      read: true,
      priority: 'low',
      expandable: true,
      details: {
        postTitle: 'Behind the scenes at Dubai Fashion Week',
        likes: 156,
        comments: 23,
        shares: 8,
        reach: '2.3K people'
      }
    },

    // System Notifications
    {
      id: 11,
      service: 'System',
      type: 'system',
      title: 'Profile Verification Complete',
      message: 'Your profile has been successfully verified with a blue checkmark.',
      timestamp: '1 day ago',
      read: true,
      priority: 'medium',
      expandable: false
    },
    {
      id: 12,
      service: 'System',
      type: 'system',
      title: 'Security Alert: New Login',
      message: 'New login detected from Dubai, UAE on Chrome browser.',
      timestamp: '3 days ago',
      read: true,
      priority: 'high',
      expandable: true,
      details: {
        location: 'Dubai, UAE',
        device: 'Chrome on Windows',
        ipAddress: '192.168.1.1',
        time: 'February 14, 2024 at 3:45 PM'
      }
    }
  ];

  const getServiceIcon = (service: string) => {
    const serviceData = services.find(s => s.id === service);
    if (serviceData) {
      const Icon = serviceData.icon;
      return <Icon className="w-5 h-5" />;
    }
    return <Bell className="w-5 h-5" />;
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'tracking': return <Truck className="w-5 h-5 text-blue-500" />;
      case 'offer': return <Percent className="w-5 h-5 text-green-500" />;
      case 'job': return <Briefcase className="w-5 h-5 text-blue-500" />;
      case 'event': return <Calendar className="w-5 h-5 text-purple-500" />;
      case 'payment': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'social': return <Users className="w-5 h-5 text-pink-500" />;
      case 'system': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-300 bg-gray-50';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesService = selectedService === 'All' || notification.service === selectedService;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesService && matchesSearch;
  });

  const unreadCount = filteredNotifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">#</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">HASHTAGS</h1>
                <p className="text-xs text-gray-500 -mt-1">STUDIOS</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : 'You\'re all caught up!'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Service Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Services</h2>
              <div className="space-y-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        selectedService === service.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      {service.count > 0 && (
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          selectedService === service.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {service.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`bg-white rounded-xl shadow-sm border-l-4 overflow-hidden transition-all ${
                    getPriorityColor(notification.priority)
                  } ${!notification.read ? 'ring-2 ring-blue-100' : ''}`}
                >
                  {/* Main Notification */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Service Icon */}
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        {getServiceIcon(notification.service)}
                      </div>
                      
                      {/* Notification Icon */}
                      <div className="flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      {/* Image */}
                      {notification.image && (
                        <img
                          src={notification.image}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                      )}
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {notification.service}
                              </span>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <h3 className={`text-lg font-semibold mb-1 ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </h3>
                            <p className={`text-sm mb-2 ${!notification.read ? 'text-gray-700' : 'text-gray-600'}`}>
                              {notification.message}
                            </p>
                            <span className="text-xs text-gray-500">{notification.timestamp}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {notification.expandable && (
                              <button
                                onClick={() => toggleExpand(notification.id)}
                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                {expandedNotifications.includes(notification.id) ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            )}
                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {notification.expandable && expandedNotifications.includes(notification.id) && (
                    <div className="border-t border-gray-100 p-6 bg-gray-50">
                      {/* Tracking Details */}
                      {notification.type === 'tracking' && notification.details && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Order #</span>
                              <div className="font-semibold">{notification.details.orderNumber}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Price</span>
                              <div className="font-semibold">AED {notification.details.price}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Carrier</span>
                              <div className="font-semibold">{notification.details.carrier}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">ETA</span>
                              <div className="font-semibold">{notification.details.estimatedDelivery}</div>
                            </div>
                          </div>

                          {/* Visual Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                                style={{ width: `${notification.details.progress}%` }}
                              ></div>
                            </div>
                            <div 
                              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000"
                              style={{ left: `calc(${notification.details.progress}% - 16px)` }}
                            >
                              <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
                                <Truck className="w-4 h-4 text-blue-500 animate-bounce" />
                              </div>
                            </div>
                          </div>

                          {/* Tracking Steps */}
                          <div className="space-y-3">
                            {notification.details.trackingSteps.map((step: any, index: number) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  step.completed 
                                    ? 'bg-green-500 text-white' 
                                    : step.active 
                                      ? 'bg-blue-500 text-white animate-pulse' 
                                      : 'bg-gray-300 text-gray-500'
                                }`}>
                                  {step.completed ? <Check className="w-3 h-3" /> : <div className="w-2 h-2 bg-current rounded-full"></div>}
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                    <span className={`font-medium ${step.completed || step.active ? 'text-gray-900' : 'text-gray-500'}`}>
                                      {step.title}
                                    </span>
                                    <span className="text-xs text-gray-500">{step.timestamp}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Job Details */}
                      {notification.type === 'job' && notification.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Company</span>
                            <div className="font-semibold">{notification.details.company}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Position</span>
                            <div className="font-semibold">{notification.details.position}</div>
                          </div>
                          {notification.details.salary && (
                            <div>
                              <span className="text-gray-500">Salary</span>
                              <div className="font-semibold">{notification.details.salary}</div>
                            </div>
                          )}
                          {notification.details.location && (
                            <div>
                              <span className="text-gray-500">Location</span>
                              <div className="font-semibold">{notification.details.location}</div>
                            </div>
                          )}
                          {notification.details.nextStep && (
                            <div className="md:col-span-2">
                              <span className="text-gray-500">Next Step</span>
                              <div className="font-semibold text-blue-600">{notification.details.nextStep}</div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Event Details */}
                      {notification.type === 'event' && notification.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Date</span>
                            <div className="font-semibold">{notification.details.eventDate}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Time</span>
                            <div className="font-semibold">{notification.details.eventTime}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Venue</span>
                            <div className="font-semibold">{notification.details.venue}</div>
                          </div>
                          {notification.details.seatNumbers && (
                            <div>
                              <span className="text-gray-500">Seats</span>
                              <div className="font-semibold">{notification.details.seatNumbers}</div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Offer Details */}
                      {notification.type === 'offer' && notification.details && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Discount</span>
                              <div className="font-bold text-green-600 text-lg">{notification.details.discount}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Valid Until</span>
                              <div className="font-semibold">{notification.details.validUntil}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Min Purchase</span>
                              <div className="font-semibold">{notification.details.minPurchase}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Code</span>
                              <div className="font-bold text-blue-600">{notification.details.code}</div>
                            </div>
                          </div>
                          <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Use Offer
                          </button>
                        </div>
                      )}

                      {/* Social Details */}
                      {notification.type === 'social' && notification.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {notification.details.followerName && (
                            <>
                              <div>
                                <span className="text-gray-500">Name</span>
                                <div className="font-semibold">{notification.details.followerName}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Role</span>
                                <div className="font-semibold">{notification.details.followerRole}</div>
                              </div>
                            </>
                          )}
                          {notification.details.likes && (
                            <>
                              <div>
                                <span className="text-gray-500">Likes</span>
                                <div className="font-semibold">{notification.details.likes}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Reach</span>
                                <div className="font-semibold">{notification.details.reach}</div>
                              </div>
                            </>
                          )}
                        </div>
                      )}

                      {/* System Details */}
                      {notification.type === 'system' && notification.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {notification.details.location && (
                            <div>
                              <span className="text-gray-500">Location</span>
                              <div className="font-semibold">{notification.details.location}</div>
                            </div>
                          )}
                          {notification.details.device && (
                            <div>
                              <span className="text-gray-500">Device</span>
                              <div className="font-semibold">{notification.details.device}</div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Academy Details */}
                      {notification.service === 'Academy' && notification.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Course</span>
                            <div className="font-semibold">{notification.details.course}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Instructor</span>
                            <div className="font-semibold">{notification.details.instructor}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Grade</span>
                            <div className="font-semibold text-green-600">{notification.details.grade}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Certificate</span>
                            <div className="font-semibold">{notification.details.certificate}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {filteredNotifications.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
                  <p className="text-gray-500">
                    {selectedService === 'All' 
                      ? 'You\'re all caught up! New notifications will appear here.' 
                      : `No notifications for ${selectedService} service.`
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {filteredNotifications.length > 0 && (
              <div className="mt-8 flex justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Mark All as Read
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">#</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">HASHTAGS STUDIOS</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Your premier creative platform for events, talents, and services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Settings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">support@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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