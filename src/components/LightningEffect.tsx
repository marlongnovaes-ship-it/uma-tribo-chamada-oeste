import { useEffect, useState } from 'react';

export default function LightningEffect() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      // Relâmpago aleatório entre 10-30 segundos
      const randomDelay = Math.random() * 20000 + 10000;

      setTimeout(() => {
        // Flash principal
        setFlash(true);
        
        // Flash rápido (simulando relâmpago real)
        setTimeout(() => setFlash(false), 50);
        setTimeout(() => setFlash(true), 100);
        setTimeout(() => setFlash(false), 150);
        
        // Às vezes um segundo flash
        if (Math.random() > 0.5) {
          setTimeout(() => setFlash(true), 400);
          setTimeout(() => setFlash(false), 450);
        }

        // Próximo relâmpago
        triggerLightning();
      }, randomDelay);
    };

    triggerLightning();
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-75 ${
        flash ? 'opacity-30' : 'opacity-0'
      }`}
      style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(200,220,255,0.4))',
      }}
    />
  );
}
