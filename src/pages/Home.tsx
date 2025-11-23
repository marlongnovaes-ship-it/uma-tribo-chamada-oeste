import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/images/hero-road.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Uma Tribo Chamada Oeste
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Histórias da estrada. Encontros que mudam vidas. A jornada nunca termina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <a className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
                Ler o Blog
              </a>
            </Link>
            <Link href="/sobre">
              <a className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
                Sobre Nós
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
            <h2 className="text-4xl font-bold mb-6 text-amber-900">A Estrada Nunca Termina</h2>
            <p className="text-lg text-gray-700 mb-4">
              Este blog é sobre liberdade, encontros inesperados e as histórias que encontramos pelo caminho. 
              Inspirado nas viagens de Brody Holloway e Cassidy, dois espíritos livres que escolheram a estrada como lar.
            </p>
            <p className="text-lg text-gray-700">
              Aqui você encontrará relatos de viagens, reflexões sobre comunidades alternativas, 
              e a filosofia de que tudo é político quando você vive com os olhos abertos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <BookOpen className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Blog de Viagens</h3>
              <p className="text-gray-700">
                Histórias autênticas da estrada, escritas com o coração e a honestidade de quem vive cada momento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Lugares Reais</h3>
              <p className="text-gray-700">
                De Coffeyville a Humboldt County, cada local tem uma história e uma lição para ensinar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Pessoas Verdadeiras</h3>
              <p className="text-gray-700">
                Conhecendo Brody, Cassidy e outros viajantes que escolheram viver fora do convencional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl italic mb-6">
              "Tudo é político, Sean. O que você e seu irmão têm é a coisa mais importante. 
              A estrada nunca termina."
            </p>
            <footer className="text-xl text-amber-200">— Brody Holloway</footer>
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
            <h2 className="text-4xl font-bold mb-6 text-amber-900">Pronto para a Jornada?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Explore os posts do blog e descubra as histórias que moldaram a filosofia de viver livre na estrada.
            </p>
            <Link href="/blog">
              <a className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
                Começar a Ler
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
