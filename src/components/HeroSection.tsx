
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LeadDialog } from './LeadDialog';

export const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Top App Bar */}
      <header className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🔨</span>
          </div>
          <span className="text-title-large font-bold text-green-800 dark:text-green-200">Dark Hammer</span>
        </div>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Join the Waitlist
        </Button>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="elevation-8 p-8 md:p-12 surface-container border-0 rounded-3xl">
            <h1 className="text-display-medium md:text-6xl font-bold text-green-800 dark:text-green-200 mb-6 leading-tight">
              Juggle Ten YouTube Channels?<br />
              <span className="text-green-600">Nail Them with One Hammer.</span>
            </h1>
            
            <p className="text-title-large text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop drowning in browser tabs, missed uploads, and scattered analytics. 
              Dark Hammer consolidates your creator chaos into one powerful command center.
            </p>

            <Button 
              onClick={() => setIsDialogOpen(true)}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8"
            >
              Get Early Access
            </Button>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                <span>🔴</span>
                <span>YouTube Certified</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                <span>⚡</span>
                <span>Creator Focused</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                <span>🚀</span>
                <span>Built for Scale</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <LeadDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
