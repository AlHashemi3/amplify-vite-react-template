import React, { useState, useRef } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Upload, X, Check, ChevronDown, Trophy, Camera, Video, Palette, FileText, Headphones, Brush, Award, Clock, Users, Gift, Star, Plus, Minus, Eye, Download, Link, Image, File, Play, Mic, Calendar, DollarSign, Target, Zap, Crown } from 'lucide-react';

interface CompetitionEntryPageProps {
  competitionId?: number;
  competitionType?: 'solo' | 'team' | 'company';
  onBack?: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  preview?: string;
}

interface Competition {
  id: number;
  title: string;
  category: string;
  prize: string;
  prizeValue: number;
  entryFee: number;
  deadline: string;
  timeLeft: string;
  difficulty: string;
  description: string;
  requirements: string[];
  submissionFormat: string[];
  judges: any[];
  maxSubmissions: number;
  minSubmissions: number;
}

export const CompetitionEntryPage: React.FC<CompetitionEntryPageProps> = ({ 
  competitionId = 1, 
  competitionType = 'solo',
  onBack 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [submissionTitle, setSubmissionTitle] = useState('');
  const [submissionDescription, setSubmissionDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>(['']);
  const [experience, setExperience] = useState('');
  const [inspiration, setInspiration] = useState('');
  
  // Type-specific fields
  const [teamMembers, setTeamMembers] = useState<Array<{name: string, role: string, email: string}>>([
    { name: '', role: '', email: '' }
  ]);
  const [companyName, setCompanyName] = useState('');
  const [companyRegistration, setCompanyRegistration] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  // Document uploads
  const [verificationDocs, setVerificationDocs] = useState<UploadedFile[]>([]);
  const [personalId, setPersonalId] = useState<UploadedFile | null>(null);
  const [companyLicense, setCompanyLicense] = useState<UploadedFile | null>(null);
  const [teamAgreement, setTeamAgreement] = useState<UploadedFile | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const verificationInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Mock competition data
  const competition: Competition = {
    id: 1,
    title: 'Dubai Street Photography Challenge',
    category: 'Photography',
    prize: 'Canon EOS R5 + AED 10,000 Cash',
    prizeValue: 25000,
    entryFee: 50,
    deadline: '2024-03-15',
    timeLeft: '25 days',
    difficulty: 'All Levels',
    description: 'Capture the essence of Dubai\'s vibrant street life. Show us the city through your unique perspective - from bustling souks to modern skyscrapers.',
    requirements: [
      'Original photographs taken in Dubai',
      'Minimum 3, maximum 5 submissions',
      'High resolution (minimum 3000px)',
      'No heavy editing or filters',
      'Include location and story behind each photo'
    ],
    submissionFormat: ['JPEG', 'RAW', 'TIFF'],
    judges: [
      { name: 'Ahmed Al-Rashid', title: 'Professional Photographer' },
      { name: 'Sarah Johnson', title: 'National Geographic Photographer' }
    ],
    maxSubmissions: 5,
    minSubmissions: 3
  };

  const steps = [
    { number: 1, title: 'Competition Details', icon: Trophy, description: 'Review competition requirements' },
    { number: 2, title: 'Entry Information', icon: FileText, description: 'Provide entry details and verification' },
    { number: 3, title: 'Upload Submissions', icon: Upload, description: 'Upload your competition entries' },
    { number: 4, title: 'Review & Submit', icon: Check, description: 'Final review and submission' }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleVerificationUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      const fileUrl = URL.createObjectURL(file);
      
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        url: fileUrl,
        preview: file.type.startsWith('image/') ? fileUrl : undefined
      };
      
      // Determine which document type based on file name or user selection
      if (file.name.toLowerCase().includes('id') || file.name.toLowerCase().includes('passport')) {
        setPersonalId(newFile);
      } else if (file.name.toLowerCase().includes('license') || file.name.toLowerCase().includes('company')) {
        setCompanyLicense(newFile);
      } else if (file.name.toLowerCase().includes('agreement') || file.name.toLowerCase().includes('team')) {
        setTeamAgreement(newFile);
      } else {
        setVerificationDocs([...verificationDocs, newFile]);
      }
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (uploadedFiles.length < competition.maxSubmissions) {
        const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        const fileUrl = URL.createObjectURL(file);
        
        const newFile: UploadedFile = {
          id: fileId,
          name: file.name,
          size: file.size,
          type: file.type,
          url: fileUrl,
          preview: file.type.startsWith('image/') ? fileUrl : undefined
        };
        
        setUploadedFiles(prev => [...prev, newFile]);
      }
    });
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addPortfolioLink = () => {
    setPortfolioLinks([...portfolioLinks, '']);
  };

  const updatePortfolioLink = (index: number, value: string) => {
    const newLinks = [...portfolioLinks];
    newLinks[index] = value;
    setPortfolioLinks(newLinks);
  };

  const removePortfolioLink = (index: number) => {
    setPortfolioLinks(portfolioLinks.filter((_, i) => i !== index));
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', role: '', email: '' }]);
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    const newMembers = [...teamMembers];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setTeamMembers(newMembers);
  };

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-5 h-5" />;
    if (type.startsWith('video/')) return <Play className="w-5 h-5" />;
    if (type.startsWith('audio/')) return <Mic className="w-5 h-5" />;
    return <File className="w-5 h-5" />;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Photography': return <Camera className="w-6 h-6" />;
      case 'Filmmaking': return <Video className="w-6 h-6" />;
      case 'Design': return <Palette className="w-6 h-6" />;
      case 'Writing': return <FileText className="w-6 h-6" />;
      case 'Music': return <Headphones className="w-6 h-6" />;
      case 'Art': return <Brush className="w-6 h-6" />;
      default: return <Trophy className="w-6 h-6" />;
    }
  };

  const handleSubmit = () => {
    if (uploadedFiles.length < competition.minSubmissions) {
      alert(`Please upload at least ${competition.minSubmissions} files.`);
      return;
    }
    
    if (!submissionTitle.trim() || !submissionDescription.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Type-specific validation
    if (competitionType === 'team' && teamMembers.some(member => !member.name || !member.role || !member.email)) {
      alert('Please fill in all team member details.');
      return;
    }
    
    if (competitionType === 'company' && (!companyName || !companyRegistration || !contactPerson)) {
      alert('Please fill in all company details.');
      return;
    }
    
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    
    // Check for required verification documents
    if (competitionType === 'solo' && !personalId) {
      alert('Please upload your personal ID for verification.');
      return;
    }
    
    if (competitionType === 'company' && !companyLicense) {
      alert('Please upload your company license for verification.');
      return;
    }
    
    if (competitionType === 'team' && !teamAgreement) {
      alert('Please upload the team collaboration agreement.');
      return;
    }
    
    // In real app, submit to backend
    alert('Competition entry submitted successfully! Good luck!');
    onBack?.();
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return true; // Just review step
      case 2: 
        const basicValid = submissionTitle.trim() && submissionDescription.trim();
        if (competitionType === 'team') {
          return basicValid && teamMembers.every(member => member.name && member.role && member.email);
        }
        if (competitionType === 'company') {
          return basicValid && companyName && companyRegistration && contactPerson && contactEmail;
        }
        return basicValid;
      case 3: return uploadedFiles.length >= competition.minSubmissions;
      case 4: return agreedToTerms;
      default: return false;
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
              Back to Competitions
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
                <p className="text-xs text-gray-500">Submit Your Entry</p>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      isCompleted ? 'bg-green-500 text-white' :
                      isActive ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {isCompleted ? <Check className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <div className="mt-2 text-center">
                      <div className={`text-sm font-medium ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Step 1: Competition Details */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {getCategoryIcon(competition.category)}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{competition.title}</h1>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                  {competition.category}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {competition.difficulty}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                  {competition.timeLeft} left
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Competition Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competition Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-3">
                      <Gift className="w-6 h-6 text-yellow-600" />
                      <div>
                        <div className="font-bold text-gray-900">Prize</div>
                        <div className="text-sm text-gray-600">{competition.prize}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">AED {competition.prizeValue.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-700">Entry Fee</span>
                      </div>
                      <div className="text-xl font-bold text-green-600">AED {competition.entryFee}</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-red-600" />
                        <span className="font-medium text-gray-700">Deadline</span>
                      </div>
                      <div className="text-xl font-bold text-red-600">{new Date(competition.deadline).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <div className="space-y-3">
                  {competition.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Accepted Formats</h4>
                  <div className="flex gap-2">
                    {competition.submissionFormat.map((format, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-purple-900 mb-3">Competition Description</h4>
              <p className="text-purple-800 leading-relaxed">{competition.description}</p>
            </div>

            {/* Competition Type Selection */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-blue-900 mb-4">Select Entry Type</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="p-6 bg-white rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Solo Entry</h5>
                  <p className="text-sm text-gray-600">Individual submission</p>
                  <div className="mt-3 text-xs text-blue-600 font-medium">Requires: Personal ID</div>
                </button>

                <button
                  onClick={() => {
                    // Set competition type and proceed
                    setCurrentStep(2);
                  }}
                  className="p-6 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all text-center group"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Team Entry</h5>
                  <p className="text-sm text-gray-600">Collaborative submission</p>
                  <div className="mt-3 text-xs text-purple-600 font-medium">Requires: Team Agreement</div>
                </button>

                <button
                  onClick={() => {
                    // Set competition type and proceed
                    setCurrentStep(2);
                  }}
                  className="p-6 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 transition-all text-center group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Company Entry</h5>
                  <p className="text-sm text-gray-600">Corporate submission</p>
                  <div className="mt-3 text-xs text-green-600 font-medium">Requires: Company License</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Entry Information */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Information</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-gray-600">Entry Type:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
                {competitionType}
              </span>
            </div>

            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Basic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Submission Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={submissionTitle}
                    onChange={(e) => setSubmissionTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Give your submission a compelling title..."
                    maxLength={100}
                  />
                  <div className="text-xs text-gray-500 mt-1">{submissionTitle.length}/100 characters</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={submissionDescription}
                    onChange={(e) => setSubmissionDescription(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your concept, approach, and what makes your submission unique..."
                    maxLength={1000}
                  />
                  <div className="text-xs text-gray-500 mt-1">{submissionDescription.length}/1000 characters</div>
                </div>
              </div>

              {/* Solo Entry Fields */}
              {competitionType === 'solo' && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your full legal name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Team Entry Fields */}
              {competitionType === 'team' && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Team Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your team name"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Team Members <span className="text-red-500">*</span>
                        </label>
                        <button
                          type="button"
                          onClick={addTeamMember}
                          className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Add Member
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {teamMembers.map((member, index) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-lg">
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Full Name"
                            />
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Role/Position"
                            />
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) => updateTeamMember(index, 'email', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Email"
                            />
                            <button
                              type="button"
                              onClick={() => removeTeamMember(index)}
                              disabled={teamMembers.length === 1}
                              className="px-3 py-2 text-red-600 hover:text-red-700 disabled:text-gray-400 disabled:cursor-not-allowed"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Company Entry Fields */}
              {competitionType === 'company' && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registration Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={companyRegistration}
                        onChange={(e) => setCompanyRegistration(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Company registration number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Primary contact person"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="contact@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+971 4 123 4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Complete company address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Verification Documents */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Documents</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Required:</strong> Upload verification documents to confirm your identity and eligibility.
                  </p>
                </div>

                <div className="space-y-4">
                  {competitionType === 'solo' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Personal ID/Passport <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <input
                          ref={verificationInputRef}
                          type="file"
                          onChange={handleVerificationUpload}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        {personalId ? (
                          <div className="flex items-center justify-center gap-3">
                            <File className="w-6 h-6 text-green-600" />
                            <span className="text-sm font-medium text-green-700">{personalId.name}</span>
                            <button
                              onClick={() => setPersonalId(null)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => verificationInputRef.current?.click()}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                          >
                            Click to upload Personal ID
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {competitionType === 'team' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Collaboration Agreement <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <input
                          ref={verificationInputRef}
                          type="file"
                          onChange={handleVerificationUpload}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        {teamAgreement ? (
                          <div className="flex items-center justify-center gap-3">
                            <File className="w-6 h-6 text-green-600" />
                            <span className="text-sm font-medium text-green-700">{teamAgreement.name}</span>
                            <button
                              onClick={() => setTeamAgreement(null)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => verificationInputRef.current?.click()}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                          >
                            Click to upload Team Agreement
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Signed agreement between all team members regarding collaboration and prize sharing
                      </p>
                    </div>
                  )}

                  {competitionType === 'company' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company License/Registration <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <input
                          ref={verificationInputRef}
                          type="file"
                          onChange={handleVerificationUpload}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        {companyLicense ? (
                          <div className="flex items-center justify-center gap-3">
                            <File className="w-6 h-6 text-green-600" />
                            <span className="text-sm font-medium text-green-700">{companyLicense.name}</span>
                            <button
                              onClick={() => setCompanyLicense(null)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => verificationInputRef.current?.click()}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                          >
                            Click to upload Company License
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Valid business license or company registration certificate
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Portfolio Links */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Portfolio & Experience</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Links (Optional)</label>
                  <div className="space-y-3">
                    {portfolioLinks.map((link, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="url"
                          value={link}
                          onChange={(e) => updatePortfolioLink(index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="https://your-portfolio.com"
                        />
                        {portfolioLinks.length > 1 && (
                          <button
                            onClick={() => removePortfolioLink(index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addPortfolioLink}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Another Link
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Experience</label>
                    <textarea
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your background and experience in this field..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inspiration</label>
                    <textarea
                      value={inspiration}
                      onChange={(e) => setInspiration(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="What inspired this submission? Share your creative process..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentStep(3)}
                disabled={!canProceedToNext()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Upload Files
              </button>
            </div>
          </div>
        )}

        {/* Step 3: File Upload */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Submissions</h2>
            <p className="text-gray-600 mb-8">
              Upload {competition.minSubmissions}-{competition.maxSubmissions} files for your competition entry.
            </p>

            {/* Upload Area */}
            <div
              ref={dropZoneRef}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                dragActive 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drop files here or click to upload</h3>
              <p className="text-gray-600 mb-4">
                Accepted formats: {competition.submissionFormat.join(', ')}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Maximum file size: 50MB per file
              </p>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Choose Files
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={competition.submissionFormat.map(format => `.${format.toLowerCase()}`).join(',')}
                onChange={handleFileInput}
                className="hidden"
              />
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Uploaded Files ({uploadedFiles.length}/{competition.maxSubmissions})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {file.preview ? (
                            <img 
                              src={file.preview} 
                              alt={file.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                              {getFileIcon(file.type)}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">{file.name}</div>
                            <div className="text-sm text-gray-500">{formatFileSize(file.size)}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {file.preview && (
                        <button
                          onClick={() => window.open(file.preview, '_blank')}
                          className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {uploadedFiles.length < competition.maxSubmissions && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      You can upload {competition.maxSubmissions - uploadedFiles.length} more file(s).
                      Minimum required: {competition.minSubmissions} files.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentStep(4)}
                disabled={!canProceedToNext()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Review Submission
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Submission</h2>
            <p className="text-gray-600 mb-8">Please review all details before submitting your entry.</p>

            <div className="space-y-8">
              {/* Competition Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Competition: {competition.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Category</span>
                    <div className="font-semibold">{competition.category}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Entry Type</span>
                    <div className="font-semibold capitalize">{competitionType}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Entry Fee</span>
                    <div className="font-semibold">AED {competition.entryFee}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Prize Value</span>
                    <div className="font-semibold">AED {competition.prizeValue.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Submission Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Submission</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Title</span>
                    <div className="text-lg font-semibold text-gray-900">{submissionTitle}</div>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Description</span>
                    <div className="text-gray-700 leading-relaxed">{submissionDescription}</div>
                  </div>
                  {tags.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-500">Tags</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Type-specific Review */}
              {competitionType === 'team' && teamMembers.some(m => m.name) && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Team Members</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      {teamMembers.filter(m => m.name).map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <div className="font-semibold text-gray-900">{member.name}</div>
                            <div className="text-sm text-gray-600">{member.role}</div>
                          </div>
                          <div className="text-sm text-gray-500">{member.email}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {competitionType === 'company' && companyName && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-500">Company Name</span>
                        <div className="font-semibold text-gray-900">{companyName}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Registration Number</span>
                        <div className="font-semibold text-gray-900">{companyRegistration}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Contact Person</span>
                        <div className="font-semibold text-gray-900">{contactPerson}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Contact Email</span>
                        <div className="font-semibold text-gray-900">{contactEmail}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Files Summary */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Uploaded Files ({uploadedFiles.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      {file.preview ? (
                        <img 
                          src={file.preview} 
                          alt={file.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          {getFileIcon(file.type)}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 truncate">{file.name}</div>
                        <div className="text-sm text-gray-500">{formatFileSize(file.size)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Documents Summary */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Documents</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="space-y-2">
                    {competitionType === 'solo' && personalId && (
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Personal ID: {personalId.name}</span>
                      </div>
                    )}
                    {competitionType === 'team' && teamAgreement && (
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Team Agreement: {teamAgreement.name}</span>
                      </div>
                    )}
                    {competitionType === 'company' && companyLicense && (
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Company License: {companyLicense.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    <span className="font-medium">I agree to the terms and conditions</span>
                    <div className="mt-1 text-xs text-gray-600">
                      • I confirm that all submitted work is original and created by me/my team/my company
                      • I grant Hashtags Competitions the right to display my submission for judging and promotional purposes
                      • I understand that the judges' decision is final
                      • I agree to the competition rules and guidelines
                      • All verification documents provided are authentic and valid
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!canProceedToNext()}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Submit Entry - AED {competition.entryFee}
              </button>
            </div>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hashtags Competitions</h3>
                  <p className="text-xs text-gray-400">Submit Your Entry</p>
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