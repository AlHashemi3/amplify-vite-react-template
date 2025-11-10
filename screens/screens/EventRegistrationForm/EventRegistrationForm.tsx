import React, { useState, useRef } from 'react';
import { ArrowLeft, Sparkles, Bell, ShoppingCart, User, Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Upload, X, Check, ChevronDown } from 'lucide-react';

interface EventRegistrationFormProps {
  onBack?: () => void;
}

interface Tag {
  id: number;
  text: string;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [locationType, setLocationType] = useState('Physical');
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const tagIdCounter = useRef(0);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.some(tag => tag.text.toLowerCase() === tagInput.toLowerCase())) {
      setTags([...tags, { id: tagIdCounter.current++, text: tagInput.trim() }]);
      setTagInput('');
    }
  };

  const removeTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const validateSection = (sectionIndex: number): boolean => {
    // Basic validation logic - in real app, this would be more comprehensive
    const form = document.getElementById('registrationForm') as HTMLFormElement;
    if (!form) return false;

    const sectionElement = form.querySelector(`[data-section="${sectionIndex}"]`);
    if (!sectionElement) return false;

    const requiredInputs = sectionElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    requiredInputs.forEach((input: any) => {
      if ((input.type === 'checkbox' && !input.checked) || !input.value.trim()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const toggleSection = (sectionIndex: number) => {
    if (activeSection === sectionIndex) {
      // Closing section - validate it
      if (validateSection(sectionIndex)) {
        if (!completedSections.includes(sectionIndex)) {
          setCompletedSections([...completedSections, sectionIndex]);
        }
      } else {
        setCompletedSections(completedSections.filter(s => s !== sectionIndex));
      }
      setActiveSection(-1);
    } else {
      setActiveSection(sectionIndex);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all sections
    let allValid = true;
    for (let i = 0; i < 3; i++) {
      if (!validateSection(i)) {
        allValid = false;
        break;
      }
    }

    if (allValid) {
      setMessage({ text: 'Event Registration Submitted Successfully!', type: 'success' });
      // In real app, submit form data to backend
    } else {
      setMessage({ text: 'Please fill out all required fields marked with an asterisk (*).', type: 'error' });
    }
  };

  const clearForm = () => {
    const form = document.getElementById('registrationForm') as HTMLFormElement;
    if (form) {
      form.reset();
    }
    setTags([]);
    setTagInput('');
    setFileName('');
    setMessage(null);
    setCompletedSections([]);
    setActiveSection(0);
    setLocationType('Physical');
  };

  const sections = [
    {
      title: '1. Basic Event Information',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-section="0">
          <div className="md:col-span-2">
            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
              Event Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="eventTitle"
              name="eventTitle"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Annual Tech Conference 2025"
            />
          </div>
          
          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
              Event Type <span className="text-red-500">*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select event type</option>
              <option>Conference</option>
              <option>Festival</option>
              <option>Fashion Show</option>
              <option>Exhibition</option>
              <option>Seminar</option>
              <option>Workshop</option>
              <option>Concert</option>
              <option>Sports Event</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="industryCategory" className="block text-sm font-medium text-gray-700">
              Industry Category <span className="text-red-500">*</span>
            </label>
            <select
              id="industryCategory"
              name="industryCategory"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select industry</option>
              <option>Arts</option>
              <option>Technology</option>
              <option>Health</option>
              <option>Sports</option>
              <option>Education</option>
              <option>Business</option>
              <option>Entertainment</option>
              <option>Food & Beverage</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="eventPurpose" className="block text-sm font-medium text-gray-700">
              Event Purpose <span className="text-red-500">*</span>
            </label>
            <textarea
              id="eventPurpose"
              name="eventPurpose"
              rows={3}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Briefly describe the purpose and goals of your event."
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Target Audience</label>
            <div className="mt-1 p-2.5 flex flex-wrap items-center w-full rounded-lg border border-gray-300 shadow-sm bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              {tags.map((tag) => (
                <span key={tag.id} className="inline-flex items-center bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                  {tag.text}
                  <button
                    type="button"
                    onClick={() => removeTag(tag.id)}
                    className="ml-2 text-gray-500 hover:text-gray-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="flex-grow border-none focus:ring-0 p-0 text-sm"
                placeholder="Type an audience and press Enter..."
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">e.g., Professionals, Students, Families, VIPs</p>
          </div>
          
          <div>
            <label htmlFor="expectedAttendees" className="block text-sm font-medium text-gray-700">
              Expected Number of Attendees <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="expectedAttendees"
              name="expectedAttendees"
              required
              min="1"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
              Language(s) Used <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="languages"
              name="languages"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., English, Spanish"
            />
          </div>
        </div>
      )
    },
    {
      title: '2. Date, Time & Location',
      content: (
        <div data-section="1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                End Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Event Location Type</label>
              <div className="mt-2 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="physicalLocation"
                    name="locationType"
                    value="Physical"
                    checked={locationType === 'Physical'}
                    onChange={(e) => setLocationType(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="physicalLocation" className="ml-2 block text-sm text-gray-900">
                    Physical Venue
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="virtualLocation"
                    name="locationType"
                    value="Virtual"
                    checked={locationType === 'Virtual'}
                    onChange={(e) => setLocationType(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="virtualLocation" className="ml-2 block text-sm text-gray-900">
                    Virtual Event
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="hybridLocation"
                    name="locationType"
                    value="Hybrid"
                    checked={locationType === 'Hybrid'}
                    onChange={(e) => setLocationType(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="hybridLocation" className="ml-2 block text-sm text-gray-900">
                    Hybrid (Both)
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {(locationType === 'Physical' || locationType === 'Hybrid') && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
              <div className="md:col-span-2">
                <label htmlFor="venueName" className="block text-sm font-medium text-gray-700">
                  Venue Name
                </label>
                <input
                  type="text"
                  id="venueName"
                  name="venueName"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., Grand Convention Center"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="venueAddress" className="block text-sm font-medium text-gray-700">
                  Venue Address
                </label>
                <input
                  type="text"
                  id="venueAddress"
                  name="venueAddress"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street, City, Country"
                />
              </div>
              
              <div>
                <label htmlFor="venueCapacity" className="block text-sm font-medium text-gray-700">
                  Venue Capacity
                </label>
                <input
                  type="number"
                  id="venueCapacity"
                  name="venueCapacity"
                  min="1"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="venueContact" className="block text-sm font-medium text-gray-700">
                  Venue Contact Person
                </label>
                <input
                  type="text"
                  id="venueContact"
                  name="venueContact"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          
          {(locationType === 'Virtual' || locationType === 'Hybrid') && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
              <div>
                <label htmlFor="onlinePlatform" className="block text-sm font-medium text-gray-700">
                  Online Platform
                </label>
                <input
                  type="text"
                  id="onlinePlatform"
                  name="onlinePlatform"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., Zoom, Teams, Custom URL"
                />
              </div>
              
              <div>
                <label htmlFor="platformLink" className="block text-sm font-medium text-gray-700">
                  Platform Link/URL
                </label>
                <input
                  type="url"
                  id="platformLink"
                  name="platformLink"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      title: '3. Organizer Information',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-section="2">
          <div className="md:col-span-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company/Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
              Point of Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">
              Website or Social Links
            </label>
            <input
              type="url"
              id="companyWebsite"
              name="companyWebsite"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>
          
          <div>
            <label htmlFor="legalEntity" className="block text-sm font-medium text-gray-700">
              Legal Entity or License Number
            </label>
            <input
              type="text"
              id="legalEntity"
              name="legalEntity"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="companyLicense" className="block text-sm font-medium text-gray-700">
              Company License
            </label>
            <div className="mt-1 flex items-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload a file
              </button>
              <input
                ref={fileInputRef}
                id="companyLicense"
                name="companyLicense"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.png,.jpg,.jpeg"
              />
              {fileName && (
                <span className="ml-3 text-sm text-gray-500 truncate">{fileName}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-500">PDF, PNG, JPG up to 5MB.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Universal Event Registration</h1>
          <p className="mt-2 text-gray-600">A comprehensive form for any event, big or small.</p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form id="registrationForm" onSubmit={handleSubmit} className="space-y-4">
            {sections.map((section, index) => (
              <div key={index}>
                <div 
                  className={`accordion-header flex justify-between items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                    activeSection === index ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    {completedSections.includes(index) && (
                      <span className="text-green-500">
                        <Check className="w-6 h-6" />
                      </span>
                    )}
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                      activeSection === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <div 
                  className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                    activeSection === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 border border-t-0 rounded-b-lg">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Message Box */}
            {message && (
              <div className={`p-4 rounded-md text-sm ${
                message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                {message.text}
              </div>
            )}

            {/* Submission */}
            <div className="pt-6 border-t mt-6">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="termsAgreement"
                    name="termsAgreement"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAgreement" className="font-medium text-gray-700">
                    I certify that all information provided is accurate and agree to the terms of service. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
                <button
                  type="button"
                  onClick={clearForm}
                  className="w-full sm:w-auto bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg hover:shadow-xl"
                >
                  Submit Registration
                </button>
              </div>
            </div>
          </form>
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
                Creating unforgettable events and connecting communities across the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Event Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Music & Concerts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business & Corporate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food & Dining</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arts & Culture</a></li>
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
                  <span className="text-gray-400">info@hashtagsstudios.com</span>
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
              © 2024 Hashtags Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};