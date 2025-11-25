import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-amber-900 text-amber-50 py-8 mt-20">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h3 className="text-xl font-bold">{t('footer.title')} © {t('footer.year')}</h3>
        <p className="text-orange-200">
          {t('footer.fanTribute')}
        </p>
        <p className="text-sm text-amber-300">
          {t('footer.trademark')}<br />
          {t('footer.disclaimer')}
        </p>
        <p className="text-sm text-orange-200 mt-4">
          {t('footer.createdWith')} ❤️ {t('footer.by')} <strong className="text-white">Marlon Novaes</strong>
        </p>
      </div>
    </footer>
  );
}
