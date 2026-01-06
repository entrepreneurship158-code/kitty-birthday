import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 12 + Math.random() * 16,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setHearts(initialHearts);

    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart: Heart = {
          id: Date.now(),
          x: Math.random() * 100,
          size: 12 + Math.random() * 16,
          delay: 0,
          duration: 3 + Math.random() * 2,
        };
        return [...prev.slice(-14), newHeart];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.x}%`,
            bottom: '-20px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            className="text-primary"
            style={{ opacity: 0.4 + Math.random() * 0.3 }}
          >
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
