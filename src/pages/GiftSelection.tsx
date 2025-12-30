import React from 'react';
import { useNavigate } from 'react-router-dom';
import AestheticStickers from '@/components/decorations/AestheticStickers';

interface GiftCardProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  delay: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ icon, label, onClick, delay }) => (
  <button
    onClick={onClick}
    className="group romantic-card flex flex-col items-center justify-center p-8 md:p-10 hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-up border border-blush/30 hover:border-primary/50 hover:shadow-xl"
    style={{ animationDelay: delay }}
  >
    <div className="w-20 h-20 md:w-24 md:h-24 mb-5 text-primary/70 group-hover:text-primary transition-all duration-500 group-hover:scale-110">
      {icon}
    </div>
    <p className="font-elegant text-base md:text-lg text-foreground/80 text-center leading-relaxed italic">
      {label}
    </p>
  </button>
);

const GiftSelection: React.FC = () => {
  const navigate = useNavigate();

  const gifts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      ),
      label: "You, being you",
      path: "/collage",
    },
    {
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full">
          <ellipse cx="25" cy="10" rx="8" ry="10" opacity="0.8" />
          <ellipse cx="40" cy="22" rx="10" ry="8" opacity="0.7" />
          <ellipse cx="35" cy="40" rx="8" ry="10" opacity="0.8" />
          <ellipse cx="15" cy="40" rx="8" ry="10" opacity="0.7" />
          <ellipse cx="10" cy="22" rx="10" ry="8" opacity="0.8" />
          <circle cx="25" cy="25" r="5" fill="hsl(45, 85%, 65%)" />
        </svg>
      ),
      label: "Your favorite flower",
      path: "/flower",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
      label: "A song that reminds me of you",
      path: "/music",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="8" y1="13" x2="16" y2="13" opacity="0.5" />
          <line x1="8" y1="17" x2="14" y2="17" opacity="0.5" />
        </svg>
      ),
      label: "A letter, just for you",
      path: "/letter",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-16">
      <AestheticStickers />

      <div className="relative z-10 text-center max-w-5xl w-full">
        {/* Title */}
        <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-up">
          Pick the order you want to open them
        </h1>
        <p className="font-body text-muted-foreground mb-16 animate-fade-up text-lg" style={{ animationDelay: '0.1s' }}>
          each one holds a piece of my heart
        </p>

        {/* Gift cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {gifts.map((gift, index) => (
            <GiftCard
              key={gift.path}
              icon={gift.icon}
              label={gift.label}
              onClick={() => navigate(gift.path)}
              delay={`${0.2 + index * 0.12}s`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftSelection;
