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
