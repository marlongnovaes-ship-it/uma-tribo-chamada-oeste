import { motion } from 'framer-motion';
import { Heart, Shield, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Moment {
  title: string;
  description: string;
  impact: string;
  icon: 'heart' | 'shield' | 'star';
}

const moments: Moment[] = [
  {
    title: "A Promessa",
    description: '"Eu vou cuidar de você, Daniel. Sempre." As primeiras palavras que definiram tudo. Sean, aos 16 anos, assumiu o papel de pai, mãe, protetor e guia. Uma promessa feita no desespero, mas mantida com amor incondicional.',
    impact: "Esta promessa moldou cada decisão de Sean ao longo da jornada.",
    icon: "shield"
  },
  {
    title: "Ensinando sobre o Poder",
    description: "Daniel descobriu que tinha poderes telecinéticos. Sean teve que ensinar um menino de 9 anos a controlar algo que nem ele entendia. Cada lição era um equilíbrio entre proteger e capacitar, entre esconder e aceitar.",
    impact: "As escolhas de Sean sobre como educar Daniel determinaram quem ele se tornaria.",
    icon: "star"
  },
  {
    title: "Momentos de Normalidade",
    description: "Jogar videogame no motel. Compartilhar um chocolate. Contar histórias antes de dormir. Em meio ao caos, Sean lutava para dar a Daniel pedaços de infância normal. Cada sorriso de Daniel era uma vitória.",
    impact: "Esses momentos lembravam por que vale a pena continuar.",
    icon: "heart"
  },
  {
    title: "O Peso das Escolhas",
    description: "Roubar para comer ou passar fome? Mentir para proteger ou dizer a verdade? Cada escolha de Sean era observada por Daniel. O irmão mais novo aprendia não apenas com palavras, mas com ações.",
    impact: "Daniel se tornou o reflexo das escolhas de Sean.",
    icon: "shield"
  },
  {
    title: "Discussões e Reconciliações",
    description: "Nem tudo eram flores. Daniel questionava, rebelava-se, testava limites. Sean perdia a paciência, gritava, se arrependia. Mas sempre voltavam um para o outro. Porque no fim, tudo que tinham era um ao outro.",
    impact: "Conflitos fortaleceram o vínculo ao invés de quebrá-lo.",
    icon: "heart"
  },
  {
    title: "Sacrifícios Silenciosos",
    description: "Sean desistiu de sua juventude, seus sonhos, sua liberdade. Não foi para a faculdade. Não teve primeiro amor tranquilo. Não viveu como um adolescente normal. Tudo por Daniel. E ele faria tudo de novo.",
    impact: "O amor fraternal não conta custos.",
    icon: "shield"
  }
];

const choices = [
  {
    dilemma: "Educar ou Proteger?",
    description: "Ensinar Daniel sobre as consequências ou protegê-lo da dura realidade? Sean constantemente escolhia entre preparar o irmão para o mundo ou preservar sua inocência."
  },
  {
    dilemma: "Autoridade ou Amizade?",
    description: "Ser o irmão mais velho autoritário ou o melhor amigo compreensivo? A linha entre disciplina e companheirismo era tênue e difícil de navegar."
  },
  {
    dilemma: "Verdade ou Mentira?",
    description: "Contar a Daniel sobre a gravidade da situação ou manter esperanças falsas? Honestidade brutal versus otimismo protetor."
  },
  {
    dilemma: "Liberdade ou Segurança?",
    description: "Deixar Daniel usar os poderes ou proibi-lo completamente? Cada uso era um risco, mas reprimir era negar parte de quem ele era."
  }
];

export default function Irmaos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-orange-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-lis2-rust" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-orange-900">Irmãos</h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              Sean & Daniel Diaz
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais que sangue. Mais que família. Uma conexão forjada no fogo da adversidade, 
              temperada pelo amor incondicional, e testada a cada quilômetro da estrada.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 rounded-lg overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/sean-daniel.jpg" 
              alt="Sean e Daniel"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          {/* Momentos Marcantes */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Momentos que Definiram o Vínculo</h2>
            
            <div className="space-y-8">
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {moment.icon === 'heart' && <Heart className="w-8 h-8 text-red-500" />}
                      {moment.icon === 'shield' && <Shield className="w-8 h-8 text-blue-500" />}
                      {moment.icon === 'star' && <Star className="w-8 h-8 text-lis2-rust" />}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{moment.description}</p>
                      <div className="bg-orange-50 border-l-4 border-lis2-rust p-4 rounded">
                        <p className="text-orange-800 font-semibold text-sm">
                          💡 {moment.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dilemas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Dilemas do Irmão Mais Velho</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {choices.map((choice, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-100 to-orange-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-orange-900 mb-3">{choice.dilemma}</h3>
                  <p className="text-gray-700 leading-relaxed">{choice.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reflexão Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-blue-100 via-orange-100 to-orange-100 rounded-lg p-10 shadow-2xl torn-paper"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-900">O Que Significa Ser Irmão</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ser irmão não é apenas compartilhar sangue. É escolher, todos os dias, estar presente. 
                É sacrificar seus próprios sonhos para que o outro possa sonhar. É ser forte quando 
                o outro está fraco, e vulnerável quando o outro precisa se sentir necessário.
              </p>
              
              <p className="text-lg">
                Sean e Daniel não escolheram a estrada. Não escolheram a fuga. Não escolheram a dor. 
                Mas escolheram, a cada dia, permanecer juntos. E essa escolha transformou dois meninos 
                assustados em uma força imparável.
              </p>
              
              <p className="text-lg font-semibold text-orange-800">
                No final, não importa onde a estrada os leve. Importa que eles caminhem juntos.
              </p>
              
              <div className="border-t-2 border-orange-300 pt-6 mt-8">
                <p className="text-2xl font-handwriting text-center text-gray-800">
                  "Nós somos lobos. E lobos protegem a matilha."
                </p>
                <p className="text-center text-lis2-rust font-semibold mt-2">— Sean Diaz</p>
              </div>
            </div>
          </motion.div>

          {/* Citações dos Irmãos */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-journal text-gray-800 mb-4">
                "Eu vou cuidar de você, Daniel. Sempre. Não importa o que aconteça."
              </p>
              <p className="text-right text-blue-700 font-semibold">— Sean</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-journal text-gray-800 mb-4">
                "Você é o melhor irmão do mundo, Sean. Eu confio em você."
              </p>
              <p className="text-right text-lis2-rust font-semibold">— Daniel</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
