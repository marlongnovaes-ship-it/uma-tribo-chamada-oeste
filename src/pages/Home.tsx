import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen wolf-cursor">
      {/* Schema.org JSON-LD para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Uma Tribo Chamada Oeste",
          "url": "https://uma-tribo-chamada-oeste.vercel.app",
          "description": "Site de fã dedicado a Life is Strange 2. Explore a jornada emocionante dos irmãos Sean e Daniel Diaz.",
          "inLanguage": "pt-BR",
          "author": {
            "@type": "Person",
            "name": "Marlon Novaes"
          },
          "about": {
            "@type": "VideoGame",
            "name": "Life is Strange 2",
            "publisher": {
              "@type": "Organization",
              "name": "Square Enix"
            },
            "developer": {
              "@type": "Organization",
              "name": "Dontnod Entertainment"
            }
          }
        })}
      </script>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/images/endless-road-new.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 magic-particles"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch-effect dynamic-text-shadow">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <a className="choice-button inline-block">
                {t('home.readBlog')}
              </a>
            </Link>
            <Link href="/sobre">
              <a className="choice-button inline-block" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'}}>
                {t('home.aboutUs')}
              </a>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-orange-900">{t('home.sectionTitle')}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {t('home.sectionDesc')}
            </p>
            <p className="text-lg text-gray-700">
              {t('home.sectionDesc2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <BookOpen className="w-12 h-12 text-lis2-rust mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-900">{t('home.blogTitle')}</h3>
              <p className="text-gray-700">
                {t('home.blogDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 text-lis2-rust mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-900">{t('home.placesTitle')}</h3>
              <p className="text-gray-700">
                {t('home.placesDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <Users className="w-12 h-12 text-lis2-rust mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-900">{t('home.peopleTitle')}</h3>
              <p className="text-gray-700">
                {t('home.peopleDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-lis2-rust text-white">
        <div className="container mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl italic mb-6">
              "{t('home.quote')}"
            </p>
            <footer className="text-xl text-orange-200">— Brody Holloway</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-orange-900">{t('home.ctaTitle')}</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t('home.ctaDesc')}
            </p>
            <Link href="/blog">
              <a className="choice-button inline-block">
                {t('home.startReading')}
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
