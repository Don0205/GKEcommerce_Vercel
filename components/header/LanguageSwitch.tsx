// components/header/LanguageSwitch.tsx
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/useTranslation';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        {t('language')}
      </label>
      <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><button onClick={() => setLanguage('zh')}>{t('chinese')}</button></li>
        <li><button onClick={() => setLanguage('en')}>{t('english')}</button></li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;