
import { Card } from '@/components/ui/card';
import { LayoutDashboard, Upload, MessageSquare, BarChart3, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: LayoutDashboard,
      title: t('multiChannelMissionControl'),
      description: t('multiChannelDesc'),
      benefit: t('save3Hours'),
      color: "text-red-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600/30"
    },
    {
      icon: Upload,
      title: t('dragDropUpload'),
      description: t('dragDropDesc'),
      benefit: t('neverMissDeadline'),
      color: "text-green-500",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-600/30"
    },
    {
      icon: MessageSquare,
      title: t('commentInbox'),
      description: t('commentDesc'),
      benefit: t('respond5xFaster'),
      color: "text-yellow-500",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-600/30"
    },
    {
      icon: BarChart3,
      title: t('analyticsHub'),
      description: t('analyticsDesc'),
      benefit: t('dataDecisionsFaster'),
      color: "text-red-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600/30"
    }
  ];

  const etapas = [
    {
      number: 1,
      title: "MultiChannel Cockpit",
      description: t('etapa1Desc'),
      status: "current",
      color: "bg-red-500"
    },
    {
      number: 2,
      title: "AI Creative Tools",
      description: t('etapa2Desc'),
      status: "coming-soon",
      color: "bg-blue-600"
    },
    {
      number: 3,
      title: "AutoPilot",
      description: t('etapa3Desc'),
      status: "future",
      color: "bg-gray-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-black via-gray-950 to-black" id="features">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-900/20 border border-red-600/30 rounded-full mb-6">
            <span className="text-red-300 text-sm font-medium">{t('exclusiveFirstLook')}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            {t('whatVibeTubeOffers')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('stopWaitingPerfection')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 lg:p-8 hover:border-red-600/30 transition-all duration-300 group cursor-pointer hover:scale-105">
              <div className="mb-6">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 ${feature.bgColor} ${feature.borderColor} border rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
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

        {/* Roadmap / Etapas */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t('developmentEtapas')}</h3>
            <p className="text-gray-400 text-base lg:text-lg">{t('trackProgress')}</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {etapas.map((etapa, index) => (
                <div key={index} className="text-center relative">
                  {/* Coming Soon Badge */}
                  {etapa.status === 'coming-soon' && (
                    <div className="absolute -top-4 lg:-top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 lg:px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        {t('comingSoon')}
                      </span>
                    </div>
                  )}
                  
                  <div className={`${etapa.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg ${etapa.status === 'current' ? 'animate-pulse' : ''}`}>
                    <span className="text-white font-bold text-lg lg:text-xl">{etapa.number}</span>
                  </div>
                  
                  <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">{t('etapa')} {etapa.number}: {etapa.title}</h4>
                  <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed px-2">{etapa.description}</p>
                  
                  <div className="mt-4">
                    {etapa.status === 'current' && (
                      <span className="inline-block bg-red-900/20 border border-red-600/30 text-red-400 px-3 py-1 rounded-full text-xs font-medium">
                        {t('inDevelopment')}
                      </span>
                    )}
                    {etapa.status === 'coming-soon' && (
                      <span className="inline-block bg-blue-900/20 border border-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        {t('comingSoon')}
                      </span>
                    )}
                    {etapa.status === 'future' && (
                      <span className="inline-block bg-gray-800 border border-gray-600 text-gray-400 px-3 py-1 rounded-full text-xs">
                        {t('future')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Connection lines between etapas */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-blue-500 to-gray-500 opacity-30 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Internal Target Metrics */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{t('ourGoalExperience')}</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">{t('betaTestsAim')}</p>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-2">{t('lightningFast')}</div>
                <div className="text-gray-400 text-xs lg:text-sm">{t('getDataSeconds')}</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">{t('simplified')}</div>
                <div className="text-gray-400 text-xs lg:text-sm">{t('fewerClicks')}</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-400 text-xs lg:text-sm">{t('alwaysOnInsights')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
