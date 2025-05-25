
import { Card } from '@/components/ui/card';
import { Sparkles, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const ComingSoonSection = () => {
  const { t } = useTranslation();
  
  const upcomingFeatures = [
    {
      version: 'V2',
      title: t('creatorAI'),
      description: t('creatorAIDesc'),
      icon: Sparkles,
      status: 'coming-soon',
      eta: 'Q2 2024'
    },
    {
      version: 'V3',
      title: t('autoPilot'),
      description: t('autoPilotDesc'),
      icon: Zap,
      status: 'coming-soon',
      eta: 'Q3 2024'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-950/20 via-black to-red-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-white mb-4">
            {t('futureTitle')}
          </h2>
          <p className="text-title-large text-gray-300 max-w-2xl mx-auto">
            {t('futureSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stepper visualization */}
          <div className="relative">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                {/* Step indicator */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center mb-2 opacity-60">
                    <feature.icon className="w-6 h-6 text-gray-400" />
                  </div>
                  {index < upcomingFeatures.length - 1 && (
                    <div className="w-px h-20 bg-gray-600 opacity-60"></div>
                  )}
                </div>

                {/* Feature card */}
                <Card className="flex-1 p-6 surface-container border border-gray-700 rounded-2xl opacity-75 hover:opacity-90 transition-opacity">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-red-400 bg-red-900/30 border border-red-700/50 px-3 py-1 rounded-full">
                        {feature.version}
                      </span>
                      <span className="text-sm text-gray-400">
                        {feature.eta}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {t('comingSoon')}
                    </span>
                  </div>
                  
                  <h3 className="text-title-large font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-medium text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-body-medium text-gray-400 mb-4">
              {t('influenceRoadmap')}
            </p>
            <span className="text-sm text-red-400 font-medium">
              {t('earlyAccessPriority')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
