import React from 'react';

interface PhotoFrameProps {
  src?: string;
  alt?: string;
  delay?: number;
  className?: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({
  src,
  alt = 'Birthday memory',
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`relative group animate-photo-reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative frame border */}
      <div className="absolute -inset-2 bg-gradient-to-br from-primary via-kitty-blush to-accent rounded-2xl opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Main frame */}
      <div className="relative bg-card rounded-xl overflow-hidden photo-frame transition-transform duration-300 group-hover:scale-[1.02] group-hover:-rotate-1">
        {/* Inner shadow effect */}
        <div className="absolute inset-0 shadow-inner pointer-events-none z-10" />
        
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder with cute pattern */
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📷</div>
              <p className="text-sm text-muted-foreground font-handwriting">
                Add your photo here
              </p>
            </div>
          </div>
        )}

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 text-primary opacity-60">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 text-primary opacity-60 rotate-180">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;
