import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          // Navbar
          nav: {
            home: 'Início',
            blog: 'Diário',
            gallery: 'Galeria',
            choices: 'Escolhas',
            tattoo: 'Tatuagem',
            quotes: 'Citações',
            letters: 'Cartas',
            about: 'Sobre',
            contact: 'Contato'
          },
          // Home Page
          home: {
            title: 'Uma Tribo Chamada Oeste',
            subtitle: 'Histórias da estrada. Encontros que mudam vidas. A jornada nunca termina.',
            readBlog: 'Ler o Blog',
            aboutUs: 'Sobre Nós',
            sectionTitle: 'A Estrada Nunca Termina',
            sectionDesc: 'Este blog é sobre liberdade, encontros inesperados e as histórias que encontramos pelo caminho. Inspirado nas viagens de Brody Holloway e Cassidy, dois espíritos livres que escolheram a estrada como lar.',
            sectionDesc2: 'Aqui você encontrará relatos de viagens, reflexões sobre comunidades alternativas, e a filosofia de que tudo é político quando você vive com os olhos abertos.',
            blogTitle: 'Blog de Viagens',
            blogDesc: 'Histórias autênticas da estrada, escritas com o coração e a honestidade de quem vive cada momento.',
            placesTitle: 'Lugares Reais',
            placesDesc: 'De Coffeyville a Humboldt County, cada local tem uma história e uma lição para ensinar.',
            peopleTitle: 'Pessoas Verdadeiras',
            peopleDesc: 'Conhecendo Brody, Cassidy e outros viajantes que escolheram viver fora do convencional.',
            quote: 'Tudo é político, Sean. O que você e seu irmão têm é a coisa mais importante. A estrada nunca termina.',
            ctaTitle: 'Pronto para a Jornada?',
            ctaDesc: 'Explore os posts do blog e descubra as histórias que moldaram a filosofia de viver livre na estrada.',
            startReading: 'Começar a Ler'
          },
          // About Page
          about: {
            title: 'Sobre Uma Tribo Chamada Oeste',
            intro: 'Este blog é uma homenagem aos espíritos livres que escolheram a estrada como lar. Inspirado nas jornadas de personagens como Brody Holloway, Sean e Daniel Diaz, Cassidy e tantos outros que aparecem em Life is Strange 2.',
            philosophyTitle: 'A Filosofia da Estrada',
            philosophyText: '"Tudo é político" - essa frase de Brody resume a essência deste espaço. Quando você vive à margem da sociedade, cada escolha se torna um ato político. Escolher a liberdade ao invés da segurança. Escolher a experiência ao invés das posses. Escolher viver de verdade ao invés de apenas existir.',
            storiesTitle: 'As Histórias',
            storiesIntro: 'Cada post neste blog é inspirado nos encontros, nas jornadas e nas filosofias dos personagens de Life is Strange 2. São histórias sobre:',
            story1: 'Dois irmãos fugindo em busca de um lar',
            story2: 'Uma amiga que ficou para trás, mas nunca desistiu',
            story3: 'Comunidades alternativas que criam seus próprios mundos',
            story4: 'A busca por liberdade num mundo que valoriza a conformidade',
            story5: 'Memórias e conexões que transcendem a distância',
            cassidyTitle: 'Cassidy - A Alma Livre',
            cassidyP1: 'Lucy Rose "Cassidy" Jones é uma das personagens mais marcantes de Life is Strange 2. Viajante, musicista e espírito livre, ela representa tudo que a vida na estrada pode ser: liberdade, autenticidade e recusa em se conformar.',
            cassidyP2: 'Com seu cabelo roxo em undercut, guitarra nas costas e corpo coberto de tatuagens, Cassidy é a personificação da filosofia nômade. Cada tatuagem conta uma história: o lobo sob o peito simboliza liberdade e lealdade, o dragão na manga representa força e transformação, a árvore arrancada mostra suas raízes cortadas, e as vespas ao redor de flores lembram que até a beleza pode picar.',
            cassidyP3: 'Fugindo de um lar tóxico no Texas - onde seu pai viciado em metanfetamina e seu irmão racista a ameaçaram por namorar alguém que não era branco - Cassidy escolheu a estrada. Ela viaja com Finn, Hannah e Penny, formando uma família escolhida baseada em respeito mútuo, não em sangue.',
            cassidyP4: '"Eu não vou me estabelecer, de jeito nenhum! É assim que a merda começa, sabe? Quando você começa a ter coisas suas. Coisas que você precisa defender." Essa frase resume sua filosofia: verdadeira liberdade significa não ter nada que te prenda.',
            cassidyP5: 'Em Humboldt County, Cassidy trabalha na fazenda de cannabis junto com Sean e Daniel, sempre sonhando com algo maior, sempre reclamando do trabalho chato, mas sempre leal aos amigos. Ela canta ao redor da fogueira, compartilha histórias, e oferece a Sean uma tatuagem de lobo - símbolo de pertencimento à tribo.',
            tribeTitle: 'A Tribo',
            tribeP1: 'Uma tribo não é definida por sangue ou geografia. É definida por valores compartilhados, por experiências vividas juntos, por escolher estar presente uns para os outros.',
            tribeP2: 'A "Tribo Chamada Oeste" representa todos aqueles que escolheram o caminho menos trilhado. Os viajantes, os sonhadores, os que se recusam a aceitar o mundo como ele é e lutam para criar algo melhor.',
            gameTitle: 'Sobre Life is Strange 2',
            gameP1: 'Life is Strange 2 é um jogo episódico desenvolvido pela Dontnod Entertainment e publicado pela Square Enix. Lançado entre 2018 e 2019, conta a história de Sean e Daniel Diaz, dois irmãos que fogem de Seattle após um incidente trágico, viajando em direção ao México.',
            gameP2: 'O jogo explora temas profundos como racismo, injustiça social, família, crescimento, e as consequências de nossas escolhas. É uma obra que toca o coração e faz pensar sobre o que realmente importa na vida.',
            quote: 'A estrada nunca termina. E enquanto houver pessoas dispostas a viver com os olhos abertos, a tribo continuará crescendo.',
            legalTitle: 'Aviso Legal',
            legalText: 'Este é um projeto de fã não oficial e não comercial. Life is Strange™ e todos os personagens relacionados são marcas registradas da Square Enix Co., Ltd. Este blog é uma homenagem criativa e não tem afiliação oficial com a Square Enix ou Dontnod Entertainment.'
          },
          // Blog Page
          blog: {
            title: 'Diário de Viagem',
            subtitle: 'Histórias da estrada, reflexões sobre liberdade, e encontros que mudam vidas.',
            readMore: 'Ler mais'
          },
          // Gallery Page
          gallery: {
            title: 'Galeria de Arte do Sean',
            subtitle: 'Através dos olhos de um artista em fuga. Cada desenho é uma janela para os sentimentos, memórias e momentos que definiram a jornada de Sean e Daniel.',
            note: 'Sean Diaz sempre foi um artista. Mesmo em fuga, mesmo com medo, ele nunca parou de desenhar. Seus desenhos são testemunhos visuais da jornada - capturando não apenas rostos e lugares, mas emoções e memórias.',
            location: 'Local',
            emotion: 'Emoção',
            close: 'Fechar'
          },
          // Contact Page
          contact: {
            title: 'Entre em Contato',
            subtitle: 'Gostou do site? Tem alguma sugestão ou quer compartilhar suas reflexões sobre Life is Strange 2? Envie uma mensagem e vamos conversar sobre essa jornada emocionante.',
            nameLabel: 'Seu Nome',
            namePlaceholder: 'Como você se chama?',
            emailLabel: 'Seu Email',
            emailPlaceholder: 'seu@email.com',
            messageLabel: 'Sua Mensagem',
            messagePlaceholder: 'Compartilhe seus pensamentos, sugestões ou reflexões...',
            sendButton: 'Enviar Mensagem',
            sending: 'Enviando...',
            successMessage: 'Mensagem enviada com sucesso! Obrigado pelo contato.',
            errorMessage: 'Não foi possível enviar sua mensagem. Por favor, tente novamente ou envie um email diretamente para',
            directEmail: 'Você também pode enviar um email diretamente para:'
          },
          // Footer
          footer: {
            title: 'Uma Tribo Chamada Oeste',
            year: '2025',
            fanTribute: 'Fan tribute inspirado em Life is Strange 2',
            trademark: 'Life is Strange™ é marca registrada da Square Enix Co., Ltd.',
            disclaimer: 'Este é um projeto de fã não oficial e não comercial.',
            createdWith: 'Criado com',
            by: 'por'
          }
        }
      },
      en: {
        translation: {
          // Navbar
          nav: {
            home: 'Home',
            blog: 'Journal',
            gallery: 'Gallery',
            choices: 'Choices',
            tattoo: 'Tattoo',
            quotes: 'Quotes',
            letters: 'Letters',
            about: 'About',
            contact: 'Contact'
          },
          // Home Page
          home: {
            title: 'A Tribe Called West',
            subtitle: 'Road stories. Life-changing encounters. The journey never ends.',
            readBlog: 'Read the Blog',
            aboutUs: 'About Us',
            sectionTitle: 'The Road Never Ends',
            sectionDesc: 'This blog is about freedom, unexpected encounters, and the stories we find along the way. Inspired by the travels of Brody Holloway and Cassidy, two free spirits who chose the road as their home.',
            sectionDesc2: 'Here you will find travel stories, reflections on alternative communities, and the philosophy that everything is political when you live with your eyes open.',
            blogTitle: 'Travel Blog',
            blogDesc: 'Authentic road stories, written with the heart and honesty of those who live every moment.',
            placesTitle: 'Real Places',
            placesDesc: 'From Coffeyville to Humboldt County, each location has a story and a lesson to teach.',
            peopleTitle: 'Real People',
            peopleDesc: 'Meeting Brody, Cassidy and other travelers who chose to live outside the conventional.',
            quote: 'Everything is political, Sean. What you and your brother have is the most important thing. The road never ends.',
            ctaTitle: 'Ready for the Journey?',
            ctaDesc: 'Explore the blog posts and discover the stories that shaped the philosophy of living free on the road.',
            startReading: 'Start Reading'
          },
          // About Page
          about: {
            title: 'About A Tribe Called West',
            intro: 'This blog is a tribute to the free spirits who chose the road as their home. Inspired by the journeys of characters like Brody Holloway, Sean and Daniel Diaz, Cassidy and so many others who appear in Life is Strange 2.',
            philosophyTitle: 'The Philosophy of the Road',
            philosophyText: '"Everything is political" - this phrase from Brody sums up the essence of this space. When you live on the margins of society, every choice becomes a political act. Choosing freedom over security. Choosing experience over possessions. Choosing to truly live instead of just existing.',
            storiesTitle: 'The Stories',
            storiesIntro: 'Each post on this blog is inspired by the encounters, journeys and philosophies of the characters from Life is Strange 2. These are stories about:',
            story1: 'Two brothers running away in search of a home',
            story2: 'A friend who was left behind but never gave up',
            story3: 'Alternative communities that create their own worlds',
            story4: 'The search for freedom in a world that values conformity',
            story5: 'Memories and connections that transcend distance',
            cassidyTitle: 'Cassidy - The Free Soul',
            cassidyP1: 'Lucy Rose "Cassidy" Jones is one of the most memorable characters in Life is Strange 2. A traveler, musician and free spirit, she represents everything that life on the road can be: freedom, authenticity and refusal to conform.',
            cassidyP2: 'With her purple undercut hair, guitar on her back and body covered in tattoos, Cassidy is the embodiment of nomadic philosophy. Each tattoo tells a story: the wolf under her chest symbolizes freedom and loyalty, the dragon on her sleeve represents strength and transformation, the uprooted tree shows her severed roots, and the wasps around flowers remind us that even beauty can sting.',
            cassidyP3: 'Fleeing from a toxic home in Texas - where her meth-addicted father and racist brother threatened her for dating someone who wasn\'t white - Cassidy chose the road. She travels with Finn, Hannah and Penny, forming a chosen family based on mutual respect, not blood.',
            cassidyP4: '"I\'m not gonna settle down, no way! That\'s how the shit starts, you know? When you start having your own things. Things you need to defend." This phrase sums up her philosophy: true freedom means having nothing that ties you down.',
            cassidyP5: 'In Humboldt County, Cassidy works on the cannabis farm alongside Sean and Daniel, always dreaming of something bigger, always complaining about the boring work, but always loyal to her friends. She sings around the campfire, shares stories, and offers Sean a wolf tattoo - a symbol of belonging to the tribe.',
            tribeTitle: 'The Tribe',
            tribeP1: 'A tribe is not defined by blood or geography. It is defined by shared values, by experiences lived together, by choosing to be present for each other.',
            tribeP2: 'The "Tribe Called West" represents all those who chose the road less traveled. The travelers, the dreamers, those who refuse to accept the world as it is and fight to create something better.',
            gameTitle: 'About Life is Strange 2',
            gameP1: 'Life is Strange 2 is an episodic game developed by Dontnod Entertainment and published by Square Enix. Released between 2018 and 2019, it tells the story of Sean and Daniel Diaz, two brothers who flee Seattle after a tragic incident, traveling towards Mexico.',
            gameP2: 'The game explores deep themes such as racism, social injustice, family, growth, and the consequences of our choices. It is a work that touches the heart and makes you think about what really matters in life.',
            quote: 'The road never ends. And as long as there are people willing to live with their eyes open, the tribe will continue to grow.',
            legalTitle: 'Legal Notice',
            legalText: 'This is an unofficial and non-commercial fan project. Life is Strange™ and all related characters are registered trademarks of Square Enix Co., Ltd. This blog is a creative tribute and has no official affiliation with Square Enix or Dontnod Entertainment.'
          },
          // Blog Page
          blog: {
            title: 'Travel Journal',
            subtitle: 'Road stories, reflections on freedom, and life-changing encounters.',
            readMore: 'Read more'
          },
          // Gallery Page
          gallery: {
            title: "Sean's Art Gallery",
            subtitle: 'Through the eyes of an artist on the run. Each drawing is a window into the feelings, memories and moments that defined Sean and Daniel\'s journey.',
            note: 'Sean Diaz has always been an artist. Even on the run, even afraid, he never stopped drawing. His drawings are visual testimonies of the journey - capturing not just faces and places, but emotions and memories.',
            location: 'Location',
            emotion: 'Emotion',
            close: 'Close'
          },
          // Contact Page
          contact: {
            title: 'Get in Touch',
            subtitle: 'Did you like the site? Have any suggestions or want to share your thoughts about Life is Strange 2? Send a message and let\'s talk about this exciting journey.',
            nameLabel: 'Your Name',
            namePlaceholder: 'What\'s your name?',
            emailLabel: 'Your Email',
            emailPlaceholder: 'your@email.com',
            messageLabel: 'Your Message',
            messagePlaceholder: 'Share your thoughts, suggestions or reflections...',
            sendButton: 'Send Message',
            sending: 'Sending...',
            successMessage: 'Message sent successfully! Thank you for contacting us.',
            errorMessage: 'Unable to send your message. Please try again or send an email directly to',
            directEmail: 'You can also send an email directly to:'
          },
          // Footer
          footer: {
            title: 'A Tribe Called West',
            year: '2025',
            fanTribute: 'Fan tribute inspired by Life is Strange 2',
            trademark: 'Life is Strange™ is a registered trademark of Square Enix Co., Ltd.',
            disclaimer: 'This is an unofficial and non-commercial fan project.',
            createdWith: 'Created with',
            by: 'by'
          }
        }
      }
    },
    fallbackLng: 'pt',
    lng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

