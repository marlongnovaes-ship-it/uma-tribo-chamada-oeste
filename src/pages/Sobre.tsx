import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sobre() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="vintage-paper diary-page rounded-lg ambient-lighting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-8 text-orange-900">{t('about.title')}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.intro')}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.philosophyTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.philosophyText')}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.storiesTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.storiesIntro')}
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
                <li>{t('about.story1')}</li>
                <li>{t('about.story2')}</li>
                <li>{t('about.story3')}</li>
                <li>{t('about.story4')}</li>
                <li>{t('about.story5')}</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.cassidyTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.cassidyP1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.cassidyP2')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.cassidyP3')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.cassidyP4')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.cassidyP5')}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.tribeTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.tribeP1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.tribeP2')}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.gameTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.gameP1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.gameP2')}
              </p>

              <div className="bg-orange-100 p-6 rounded-lg mt-12">
                <p className="text-center text-gray-700 italic">
                  "{t('about.quote')}"
                </p>
                <p className="text-center text-lis2-rust font-semibold mt-4">— Brody Holloway</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-orange-800">{t('about.legalTitle')}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {t('about.legalText')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
