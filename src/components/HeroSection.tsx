
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LeadDialog } from './LeadDialog';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

export const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Top App Bar */}
      <header className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center tech-glow">
            <span className="text-white font-bold text-lg">🔨</span>
          </div>
          <span className="text-title-large font-bold text-white">Dark Hammer</span>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="premium-gradient hover:opacity-90 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 tech-glow"
          >
            {t('joinWaitlist')}
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="elevation-8 p-8 md:p-12 surface-container border-0 rounded-3xl">
            <h1 className="text-display-medium md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('heroTitle')}<br />
              <span className="text-red-500 tech-glow">{t('heroTitleAccent')}</span>
            </h1>
            
            <p className="text-title-large text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <Button 
              onClick={() => setIsDialogOpen(true)}
              size="lg"
              className="premium-gradient hover:opacity-90 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 tech-glow mb-8"
            >
              {t('getEarlyAccess')}
            </Button>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm text-gray-400 flex items-center space-x-2">
                <span>🔴</span>
                <span>{t('youtubeCertified')}</span>
              </div>
              <div className="text-sm text-gray-400 flex items-center space-x-2">
                <span>⚡</span>
                <span>{t('creatorFocused')}</span>
              </div>
              <div className="text-sm text-gray-400 flex items-center space-x-2">
                <span>🚀</span>
                <span>{t('builtForScale')}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <LeadDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
