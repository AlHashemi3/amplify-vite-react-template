import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Heart, Users, Award, BookOpen, GraduationCap, CreditCard, Smartphone, Building, HelpCircle, Gift, Target, TrendingUp, Calendar, Clock, CheckCircle, Star, Globe, Shield, Zap } from 'lucide-react';

interface DonationsPageProps {
  onBack?: () => void;
}

interface DonationCause {
  id: number;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  donors: number;
  category: string;
  urgent?: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const DonationsPage: React.FC<DonationsPageProps> = ({ onBack }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('The Child Fund');
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');
  const [donationFrequency, setDonationFrequency] = useState('one-time');

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const causes = [
    'The Child Fund',
    'Education Support',
    'Healthcare Access',
    'Emergency Relief',
    'Community Development',
    'Environmental Protection'
  ];

  const paymentMethods = [
    { id: 'credit', name: 'Credit Card', icon: CreditCard },
    { id: 'sms', name: 'SMS Donation', icon: Smartphone },
    { id: 'bank', name: 'Bank Transfer', icon: Building },
    { id: 'help', name: 'Help a Patient', icon: HelpCircle },
    { id: 'ways', name: 'Ways to Give', icon: Gift }
  ];

  const stats = [
    { number: '21,724', label: 'Patients Helped', icon: Users },
    { number: '73', label: 'Scholarships Awarded', icon: GraduationCap },
    { number: '124', label: 'Research Grants', icon: BookOpen },
    { number: '7,077', label: 'Graduates Supported', icon: Award }
  ];

  const featuredCauses: DonationCause[] = [
    {
      id: 1,
      title: 'Medical Scholarships for Future Doctors',
      description: 'Support aspiring medical students to become healthcare heroes and serve their communities.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
      raised: 45000,
      goal: 100000,
      donors: 234,
      category: 'Education',
      urgent: true
    },
    {
      id: 2,
      title: 'Emergency Medical Equipment',
      description: 'Provide life-saving medical equipment to hospitals in underserved areas.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
      raised: 78000,
      goal: 150000,
      donors: 456,
      category: 'Healthcare'
    },
    {
      id: 3,
      title: 'Children\'s Cancer Treatment Fund',
      description: 'Help provide specialized cancer treatment for children who cannot afford it.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
      raised: 92000,
      goal: 200000,
      donors: 678,
      category: 'Healthcare',
      urgent: true
    },
    {
      id: 4,
      title: 'Community Health Centers',
      description: 'Build and maintain health centers in rural communities across the UAE.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
      raised: 125000,
      goal: 300000,
      donors: 892,
      category: 'Community'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Aafia Gheewale',
      title: 'Medical Scholarship Recipient, Mohammed Bin Rashid University of Medicine and Health Sciences',
      quote: 'Through this medical scholarship I can follow my dreams to become a doctor. I know the best way I can make a difference in the world is by offering health to others.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Ahmed Al-Mansouri',
      title: 'Pediatric Surgeon, Dubai Hospital',
      quote: 'The support I received during my studies enabled me to specialize in pediatric surgery. Today, I can give back to the community that invested in my future.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Fatima Al-Zahra',
      title: 'Research Scientist, UAE University',
      quote: 'Thanks to the research grant, I was able to develop innovative treatments that are now helping patients across the region.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      alert(`Thank you for your donation of AED ${amount} to ${selectedCause}!`);
    } else {
      alert('Please select or enter a donation amount.');
    }
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">About Foundation</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Impact Reports</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Transparency</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">Contact Us</a>
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
                  Hashtags Foundation
                </h1>
                <p className="text-xs text-gray-500">Making a Difference Together</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Medical Foundation Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Together We Heal, Together We Hope</h1>
            <p className="text-xl mb-8">Supporting medical education, healthcare access, and community wellness across the UAE</p>
            
            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <Gift className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-semibold mb-2">Ways to Give</h3>
                <p className="text-sm opacity-90">You can make a difference</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-teal-300" />
                <h3 className="font-semibold mb-2">Stories of Hope</h3>
                <p className="text-sm opacity-90">Inspiring journeys of resilience, courage, and recovery</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <Users className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <h3 className="font-semibold mb-2">Our Partners</h3>
                <p className="text-sm opacity-90">We are honored to recognize and celebrate our partners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <Heart className="w-8 h-8 mx-auto mb-3 text-red-300" />
                <h3 className="font-semibold mb-2">Help a Patient</h3>
                <p className="text-sm opacity-90">Directly fund treatments for those in need</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Giving In Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Causes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Causes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredCauses.map((cause) => (
                  <div key={cause.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img 
                        src={cause.image} 
                        alt={cause.title}
                        className="w-full h-48 object-cover"
                      />
                      {cause.urgent && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Urgent
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {cause.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{cause.title}</h3>
                      <p className="text-gray-600 mb-4">{cause.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Raised: AED {cause.raised.toLocaleString()}</span>
                          <span>Goal: AED {cause.goal.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${getProgressPercentage(cause.raised, cause.goal)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                          <span>{Math.round(getProgressPercentage(cause.raised, cause.goal))}% funded</span>
                          <span>{cause.donors} donors</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all">
                        Donate Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stories of Impact</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="text-6xl text-blue-200 font-serif">"</div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-sm text-gray-600">{testimonials[currentTestimonial].title}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    ←
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
              
              {/* Donation Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setDonationFrequency('one-time')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      donationFrequency === 'one-time' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationFrequency('monthly')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      donationFrequency === 'monthly' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Cause Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">I want to donate to:</label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {causes.map((cause) => (
                    <option key={cause} value={cause}>{cause}</option>
                  ))}
                </select>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (AED)</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.name)}
                        className={`p-3 rounded-lg border-2 text-center transition-colors ${
                          selectedPayment === method.name
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <Icon className={`w-6 h-6 mx-auto mb-2 ${
                          selectedPayment === method.name ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                        <div className={`text-xs font-medium ${
                          selectedPayment === method.name ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {method.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Donate Button */}
              <button 
                onClick={handleDonate}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Make a Donation
              </button>

              {/* Security Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure donation powered by SSL encryption</span>
              </div>

              {/* Other Ways to Donate */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Other ways to donate</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">SMS "HOPE" to 4202</span>
                    <span className="text-sm font-semibold text-blue-600">AED 10</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">SMS "CARE" to 4205</span>
                    <span className="text-sm font-semibold text-blue-600">AED 50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">SMS "HEAL" to 4209</span>
                    <span className="text-sm font-semibold text-blue-600">AED 100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Foundation</h3>
                  <p className="text-xs text-gray-400">Making a Difference Together</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Dedicated to improving healthcare access, supporting medical education, and building stronger communities across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ways to Give</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stories of Hope</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help a Patient</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Medical Scholarships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare Access</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Grants</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Health</a></li>
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
                  <span className="text-gray-400">donate@hashtagsfoundation.ae</span>
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
              © 2024 Hashtags Foundation. All rights reserved. | Tax ID: 123456789
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};