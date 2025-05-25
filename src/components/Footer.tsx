
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔨</span>
            </div>
            <span className="text-title-large font-bold">Dark Hammer</span>
          </div>
          
          <p className="text-body-medium text-gray-400 max-w-md mx-auto mb-8">
            The only tool you need to master multi-channel YouTube success.
          </p>

          {/* Conversion benchmark */}
          <div className="bg-green-900 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-sm text-green-100">
              📊 <strong>Industry Insight:</strong> Average landing pages convert at 6.6% (Unbounce data). 
              Dark Hammer pilots see 12%+ conversion rates.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Twitter
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2024 Dark Hammer. Built for creators, by creators.
          </p>
        </div>
      </div>
    </footer>
  );
};
