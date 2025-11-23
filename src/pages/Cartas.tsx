import { motion } from 'framer-motion';
import { Mail, Heart, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Letter {
  from: string;
  to: string;
  date: string;
  location: string;
  content: string;
  mood: 'sad' | 'hopeful' | 'angry' | 'nostalgic';
}

const letters: Letter[] = [
  {
    from: "Lyla Park",
    to: "Sean Diaz",
    date: "5 de Novembro, 2016",
    location: "Seattle, WA",
    mood: "sad",
    content: `Sean,

Já faz uma semana desde que você desapareceu. Uma semana desde aquela ligação do motel. Uma semana desde que eu ouvi sua voz.

A polícia veio me interrogar de novo hoje. Horas e horas das mesmas perguntas. "Onde ele está?" "O que ele te disse?" "Você está escondendo algo?" Como se eu soubesse. Como se você tivesse me contado algum plano.

Eu só queria que você soubesse que eu entendo. Não sei o que aconteceu naquela noite, mas eu te conheço, Sean. Conheço seu coração. E sei que você não faria nada errado de propósito.

As pessoas na escola estão falando. Dizendo coisas horríveis. Mas eu defendo você em cada comentário, em cada post. Porque é isso que melhores amigos fazem. Mesmo quando você não está aqui para ver.

Eu não consigo dormir. Meu terapeuta aumentou a medicação, mas não adianta. Toda vez que fecho os olhos, vejo você e Daniel sozinhos em algum lugar frio. Será que vocês têm comida? Abrigo? Será que Daniel está bem?

Eu queria poder te ajudar. Queria poder fazer alguma coisa além de esperar. Mas tudo que posso fazer é continuar vivendo, continuar defendendo você, e continuar esperando que um dia você volte.

Ou pelo menos me ligue de novo.

Você sempre terá um lugar para voltar, Sean. Sempre.

Com amor,
Lyla

P.S.: Comprei o ingresso da Misty Mice mesmo assim. Guardei o seu. Por via das dúvidas.`
  },
  {
    from: "Sean Diaz",
    to: "Lyla Park",
    date: "20 de Dezembro, 2016",
    location: "Beaver Creek, OR",
    mood: "nostalgic",
    content: `Lyla,

Estou em Oregon. Com os avós. Não posso dizer mais que isso, desculpa.

Penso em você todo dia. Penso em Seattle, em nossas conversas, em todos os planos que tínhamos. Parece que foi outra vida. Parece que aquele Sean que conversava com você no Skype era outra pessoa.

Daniel pergunta sobre você às vezes. Ele lembra de você ser legal com ele, de chamar ele de "namorado". Isso faz ele sorrir, mesmo em dias difíceis.

Eu queria poder te contar tudo. Sobre o que aconteceu, sobre onde estamos indo, sobre o que Daniel pode fazer. Mas não posso. Não é seguro. Para você, para nós.

Só quero que você saiba que nossa amizade foi uma das melhores coisas da minha vida. Você me fez rir quando eu estava triste. Me apoiou quando eu estava inseguro. E agora, mesmo longe, pensar em você me dá força para continuar.

Cuida da Jenn por mim. Diz pra ela que... não, deixa pra lá. Não importa mais.

Obrigado por tudo, Lyla. Por ser minha melhor amiga. Por me defender. Por não desistir de mim.

Talvez um dia a gente se veja de novo. Talvez no México, numa praia, quando tudo isso acabar.

Até lá, continue sendo você. Continue sendo livre.

Sean

P.S.: Desculpa por ter estragado seu aniversário.`
  },
  {
    from: "Cassidy",
    to: "Sean Diaz",
    date: "15 de Março, 2017",
    location: "Estrada, Califórnia",
    mood: "hopeful",
    content: `Sean,

Não sei se você vai ler isso algum dia. Não sei nem se vou te enviar. Mas preciso escrever.

Desde que você e Daniel foram embora, Humboldt não é a mesma. Finn está diferente. Hannah está mais quieta. E eu... eu sinto sua falta.

Não era pra ser assim. Não era pra me apegar. Essa é a regra número um da estrada: não se apegue. Mas você chegou com aquele sorriso tímido, aqueles desenhos incríveis, e aquela determinação de proteger seu irmão a qualquer custo.

E eu me apeguei.

Penso nas noites ao redor da fogueira. Na sua voz quando cantávamos juntos. Nos seus olhos quando eu ofereci fazer aquela tatuagem. Você parecia tão... vivo. Mesmo carregando tanto peso.

Espero que você e Daniel estejam bem. Espero que tenham chegado onde queriam. Espero que a estrada tenha sido gentil com vocês.

E se um dia nossos caminhos se cruzarem de novo, quero que saiba: você sempre foi bem-vindo na minha tribo.

Continue desenhando. Continue sendo você.

Cassidy

P.S.: Guardei aquele desenho que você fez de mim. É uma das minhas posses mais preciosas. Mesmo que eu diga que não tenho posses.`
  },
  {
    from: "Daniel Diaz",
    to: "Chris Eriksen",
    date: "10 de Janeiro, 2017",
    location: "Califórnia",
    mood: "hopeful",
    content: `Oi Chris,

Sou eu, Daniel! Lembra de mim? A gente brincou de super-heróis na sua casa.

Eu queria te contar um segredo: eu tenho poderes DE VERDADE! Não é brincadeira como a gente fazia. Eu consigo mover coisas com a mente!

Mas é um segredo. Sean disse que não posso contar pra ninguém. Mas você é meu amigo, então acho que tudo bem te contar.

Estamos viajando. Vimos muitos lugares legais. Mas eu sinto falta de ter amigos da minha idade. Sinto falta de brincar sem me preocupar.

Você ainda tem o Captain Spirit? Aposto que ele está protegendo você.

Um dia, quando eu for grande e forte, vou voltar pra te visitar. E a gente vai brincar de novo.

Seu amigo super-herói,
Daniel

P.S.: Cuida do Mushroom pra mim!`
  }
];

const moodColors = {
  sad: 'from-blue-100 to-blue-50',
  hopeful: 'from-green-100 to-green-50',
  angry: 'from-red-100 to-red-50',
  nostalgic: 'from-amber-100 to-amber-50'
};

export default function Cartas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <Mail className="w-16 h-16 text-amber-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-amber-900">Cartas Não Enviadas</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Palavras que nunca chegaram ao destino. Sentimentos guardados em papel amarelado. 
              Mensagens escritas com o coração, mas nunca entregues.
            </p>
          </motion.div>

          <div className="space-y-12">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${moodColors[letter.mood]} rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform`}
              >
                {/* Cabeçalho da carta */}
                <div className="border-b-2 border-gray-300 pb-4 mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-gray-600">De:</p>
                      <p className="font-bold text-lg text-gray-800">{letter.from}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Para:</p>
                      <p className="font-bold text-lg text-gray-800">{letter.to}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {letter.location}
                    </div>
                    <div>{letter.date}</div>
                  </div>
                </div>

                {/* Conteúdo da carta */}
                <div className="font-journal text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                  {letter.content}
                </div>

                {/* Selo "Não Enviada" */}
                <div className="mt-6 flex justify-end">
                  <div className="inline-block border-2 border-red-500 text-red-500 px-4 py-2 rounded transform rotate-12 opacity-50">
                    <p className="font-bold text-sm">NÃO ENVIADA</p>
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
            className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg"
          >
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-xl font-handwriting text-gray-700 mb-2">
              "As palavras não ditas pesam mais que as faladas."
            </p>
            <p className="text-sm text-gray-600 italic">
              Algumas mensagens nunca chegam ao destino, mas isso não as torna menos verdadeiras.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
