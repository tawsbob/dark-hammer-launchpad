import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LeadDialog } from './LeadDialog';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Users, DollarSign, Clock, Eye, UserPlus, Play, ChevronLeft, ChevronRight, TrendingUp, BarChart3, Target } from 'lucide-react';

export const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Animated counters for metrics
  const [metrics, setMetrics] = useState({
    channels: 1247,
    hoursSaved: 8456,
    revenue: 2847392,
    creators: 892
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        channels: prev.channels + Math.floor(Math.random() * 3),
        hoursSaved: prev.hoursSaved + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 1000),
        creators: prev.creators + Math.floor(Math.random() * 2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced channel data with realistic faceless brand names
  const channelPreviews = [
    {
      id: 0,
      name: "Unified Dashboard",
      type: "summary",
      totalSubscribers: "4.1M",
      totalViews: "14.1M",
      totalWatchTime: "6,257",
      totalRevenue: "$65.2K",
      channels: 4,
      avatar: "📊",
      color: "bg-gradient-to-br from-red-600 to-red-700"
    },
    {
      id: 1,
      name: "MysteryTech Reviews",
      subscribers: "847K",
      views: "2.4M",
      watchTime: "1,247",
      revenue: "$12.4K",
      trend: "+12%",
      avatar: "MT",
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "GhostGaming Central",
      subscribers: "1.2M",
      views: "5.8M",
      watchTime: "2,156",
      revenue: "$18.7K",
      trend: "+8%",
      avatar: "GG",
      color: "bg-purple-600"
    },
    {
      id: 3,
      name: "SilentFinance Tips",
      subscribers: "634K",
      views: "1.9M",
      watchTime: "987",
      revenue: "$9.2K",
      trend: "+15%",
      avatar: "SF",
      color: "bg-green-600"
    },
    {
      id: 4,
      name: "HiddenHealth Hacks",
      subscribers: "923K",
      views: "3.2M",
      watchTime: "1,543",
      revenue: "$14.1K",
      trend: "+6%",
      avatar: "HH",
      color: "bg-orange-600"
    },
    {
      id: 5,
      name: "UndercoverDIY",
      subscribers: "756K",
      views: "2.7M",
      watchTime: "1,324",
      revenue: "$11.8K",
      trend: "+9%",
      avatar: "UD",
      color: "bg-pink-600"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % channelPreviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, channelPreviews.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + channelPreviews.length) % channelPreviews.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % channelPreviews.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [channelPreviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % channelPreviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + channelPreviews.length) % channelPreviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSummaryView = () => (
    <div className="space-y-4">
      {/* Summary Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">📊</span>
        </div>
        <div>
          <h4 className="text-white font-semibold">Unified Dashboard</h4>
          <p className="text-gray-400 text-sm">All 4 channels combined</p>
        </div>
        <div className="ml-auto">
          <span className="text-green-400 text-sm font-medium">+11% overall</span>
        </div>
      </div>

      {/* Combined Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Total Views */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400 text-sm">Total Views</span>
          </div>
          <div className="text-xl font-bold text-white">14.1M</div>
          <div className="text-xs text-blue-400">+12% this month</div>
        </div>

        {/* Total Revenue */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-gray-400 text-sm">Total Revenue</span>
          </div>
          <div className="text-xl font-bold text-white">$65.2K</div>
          <div className="text-xs text-green-400">+15% this month</div>
        </div>

        {/* Total Watch Time */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Play className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Total Watch Time</span>
          </div>
          <div className="text-xl font-bold text-white">6,257h</div>
          <div className="text-xs text-purple-400">+8% avg</div>
        </div>

        {/* Total Subscribers */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <UserPlus className="w-4 h-4 text-red-400" />
            <span className="text-gray-400 text-sm">Total Subscribers</span>
          </div>
          <div className="text-xl font-bold text-white">4.1M</div>
          <div className="text-xs text-red-400">+9% growth</div>
        </div>
      </div>

      {/* Channels Overview */}
      <div className="mt-4 p-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-400 text-sm font-medium">Network Performance</span>
          <span className="text-white font-bold">Excellent ⭐</span>
        </div>
        <div className="text-xs text-gray-400">Managing 4 active channels</div>
      </div>
    </div>
  );

  const renderChannelView = (channel: any) => (
    <div className="space-y-4">
      {/* Channel Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-12 h-12 ${channel.color} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">{channel.avatar}</span>
        </div>
        <div>
          <h4 className="text-white font-semibold">{channel.name}</h4>
          <p className="text-gray-400 text-sm">{channel.subscribers} subscribers</p>
        </div>
        <div className="ml-auto">
          <span className="text-green-400 text-sm font-medium">{channel.trend}</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Views */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400 text-sm">Views</span>
          </div>
          <div className="text-xl font-bold text-white">{channel.views}</div>
          <div className="text-xs text-green-400">+{Math.floor(Math.random() * 20)}% this week</div>
        </div>

        {/* Revenue */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-gray-400 text-sm">Revenue</span>
          </div>
          <div className="text-xl font-bold text-white">{channel.revenue}</div>
          <div className="text-xs text-green-400">+{Math.floor(Math.random() * 15)}% this month</div>
        </div>

        {/* Watch Time */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Play className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Watch Time</span>
          </div>
          <div className="text-xl font-bold text-white">{channel.watchTime}h</div>
          <div className="text-xs text-purple-400">+{Math.floor(Math.random() * 10)}% avg</div>
        </div>

        {/* Subscribers */}
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <UserPlus className="w-4 h-4 text-red-400" />
            <span className="text-gray-400 text-sm">Subscribers</span>
          </div>
          <div className="text-xl font-bold text-white">{channel.subscribers}</div>
          <div className="text-xs text-red-400">+{Math.floor(Math.random() * 8)}% growth</div>
        </div>
      </div>

      {/* Performance Indicator */}
      <div className="mt-4 p-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-red-400 text-sm font-medium">Channel Performance</span>
          <span className="text-white font-bold">Excellent ⭐</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Sticky Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-400 uppercase tracking-wide">{t('building')}</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-xs text-red-400 font-medium">60%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-red-900/20">
        <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">📺</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white">VibeTube</span>
            <div className="hidden md:flex items-center space-x-1 ml-4 lg:ml-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-400">Live Beta</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 lg:space-x-6">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Features</a>
              <a href="#stats" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Roadmap</a>
              <a href="#waitlist" onClick={() => setIsDialogOpen(true)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm lg:text-base">Access</a>
            </nav>
            <LanguageSelector />
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-red-600/25 text-sm lg:text-base"
            >
              {t('getNotified')}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content - Full Screen */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden pt-32 pb-12" id="waitlist">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(239,68,68,0.05)_50%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-4 lg:px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-7xl mx-auto w-full">
            {/* Centered Main Headlines */}
            <div className="text-center mb-12">
              {/* Beta Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full mb-6">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium uppercase tracking-wide">{t('privateBeta')}</span>
              </div>

              {/* Main Headline - Reduced sizes */}
              <div className="space-y-3 mb-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  <span className="block mb-2">{t('heroTitle')}</span>
                  <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {t('heroTitleAccent')}
                  </span>
                </h1>
                
                <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </div>

              {/* CTA Button - Centered and moved up */}
              <div className="mb-8 flex justify-center">
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-red-600/25 flex items-center justify-center space-x-2"
                >
                  <span>{t('joinWhitelistNow')}</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </Button>
              </div>
              <p className="text-gray-400 text-sm lg:text-base mb-8">
                {t('exclusiveEarlyAccess')}
              </p>
            </div>

            {/* Two Column Layout - Metrics Left, Dashboard Right */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8">
              {/* Left Side - Metrics (3 cards) */}
              <div className="w-full lg:w-5/12 space-y-6">
                {/* Performance Stats - 3 cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 lg:p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-red-500" />
                      <span className="text-red-400 text-sm font-medium">{t('futureGoal')}</span>
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-white">
                      {t('poweringThousands')} 
                      <span className="block text-xs lg:text-sm text-yellow-400 mt-1">{t('projected')}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 lg:p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-400 text-sm font-medium">{t('ourAim')}</span>
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-white">
                      {t('saveFullDay')} 
                      <span className="block text-xs lg:text-sm text-yellow-400 mt-1">{t('projected')}</span>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 lg:p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      <span className="text-blue-400 text-sm font-medium">{t('vision')}</span>
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-white">
                      {t('universalControlHub')}
                      <span className="block text-xs lg:text-sm text-yellow-400 mt-1">{t('projected')}</span>
                    </div>
                  </div>
                </div>

                {/* Three Badges - Moved below left cards */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">🔴</span>
                    <span className="text-xs lg:text-sm text-gray-400">{t('youtubeCertified')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">⚡</span>
                    <span className="text-xs lg:text-sm text-gray-400">{t('creatorFocused')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">🚀</span>
                    <span className="text-xs lg:text-sm text-gray-400">{t('builtForScale')}</span>
                  </div>
                </div>

                {/* Projected Values Disclaimer */}
                <p className="text-xs text-gray-500">
                  {t('projectedDisclaimer')}
                </p>
              </div>

              {/* Right Side - Enhanced Dashboard Preview Carousel */}
              <div className="w-full lg:w-7/12 relative">
                <div 
                  className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">{t('multiChannelDashboardPreview')}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-red-400">Live</span>
                    </div>
                  </div>

                  {/* Carousel Container */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {channelPreviews.map((channel) => (
                        <div key={channel.id} className="w-full flex-shrink-0">
                          {channel.type === 'summary' ? renderSummaryView() : renderChannelView(channel)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {channelPreviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        onKeyDown={(e) => e.key === 'Enter' && goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                          index === currentSlide ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        tabIndex={0}
                      />
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Live Updates
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Real-time Sync
                  </div>
                </div>

                {/* External Navigation Arrows */}
                {isHovering && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Previous channel"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Next channel"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Animated Mouse Icon - Repositioned below cards */}
            <div className="flex justify-center mt-16 mb-8">
              <div className="animate-bounce opacity-75">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};
