import { motion } from 'framer-motion';
import { Scale, Heart, Shield, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Choice {
  title: string;
  dilemma: string;
  optionA: { label: string; consequence: string };
  optionB: { label: string; consequence: string };
  reflection: string;
  icon: 'heart' | 'shield' | 'users' | 'zap';
}

const choices: Choice[] = [
  {
    title: "Educar ou Proteger",
    dilemma: "Daniel está crescendo e precisa entender o mundo. Mas o mundo é cruel e perigoso. Você ensina a ele as duras verdades da vida ou preserva sua inocência pelo máximo de tempo possível?",
    optionA: {
      label: "Ensinar a Verdade",
      consequence: "Daniel amadurece rapidamente, entende os perigos, mas perde parte da infância. Torna-se mais cauteloso, às vezes cínico."
    },
    optionB: {
      label: "Preservar a Inocência",
      consequence: "Daniel mantém a esperança e otimismo, mas pode não estar preparado para situações difíceis. Confia demais nas pessoas."
    },
    reflection: "Não existe resposta certa. Toda escolha tem um preço. A infância perdida nunca volta, mas a ingenuidade pode custar caro.",
    icon: "heart"
  },
  {
    title: "Roubar ou Passar Fome",
    dilemma: "Vocês não têm dinheiro. Daniel está com fome. A loja está ali, desprotegida. Você pode pegar comida sem ninguém ver. É errado, mas Daniel precisa comer.",
    optionA: {
      label: "Roubar para Sobreviver",
      consequence: "Daniel aprende que às vezes é necessário quebrar regras. Pode começar a justificar pequenos furtos. A linha entre certo e errado fica turva."
    },
    optionB: {
      label: "Encontrar Outra Forma",
      consequence: "Daniel aprende sobre integridade, mas passa fome. Pode ressentir Sean por não fazer o que era necessário. A moral tem um custo físico."
    },
    reflection: "Quando a sobrevivência está em jogo, a moralidade se torna um luxo. Mas que tipo de pessoa você quer que Daniel se torne?",
    icon: "shield"
  },
  {
    title: "Usar os Poderes ou Escondê-los",
    dilemma: "Daniel tem poderes incríveis. Eles podem facilitar tudo: conseguir comida, se defender, viajar mais rápido. Mas cada uso é um risco. Alguém pode ver. Alguém pode descobrir.",
    optionA: {
      label: "Usar com Cautela",
      consequence: "A jornada fica mais fácil, mas o risco de exposição aumenta. Daniel se sente poderoso, mas pode ficar dependente dos poderes."
    },
    optionB: {
      label: "Nunca Usar",
      consequence: "Mais seguro, mas mais difícil. Daniel se sente reprimido, como se parte dele fosse errada. Pode explodir em momentos de estresse."
    },
    reflection: "Reprimir quem você é machuca. Mas revelar-se pode destruir tudo. Daniel não pediu esses poderes, mas agora precisa viver com eles.",
    icon: "zap"
  },
  {
    title: "Confiar ou Suspeitar",
    dilemma: "Vocês encontram pessoas na estrada. Algumas parecem gentis, oferecem ajuda. Mas vocês são fugitivos. Confiar pode significar segurança ou traição. Desconfiar pode significar solidão ou sobrevivência.",
    optionA: {
      label: "Confiar nas Pessoas",
      consequence: "Encontram aliados, amigos, momentos de humanidade. Mas também podem ser traídos, machucados, entregues às autoridades."
    },
    optionB: {
      label: "Manter Distância",
      consequence: "Mais seguros, mas mais solitários. Daniel cresce sem aprender sobre conexões humanas. A jornada é mais fria, mais vazia."
    },
    reflection: "Isolar-se é sobreviver, mas não é viver. Confiar é arriscar, mas é também a única forma de encontrar humanidade.",
    icon: "users"
  },
  {
    title: "Autoridade ou Compreensão",
    dilemma: "Daniel está testando limites, questionando suas decisões. Você pode impor autoridade como irmão mais velho ou explicar, negociar, ser compreensivo. Um mantém controle, outro mantém conexão.",
    optionA: {
      label: "Ser Autoritário",
      consequence: "Daniel obedece, mas pode ressentir. A relação fica hierárquica. Ele segue ordens, mas não entende o porquê."
    },
    optionB: {
      label: "Ser Compreensivo",
      consequence: "Daniel se sente ouvido, mas pode não respeitar limites. A relação é mais próxima, mas menos estruturada."
    },
    reflection: "Ser irmão e ser pai ao mesmo tempo é impossível. Sean não escolheu esse papel, mas precisa desempenhá-lo mesmo assim.",
    icon: "heart"
  }
];

export default function Escolhas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <Scale className="w-16 h-16 text-lis2-rust" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-orange-900">Escolhas</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Não existem respostas certas. Apenas consequências. Cada decisão molda não apenas o futuro, 
              mas quem você e Daniel se tornam.
            </p>
            <p className="text-lg font-handwriting text-orange-800 italic">
              "Toda escolha tem um peso. E eu carrego todas elas." — Sean Diaz
            </p>
          </motion.div>

          {/* Dilemas */}
          <div className="space-y-12">
            {choices.map((choice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden sketch-border lis2-card magic-particles"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-lis2-rust to-orange-700 text-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {choice.icon === 'heart' && <Heart className="w-8 h-8" />}
                      {choice.icon === 'shield' && <Shield className="w-8 h-8" />}
                      {choice.icon === 'users' && <Users className="w-8 h-8" />}
                      {choice.icon === 'zap' && <Zap className="w-8 h-8" />}
                    </div>
                    <h2 className="text-3xl font-bold">{choice.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Dilema */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">O Dilema</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {choice.dilemma}
                    </p>
                  </div>

                  {/* Opções */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Opção A */}
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 choice-button" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))'}}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          A
                        </div>
                        <h4 className="font-bold text-lg text-blue-900">{choice.optionA.label}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {choice.optionA.consequence}
                      </p>
                    </div>

                    {/* Opção B */}
                    <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 choice-button" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1))'}}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-lis2-rust text-white rounded-full flex items-center justify-center font-bold">
                          B
                        </div>
                        <h4 className="font-bold text-lg text-orange-900">{choice.optionB.label}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {choice.optionB.consequence}
                      </p>
                    </div>
                  </div>

                  {/* Reflexão */}
                  <div className="bg-gray-50 border-l-4 border-lis2-rust p-6 rounded">
                    <p className="text-gray-800 italic leading-relaxed">
                      💭 <strong>Reflexão:</strong> {choice.reflection}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusão */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16 bg-gradient-to-r from-gray-800 to-amber-900 text-white rounded-lg p-10 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">O Peso das Escolhas</h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Life is Strange 2 não oferece respostas fáceis. Não existe um caminho "certo". 
                Cada escolha que Sean faz carrega consequências que vão além do momento presente.
              </p>
              
              <p>
                Daniel está sempre observando. Aprendendo. Imitando. As ações de Sean não apenas 
                determinam o que acontece, mas moldam quem Daniel se torna. E isso é um peso que 
                nenhum adolescente de 16 anos deveria carregar sozinho.
              </p>
              
              <p className="font-bold text-orange-200">
                No final, não importa se você fez as escolhas "certas". Importa que você viveu 
                com as consequências. E que, apesar de tudo, continuou sendo humano.
              </p>
            </div>

            <div className="border-t border-white/30 mt-8 pt-8">
              <p className="text-2xl font-handwriting text-center text-amber-100">
                "Não existem escolhas perfeitas. Apenas as que fazemos e as que carregamos."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
