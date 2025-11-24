import { motion } from 'framer-motion';
import { Heart, Users, Compass, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Tatuagem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-amber-900 to-orange-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-8xl mb-6">🐺</div>
            <h1 className="text-6xl font-bold mb-6">A Tatuagem do Lobo</h1>
            <p className="text-2xl text-orange-200 max-w-3xl mx-auto">
              Mais que tinta na pele. Um símbolo de pertencimento, liberdade e identidade.
            </p>
          </motion.div>

          {/* Origem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-300">A Origem</h2>
            <p className="text-lg leading-relaxed mb-4">
              Em Humboldt County, Cassidy oferece a Sean uma tatuagem. Não é apenas um desenho. 
              É um ritual de passagem. Uma marca de que ele pertence à tribo de viajantes, 
              àqueles que escolheram a estrada ao invés da conformidade.
            </p>
            <p className="text-lg leading-relaxed">
              O lobo não foi escolhido por acaso. Cassidy explica: "Lobos são livres. 
              Lobos protegem a matilha. E lobos nunca se rendem."
            </p>
          </motion.div>

          {/* Significados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-900/50 to-blue-700/50 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-bold">Matilha</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Lobos vivem em matilhas. Protegem uns aos outros. Sean e Daniel são uma matilha de dois. 
                A tatuagem é um lembrete de que família não é sangue — é quem você escolhe proteger.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-amber-900/50 to-amber-700/50 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">Liberdade</h3>
              </div>
              <p className="text-amber-100 leading-relaxed">
                Lobos não são domesticados. Eles pertencem à natureza, à estrada, ao vento. 
                A tatuagem representa a recusa de Sean em se conformar, em ser capturado, em desistir do sonho.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-red-900/50 to-red-700/50 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-8 h-8 text-red-300" />
                <h3 className="text-2xl font-bold">Força</h3>
              </div>
              <p className="text-red-100 leading-relaxed">
                Lobos são sobreviventes. Caçam, lutam, resistem. Sean passou por inferno e fogo. 
                A tatuagem é uma cicatriz escolhida — prova de que ele sobreviveu e se tornou mais forte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-purple-900/50 to-purple-700/50 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-purple-300" />
                <h3 className="text-2xl font-bold">Identidade</h3>
              </div>
              <p className="text-purple-100 leading-relaxed">
                A tatuagem é uma escolha. Em um mundo que tentou definir Sean como criminoso, 
                fugitivo, problema — ele escolhe sua própria identidade. Ele é um lobo. E lobos escolhem seu próprio caminho.
              </p>
            </motion.div>
          </div>

          {/* Cassidy e a Filosofia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-r from-amber-800/30 to-orange-800/30 backdrop-blur-sm rounded-lg p-10 mb-12 border-2 border-lis2-rust/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-300">Cassidy e a Filosofia da Tatuagem</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Cassidy, ela mesma coberta de tatuagens, entende o poder dos símbolos permanentes. 
              Cada uma de suas tatuagens conta uma história: o lobo no peito (liberdade), 
              o dragão na manga (força), a árvore arrancada (raízes cortadas), as vespas (beleza que pica).
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Quando ela oferece fazer a tatuagem em Sean, não é apenas um serviço. É um convite. 
              "Você é um de nós agora," ela diz. "Parte da tribo."
            </p>
            
            <div className="bg-black/30 p-6 rounded-lg border-l-4 border-lis2-rust">
              <p className="text-xl font-handwriting text-orange-200 italic">
                "Tatuagens são histórias que você escolhe carregar na pele. 
                Não importa onde você vá, elas vão com você. Como cicatrizes, mas bonitas."
              </p>
              <p className="text-right text-amber-400 font-semibold mt-3">— Cassidy</p>
            </div>
          </motion.div>

          {/* O Momento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-300">O Momento da Tatuagem</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              A cena é íntima. Cassidy e Sean, sozinhos. A agulha perfurando a pele. 
              A dor que se transforma em algo maior. Não é apenas sobre o desenho — 
              é sobre o que ele representa.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Sean está marcando permanentemente em seu corpo uma escolha. Ele não é mais 
              apenas um fugitivo. Não é apenas um irmão mais velho sobrecarregado. 
              Ele é um lobo. Parte de algo maior.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-orange-200">
              E quando Daniel vê a tatuagem, seus olhos brilham. "Somos lobos, Sean. 
              Nós dois. Lobos irmãos."
            </p>
          </motion.div>

          {/* Simbolismo no Jogo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-lg p-10 border-2 border-lis2-rust"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">O Lobo ao Longo da Jornada</h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                O símbolo do lobo aparece repetidamente em Life is Strange 2. Não é coincidência. 
                É um fio condutor que conecta toda a narrativa.
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">🐺</span>
                  <span>O desenho de Daniel de dois lobos correndo juntos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">🐺</span>
                  <span>A alcunha "Los Lobos" que Sean e Daniel adotam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">🐺</span>
                  <span>O uivo de lobo que Daniel imita quando usa seus poderes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">🐺</span>
                  <span>O nome do episódio final: "Wolves" (Lobos)</span>
                </li>
              </ul>
              
              <p className="font-bold text-orange-200 text-xl mt-6">
                O lobo não é apenas um símbolo. É a essência da jornada: 
                liberdade, lealdade, sobrevivência e família.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
