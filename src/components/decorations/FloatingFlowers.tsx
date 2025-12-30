import React from 'react';

interface FloatingFlowersProps {
  count?: number;
}

const FloatingFlowers: React.FC<FloatingFlowersProps> = ({ count = 6 }) => {
  const flowers = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    top: `${10 + Math.random() * 80}%`,
    delay: `${Math.random() * 3}s`,
    size: 20 + Math.random() * 24,
    opacity: 0.25 + Math.random() * 0.35,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower) => (
        <svg
          key={flower.id}
          className="absolute animate-float-slow"
          style={{
            left: flower.left,
            top: flower.top,
            animationDelay: flower.delay,
            opacity: flower.opacity,
            transform: `rotate(${flower.rotation}deg)`,
          }}
          width={flower.size}
          height={flower.size}
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Simple flower shape */}
          <circle cx="12" cy="12" r="3" fill="currentColor" className="text-soft-coral" />
          <ellipse cx="12" cy="6" rx="3" ry="4" fill="currentColor" className="text-blush" />
          <ellipse cx="12" cy="18" rx="3" ry="4" fill="currentColor" className="text-blush" />
          <ellipse cx="6" cy="12" rx="4" ry="3" fill="currentColor" className="text-blush" />
          <ellipse cx="18" cy="12" rx="4" ry="3" fill="currentColor" className="text-blush" />
        </svg>
      ))}
    </div>
  );
};

export default FloatingFlowers;
