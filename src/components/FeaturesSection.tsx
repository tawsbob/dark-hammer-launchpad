
import { Card } from '@/components/ui/card';
import { LayoutDashboard, Upload, MessageSquare } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: LayoutDashboard,
      title: t('multiChannelCockpit'),
      description: t('multiChannelDesc'),
      benefit: t('multiChannelBenefit')
    },
    {
      icon: Upload,
      title: t('dragDropUpload'),
      description: t('dragDropDesc'),
      benefit: t('dragDropBenefit')
    },
    {
      icon: MessageSquare,
      title: t('commentInbox'),
      description: t('commentDesc'),
      benefit: t('commentBenefit')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-white mb-4">
            {t('whatV1Ships')}
          </h2>
          <p className="text-title-large text-gray-300 max-w-2xl mx-auto">
            {t('whatV1Subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 surface-container-high border-0 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="mb-6">
                <div className="w-16 h-16 premium-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform tech-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-title-large font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-medium text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-red-900/30 border border-red-700/50 rounded-full">
                  <span className="text-sm font-medium text-red-300">
                    ⚡ {feature.benefit}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
