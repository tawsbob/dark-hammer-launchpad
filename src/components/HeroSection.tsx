
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LeadDialog } from './LeadDialog';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Users, DollarSign, Clock } from 'lucide-react';

export const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  
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

  return (
    <>
      {/* Sticky Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Building</span>
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
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Copy */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Beta Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-medium uppercase tracking-wide">{t('privateBeta')}</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    <span className="block mb-2">{t('heroTitle')}</span>
                    <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                      {t('heroTitleAccent')}
                    </span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {t('heroSubtitle')}
                  </p>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0">
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
                </div>

                {/* Projected Values Disclaimer */}
                <p className="text-xs text-gray-500 max-w-2xl mx-auto lg:mx-0">
                  {t('projectedDisclaimer')}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-red-600/25 flex items-center justify-center space-x-2"
                  >
                    <span>{t('joinWhitelistNow')}</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </Button>
                </div>

                {/* Description below CTA */}
                <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 text-sm lg:text-base">
                  {t('exclusiveEarlyAccess')}
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-800">
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
              </div>

              {/* Right Side - Dashboard Preview */}
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 lg:p-6 backdrop-blur-xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className="text-base lg:text-lg font-semibold text-white">{t('multiChannelDashboard')}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-red-400">Live</span>
                    </div>
                  </div>

                  {/* Mock Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                    <div className="bg-black/50 rounded-lg p-3 lg:p-4">
                      <div className="text-xs lg:text-sm text-gray-400 mb-1">{t('totalChannels')}</div>
                      <div className="text-lg lg:text-2xl font-bold text-white">{metrics.channels}</div>
                      <div className="text-xs text-red-400">+12% this week</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3 lg:p-4">
                      <div className="text-xs lg:text-sm text-gray-400 mb-1">{t('revenue')}</div>
                      <div className="text-lg lg:text-2xl font-bold text-white">${(metrics.revenue / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-red-400">+8% this month</div>
                    </div>
                  </div>

                  {/* Mock Channel List */}
                  <div className="space-y-2 lg:space-y-3">
                    {[
                      { name: "Tech Reviews Pro", subs: "847K", revenue: "$12.4K" },
                      { name: "Gaming Central", subs: "1.2M", revenue: "$18.7K" },
                      { name: "Lifestyle Vlogs", subs: "634K", revenue: "$9.2K" }
                    ].map((channel, index) => (
                      <div key={index} className="flex items-center justify-between p-2 lg:p-3 bg-black/30 rounded-lg">
                        <div className="flex items-center space-x-2 lg:space-x-3">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs lg:text-sm font-bold">{channel.name[0]}</span>
                          </div>
                          <div>
                            <div className="text-xs lg:text-sm font-medium text-white">{channel.name}</div>
                            <div className="text-xs text-gray-400">{channel.subs} subscribers</div>
                          </div>
                        </div>
                        <div className="text-xs lg:text-sm font-semibold text-red-400">{channel.revenue}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-red-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">
                  Live Updates
                </div>
                <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 bg-yellow-500 text-black px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">
                  Real-time Sync
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <LeadDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};
