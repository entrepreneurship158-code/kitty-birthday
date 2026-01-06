import React, { useEffect, useState } from 'react';

interface MapleTreeProps {
  isGrowing: boolean;
  onGrowComplete?: () => void;
}

const MapleTree: React.FC<MapleTreeProps> = ({ isGrowing, onGrowComplete }) => {
  const [showLeaves, setShowLeaves] = useState(false);
  const [fallingLeaves, setFallingLeaves] = useState<number[]>([]);

  useEffect(() => {
    if (isGrowing) {
      // Show leaves after trunk grows
      const leafTimer = setTimeout(() => {
        setShowLeaves(true);
      }, 1500);

      // Start falling leaves animation
      const fallTimer = setTimeout(() => {
        setFallingLeaves([1, 2, 3, 4, 5, 6, 7, 8]);
      }, 2000);

      // Notify growth complete
      const completeTimer = setTimeout(() => {
        onGrowComplete?.();
      }, 2500);

      return () => {
        clearTimeout(leafTimer);
        clearTimeout(fallTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isGrowing, onGrowComplete]);

  if (!isGrowing) return null;

  return (
    <div className="relative w-full h-full flex items-end justify-center">
      {/* Tree Container */}
      <div className="relative animate-tree-grow origin-bottom">
        <svg
          viewBox="0 0 400 500"
          className="w-64 md:w-80 lg:w-96 h-auto"
          style={{ maxHeight: '60vh' }}
        >
          {/* Trunk */}
          <path
            d="M190 500 Q180 400 185 350 Q175 300 180 250 Q190 200 200 180"
            fill="none"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M210 500 Q220 400 215 350 Q225 300 220 250 Q210 200 200 180"
            fill="none"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Main branches */}
          <path
            d="M185 280 Q140 250 100 230"
            fill="none"
            stroke="hsl(25, 40%, 40%)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M215 280 Q260 250 300 230"
            fill="none"
            stroke="hsl(25, 40%, 40%)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M190 230 Q150 180 120 160"
            fill="none"
            stroke="hsl(25, 40%, 40%)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M210 230 Q250 180 280 160"
            fill="none"
            stroke="hsl(25, 40%, 40%)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M200 200 Q200 150 200 100"
            fill="none"
            stroke="hsl(25, 40%, 40%)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Smaller branches */}
          <path d="M100 230 Q80 210 60 200" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="5" strokeLinecap="round" />
          <path d="M100 230 Q90 250 70 260" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="5" strokeLinecap="round" />
          <path d="M300 230 Q320 210 340 200" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="5" strokeLinecap="round" />
          <path d="M300 230 Q310 250 330 260" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="5" strokeLinecap="round" />
          <path d="M120 160 Q100 140 80 130" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="4" strokeLinecap="round" />
          <path d="M280 160 Q300 140 320 130" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="4" strokeLinecap="round" />
          <path d="M200 100 Q180 80 160 70" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="4" strokeLinecap="round" />
          <path d="M200 100 Q220 80 240 70" fill="none" stroke="hsl(25, 40%, 45%)" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Leaves Clusters */}
        {showLeaves && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Leaf clusters at branch ends */}
            {[
              { x: '10%', y: '35%', delay: 0 },
              { x: '15%', y: '45%', delay: 100 },
              { x: '85%', y: '35%', delay: 150 },
              { x: '80%', y: '45%', delay: 200 },
              { x: '20%', y: '25%', delay: 250 },
              { x: '75%', y: '25%', delay: 300 },
              { x: '40%', y: '10%', delay: 350 },
              { x: '55%', y: '10%', delay: 400 },
              { x: '50%', y: '15%', delay: 450 },
              { x: '30%', y: '30%', delay: 500 },
              { x: '65%', y: '30%', delay: 550 },
              { x: '45%', y: '20%', delay: 600 },
            ].map((cluster, i) => (
              <div
                key={i}
                className="absolute animate-fade-slide-up"
                style={{
                  left: cluster.x,
                  top: cluster.y,
                  animationDelay: `${cluster.delay}ms`,
                }}
              >
                <LeafCluster />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Falling leaves */}
      {fallingLeaves.map((leaf, i) => (
        <div
          key={`fall-${i}`}
          className="absolute animate-leaf-fall pointer-events-none"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: '20%',
            animationDelay: `${i * 500}ms`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <MapleLeaf size={12 + Math.random() * 8} />
        </div>
      ))}
    </div>
  );
};

const LeafCluster: React.FC = () => (
  <div className="relative animate-leaf-sway">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          transform: `rotate(${i * 45}deg) translateY(-${10 + Math.random() * 10}px)`,
        }}
      >
        <MapleLeaf size={16 + Math.random() * 8} />
      </div>
    ))}
  </div>
);

const MapleLeaf: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className="text-tree-leaf"
    style={{
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
      opacity: 0.8 + Math.random() * 0.2,
    }}
  >
    <path
      fill="currentColor"
      d="M12 2L9 7L4 6L6 10L2 12L6 14L4 18L9 17L12 22L15 17L20 18L18 14L22 12L18 10L20 6L15 7L12 2Z"
    />
  </svg>
);

export default MapleTree;
