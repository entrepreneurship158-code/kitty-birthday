import React, { useState, useEffect } from 'react';
import MapleTree from '@/components/MapleTree';
import KittyCharacter from '@/components/KittyCharacter';

interface Page2Props {
  onComplete: () => void;
}

const Page2: React.FC<Page2Props> = ({ onComplete }) => {
  const [heartClicked, setHeartClicked] = useState(false);
  const [heartSinking, setHeartSinking] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showKitties, setShowKitties] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Fade in on mount
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const handleHeartClick = () => {
    if (heartClicked) return;

    setHeartClicked(true);
    setHeartSinking(true);

    // Show tree after heart sinks
    setTimeout(() => {
      setShowTree(true);
    }, 1500);

    // Show kitties when tree is grown
    setTimeout(() => {
      setShowKitties(true);
    }, 3500);

    // Start transition to next page
    setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    // Complete transition
    setTimeout(() => {
      onComplete();
    }, 6500);
  };

  const handleTreeGrowComplete = () => {
    // Tree growth complete callback
  };

  return (
    <div
      className={`min-h-screen bg-sky-gradient flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      } ${fadeOut ? 'opacity-0' : ''}`}
    >
      {/* Sky background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft clouds */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-card/60"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${30 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${5 + Math.random() * 25}%`,
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full">
        {/* Heart (initial state) */}
        {!showTree && (
          <button
            onClick={handleHeartClick}
            className={`relative transition-all duration-500 focus:outline-none ${
              heartSinking ? 'animate-heart-sink' : 'animate-pulse-glow hover:scale-110'
            }`}
            disabled={heartClicked}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              className="text-primary drop-shadow-lg"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
          </button>
        )}

        {/* Click instruction */}
        {!heartClicked && (
          <p className="mt-8 text-muted-foreground font-handwriting text-xl animate-pulse">
            💗 Click the heart 💗
          </p>
        )}

        {/* Tree */}
        {showTree && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[60vh]">
            <MapleTree isGrowing={showTree} onGrowComplete={handleTreeGrowComplete} />
          </div>
        )}
      </div>

      {/* Ground with kitties */}
      <div className="relative z-20 w-full">
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ground via-ground/80 to-transparent" />

        {/* Grass details */}
        <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-around px-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-ground rounded-t-full animate-leaf-sway"
              style={{
                height: `${8 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Kitties on ground */}
        {showKitties && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 md:gap-16 px-4">
            <div className="animate-fade-slide-up" style={{ animationDelay: '0ms' }}>
              <KittyCharacter size="md" variant="sitting" />
            </div>
            <div className="animate-fade-slide-up" style={{ animationDelay: '200ms' }}>
              <KittyCharacter size="lg" variant="waving" />
            </div>
            <div className="animate-fade-slide-up" style={{ animationDelay: '400ms' }}>
              <KittyCharacter size="md" variant="sitting" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2;
