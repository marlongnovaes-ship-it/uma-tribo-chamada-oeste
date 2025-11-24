import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="vintage-paper diary-page rounded-lg ambient-lighting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-8 text-amber-900">Sobre Uma Tribo Chamada Oeste</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Este blog é uma homenagem aos espíritos livres que escolheram a estrada como lar. 
                Inspirado nas jornadas de personagens como Brody Holloway, Sean e Daniel Diaz, 
                Cassidy e tantos outros que aparecem em <strong>Life is Strange 2</strong>.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">A Filosofia da Estrada</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Tudo é político" - essa frase de Brody resume a essência deste espaço. 
                Quando você vive à margem da sociedade, cada escolha se torna um ato político. 
                Escolher a liberdade ao invés da segurança. Escolher a experiência ao invés das posses. 
                Escolher viver de verdade ao invés de apenas existir.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">As Histórias</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cada post neste blog é inspirado nos encontros, nas jornadas e nas filosofias 
                dos personagens de Life is Strange 2. São histórias sobre:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
                <li>Dois irmãos fugindo em busca de um lar</li>
                <li>Uma amiga que ficou para trás, mas nunca desistiu</li>
                <li>Comunidades alternativas que criam seus próprios mundos</li>
                <li>A busca por liberdade num mundo que valoriza a conformidade</li>
                <li>Memórias e conexões que transcendem a distância</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">Cassidy - A Alma Livre</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Lucy Rose "Cassidy" Jones</strong> é uma das personagens mais marcantes de Life is Strange 2. 
                Viajante, musicista e espírito livre, ela representa tudo que a vida na estrada pode ser: 
                liberdade, autenticidade e recusa em se conformar.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com seu cabelo roxo em undercut, guitarra nas costas e corpo coberto de tatuagens, 
                Cassidy é a personificação da filosofia nômade. Cada tatuagem conta uma história: 
                o <strong>lobo sob o peito</strong> simboliza liberdade e lealdade, o <strong>dragão na manga</strong> 
                representa força e transformação, a <strong>árvore arrancada</strong> mostra suas raízes cortadas, 
                e as <strong>vespas ao redor de flores</strong> lembram que até a beleza pode picar.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fugindo de um lar tóxico no Texas - onde seu pai viciado em metanfetamina e seu irmão 
                racista a ameaçaram por namorar alguém que não era branco - Cassidy escolheu a estrada. 
                Ela viaja com Finn, Hannah e Penny, formando uma família escolhida baseada em respeito mútuo, 
                não em sangue.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Eu não vou me estabelecer, de jeito nenhum! É assim que a merda começa, sabe? 
                Quando você começa a ter coisas suas. Coisas que você precisa defender." 
                Essa frase resume sua filosofia: verdadeira liberdade significa não ter nada que te prenda.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Em Humboldt County, Cassidy trabalha na fazenda de cannabis junto com Sean e Daniel, 
                sempre sonhando com algo maior, sempre reclamando do trabalho chato, mas sempre leal 
                aos amigos. Ela canta ao redor da fogueira, compartilha histórias, e oferece a Sean 
                uma tatuagem de lobo - símbolo de pertencimento à tribo.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">A Tribo</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Uma tribo não é definida por sangue ou geografia. É definida por valores compartilhados, 
                por experiências vividas juntos, por escolher estar presente uns para os outros.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A "Tribo Chamada Oeste" representa todos aqueles que escolheram o caminho menos trilhado. 
                Os viajantes, os sonhadores, os que se recusam a aceitar o mundo como ele é e lutam 
                para criar algo melhor.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">Sobre Life is Strange 2</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Life is Strange 2</strong> é um jogo episódico desenvolvido pela Dontnod Entertainment 
                e publicado pela Square Enix. Lançado entre 2018 e 2019, conta a história de Sean e Daniel Diaz, 
                dois irmãos que fogem de Seattle após um incidente trágico, viajando em direção ao México.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O jogo explora temas profundos como racismo, injustiça social, família, crescimento, 
                e as consequências de nossas escolhas. É uma obra que toca o coração e faz pensar sobre 
                o que realmente importa na vida.
              </p>

              <div className="bg-amber-100 p-6 rounded-lg mt-12">
                <p className="text-center text-gray-700 italic">
                  "A estrada nunca termina. E enquanto houver pessoas dispostas a viver com os olhos abertos, 
                  a tribo continuará crescendo."
                </p>
                <p className="text-center text-amber-700 font-semibold mt-4">— Brody Holloway</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-amber-800">Aviso Legal</h2>
              <p className="text-sm text-gray-600 mb-4">
                Este é um projeto de fã não oficial e não comercial. <strong>Life is Strange™</strong> e 
                todos os personagens relacionados são marcas registradas da Square Enix Co., Ltd. 
                Este blog é uma homenagem criativa e não tem afiliação oficial com a Square Enix ou Dontnod Entertainment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
