import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volume baixo (30%)
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-lis2-rust hover:bg-lis2-rust text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
        title={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
        <Music className="w-5 h-5 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isPlaying ? "Pausar" : "Tocar"} "Life is Strange 2 OST"
        </span>
      </button>

      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        <source src="/music/lis2-soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Indicador visual quando tocando */}
      {isPlaying && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
}
