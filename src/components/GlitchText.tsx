import { useState, useEffect } from 'react';

export default function GlitchText({ text, className = "" }: { text: string, className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -translate-x-[2px] text-neon-purple opacity-70 animate-pulse mix-blend-screen">{text}</span>
          <span className="absolute top-0 left-0 translate-x-[2px] text-neon-blue opacity-70 animate-pulse mix-blend-screen">{text}</span>
        </>
      )}
    </span>
  );
}
