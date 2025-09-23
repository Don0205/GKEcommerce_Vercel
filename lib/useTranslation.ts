// lib/useTranslation.ts
import { useLanguage } from './LanguageContext';
import { translations, TranslationKey } from './translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return { t };
};