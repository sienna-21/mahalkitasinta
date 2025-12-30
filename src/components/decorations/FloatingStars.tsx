import React from 'react';

interface FloatingStarsProps {
  count?: number;
}

const FloatingStars: React.FC<FloatingStarsProps> = ({ count = 10 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    size: 8 + Math.random() * 12,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <svg
          key={star.id}
          className="absolute animate-pulse-soft"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
          width={star.size}
          height={star.size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"
            fill="currentColor"
            className="text-accent/70"
          />
        </svg>
      ))}
    </div>
  );
};

export default FloatingStars;
