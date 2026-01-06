import React, { useState, useEffect, useCallback } from 'react';
import KittyCharacter from '@/components/KittyCharacter';

interface Page1Props {
  onComplete: () => void;
}

const LETTERS = 'HAPPY BIRTHDAY'.split('');
const LETTER_COLORS = [
  'hsl(350, 80%, 70%)',   // H - pink
  'hsl(270, 60%, 75%)',   // A - lavender
  'hsl(45, 90%, 65%)',    // P - yellow
  'hsl(160, 55%, 65%)',   // P - mint
  'hsl(200, 75%, 70%)',   // Y - sky
  'transparent',           // space
  'hsl(25, 90%, 75%)',    // B - peach
  'hsl(15, 85%, 70%)',    // I - coral
  'hsl(350, 80%, 70%)',   // R - pink
  'hsl(270, 60%, 75%)',   // T - lavender
  'hsl(45, 90%, 65%)',    // H - yellow
  'hsl(160, 55%, 65%)',   // D - mint
  'hsl(200, 75%, 70%)',   // A - sky
  'hsl(25, 90%, 75%)',    // Y - peach
];

const Page1: React.FC<Page1Props> = ({ onComplete }) => {
  const [showLetters, setShowLetters] = useState(false);
  const [clickedLetters, setClickedLetters] = useState<number[]>([]);
  const [showKitties, setShowKitties] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start letter animation after mount
    const timer = setTimeout(() => setShowLetters(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = useCallback(() => {
    if (isFloating || showKitties) return;

    // Show kitties
    setShowKitties(true);

    // Start floating after kitties appear
    setTimeout(() => {
      setIsFloating(true);
    }, 1000);

    // Fade out and transition
    setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete transition
    setTimeout(() => {
      onComplete();
    }, 4000);
  }, [isFloating, showKitties, onComplete]);

  return (
    <div
      className={`min-h-screen bg-kawaii flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClick}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Title letters */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 max-w-4xl px-4">
          {LETTERS.map((letter, index) => (
            <div
              key={index}
              className={`relative ${letter === ' ' ? 'w-4 md:w-8' : ''}`}
            >
              {/* Kitty carrying letter */}
              {showKitties && letter !== ' ' && (
                <div
                  className={`absolute -bottom-16 left-1/2 -translate-x-1/2 animate-kitty-appear ${
                    isFloating ? 'animate-float-up' : ''
                  }`}
                  style={{
                    animationDelay: isFloating ? `${index * 50}ms` : `${index * 80}ms`,
                  }}
                >
                  <KittyCharacter
                    size="sm"
                    letter={letter}
                    letterColor={LETTER_COLORS[index]}
                    isCarrying={true}
                    delay={index * 80}
                  />
                </div>
              )}

              {/* Letter */}
              {letter !== ' ' && (
                <span
                  className={`inline-block font-display text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-300 ${
                    showLetters ? 'animate-bounce-in' : 'opacity-0'
                  } ${isFloating ? 'opacity-0' : ''}`}
                  style={{
                    color: LETTER_COLORS[index],
                    animationDelay: `${index * 80}ms`,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  {letter}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Click instruction */}
        {!showKitties && (
          <p className="mt-12 text-center text-muted-foreground font-handwriting text-xl md:text-2xl animate-pulse">
            ✨ Click anywhere to continue ✨
          </p>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pastel-cream to-transparent" />
    </div>
  );
};

export default Page1;
