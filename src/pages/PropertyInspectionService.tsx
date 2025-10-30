import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Star,
  Home,
  Search,
  Shield,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  FileText,
  Camera,
  AlertTriangle,
  CheckSquare,
  Building,
  Zap,
  ChevronRight,
  X,
  Send,
  Bot,
  ExternalLink,
} from 'lucide-react';
import { Footer } from '@/components/Footer';

const PropertyInspectionService = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message:
        "👋 Hello! I'm your SnagWise AI assistant. I can help you with:\n\n• Choosing the right survey\n• Understanding snagging issues\n• Booking your inspection\n• Answering warranty questions\n\nWhat would you like to know?",
      time: 'Just now',
    },
  ]);
  const [chatInput, setChatInput] = useState('');

  const services = [
    {
      icon: Search,
      title: 'Pre-Completion Inspection',
      description:
        'Enjoy a worry-free move with our Pre-Completion Inspection. We check against NHQB standards before you move in.',
      features: [
        'Report issued within 2 days',
        'Issues flagged for quick resolution',
        'Checked before completion',
        'NHQB standards compliance',
      ],
      price: 'From £299',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: FileText,
      title: 'Snagging Survey',
      description:
        "Our flagship survey for homes you've just moved into. Thorough checks according to warranty tolerances and Building Regulations.",
      features: [
        'Report issued within 3 days',
        'NHBC warranty tolerances',
        'Building Regulations check',
        'Perfect for 0-9 months old homes',
      ],
      price: 'From £349',
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: Shield,
      title: 'Fundamentals Survey',
      description:
        'Identifies important underlying issues before warranty expiry. Essential checks for homes approaching the end of their warranty period.',
      features: [
        'Report issued within 3 days',
        'Pre-warranty expiry check',
        'Essential underlying issues',
        'Best for 10+ months old homes',
      ],
      price: 'From £399',
      color: 'bg-orange-50 border-orange-200',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Qualified Surveyors',
      description:
        "Members of RICS, RPSA, and CIOB. We're actual surveyors, not just ex-trades.",
    },
    {
      icon: Bot,
      title: 'AI-Powered Support',
      description:
        'Get instant answers 24/7 with our AI assistant. Book surveys, ask questions, get advice.',
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description:
        'Voted Best Snagging Company 2025 and Most Trusted 2023-2024.',
    },
    {
      icon: Building,
      title: 'RICS Regulated',
      description:
        'The only snagging company regulated by the Royal Institution of Chartered Surveyors.',
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description:
        'Detailed reports with photos, measurements, and warranty tolerance references.',
    },
    {
      icon: CheckSquare,
      title: '30,000+ Inspections',
      description:
        'Trusted by homeowners and developers nationwide since 2016.',
    },
  ];

  const trustStats = [
    { number: '30,000+', label: 'Homes Inspected' },
    { number: 'RICS', label: 'Regulated' },
    { number: '⭐⭐⭐⭐⭐', label: '5-Star Service' },
    { number: '2025', label: 'Best Snagging Company' },
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: chatInput,
      time: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Great question! The right survey depends on your timeline:\n\n**Pre-Completion Inspection** (£299+) - Before you move in\n**Snagging Survey** (£349+) - Moved in 0-9 months ago\n**Fundamentals Survey** (£399+) - Moved in 10+ months ago\n\nWhich one matches your situation?',
        'Snagging refers to identifying defects or issues in a new-build property. Common snags include:\n\n• Poor paintwork or plastering\n• Incorrectly fitted doors/windows\n• Plumbing or electrical issues\n• Structural problems\n\nOur qualified surveyors find issues that matter, not just cosmetic defects. Would you like to book an inspection?',
        'Our survey prices start from:\n\n🔍 **Pre-Completion:** From £299\n📋 **Snagging Survey:** From £349\n🛡️ **Fundamentals:** From £399\n\nFinal price depends on property size and location. We also offer additional services like thermal imaging and borescope checks at discounted rates!\n\nReady to get a precise quote?',
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: randomResponse,
        time: 'Just now',
      };

      setChatMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Back to Intelliwave Banner */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-sm text-gray-600 hover:text-[#042C33] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Intelliwave
            </button>
          </div>
        </div>
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#042C33] rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-[#042C33]">
                  SnagWise
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-[#042C33] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#042C33] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-[#042C33] transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-[#042C33] transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#042C33] transition-colors"
                >
                  Contact
                </a>
              </nav>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Book Now
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#042C33] to-teal-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              UK's No.1 Snagging Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Quality surveys by qualified surveyors. Now with AI-powered
              assistance to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
                onClick={() => setIsChatOpen(true)}
              >
                Get Instant Help 🤖
              </Button>
              <Button
                size="lg"
                className="bg-white text-[#042C33] hover:bg-gray-100 text-lg px-8 py-4"
              >
                Book Survey
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-gray-50 py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-[#042C33] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Survey
              </h2>
              <p className="text-xl text-gray-600">
                Select the perfect inspection based on your timeline
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`${service.color} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-[#042C33] rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#042C33] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-3xl font-bold text-[#042C33] mb-6">
                      {service.price}
                    </div>
                    <Button className="w-full bg-[#042C33] hover:bg-[#042C33]/90 text-white py-3">
                      Book This Survey
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose SnagWise?
              </h2>
              <p className="text-xl text-gray-600">
                The only RICS-regulated snagging company with qualified
                surveyors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center p-8 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-[#042C33] rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#042C33] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#042C33] to-teal-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Book your professional snagging survey today and ensure your new
              build is perfect
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
            >
              Book Your Survey Now
            </Button>
          </div>
        </section>

        {/* AI Chat Widget */}
        {isChatOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-[#042C33] to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#042C33]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">SnagWise AI Assistant</h3>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-[#042C33] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.message}</p>
                      <p className="text-xs opacity-70 mt-2">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#042C33] focus:border-transparent"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-[#042C33] hover:bg-[#042C33]/90 text-white rounded-full w-12 h-12 p-0"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#042C33] to-teal-600 hover:from-[#042C33]/90 hover:to-teal-600/90 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyInspectionService;
