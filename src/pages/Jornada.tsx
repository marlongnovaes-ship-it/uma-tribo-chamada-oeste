import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface TimelineEvent {
  location: string;
  state: string;
  date: string;
  episode: string;
  description: string;
  keyMoments: string[];
  image: string;
}

const timeline: TimelineEvent[] = [
  {
    location: "Seattle",
    state: "Washington",
    date: "28 de Outubro, 2016",
    episode: "Episódio 1 - Roads",
    description: "Onde tudo começou. Uma tarde normal que se transformou em tragédia. Sean e Daniel são forçados a fugir após um incidente que muda suas vidas para sempre.",
    keyMoments: [
      "Última conversa com Lyla",
      "Incidente com Brett",
      "Morte de Esteban Diaz",
      "Início da fuga"
    ],
    image: "/images/sean-daniel.jpg"
  },
  {
    location: "Beaver Creek",
    state: "Oregon",
    date: "Novembro - Dezembro, 2016",
    episode: "Episódio 2 - Rules",
    description: "Refúgio temporário na casa dos avós. Sean e Daniel tentam encontrar normalidade enquanto se escondem. É aqui que conhecem Cassidy pela primeira vez.",
    keyMoments: [
      "Encontro com os avós",
      "Amizade com Chris",
      "Primeira aparição de Cassidy",
      "Decisão de seguir para a Califórnia"
    ],
    image: "/images/camp-forest.png"
  },
  {
    location: "Humboldt County",
    state: "California",
    date: "Janeiro - Fevereiro, 2017",
    episode: "Episódio 3 - Wastelands",
    description: "A comunidade de viajantes. Sean e Daniel trabalham na fazenda de cannabis e encontram uma família temporária. Cassidy, Finn, Hannah e Penny os acolhem.",
    keyMoments: [
      "Trabalho na fazenda de Merrill",
      "Fogueiras e músicas com Cassidy",
      "Desenvolvimento de poderes de Daniel",
      "O assalto que muda tudo"
    ],
    image: "/images/humboldt-farm.png"
  },
  {
    location: "Fronteira México-EUA",
    state: "Arizona/Sonora",
    date: "Agosto, 2017",
    episode: "Episódio 5 - Wolves",
    description: "O destino final. Após meses na estrada, Sean e Daniel chegam à fronteira. As escolhas feitas ao longo da jornada determinam o que acontece a seguir.",
    keyMoments: [
      "Confronto final",
      "Escolha definitiva",
      "Consequências das ações",
      "Múltiplos finais possíveis"
    ],
    image: "/images/road-freedom.jpg"
  }
];

export default function Jornada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-orange-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-orange-900">A Jornada</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              De Seattle a Puerto Lobos. Mais de 2.000 milhas de estrada, incontáveis escolhas, 
              e uma jornada que transforma dois irmãos para sempre.
            </p>
            <div className="inline-block bg-orange-100 px-6 py-3 rounded-lg">
              <p className="text-orange-800 font-semibold">
                📍 Seattle, WA → Puerto Lobos, México
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-lis2-rust to-orange-400 hidden md:block"></div>

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              >
                {/* Marcador na linha */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lis2-rust rounded-full border-4 border-white shadow-lg hidden md:block" style={{top: '2rem'}}></div>

                <div className={`bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Imagem */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.location}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-lis2-rust mb-2">
                      <MapPin className="w-5 h-5" />
                      <h3 className="text-2xl font-bold">{event.location}, {event.state}</h3>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <p className="text-sm">{event.date}</p>
                    </div>

                    <p className="text-lis2-rust font-semibold mb-4 text-sm">{event.episode}</p>

                    <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                    <div className="border-t border-orange-100 pt-4">
                      <p className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Momentos-chave:
                      </p>
                      <ul className="space-y-1">
                        {event.keyMoments.map((moment, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-lis2-rust mr-2">•</span>
                            {moment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mensagem final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16 text-center bg-gradient-to-r from-orange-100 to-orange-100 p-8 rounded-lg"
          >
            <p className="text-2xl font-handwriting text-gray-800 mb-4">
              "A estrada não é sobre o destino. É sobre quem você se torna ao longo do caminho."
            </p>
            <p className="text-lis2-rust font-semibold">— Lição da Jornada</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
