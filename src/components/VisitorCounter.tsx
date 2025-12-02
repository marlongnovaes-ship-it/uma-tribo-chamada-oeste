import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Buscar contador do localStorage
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    
    // Incrementar apenas se for uma nova visita (verificar por sessão)
    const hasVisitedThisSession = sessionStorage.getItem('hasVisited');
    
    if (!hasVisitedThisSession) {
      const newCount = currentCount + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
      
      // Animar o contador
      setIsAnimating(true);
      let start = currentCount;
      const end = newCount;
      const duration = 2000;
      const increment = (end - start) / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
          setIsAnimating(false);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else {
      setCount(currentCount);
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-amber-800/50 to-orange-800/50 rounded-lg border-2 border-amber-600/30 backdrop-blur-sm">
      <Users className={`w-6 h-6 text-amber-300 ${isAnimating ? 'animate-pulse' : ''}`} />
      <div className="flex flex-col items-start">
        <span className="text-xs text-amber-300 uppercase tracking-wider font-semibold">
          Viajantes que passaram por aqui
        </span>
        <span className={`text-2xl font-bold text-amber-100 tabular-nums ${isAnimating ? 'animate-pulse' : ''}`}>
          {count.toLocaleString('pt-BR')}
        </span>
      </div>
    </div>
  );
}
