import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Heart, Share2, Ticket, Award, Music, Camera, Utensils, Gamepad2, Briefcase, GraduationCap, Bell, ShoppingCart, User, Sparkles, Phone, Mail, MessageCircle, ArrowLeft, Navigation, CreditCard, Shield, CheckCircle, AlertCircle, Plus, Minus } from 'lucide-react';

interface EventDetailPageProps {
  eventId?: number;
  onBack?: () => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ eventId = 1, onBack }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Mock event data - in real app, this would come from API
  const event = {
    id: 1,
    title: 'Dubai Music Festival 2024',
    category: 'music',
    date: '2024-02-15',
    time: '19:00',
    endTime: '23:00',
    location: 'Dubai Opera House',
    fullAddress: 'Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai, Dubai, UAE',
    price: 150,
    originalPrice: 200,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    bannerImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    attendees: 1250,
    maxAttendees: 2000,
    rating: 4.8,
    reviews: 324,
    organizer: 'Dubai Events Co.',
    organizerImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Experience the best of international and local music artists in this spectacular festival. Join us for an unforgettable night of music, culture, and entertainment in the heart of Dubai.',
    fullDescription: `The Dubai Music Festival 2024 is set to be the most spectacular musical event of the year, bringing together world-renowned artists and emerging talents from across the globe. This year's festival promises an extraordinary lineup featuring diverse genres from electronic dance music to traditional Arabic melodies, ensuring there's something for every music lover.

Set against the stunning backdrop of the Dubai Opera House, this premium venue offers state-of-the-art acoustics and luxurious seating arrangements. The festival will showcase both international headliners and local UAE talent, celebrating the rich cultural diversity that makes Dubai a global hub for arts and entertainment.

Attendees can expect not just incredible performances, but also interactive experiences, meet-and-greet opportunities with artists, exclusive merchandise, and gourmet food and beverage options throughout the venue. The event is designed to create lasting memories and connections within the music community.

This is more than just a concert – it's a celebration of music, culture, and the vibrant spirit of Dubai. Whether you're a longtime music enthusiast or discovering new sounds, the Dubai Music Festival 2024 will provide an immersive experience that resonates long after the final note.`,
    tags: ['Live Music', 'Festival', 'International Artists', 'Premium Venue'],
    featured: true,
    status: 'Early Bird',
    talents: [
      {
        id: 1,
        name: 'DJ Khalid Rahman',
        role: 'Headliner DJ',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'International DJ with over 15 years of experience, known for his unique blend of electronic and Middle Eastern sounds.',
        socialMedia: { instagram: '@djkhalidrahman', twitter: '@khalidrahman' }
      },
      {
        id: 2,
        name: 'Sarah Al-Mansouri',
        role: 'Vocalist',
        image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Award-winning Emirati singer and songwriter, bringing contemporary Arabic music to international audiences.',
        socialMedia: { instagram: '@sarahalmansouri', twitter: '@sarahsings' }
      },
      {
        id: 3,
        name: 'The Dubai Orchestra',
        role: 'Live Band',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Premier orchestral ensemble featuring musicians from around the world, specializing in fusion performances.',
        socialMedia: { instagram: '@dubaiorchestra', twitter: '@dubaiorchestra' }
      }
    ],
    venue: {
      name: 'Dubai Opera House',
      capacity: 2000,
      description: 'A world-class performing arts venue in the heart of Downtown Dubai, featuring state-of-the-art acoustics and luxurious seating.',
      amenities: ['Air Conditioning', 'Premium Sound System', 'VIP Lounges', 'Restaurant', 'Parking', 'Accessibility Features'],
      coordinates: { lat: 25.1972, lng: 55.2744 }
    },
    ticketTypes: [
      {
        id: 'general',
        name: 'General Admission',
        price: 150,
        originalPrice: 200,
        description: 'Standard seating with great views of the stage',
        available: 500,
        benefits: ['Event Access', 'Standard Seating', 'Welcome Drink']
      },
      {
        id: 'vip',
        name: 'VIP Experience',
        price: 350,
        originalPrice: 450,
        description: 'Premium seating with exclusive perks',
        available: 100,
        benefits: ['Premium Seating', 'Meet & Greet', 'Exclusive Merchandise', 'VIP Lounge Access', 'Complimentary Drinks']
      },
      {
        id: 'platinum',
        name: 'Platinum Package',
        price: 650,
        originalPrice: 800,
        description: 'Ultimate luxury experience with backstage access',
        available: 25,
        benefits: ['Front Row Seating', 'Backstage Tour', 'Artist Meet & Greet', 'Signed Merchandise', 'Private Dining', 'Dedicated Concierge']
      }
    ]
  };

  // Define seat map with different tiers
  const seatMap = [
    // Platinum (Front rows A-B)
    { row: 'A', seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'], tier: 'platinum' },
    { row: 'B', seats: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'], tier: 'platinum' },
    // VIP (Middle rows C-D)
    { row: 'C', seats: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'], tier: 'vip' },
    { row: 'D', seats: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'], tier: 'vip' },
    // General (Back rows E-F)
    { row: 'E', seats: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'], tier: 'general' },
    { row: 'F', seats: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'], tier: 'general' }
  ];

  const occupiedSeats = ['A1', 'A3', 'B2', 'B5', 'C1', 'C4', 'D3', 'D6', 'E2', 'F1'];

  const handleSeatClick = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return;
    
    if (selectedSeats.includes(seatId)) {
      // Remove seat
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      // Add seat
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getSeatTier = (seatId: string) => {
    const rowLetter = seatId.charAt(0);
    if (['A', 'B'].includes(rowLetter)) return 'platinum';
    if (['C', 'D'].includes(rowLetter)) return 'vip';
    return 'general';
  };

  const getSeatStatus = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return 'occupied';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  const getSeatColor = (status: string, tier: string) => {
    if (status === 'occupied') return 'bg-red-500 cursor-not-allowed';
    if (status === 'selected') return 'bg-green-500 cursor-pointer';
    
    // Different colors for different tiers when available
    if (status === 'available') {
      switch (tier) {
        case 'platinum': return 'bg-yellow-300 hover:bg-yellow-400 cursor-pointer';
        case 'vip': return 'bg-purple-300 hover:bg-purple-400 cursor-pointer';
        case 'general': return 'bg-blue-300 hover:bg-blue-400 cursor-pointer';
        default: return 'bg-gray-300 hover:bg-gray-400 cursor-pointer';
      }
    }
    return 'bg-gray-300';
  };

  // Calculate ticket breakdown based on selected seats
  const getTicketBreakdown = () => {
    const breakdown = {
      platinum: 0,
      vip: 0,
      general: 0
    };
    
    selectedSeats.forEach(seatId => {
      const tier = getSeatTier(seatId);
      breakdown[tier as keyof typeof breakdown]++;
    });
    
    return breakdown;
  };

  const calculateTotalPrice = () => {
    const breakdown = getTicketBreakdown();
    let total = 0;
    
    Object.entries(breakdown).forEach(([tier, count]) => {
      const ticketType = event.ticketTypes.find(t => t.id === tier);
      if (ticketType && count > 0) {
        total += ticketType.price * count;
      }
    });
    
    return total;
  };

  const calculateTotalSavings = () => {
    const breakdown = getTicketBreakdown();
    let savings = 0;
    
    Object.entries(breakdown).forEach(([tier, count]) => {
      const ticketType = event.ticketTypes.find(t => t.id === tier);
      if (ticketType && count > 0) {
        savings += (ticketType.originalPrice - ticketType.price) * count;
      }
    });
    
    return savings;
  };

  const totalPrice = calculateTotalPrice();
  const totalSavings = calculateTotalSavings();
  const ticketBreakdown = getTicketBreakdown();
  const totalTickets = selectedSeats.length;

  const clearAllSeats = () => {
    setSelectedSeats([]);
  };

  const getTicketTypeByTier = (tier: string) => {
    return event.ticketTypes.find(t => t.id === tier);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Sticky Header */}
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
                Back to Events
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
                    Hashtags Studios
                  </h1>
                  <p className="text-xs text-gray-500">Your Creative Partner</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'}`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Event Banner */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={event.bannerImage} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold">
                Featured Event
              </span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                {event.status}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {event.time} - {event.endTime}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(event.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{event.rating}</span>
                    <span className="text-gray-600">({event.reviews} reviews)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">AED {event.price}</div>
                    <div className="text-lg text-gray-500 line-through">AED {event.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Save AED {event.originalPrice - event.price}</div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{event.fullDescription}</p>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Talents Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Talents</h2>
                <div className="space-y-6">
                  {event.talents.map((talent) => (
                    <div key={talent.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={talent.image} 
                        alt={talent.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{talent.name}</h3>
                        <p className="text-purple-600 font-medium mb-2">{talent.role}</p>
                        <p className="text-gray-600 text-sm mb-3">{talent.bio}</p>
                        <div className="flex gap-3">
                          <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            {talent.socialMedia.instagram}
                          </a>
                          <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            {talent.socialMedia.twitter}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.venue.name}</h3>
                    <p className="text-gray-600 mb-4">{event.venue.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.fullAddress}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Capacity: {event.venue.capacity} guests</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Venue Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.venue.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Directions</h2>
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <Navigation className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Dubai Opera House, Downtown Dubai</p>
                    <p className="text-xs mt-2">Coordinates: {event.venue.coordinates.lat}, {event.venue.coordinates.lng}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View in Maps
                  </button>
                </div>
              </div>

              {/* Seat Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Seats</h2>
                
                {/* Stage */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg mb-8">
                  <span className="font-semibold">🎭 STAGE 🎭</span>
                </div>

                {/* Seat Map */}
                <div className="space-y-3 mb-6">
                  {seatMap.map((rowData, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-2">
                      <div className="w-8 text-center text-sm font-medium text-gray-600 flex items-center justify-center">
                        {rowData.row}
                      </div>
                      {rowData.seats.map((seatId) => {
                        const status = getSeatStatus(seatId);
                        return (
                          <button
                            key={seatId}
                            onClick={() => handleSeatClick(seatId)}
                            className={`w-8 h-8 rounded text-xs font-medium text-white transition-colors ${getSeatColor(status, rowData.tier)}`}
                            disabled={status === 'occupied'}
                            title={`${seatId} - ${rowData.tier.toUpperCase()}`}
                          >
                            {seatId.slice(1)}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Seat Legend */}
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-300 rounded"></div>
                    <span>Platinum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-300 rounded"></div>
                    <span>VIP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-300 rounded"></div>
                    <span>General</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Occupied</span>
                  </div>
                </div>

                {selectedSeats.length > 0 && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Selected Seats:</h4>
                    <p className="text-green-700">{selectedSeats.join(', ')} ({selectedSeats.length} selected)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Tickets</h3>
                
                {selectedSeats.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg mb-6">
                    <div className="text-gray-400 mb-2">
                      <Ticket className="w-12 h-12 mx-auto mb-3" />
                    </div>
                    <h4 className="font-semibold text-gray-600 mb-2">Select Your Seats</h4>
                    <p className="text-sm text-gray-500">
                      Choose your preferred seats from the seat map above to see ticket details and pricing
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-900">Selected Tickets ({totalTickets})</h4>
                      <button 
                        onClick={clearAllSeats}
                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Clear All
                      </button>
                    </div>
                    
                    {/* Ticket Breakdown */}
                    {Object.entries(ticketBreakdown).map(([tier, count]) => {
                      if (count === 0) return null;
                      const ticketType = getTicketTypeByTier(tier);
                      if (!ticketType) return null;
                      
                      return (
                        <div key={tier} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h5 className="font-semibold text-gray-900">{ticketType.name}</h5>
                              <p className="text-sm text-gray-600">Quantity: {count}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-purple-600">AED {ticketType.price * count}</div>
                              {ticketType.originalPrice > ticketType.price && (
                                <div className="text-sm text-gray-500 line-through">AED {ticketType.originalPrice * count}</div>
                              )}
                            </div>
                          </div>
                          
                          {/* Show selected seats for this tier */}
                          <div className="text-sm text-gray-600">
                            Seats: {selectedSeats.filter(seat => getSeatTier(seat) === tier).join(', ')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {selectedSeats.length > 0 && (
                  <>
                    {/* Price Summary */}
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Tickets ({totalTickets}x)</span>
                        <span className="font-semibold">AED {totalPrice}</span>
                      </div>
                      {totalSavings > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-green-600 text-sm">You save</span>
                          <span className="text-green-600 font-semibold">AED {totalSavings}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span className="text-purple-600">AED {totalPrice}</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <button 
                      onClick={() => setShowBookingModal(true)}
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-5 h-5" />
                      Book Now - AED {totalPrice}
                    </button>
                  </>
                )}

                {selectedSeats.length === 0 && (
                  <button 
                    disabled
                    className="w-full px-6 py-4 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-5 h-5" />
                    Select Seats to Continue
                  </button>
                )}

                {/* Ticket Types Reference */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Ticket Types</h4>
                  <div className="space-y-3">
                    {event.ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded ${
                            ticket.id === 'platinum' ? 'bg-yellow-300' :
                            ticket.id === 'vip' ? 'bg-purple-300' : 'bg-blue-300'
                          }`}></div>
                          <span className="font-medium">{ticket.name}</span>
                        </div>
                        <span className="text-purple-600 font-semibold">AED {ticket.price}</span>
                      </div>
                    ))}
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure booking powered by SSL encryption</span>
                </div>

                {/* Event Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{event.attendees}</div>
                      <div className="text-sm text-gray-600">Going</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{event.reviews}</div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Tickets Sold</span>
                      <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmation</h3>
                <p className="text-gray-600">You're about to book {totalTickets} ticket{totalTickets !== 1 ? 's' : ''} for {event.title}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Event</span>
                  <span className="font-semibold">{event.title}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Tickets</span>
                  <span className="font-semibold">{totalTickets} ticket{totalTickets !== 1 ? 's' : ''}</span>
                </div>
                {selectedSeats.length > 0 && totalTickets > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Seats</span>
                    <span className="font-semibold">{selectedSeats.join(', ')}</span>
                  </div>
                )}
                {/* Show ticket breakdown in modal */}
                {Object.entries(ticketBreakdown).map(([tier, count]) => {
                  if (count === 0) return null;
                  const ticketType = getTicketTypeByTier(tier);
                  if (!ticketType) return null;
                  
                  return (
                    <div key={tier} className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">{ticketType.name}</span>
                      <span className="font-semibold">{count}x AED {ticketType.price}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span className="text-purple-600">AED {totalPrice}</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Help Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Booking?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our expert support team is available 24/7 to assist you with ticket purchases, event information, and any questions you may have.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm mb-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>support@hashtagsstudios.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Live Chat Available</span>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Get Help Now
          </button>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Studios</h3>
                  <p className="text-xs text-gray-400">Your Creative Partner</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Creating unforgettable events and connecting communities across the UAE. Your premier destination for exceptional event experiences.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Venue Booking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Talent Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Event Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Event Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Music & Concerts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business & Corporate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food & Dining</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gaming & Esports</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Education & Workshops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports & Fitness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arts & Culture</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">info@hashtagsstudios.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">24/7 Live Chat Support</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3">Newsletter</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Hashtags Studios. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
