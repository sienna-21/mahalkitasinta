import React from 'react';
import BackButton from '@/components/BackButton';
import AestheticStickers from '@/components/decorations/AestheticStickers';
import paperTexture from '@/assets/paper-texture.jpg';

const LetterPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-24">
      <BackButton />
      <AestheticStickers />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="font-script text-5xl md:text-6xl text-foreground text-center mb-14 animate-fade-up">
          For you
        </h1>

        {/* Letter card with real paper texture */}
        <div 
          className="relative animate-fade-up rounded-sm overflow-hidden"
          style={{ 
            animationDelay: '0.2s',
            boxShadow: '0 15px 50px -10px hsl(0 0% 0% / 0.3), 0 5px 20px -5px hsl(0 0% 0% / 0.2)',
          }}
        >
          {/* Paper texture background */}
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Content overlay */}
          <div className="relative p-10 md:p-16 lg:p-20">
            {/* Blood droplets decoration - top right */}
            <div className="absolute top-8 right-12 flex gap-3">
              <div className="w-2.5 h-4 rounded-full bg-deep-rose/80 animate-drip" style={{ animationDelay: '0s' }} />
              <div className="w-2 h-3 rounded-full bg-deep-rose/70 animate-drip" style={{ animationDelay: '0.7s' }} />
              <div className="w-3 h-5 rounded-full bg-deep-rose/85 animate-drip" style={{ animationDelay: '1.4s' }} />
            </div>
            
            {/* More blood droplets on the side */}
            <div className="absolute top-28 right-10 flex flex-col gap-4">
              <div className="w-2 h-2.5 rounded-full bg-deep-rose/55" />
              <div className="w-2.5 h-3 rounded-full bg-deep-rose/65" />
            </div>

            {/* Dripping effect on left */}
            <div className="absolute top-16 left-8 flex flex-col gap-5">
              <div className="w-1.5 h-2 rounded-full bg-deep-rose/45" />
              <div className="w-2 h-3.5 rounded-full bg-deep-rose/55 animate-drip" style={{ animationDelay: '2s' }} />
            </div>

            {/* Letter content - handwritten style */}
            <div className="space-y-8 text-ink">
              <p className="font-handwritten text-3xl md:text-4xl mb-10">
                My love,
              </p>
              
              <p className="font-handwritten text-xl md:text-2xl leading-relaxed">
                I just wanted to let you know how beautiful you are once again, how truly beautiful and amazing you are. Every time I look at you, I'm reminded how lucky I am to have someone so fucking gorgeous, not just on the outside either. Your soul, your heart, everything that makes you, you— your smile, your eyes, the way you carry yourself— everything about you leaves me in awe.
              </p>
              
              <p className="font-handwritten text-xl md:text-2xl leading-relaxed">
                I've never met someone so special, someone that makes me feel the way you do. You make me feel so loved, special, seen, heard and wanted. You have this way of lighting up my world just by being in it. You make me so happy, you give me the type of joy no one ever could. I can't even describe the way you make my heart skip a beat every time I'm around you.
              </p>
              
              <p className="font-handwritten text-xl md:text-2xl leading-relaxed">
                You're the best I've ever had, the one I wanted, the one I need. I pray each day that we keep growing together, that we spend countless moments together, years and memories side by side. I hope every step we take as a couple brings us closer to that future I dreamt of with you, in our own little castle, a life filled with love, laughter and endless connection between us.
              </p>
              
              <p className="font-handwritten text-xl md:text-2xl leading-relaxed">
                I want you with me 24/7. I need you and I promise I'll do everything to make sure I can always keep you by my side, because you deserve nothing but the best
              </p>
              
              <p className="font-handwritten text-2xl md:text-3xl mt-10 text-deep-rose">
                (I'm the best)
              </p>
            </div>

            {/* Blood-drawn heart at the bottom */}
            <div className="flex justify-center mt-14 pt-8">
              <div className="relative">
                {/* Hand-drawn heart with blood effect */}
                <svg 
                  className="w-20 h-20 md:w-24 md:h-24" 
                  viewBox="0 0 100 100" 
                  fill="none"
                >
                  {/* Sketchy heart path to look hand-drawn */}
                  <path
                    d="M50 88 C15 55 0 38 12 22 C24 6 42 12 50 28 C58 12 76 6 88 22 C100 38 85 55 50 88"
                    fill="hsl(345, 48%, 40%)"
                    stroke="hsl(345, 50%, 32%)"
                    strokeWidth="2"
                  />
                  {/* Blood drips from heart */}
                  <ellipse cx="50" cy="96" rx="4" ry="6" fill="hsl(345, 48%, 38%)" opacity="0.8" />
                  <ellipse cx="42" cy="92" rx="2.5" ry="4" fill="hsl(345, 48%, 42%)" opacity="0.7" />
                  <ellipse cx="58" cy="93" rx="2" ry="3" fill="hsl(345, 48%, 40%)" opacity="0.65" />
                </svg>
                
                {/* Small droplets around */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-1.5 h-2 rounded-full bg-deep-rose/50" />
                  <div className="w-2 h-2.5 rounded-full bg-deep-rose/65" />
                  <div className="w-1.5 h-2 rounded-full bg-deep-rose/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Paper fold effect - bottom right corner */}
          <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
            <div 
              className="absolute bottom-0 right-0 w-24 h-24 transform rotate-45 translate-x-6 translate-y-6"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, hsl(40 40% 85%) 50%)',
              }}
            />
          </div>

          {/* Paper fold effect - top left corner */}
          <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-20 h-20 transform rotate-45 -translate-x-8 -translate-y-8"
              style={{
                background: 'linear-gradient(-45deg, transparent 50%, hsl(40 40% 88%) 50%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
