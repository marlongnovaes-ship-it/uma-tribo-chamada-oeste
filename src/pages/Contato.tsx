import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Usando FormSubmit.co - serviço gratuito que envia emails via formulário
      const response = await fetch('https://formsubmit.co/ajax/xvmarlon@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
          _subject: `Nova mensagem do site Uma Tribo Chamada Oeste - ${formData.nome}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' });
        
        // Resetar status após 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Não foi possível enviar sua mensagem. Por favor, tente novamente ou envie um email diretamente para xvmarlon@gmail.com');
      console.error('Erro:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="flex justify-center mb-4">
            <Mail className="w-16 h-16 text-amber-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
            Entre em Contato
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Gostou do site? Tem alguma sugestão ou quer compartilhar suas reflexões sobre Life is Strange 2? 
            Envie uma mensagem e vamos conversar sobre essa jornada emocionante.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="flex items-center text-amber-900 font-semibold mb-2">
                  <User className="w-5 h-5 mr-2" />
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Como você se chama?"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center text-amber-900 font-semibold mb-2">
                  <Mail className="w-5 h-5 mr-2" />
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="flex items-center text-amber-900 font-semibold mb-2">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Sua Mensagem
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={6}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Compartilhe seus pensamentos, sugestões ou reflexões..."
                  disabled={status === 'sending'}
                />
              </div>

              {/* Mensagens de Status */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-800 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-semibold">Mensagem enviada com sucesso! Obrigado pelo contato.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-2 p-4 bg-red-100 border-2 border-red-500 rounded-lg text-red-800 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {/* Botão de Enviar */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informação Adicional */}
          <div className="mt-8 text-center text-amber-800 animate-fadeIn">
            <p className="text-sm">
              Você também pode enviar um email diretamente para:{' '}
              <a 
                href="mailto:xvmarlon@gmail.com" 
                className="font-semibold text-amber-900 hover:text-amber-700 underline"
              >
                xvmarlon@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
