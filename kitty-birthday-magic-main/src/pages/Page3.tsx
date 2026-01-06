import React, { useState, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Sparkles from '@/components/Sparkles';
import PhotoFrame from '@/components/PhotoFrame';

interface Page3Props {
  // You can add props for customization
}

// ✏️ EDIT YOUR BIRTHDAY MESSAGE HERE
const BIRTHDAY_MESSAGE = `My Dearest,

On this beautiful day, I want you to know how much joy and love you bring into my life. Your smile lights up my world, and your kindness touches everyone around you.

May this birthday be filled with all the happiness your heart can hold. You deserve every wonderful moment that comes your way.

With all my love,
Forever yours 💕`;

// ✏️ ADD YOUR PHOTO URLS HERE (or leave empty for placeholders)
const PHOTOS = [
  '', // Add your first photo URL
  '', // Add your second photo URL
  '', // Add your third photo URL
];

const Page3: React.FC<Page3Props> = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Fade in
    setTimeout(() => setFadeIn(true), 100);

    // Start message reveal
    setTimeout(() => setShowMessage(true), 500);

    // Show photos
    setTimeout(() => setShowPhotos(true), 1500);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!showMessage) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < BIRTHDAY_MESSAGE.length) {
        setDisplayedText(BIRTHDAY_MESSAGE.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [showMessage]);

  return (
    <div
      className={`min-h-screen bg-kawaii relative overflow-hidden transition-opacity duration-700 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background effects */}
      <FloatingHearts />
      <Sparkles />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 animate-fade-slide-up">
            Happy Birthday!
          </h1>
          <div className="flex justify-center gap-2 text-2xl">
            {['🎀', '🎂', '🎁', '🌸', '💝'].map((emoji, i) => (
              <span
                key={i}
                className="animate-bounce-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Message section */}
          <div className="order-2 md:order-1">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 glow-soft">
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 text-3xl">🎀</div>

              <div className="font-handwriting text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed whitespace-pre-line">
                {displayedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Photos section */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* First large photo */}
              {showPhotos && (
                <div className="col-span-2">
                  <PhotoFrame
                    src={PHOTOS[0] || undefined}
                    alt="Birthday memory 1"
                    delay={0}
                    className="w-full"
                  />
                </div>
              )}

              {/* Two smaller photos */}
              {showPhotos && (
                <>
                  <PhotoFrame
                    src={PHOTOS[1] || undefined}
                    alt="Birthday memory 2"
                    delay={300}
                  />
                  <PhotoFrame
                    src={PHOTOS[2] || undefined}
                    alt="Birthday memory 3"
                    delay={600}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card/60 backdrop-blur-sm rounded-full px-8 py-4">
            <span className="text-2xl">🎂</span>
            <span className="font-display text-xl md:text-2xl text-primary">
              Made with love for you
            </span>
            <span className="text-2xl">💕</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pastel-cream/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Page3;
