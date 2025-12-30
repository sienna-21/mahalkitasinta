import React from 'react';
import stickersImage from '@/assets/stickers-bg.png';

interface AestheticStickersProps {
  variant?: 'scattered' | 'corner' | 'border';
}

const AestheticStickers: React.FC<AestheticStickersProps> = ({ variant = 'scattered' }) => {
  const stickers = [
    // Cherry blossoms
    { type: 'blossom', left: '5%', top: '10%', size: 28, rotation: -15, delay: '0s' },
    { type: 'blossom', left: '85%', top: '5%', size: 32, rotation: 20, delay: '0.5s' },
    { type: 'blossom', left: '92%', top: '45%', size: 26, rotation: -10, delay: '1s' },
    { type: 'blossom', left: '8%', top: '75%', size: 30, rotation: 15, delay: '1.5s' },
    { type: 'blossom', left: '78%', top: '85%', size: 24, rotation: -25, delay: '2s' },
    // Hearts
    { type: 'heart', left: '15%', top: '25%', size: 18, rotation: 10, delay: '0.3s' },
    { type: 'heart', left: '88%', top: '20%', size: 16, rotation: -15, delay: '0.8s' },
    { type: 'heart', left: '3%', top: '50%', size: 20, rotation: 5, delay: '1.3s' },
    { type: 'heart', left: '95%', top: '70%', size: 14, rotation: -20, delay: '1.8s' },
    { type: 'heart', left: '12%', top: '90%', size: 18, rotation: 15, delay: '2.3s' },
    // Bows
    { type: 'bow', left: '20%', top: '8%', size: 22, rotation: -5, delay: '0.4s' },
    { type: 'bow', left: '75%', top: '35%', size: 20, rotation: 10, delay: '1.4s' },
    { type: 'bow', left: '90%', top: '92%', size: 24, rotation: -8, delay: '2.2s' },
    // Sparkles
    { type: 'sparkle', left: '25%', top: '40%', size: 12, rotation: 0, delay: '0.6s' },
    { type: 'sparkle', left: '70%', top: '15%', size: 10, rotation: 45, delay: '1.1s' },
    { type: 'sparkle', left: '5%', top: '35%', size: 14, rotation: 30, delay: '1.6s' },
    { type: 'sparkle', left: '82%', top: '60%', size: 11, rotation: -30, delay: '2.1s' },
  ];

  const renderSticker = (type: string, size: number) => {
    switch (type) {
      case 'blossom':
        return (
          <svg viewBox="0 0 50 50" fill="none" style={{ width: size, height: size }}>
            <ellipse cx="25" cy="10" rx="8" ry="10" fill="hsl(345, 75%, 82%)" />
            <ellipse cx="40" cy="22" rx="10" ry="8" fill="hsl(345, 70%, 80%)" />
            <ellipse cx="35" cy="40" rx="8" ry="10" fill="hsl(345, 75%, 82%)" />
            <ellipse cx="15" cy="40" rx="8" ry="10" fill="hsl(345, 70%, 80%)" />
            <ellipse cx="10" cy="22" rx="10" ry="8" fill="hsl(345, 75%, 82%)" />
            <circle cx="25" cy="25" r="6" fill="hsl(45, 85%, 65%)" />
            <circle cx="25" cy="25" r="3" fill="hsl(45, 75%, 55%)" />
          </svg>
        );
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="hsl(345, 65%, 70%)" style={{ width: size, height: size }}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'bow':
        return (
          <svg viewBox="0 0 40 24" fill="none" style={{ width: size, height: size * 0.6 }}>
            <ellipse cx="10" cy="12" rx="9" ry="8" fill="hsl(345, 60%, 65%)" />
            <ellipse cx="30" cy="12" rx="9" ry="8" fill="hsl(345, 60%, 65%)" />
            <circle cx="20" cy="12" r="4" fill="hsl(345, 55%, 55%)" />
            <path d="M18 16 L16 22 L20 20 L24 22 L22 16" fill="hsl(345, 55%, 55%)" />
          </svg>
        );
      case 'sparkle':
        return (
          <svg viewBox="0 0 24 24" fill="hsl(45, 90%, 70%)" style={{ width: size, height: size }}>
            <path d="M12 0L13.5 9L22 10.5L13.5 12L12 21L10.5 12L2 10.5L10.5 9L12 0Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: sticker.left,
            top: sticker.top,
            transform: `rotate(${sticker.rotation}deg)`,
            animationDelay: sticker.delay,
            opacity: 0.7,
          }}
        >
          {renderSticker(sticker.type, sticker.size)}
        </div>
      ))}
    </div>
  );
};

export default AestheticStickers;
