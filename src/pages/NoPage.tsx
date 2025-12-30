import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AestheticStickers from '@/components/decorations/AestheticStickers';

const NoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AestheticStickers />

      <div className="relative z-10 text-center animate-fade-up max-w-md">
        {/* Broken heart */}
        <div className="mb-10 flex justify-center">
          <svg
            className="w-24 h-24 text-muted-foreground/50"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Message */}
        <p className="font-script text-4xl md:text-5xl text-foreground mb-4">
          Wow. That hurts.
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 italic">
          Do you even like me a little?
        </p>

        {/* Try again button */}
        <Button
          variant="romantic"
          size="lg"
          onClick={() => navigate('/')}
          className="font-elegant text-lg tracking-wide"
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default NoPage;
