import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Quote {
  text: string;
  author: string;
  context: string;
  episode: string;
}

const quotes: Quote[] = [
  {
    text: "Tudo é político.",
    author: "Brody Holloway",
    context: "Ensinando Sean sobre como viver na estrada significa estar consciente do mundo ao redor.",
    episode: "Episódio 1 - Roads"
  },
  {
    text: "A estrada nunca termina. Sempre continua.",
    author: "Brody Holloway",
    context: "Sobre a natureza infinita da jornada e da liberdade.",
    episode: "Episódio 1 - Roads"
  },
  {
    text: "Eu não vou me estabelecer, de jeito nenhum! É assim que a merda começa, sabe? Quando você começa a ter coisas suas. Coisas que você precisa defender.",
    author: "Cassidy",
    context: "Explicando sua filosofia de vida aos outros viajantes.",
    episode: "Episódio 3 - Wastelands"
  },
  {
    text: "Ninguém se importa com a gente.",
    author: "Cassidy",
    context: "Lamentando a invisibilidade dos jovens marginalizados na sociedade.",
    episode: "Episódio 2 - Rules"
  },
  {
    text: "Você sempre terá um lugar para voltar. Comigo.",
    author: "Lyla Park",
    context: "Prometendo a Sean que, não importa o que aconteça, a amizade deles permanecerá.",
    episode: "Episódio 1 - Roads"
  },
  {
    text: "Shit changes so fast... I get so emo sometimes, wondering what'll happen to us once we graduate.",
    author: "Lyla Park",
    context: "Refletindo sobre o futuro incerto e a transitoriedade da juventude.",
    episode: "Episódio 1 - Roads"
  },
  {
    text: "Eu vou cuidar de você, Daniel. Sempre.",
    author: "Sean Diaz",
    context: "Promessa de Sean ao irmão mais novo no início da jornada.",
    episode: "Episódio 1 - Roads"
  },
  {
    text: "Às vezes você precisa se perder para se encontrar.",
    author: "Filosofia da Estrada",
    context: "Sobre a jornada de autodescoberta através da adversidade.",
    episode: "Tema Central"
  },
  {
    text: "A verdadeira prisão não tem grades. É feita de expectativas.",
    author: "Reflexão sobre Liberdade",
    context: "Sobre como a sociedade nos prende através de normas e pressões sociais.",
    episode: "Tema Central"
  },
  {
    text: "Família não é sangue. É quem você escolhe estar ao seu lado.",
    author: "Comunidade de Humboldt",
    context: "Sobre a família escolhida versus a família de sangue.",
    episode: "Episódio 3 - Wastelands"
  }
];

export default function Citacoes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-orange-900">Citações Memoráveis</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Palavras que ecoam na estrada e tocam o coração. Cada frase carrega o peso de uma jornada, 
              a dor de uma escolha, ou a beleza de um momento compartilhado.
            </p>
          </motion.div>

          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow torn-paper"
              >
                <blockquote className="quote-special text-gray-800 mb-4">
                  {quote.text}
                </blockquote>
                <div className="border-t border-orange-200 pt-4 mt-4">
                  <p className="font-bold text-orange-800 mb-2">— {quote.author}</p>
                  <p className="text-gray-600 text-sm mb-1 italic">{quote.context}</p>
                  <p className="text-lis2-rust text-xs font-semibold">{quote.episode}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center bg-orange-100 p-8 rounded-lg"
          >
            <p className="text-lg text-gray-700 font-indie">
              "Cada palavra é uma semente plantada na estrada. Algumas florescem em memórias, 
              outras em lições que carregamos para sempre."
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
