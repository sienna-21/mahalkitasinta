import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AestheticStickers from '@/components/decorations/AestheticStickers';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/gifts');
  };

  const handleNo = () => {
    navigate('/no');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AestheticStickers />

      <div className="relative z-10 text-center animate-fade-up">
        {/* Decorative heart above */}
        <div className="mb-10 flex justify-center">
          <svg
            className="w-20 h-20 text-primary animate-pulse-soft"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Main question */}
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
          Do you love me?
        </h1>

        {/* Subtle decorative line */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <svg className="w-5 h-5 text-primary/60 animate-twinkle" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            variant="yes"
            size="xl"
            onClick={handleYes}
            className="min-w-[180px] font-elegant text-lg tracking-wide"
          >
            Yes, I do
          </Button>
          <Button
            variant="no"
            size="lg"
            onClick={handleNo}
            className="min-w-[120px] font-body text-sm"
          >
            No
          </Button>
        </div>
      </div>

      {/* Bottom corner decorations */}
      <div className="absolute bottom-8 left-8 opacity-40 animate-sway">
        <svg className="w-16 h-16" viewBox="0 0 50 50" fill="none">
          <ellipse cx="25" cy="10" rx="8" ry="10" fill="hsl(345, 70%, 78%)" />
          <ellipse cx="40" cy="22" rx="10" ry="8" fill="hsl(345, 65%, 76%)" />
          <ellipse cx="35" cy="40" rx="8" ry="10" fill="hsl(345, 70%, 78%)" />
          <ellipse cx="15" cy="40" rx="8" ry="10" fill="hsl(345, 65%, 76%)" />
          <ellipse cx="10" cy="22" rx="10" ry="8" fill="hsl(345, 70%, 78%)" />
          <circle cx="25" cy="25" r="6" fill="hsl(45, 85%, 65%)" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-10 opacity-40 animate-float-slow">
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
          <ellipse cx="25" cy="10" rx="8" ry="10" fill="hsl(345, 70%, 78%)" />
          <ellipse cx="40" cy="22" rx="10" ry="8" fill="hsl(345, 65%, 76%)" />
          <ellipse cx="35" cy="40" rx="8" ry="10" fill="hsl(345, 70%, 78%)" />
          <ellipse cx="15" cy="40" rx="8" ry="10" fill="hsl(345, 65%, 76%)" />
          <ellipse cx="10" cy="22" rx="10" ry="8" fill="hsl(345, 70%, 78%)" />
          <circle cx="25" cy="25" r="6" fill="hsl(45, 85%, 65%)" />
        </svg>
      </div>
    </div>
  );
};

export default Index;
