import { useTranslation } from '@/hooks/useTranslation';

export const SocialProofSection = () => {
  const { t } = useTranslation();
  
  const metrics = [
    { value: "1,200+*", label: t('activeCreators'), color: "text-green-400" },
    { value: "50M+*", label: t('videosManaged'), color: "text-red-400" },
    { value: "8.5hrs*", label: t('avgTimeSaved'), color: "text-yellow-400" },
    { value: "98%*", label: t('satisfactionRate'), color: "text-green-400" }
  ];

  const testimonials = [
    { text: t('testimonial1'), author: "Sarah Chen", role: "Tech YouTuber", avatar: "SC" },
    { text: t('testimonial2'), author: "Marcus Silva", role: "Gaming Creator", avatar: "MS" },
    { text: t('testimonial3'), author: "Elena Rodriguez", role: "Lifestyle Vlogger", avatar: "ER" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950" id="stats">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-900/20 border border-red-600/30 rounded-full mb-6">
            <span className="text-red-300 text-sm font-medium">{t('provenResults')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('realNumbers')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('realNumbersSubtitle')}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-20">
          <p className="text-xs text-gray-500">
            {t('projectedValues')}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-red-600/30 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{testimonial.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beta Access CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-600/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">{t('betaAccessCTA')}</h3>
            <p className="text-gray-300 mb-6">{t('betaAccessDescription')}</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">{t('spotsRemaining')}: 47</span>
              </div>
              <div className="text-gray-500">•</div>
              <div className="text-gray-400 text-sm">{t('nextBatch')}: March 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
