import { Card } from '@/components/ui/card';
import { LayoutDashboard, Upload, MessageSquare, BarChart3 } from 'lucide-react';
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
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

        {/* Roadmap / Stepper */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('futureTitle')}</h3>
            <p className="text-gray-400">{t('futureSubtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* V1 - Current */}
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Beta V1</h4>
                <p className="text-gray-400 text-sm">{t('multiChannelCockpit')}</p>
                <div className="mt-3">
                  <span className="inline-block bg-green-900/20 border border-green-600/30 text-green-400 px-3 py-1 rounded-full text-xs">{t('live')}</span>
                </div>
              </div>

              {/* V2 - Next */}
              <div className="text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">{t('nextBatch')}</span>
                </div>
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">V2 Release</h4>
                <p className="text-gray-400 text-sm">{t('creatorAIDesc')}</p>
                <div className="mt-3">
                  <span className="inline-block bg-purple-900/20 border border-purple-600/30 text-purple-400 px-3 py-1 rounded-full text-xs">{t('comingSoon')}</span>
                </div>
              </div>

              {/* V3 - Future */}
              <div className="text-center">
                <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">V3 & Beyond</h4>
                <p className="text-gray-400 text-sm">{t('autoPilotDesc')}</p>
                <div className="mt-3">
                  <span className="inline-block bg-gray-800 border border-gray-600 text-gray-400 px-3 py-1 rounded-full text-xs">{t('comingSoon')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal Target Metrics */}
        <div className="text-center">
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
