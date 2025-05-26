
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LeadDialog } from './LeadDialog';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Play, Users, DollarSign, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Building</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-xs text-green-400 font-medium">60%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-red-900/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">📺</span>
            </div>
            <span className="text-2xl font-bold text-white">VibeTube</span>
            <div className="hidden md:flex items-center space-x-1 ml-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Live Beta</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
              <a href="#waitlist" onClick={() => setIsDialogOpen(true)} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Access</a>
            </nav>
            <LanguageSelector />
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Get Notified
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content - Full Screen */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden pt-32" id="waitlist">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Copy */}
              <div className="space-y-8">
                {/* Beta Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-medium uppercase tracking-wide">Private Beta • App under construction</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Juggling Multiple YouTube Channels?<br />
                    <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                      Your Command Cockpit is Coming.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                    Stop the tab-switching chaos. VibeTube will unify your entire YouTube presence. Join the whitelist for early access.
                  </p>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-green-500" />
                      <span className="text-green-400 text-sm font-medium">Future Goal</span>
                    </div>
                    <div className="text-2xl font-bold text-white">Powering thousands <span className="text-sm text-yellow-400">Projected*</span></div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-400 text-sm font-medium">Our Aim</span>
                    </div>
                    <div className="text-2xl font-bold text-white">Save a full day weekly <span className="text-sm text-yellow-400">Projected*</span></div>
                  </div>
                </div>

                {/* Projected Values Disclaimer */}
                <p className="text-xs text-gray-500">
                  * Values based on internal pilot projections.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/25 flex items-center space-x-2"
                  >
                    <span>Join Whitelist Now!</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </Button>
                </div>

                {/* Description below CTA */}
                <p className="text-gray-400 max-w-2xl">
                  Get exclusive early access & help shape the future of YouTube channel management. Limited spots!
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-8 border-t border-gray-800">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">🔴</span>
                    <span className="text-sm text-gray-400">YouTube Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">⚡</span>
                    <span className="text-sm text-gray-400">Creator Focused</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">🚀</span>
                    <span className="text-sm text-gray-400">Built for Scale</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Dashboard Preview */}
              <div className="relative">
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Multi-Channel Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-400">Live</span>
                    </div>
                  </div>

                  {/* Mock Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Total Channels</div>
                      <div className="text-2xl font-bold text-white">{metrics.channels}</div>
                      <div className="text-xs text-green-400">+12% this week</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-white">${(metrics.revenue / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-green-400">+8% this month</div>
                    </div>
                  </div>

                  {/* Mock Channel List */}
                  <div className="space-y-3">
                    {[
                      { name: "Tech Reviews Pro", subs: "847K", revenue: "$12.4K" },
                      { name: "Gaming Central", subs: "1.2M", revenue: "$18.7K" },
                      { name: "Lifestyle Vlogs", subs: "634K", revenue: "$9.2K" }
                    ].map((channel, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-bold">{channel.name[0]}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{channel.name}</div>
                            <div className="text-xs text-gray-400">{channel.subs} subscribers</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-green-400">{channel.revenue}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Live Updates
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
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
