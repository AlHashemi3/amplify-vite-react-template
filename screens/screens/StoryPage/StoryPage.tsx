import React, { useState, useEffect } from 'react';
import { X, Heart, Send, MoreHorizontal, Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight, Eye, MessageCircle } from 'lucide-react';

interface StoryPageProps {
  storyId?: number;
  onClose?: () => void;
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
  duration: number; // in seconds
}

interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  role: string;
  verified: boolean;
  stories: Story[];
}

export const StoryPage: React.FC<StoryPageProps> = ({ storyId = 1, onClose }) => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  // Mock data for stories
  const users: User[] = [
    {
      id: 1,
      name: 'Layla Al-Zahra',
      username: 'layla_events',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'Event Organizer',
      verified: true,
      stories: [
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
          duration: 5
        },
        {
          id: 2,
          userId: 1,
          userName: 'Layla Al-Zahra',
          userAvatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
          userRole: 'Event Organizer',
          verified: true,
          timestamp: '1h',
          type: 'video',
          content: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Behind the scenes of our floral arrangements 🌹',
          views: 892,
          likes: 67,
          duration: 8
        }
      ]
    },
    {
      id: 2,
      name: 'Omar Hassan',
      username: 'omar_dj',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'Professional DJ',
      verified: true,
      stories: [
        {
          id: 3,
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
        }
      ]
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      username: 'sophia_photo',
      avatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'Event Photographer',
      verified: true,
      stories: [
        {
          id: 4,
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
          id: 5,
          userId: 3,
          userName: 'Sophia Martinez',
          userAvatar: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=400',
          userRole: 'Event Photographer',
          verified: true,
          timestamp: '2h',
          type: 'image',
          content: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Corporate headshots session complete ✅',
          views: 934,
          likes: 112,
          duration: 4
        }
      ]
    }
  ];

  const currentUser = users[currentUserIndex];
  const currentStory = currentUser?.stories[currentStoryIndex];

  // Auto-progress story
  useEffect(() => {
    if (!isPlaying || !currentStory) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (currentStory.duration * 10));
        
        if (newProgress >= 100) {
          // Move to next story
          if (currentStoryIndex < currentUser.stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setProgress(0);
          } else if (currentUserIndex < users.length - 1) {
            // Move to next user
            setCurrentUserIndex(currentUserIndex + 1);
            setCurrentStoryIndex(0);
            setProgress(0);
          } else {
            // End of all stories
            onClose?.();
          }
          return 0;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentUserIndex, currentStoryIndex, isPlaying, currentUser, currentStory, onClose]);

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
    } else if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
      const prevUser = users[currentUserIndex - 1];
      setCurrentStoryIndex(prevUser.stories.length - 1);
      setProgress(0);
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < currentUser.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    } else if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
      setCurrentStoryIndex(0);
      setProgress(0);
    } else {
      onClose?.();
    }
  };

  const handleStoryClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    
    if (clickX < width / 3) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // In real app, send like to backend
  };

  const handleReply = () => {
    if (replyText.trim()) {
      // In real app, send reply to backend
      alert(`Reply sent to ${currentUser.name}: "${replyText}"`);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  if (!currentUser || !currentStory) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Story Container */}
      <div className="relative w-full max-w-md h-full bg-black">
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-20 flex gap-1">
          {currentUser.stories.map((_, index) => (
            <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-100"
                style={{ 
                  width: index < currentStoryIndex ? '100%' : 
                         index === currentStoryIndex ? `${progress}%` : '0%' 
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-8 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              {currentUser.verified && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">{currentUser.username}</span>
                <span className="text-white/70 text-xs">{currentStory.timestamp}</span>
              </div>
              <span className="text-white/70 text-xs">{currentUser.role}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {currentStory.type === 'video' && (
              <>
                <button 
                  onClick={togglePlayPause}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </>
            )}
            <button className="text-white/80 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Story Content */}
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={handleStoryClick}
        >
          {currentStory.type === 'image' ? (
            <img 
              src={currentStory.content} 
              alt="Story content"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full">
              <img 
                src={currentStory.content} 
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white ml-0.5" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Areas (invisible) */}
          <div className="absolute inset-0 flex">
            <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); goToPreviousStory(); }}></div>
            <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}></div>
            <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); goToNextStory(); }}></div>
          </div>
        </div>

        {/* Story Caption */}
        {currentStory.caption && (
          <div className="absolute bottom-20 left-4 right-4 z-20">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white text-sm leading-relaxed">{currentStory.caption}</p>
            </div>
          </div>
        )}

        {/* Story Stats */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4 text-white/80 text-xs">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{formatViews(currentStory.views)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            <span>{currentStory.likes}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3">
          <button 
            onClick={handleLike}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
              isLiked 
                ? 'bg-red-500 text-white scale-110' 
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            onClick={() => setShowReplyInput(true)}
            className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {currentUserIndex > 0 && (
          <button 
            onClick={() => {
              setCurrentUserIndex(currentUserIndex - 1);
              setCurrentStoryIndex(0);
              setProgress(0);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        
        {currentUserIndex < users.length - 1 && (
          <button 
            onClick={() => {
              setCurrentUserIndex(currentUserIndex + 1);
              setCurrentStoryIndex(0);
              setProgress(0);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Reply Input Modal */}
      {showReplyInput && (
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 z-30">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">Reply to {currentUser.name}</span>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Send a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <button 
                onClick={handleReply}
                disabled={!replyText.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <button 
              onClick={() => setShowReplyInput(false)}
              className="mt-3 text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};