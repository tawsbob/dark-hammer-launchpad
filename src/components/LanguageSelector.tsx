
import { useTranslationStore } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { language, setLanguage } = useTranslationStore();

  const languages = [
    { code: 'en' as const, name: 'EN', flag: '🇺🇸' },
    { code: 'pt' as const, name: 'PT', flag: '🇧🇷' },
    { code: 'es' as const, name: 'ES', flag: '🇪🇸' }
  ];

  return (
    <div className="flex items-center space-x-1">
      <Globe className="w-4 h-4 text-gray-400" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`h-8 px-2 text-xs transition-all ${
            language === lang.code 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  );
};
