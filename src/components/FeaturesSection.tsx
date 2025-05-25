
import { Card } from '@/components/ui/card';
import { LayoutDashboard, Upload, MessageSquare, BarChart3, Zap, Shield } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: LayoutDashboard,
      title: t('multiChannelCockpit'),
      description: t('multiChannelDesc'),
      benefit: t('multiChannelBenefit'),
      color: "text-red-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600/30"
    },
    {
      icon: Upload,
      title: t('dragDropUpload'),
      description: t('dragDropDesc'),
      benefit: t('dragDropBenefit'),
      color: "text-green-500",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-600/30"
    },
    {
      icon: MessageSquare,
      title: t('commentInbox'),
      description: t('commentDesc'),
      benefit: t('commentBenefit'),
      color: "text-yellow-500",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-600/30"
    },
    {
      icon: BarChart3,
      title: t('analyticsHub'),
      description: t('analyticsDesc'),
      benefit: t('analyticsBenefit'),
      color: "text-red-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600/30"
    },
    {
      icon: Zap,
      title: t('automationEngine'),
      description: t('automationDesc'),
      benefit: t('automationBenefit'),
      color: "text-green-500",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-600/30"
    },
    {
      icon: Shield,
      title: t('secureSync'),
      description: t('secureDesc'),
      benefit: t('secureBenefit'),
      color: "text-yellow-500",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-600/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-900/20 border border-red-600/30 rounded-full mb-6">
            <span className="text-red-300 text-sm font-medium">{t('betaFeatures')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('whatV1Ships')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('whatV1Subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300 group cursor-pointer hover:scale-105">
              <div className="mb-6">
                <div className={`w-16 h-16 ${feature.bgColor} ${feature.borderColor} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`inline-flex items-center px-4 py-2 ${feature.bgColor} ${feature.borderColor} border rounded-full`}>
                  <span className={`text-sm font-medium ${feature.color}`}>
                    ⚡ {feature.benefit}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Performance Guarantee */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">{t('performanceGuarantee')}</h3>
            <p className="text-gray-300 mb-6">{t('performanceDescription')}</p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
                <div className="text-gray-400 text-sm">{t('fasterUploads')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
                <div className="text-gray-400 text-sm">{t('lessTimeSpent')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">{t('monitoring')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
