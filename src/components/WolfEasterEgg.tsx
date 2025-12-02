import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WolfEasterEgg() {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 1) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2000);
    }

    if (newCount === 3) {
      setShowSecret(true);
      // Resetar após 10 segundos
      setTimeout(() => {
        setShowSecret(false);
        setClickCount(0);
      }, 10000);
    }
  };

  return (
    <>
      {/* Ícone do Lobo clicável */}
      <motion.div
        onClick={handleClick}
        className="fixed bottom-24 left-6 cursor-pointer z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={clickCount > 0 && clickCount < 3 ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="text-6xl filter drop-shadow-lg hover:drop-shadow-2xl transition-all">
            🐺
          </div>
          
          {/* Hint após primeiro clique */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-900 text-amber-100 px-3 py-1 rounded-full text-xs font-semibold"
              >
                Mais {3 - clickCount}x... 🤔
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modal do Easter Egg */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowSecret(false);
              setClickCount(0);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-amber-900 to-orange-900 p-8 rounded-2xl max-w-2xl border-4 border-amber-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="text-8xl"
                >
                  🐺
                </motion.div>
                
                <h2 className="text-4xl font-bold text-amber-100 font-serif">
                  Você Encontrou o Segredo da Tribo!
                </h2>
                
                <div className="bg-black/30 p-6 rounded-lg border-2 border-amber-600/50">
                  <p className="text-amber-200 text-lg italic leading-relaxed">
                    "O lobo não pertence a nenhum lugar, mas está em casa em todos os lugares. 
                    Assim como Sean e Daniel, assim como todos nós que escolhemos a estrada."
                  </p>
                  <p className="text-amber-400 mt-4 font-semibold">
                    — Cassidy, em uma noite estrelada em Humboldt County
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-amber-300">
                  <span className="text-2xl">✨</span>
                  <p className="text-sm">
                    Parabéns por explorar! Você é um verdadeiro membro da tribo.
                  </p>
                  <span className="text-2xl">✨</span>
                </div>

                <p className="text-xs text-amber-400/70">
                  (Clique em qualquer lugar para fechar)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
