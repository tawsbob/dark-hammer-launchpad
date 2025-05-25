
import { Card } from '@/components/ui/card';
import { Sparkles, Zap } from 'lucide-react';

export const ComingSoonSection = () => {
  const upcomingFeatures = [
    {
      version: 'V2',
      title: 'Creator AI Forge',
      description: 'Ideas, viral titles and studio-grade voice-over in seconds.',
      icon: Sparkles,
      status: 'coming-soon',
      eta: 'Q2 2024'
    },
    {
      version: 'V3',
      title: 'AutoPilot Publishing',
      description: 'Zero-click faceless videos rendered and posted while you sleep.',
      icon: Zap,
      status: 'coming-soon',
      eta: 'Q3 2024'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-green-800 dark:text-green-200 mb-4">
            The Future of Creator Tools
          </h2>
          <p className="text-title-large text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We're just getting started. Here's what's coming to revolutionize your creator journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stepper visualization */}
          <div className="relative">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                {/* Step indicator */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mb-2 opacity-60">
                    <feature.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  {index < upcomingFeatures.length - 1 && (
                    <div className="w-px h-20 bg-gray-300 dark:bg-gray-600 opacity-60"></div>
                  )}
                </div>

                {/* Feature card */}
                <Card className="flex-1 p-6 surface-container border-0 rounded-2xl opacity-75">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-green-600 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                        {feature.version}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature.eta}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </div>
                  
                  <h3 className="text-title-large font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-medium text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-body-medium text-gray-600 dark:text-gray-400 mb-4">
              Want to influence our roadmap?
            </p>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Early access members get priority feature requests
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
