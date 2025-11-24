import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Heart, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Location {
  id: number;
  name: string;
  state: string;
  coordinates: { top: string; left: string };
  episode: string;
  date: string;
  description: string;
  keyEvents: string[];
  image: string;
  color: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Seattle",
    state: "Washington",
    coordinates: { top: "15%", left: "10%" },
    episode: "Episódio 1 - Roads",
    date: "28 de Outubro, 2016",
    description: "Onde tudo começou e terminou ao mesmo tempo. Uma tarde normal que se transformou em tragédia. O lar que tiveram que abandonar.",
    keyEvents: [
      "Última conversa com Lyla",
      "Incidente com Brett",
      "Morte de Esteban Diaz",
      "Início da fuga para o México"
    ],
    image: "/images/sean-daniel.jpg",
    color: "blue"
  },
  {
    id: 2,
    name: "Beaver Creek",
    state: "Oregon",
    coordinates: { top: "25%", left: "15%" },
    episode: "Episódio 2 - Rules",
    date: "Novembro - Dezembro 2016",
    description: "Refúgio temporário na casa dos avós. Um respiro antes da tempestade. Onde Daniel começou a entender seus poderes.",
    keyEvents: [
      "Reencontro com os avós",
      "Amizade com Chris Eriksen",
      "Primeira aparição de Cassidy",
      "Revelação dos poderes de Daniel"
    ],
    image: "/images/camp-forest.png",
    color: "green"
  },
  {
    id: 3,
    name: "Humboldt County",
    state: "California",
    coordinates: { top: "40%", left: "8%" },
    episode: "Episódio 3 - Wastelands",
    date: "Janeiro - Fevereiro 2017",
    description: "A comunidade de viajantes. Trabalho na fazenda de cannabis. Onde encontraram uma família temporária e Sean descobriu o que significa pertencer.",
    keyEvents: [
      "Trabalho na fazenda de Merrill",
      "Fogueiras com Cassidy, Finn, Hannah e Penny",
      "Tatuagem do lobo",
      "O assalto que mudou tudo"
    ],
    image: "/images/humboldt-farm.png",
    color: "amber"
  },
  {
    id: 4,
    name: "Fronteira",
    state: "Arizona/Sonora",
    coordinates: { top: "65%", left: "35%" },
    episode: "Episódio 5 - Wolves",
    date: "Agosto 2017",
    description: "O destino final. A linha que separa duas vidas. Onde todas as escolhas convergem e o futuro é decidido.",
    keyEvents: [
      "Confronto final",
      "Escolha definitiva",
      "Consequências de todas as ações",
      "Múltiplos finais possíveis"
    ],
    image: "/images/road-freedom.jpg",
    color: "orange"
  }
];

export default function MapaInterativo() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 border-blue-600",
    green: "bg-green-500 hover:bg-green-600 border-green-600",
    amber: "bg-lis2-rust hover:bg-lis2-rust border-lis2-rust",
    orange: "bg-lis2-rust hover:bg-orange-600 border-orange-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 text-orange-900">Mapa da Jornada</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              De Seattle a Puerto Lobos. Mais de 2.000 milhas de estrada, incontáveis escolhas, 
              e uma jornada que transformou dois irmãos para sempre.
            </p>
            <p className="text-lis2-rust font-semibold">
              📍 Clique nos marcadores para explorar cada local
            </p>
          </motion.div>

          {/* Mapa Interativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-orange-100 to-orange-100 rounded-lg shadow-2xl p-8 mb-12"
            style={{ minHeight: "600px" }}
          >
            {/* Linha da jornada */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="33%" stopColor="#10b981" />
                  <stop offset="66%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M 10% 15% Q 20% 30%, 15% 25% T 8% 40% Q 20% 50%, 35% 65%"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                className="animate-pulse"
              />
            </svg>

            {/* Marcadores */}
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="absolute"
                style={{ 
                  top: location.coordinates.top, 
                  left: location.coordinates.left,
                  zIndex: hoveredId === location.id ? 10 : 2
                }}
                onMouseEnter={() => setHoveredId(location.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <button
                  onClick={() => setSelectedLocation(location)}
                  className={`${colorClasses[location.color as keyof typeof colorClasses]} text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-125 border-4 border-white relative group`}
                >
                  <MapPin className="w-6 h-6" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg">
                      <p className="font-bold">{location.name}</p>
                      <p className="text-xs">{location.state}</p>
                    </div>
                  </div>
                  
                  {/* Pulse animation */}
                  <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current"></span>
                </button>
                
                {/* Label */}
                <p className="text-center mt-2 font-bold text-gray-800 text-sm">
                  {location.name}
                </p>
              </motion.div>
            ))}

            {/* Legenda */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg" style={{ zIndex: 3 }}>
              <p className="font-bold text-gray-800 mb-2">Legenda</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Início</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Refúgio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lis2-rust"></div>
                  <span>Comunidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lis2-rust"></div>
                  <span>Destino</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estatísticas da Jornada */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-lis2-rust mb-2">2,000+</p>
              <p className="text-gray-700">Milhas Percorridas</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">10</p>
              <p className="text-gray-700">Meses na Estrada</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">5</p>
              <p className="text-gray-700">Episódios</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-orange-600 mb-2">∞</p>
              <p className="text-gray-700">Escolhas Difíceis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-lis2-rust to-orange-700 text-white p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedLocation.name}, {selectedLocation.state}</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedLocation.date}
                    </div>
                    <div>{selectedLocation.episode}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image */}
              <img 
                src={selectedLocation.image} 
                alt={selectedLocation.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedLocation.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h3 className="text-xl font-bold text-gray-800">Momentos-Chave</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedLocation.keyEvents.map((event, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-lis2-rust font-bold">•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
