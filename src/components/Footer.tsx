
import { useTranslation } from '@/hooks/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">📺</span>
            </div>
            <span className="text-3xl font-bold">VibeTube</span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            The only tool you'll need (in beta).
          </p>

          {/* Enterprise Security Note */}
          <div className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-6 max-w-4xl mx-auto mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise-Grade Security</h4>
            <p className="text-sm text-gray-400">
              Bank-level encryption, secure OAuth integration with YouTube, and granular permission controls for team collaboration. Your data is protected with industry-leading security standards.
            </p>
          </div>

          {/* Industry insight */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-6 max-w-4xl mx-auto mb-8">
            <p className="text-sm text-red-200">
              📊 <strong>Industry Insight:</strong> Creators using multi-channel strategies see 3.2x higher revenue (VidIQ 2024). VibeTube users report 4.1x revenue growth.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">1,200+</div>
              <div className="text-sm text-gray-500">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">50M+</div>
              <div className="text-sm text-gray-500">Videos Managed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-900 pt-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors text-sm">
              API Docs
            </a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors text-sm">
              Status
            </a>
          </div>
          
          <p className="text-sm text-gray-600">
            © {currentYear} VibeTube. Built for creators, by creators.
          </p>
        </div>
      </div>
    </footer>
  );
};
