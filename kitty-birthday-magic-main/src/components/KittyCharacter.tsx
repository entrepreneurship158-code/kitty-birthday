import React from 'react';

interface KittyCharacterProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'sitting' | 'waving';
  className?: string;
  letter?: string;
  letterColor?: string;
  isCarrying?: boolean;
  delay?: number;
}

const KittyCharacter: React.FC<KittyCharacterProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  letter,
  letterColor = 'hsl(350, 80%, 70%)',
  isCarrying = false,
  delay = 0,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
  };

  const sizeValue = {
    sm: 48,
    md: 80,
    lg: 112,
  };

  const s = sizeValue[size];

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Ears */}
        <polygon
          points="15,35 25,10 40,30"
          fill="hsl(0, 0%, 100%)"
          stroke="hsl(350, 30%, 85%)"
          strokeWidth="2"
        />
        <polygon
          points="85,35 75,10 60,30"
          fill="hsl(0, 0%, 100%)"
          stroke="hsl(350, 30%, 85%)"
          strokeWidth="2"
        />
        {/* Inner ears */}
        <polygon points="20,30 27,18 35,28" fill="hsl(350, 80%, 85%)" />
        <polygon points="80,30 73,18 65,28" fill="hsl(350, 80%, 85%)" />

        {/* Face */}
        <ellipse
          cx="50"
          cy="55"
          rx="38"
          ry="35"
          fill="hsl(0, 0%, 100%)"
          stroke="hsl(350, 30%, 85%)"
          strokeWidth="2"
        />

        {/* Eyes - with blink animation */}
        <g className="animate-blink" style={{ transformOrigin: '35px 50px' }}>
          <ellipse cx="35" cy="50" rx="4" ry="5" fill="hsl(0, 0%, 15%)" />
        </g>
        <g className="animate-blink" style={{ transformOrigin: '65px 50px', animationDelay: '0.1s' }}>
          <ellipse cx="65" cy="50" rx="4" ry="5" fill="hsl(0, 0%, 15%)" />
        </g>

        {/* Eye highlights */}
        <circle cx="33" cy="48" r="1.5" fill="white" />
        <circle cx="63" cy="48" r="1.5" fill="white" />

        {/* Nose */}
        <ellipse cx="50" cy="58" rx="3" ry="2" fill="hsl(45, 80%, 60%)" />

        {/* Whiskers */}
        <line x1="12" y1="52" x2="28" y2="55" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />
        <line x1="12" y1="58" x2="28" y2="58" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />
        <line x1="12" y1="64" x2="28" y2="61" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />
        <line x1="88" y1="52" x2="72" y2="55" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />
        <line x1="88" y1="58" x2="72" y2="58" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />
        <line x1="88" y1="64" x2="72" y2="61" stroke="hsl(350, 30%, 70%)" strokeWidth="1.5" />

        {/* Blush */}
        <ellipse cx="25" cy="60" rx="6" ry="4" fill="hsl(350, 80%, 85%)" opacity="0.6" />
        <ellipse cx="75" cy="60" rx="6" ry="4" fill="hsl(350, 80%, 85%)" opacity="0.6" />

        {/* Bow */}
        <ellipse cx="78" cy="25" rx="12" ry="8" fill="hsl(350, 85%, 65%)" />
        <ellipse cx="78" cy="25" rx="4" ry="4" fill="hsl(350, 90%, 55%)" />
        <ellipse cx="68" cy="22" rx="6" ry="4" fill="hsl(350, 85%, 65%)" transform="rotate(-20, 68, 22)" />
        <ellipse cx="88" cy="22" rx="6" ry="4" fill="hsl(350, 85%, 65%)" transform="rotate(20, 88, 22)" />

        {/* Body for sitting variant */}
        {variant === 'sitting' && (
          <>
            <ellipse cx="50" cy="88" rx="25" ry="12" fill="hsl(0, 0%, 100%)" stroke="hsl(350, 30%, 85%)" strokeWidth="2" />
          </>
        )}

        {/* Waving arm */}
        {variant === 'waving' && (
          <g className="animate-wave" style={{ transformOrigin: '75px 70px' }}>
            <ellipse cx="82" cy="65" rx="8" ry="12" fill="hsl(0, 0%, 100%)" stroke="hsl(350, 30%, 85%)" strokeWidth="2" transform="rotate(30, 82, 65)" />
          </g>
        )}
      </svg>

      {/* Letter being carried */}
      {letter && isCarrying && (
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-3xl font-bold"
          style={{ color: letterColor }}
        >
          {letter}
        </div>
      )}
    </div>
  );
};

export default KittyCharacter;
