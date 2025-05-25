
import { useTranslationStore } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';

export const LanguageSelector = () => {
  const { language, setLanguage } = useTranslationStore();

  const languages = [
    { code: 'en' as const, name: 'EN' },
    { code: 'pt' as const, name: 'PT' },
    { code: 'es' as const, name: 'ES' }
  ];

  return (
    <div className="flex items-center space-x-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`h-8 px-3 text-xs transition-all ${
            language === lang.code 
              ? 'text-red-400 bg-red-900/20' 
              : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};
