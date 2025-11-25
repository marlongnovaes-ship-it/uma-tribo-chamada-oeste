import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Drawing {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  emotion: string;
}

const drawings: Drawing[] = [
  {
    id: 1,
    image: "/images/sean-draw1.png",
    title: "Retrato do Pai",
    description: "Esteban Diaz. O homem que me ensinou tudo. O pai que perdi cedo demais. Cada linha deste desenho carrega a dor da saudade e a gratidão por tudo que ele foi.",
    location: "Desenhado em Beaver Creek",
    emotion: "Saudade"
  },
  {
    id: 2,
    image: "/images/sean-draw2.png",
    title: "Domingo com a Família",
    description: "Memórias de dias normais que nunca mais voltarão. Papai, Daniel e eu. Antes de tudo mudar. Antes da fuga. Quando éramos apenas uma família feliz.",
    location: "Memória de Seattle",
    emotion: "Nostalgia"
  },
  {
    id: 3,
    image: "/images/sean-draw3.jpg",
    title: "A Floresta que nos Acolheu",
    description: "Acampamento na floresta. Daniel brincando, eu tentando manter tudo sob controle. A natureza foi nossa casa quando não tínhamos nenhuma.",
    location: "Oregon",
    emotion: "Refúgio"
  },
  {
    id: 5,
    image: "/images/sean-draw5.jpg",
    title: "Estudos de Personagens",
    description: "As pessoas que encontramos na estrada. Cada rosto conta uma história. Cada olhar carrega um segredo. Tento capturar a essência de quem cruzou nosso caminho.",
    location: "Humboldt County",
    emotion: "Observação"
  },
  {
    id: 6,
    image: "/images/sean-draw6.jpg",
    title: "Rostos da Tribo",
    description: "Cassidy, Finn, Hannah, Penny. A família que escolhemos. Os amigos que nos acolheram quando mais precisávamos. Cada traço é uma lembrança de pertencimento.",
    location: "Humboldt County",
    emotion: "Pertencimento"
  }
];

export default function Galeria() {
  const { t } = useTranslation();
  const [selectedDrawing, setSelectedDrawing] = useState<Drawing | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <Palette className="w-16 h-16 text-lis2-rust" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-orange-900">{t('gallery.title')}</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              {t('gallery.subtitle')}
            </p>
            <p className="text-lg font-handwriting text-orange-800 italic">
              "Desenhar é minha forma de processar tudo que aconteceu. É como se, ao colocar no papel, 
              eu pudesse entender melhor." — Sean Diaz
            </p>
          </motion.div>

          {/* Grid de desenhos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drawings.map((drawing, index) => (
              <motion.div
                key={drawing.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="polaroid-effect cursor-pointer group lis2-card animate-in dynamic-shadow reflection-effect"
                onClick={() => setSelectedDrawing(drawing)}
              >
                <div className="overflow-hidden rounded">
                  <img 
                    src={drawing.image} 
                    alt={drawing.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 image-reflection"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{drawing.title}</h3>
                  <p className="text-sm text-lis2-rust font-semibold">{drawing.location}</p>
                  <p className="text-xs text-gray-500 mt-2 italic">{drawing.emotion}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota do artista */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-orange-100 p-8 rounded-lg torn-paper"
          >
            <h3 className="text-2xl font-bold text-orange-900 mb-4">Nota do Artista</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('gallery.note')}
            </p>
            <p className="text-right text-orange-800 font-handwriting text-xl mt-4">
              — Sean Diaz
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modal de visualização ampliada */}
      <AnimatePresence>
        {selectedDrawing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDrawing(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedDrawing(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                  aria-label={t('gallery.close')}
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
                <img 
                  src={selectedDrawing.image} 
                  alt={selectedDrawing.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-orange-900 mb-2">{selectedDrawing.title}</h2>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <strong>{t('gallery.location')}:</strong> {selectedDrawing.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>{t('gallery.emotion')}:</strong> {selectedDrawing.emotion}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedDrawing.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
