import React from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Construction, Clock, Calendar, Briefcase, Users, Award, TrendingUp, Zap, Target, CheckCircle, Star, Heart, Send } from 'lucide-react';

interface JobsComingSoonPageProps {
  onBack?: () => void;
}

export const JobsComingSoonPage: React.FC<JobsComingSoonPageProps> = ({ onBack }) => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleNotifyMe = () => {
    alert('Thank you! We\'ll notify you when the Jobs platform launches.');
  };

  const upcomingFeatures = [
    {
      icon: Briefcase,
      title: 'Job Marketplace',
      description: 'Browse thousands of creative jobs in the UAE',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Talent Matching',
      description: 'AI-powered matching between employers and talents',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Skill Verification',
      description: 'Verified portfolios and skill assessments',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Track your career progress and achievements',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Applications',
      description: 'Apply to jobs with one-click applications',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Smart Recommendations',
      description: 'Personalized job recommendations based on your profile',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Ready', icon: '🏢' },
    { number: '2,000+', label: 'Jobs Waiting', icon: '💼' },
    { number: '10,000+', label: 'Talents Registered', icon: '👥' },
    { number: '95%', label: 'Success Rate', icon: '🎯' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-teal-200 transition-colors">About Jobs</a>
              <a href="#" className="hover:text-teal-200 transition-colors">For Employers</a>
              <a href="#" className="hover:text-teal-200 transition-colors">Career Resources</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-teal-200 transition-colors">Help Center</a>
              <button className="hover:text-teal-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-teal-200 transition-colors">
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
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-teal-600 transition-colors"
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
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">#</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Hashtags Jobs
                </h1>
                <p className="text-xs text-gray-500">Your Career Platform</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8">
              <Construction className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-6xl font-bold mb-6">Jobs Platform</h1>
            <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-teal-100">
              We're building the ultimate job platform for creative professionals in the UAE. 
              Connect with top employers, showcase your portfolio, and find your dream career.
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold bg-white/20 rounded-lg p-4 mb-2">30</div>
                <div className="text-sm text-teal-200">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-white/20 rounded-lg p-4 mb-2">12</div>
                <div className="text-sm text-teal-200">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-white/20 rounded-lg p-4 mb-2">45</div>
                <div className="text-sm text-teal-200">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-white/20 rounded-lg p-4 mb-2">23</div>
                <div className="text-sm text-teal-200">Seconds</div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 border-0 focus:ring-4 focus:ring-white/30"
                />
                <button 
                  onClick={handleNotifyMe}
                  className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-colors shadow-lg"
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Coming</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Timeline</h2>
          <div className="space-y-8">
            {[
              { phase: 'Phase 1', title: 'Platform Foundation', status: 'completed', date: 'Q4 2024' },
              { phase: 'Phase 2', title: 'Job Marketplace', status: 'in-progress', date: 'Q1 2025' },
              { phase: 'Phase 3', title: 'AI Matching System', status: 'upcoming', date: 'Q2 2025' },
              { phase: 'Phase 4', title: 'Mobile App Launch', status: 'upcoming', date: 'Q3 2025' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'in-progress' ? 'bg-teal-500' : 'bg-gray-400'
                }`}>
                  {item.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.phase}: {item.title}</h3>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'in-progress' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status === 'completed' ? 'Completed' :
                       item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Be the First to Know</h2>
          <p className="text-xl mb-8 text-teal-100">
            Join our exclusive list and get early access to the Jobs platform, plus special launch offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 border-0 focus:ring-4 focus:ring-white/30"
              />
              <button 
                onClick={handleNotifyMe}
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-colors shadow-lg flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Join List
              </button>
            </div>
            <p className="text-sm text-teal-200 mt-3">
              No spam, just updates on our launch progress.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'When will the Jobs platform launch?',
                answer: 'We\'re targeting Q1 2025 for the beta launch, with full platform availability in Q2 2025.'
              },
              {
                question: 'What types of jobs will be available?',
                answer: 'We\'ll feature creative jobs including photography, videography, event planning, design, marketing, and more across the UAE.'
              },
              {
                question: 'Is there a cost to use the platform?',
                answer: 'The platform will be free for job seekers. Employers will have premium features available for enhanced job postings.'
              },
              {
                question: 'Can I start building my profile now?',
                answer: 'Yes! Sign up for early access and you\'ll be able to create your profile before the official launch.'
              },
              {
                question: 'Will there be remote job opportunities?',
                answer: 'Absolutely! We\'ll feature both on-site and remote opportunities to give you maximum flexibility.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Jobs</h3>
                  <p className="text-xs text-gray-400">Your Career Platform</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting talented professionals with amazing opportunities across the UAE creative industry.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Job Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Job Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design & Creative</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-400">jobs@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
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