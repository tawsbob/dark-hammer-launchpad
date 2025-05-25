
import { useTranslation } from '@/hooks/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center tech-glow">
              <span className="text-white font-bold text-xl">🔨</span>
            </div>
            <span className="text-title-large font-bold">Dark Hammer</span>
          </div>
          
          <p className="text-body-medium text-gray-400 max-w-md mx-auto mb-8">
            {t('footerTagline')}
          </p>

          {/* Conversion benchmark */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-sm text-red-200">
              📊 <strong>{t('industryInsight')}</strong> {t('conversionData')}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              {t('termsOfService')}
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Twitter
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
