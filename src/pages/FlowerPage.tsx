import React from 'react';
import BackButton from '@/components/BackButton';
import AestheticStickers from '@/components/decorations/AestheticStickers';
import hibiscusImage from '@/assets/hibiscus.png';

const FlowerPage: React.FC = () => {
  const funFacts = [
    "Hibiscus symbolizes delicate beauty and femininity",
    "In many cultures, it represents the perfect woman",
    "The flower only blooms for one day, making each one precious",
    "It's known as the 'flower of an hour' for its fleeting beauty",
    "Hibiscus tea has been enjoyed for centuries for its calming properties",
    "In Hawaii, wearing a hibiscus behind your right ear means you're single",
    "The flower comes in over 200 species worldwide",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-24">
      <BackButton />
      <AestheticStickers />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="font-script text-5xl md:text-6xl text-foreground text-center mb-3 animate-fade-up">
          Hibiscus
        </h1>
        <p className="font-body text-muted-foreground text-center mb-14 animate-fade-up italic text-lg" style={{ animationDelay: '0.1s' }}>
          your favorite flower
        </p>

        {/* Hibiscus Image */}
        <div 
          className="relative mx-auto w-72 h-72 md:w-96 md:h-96 mb-16 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/50 to-soft-coral/40 animate-pulse-soft blur-2xl" />
          <div className="relative rounded-full overflow-hidden bg-cream/50 p-4 shadow-2xl">
            <img 
              src={hibiscusImage} 
              alt="Beautiful Hibiscus" 
              className="w-full h-full object-contain animate-float-slow"
            />
          </div>
        </div>

        {/* Fun Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="romantic-card p-5 text-center animate-fade-up border border-blush/25 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${0.3 + index * 0.08}s` }}
            >
              <p className="font-body text-base text-foreground/85 italic">{fact}</p>
            </div>
          ))}
        </div>

        {/* Personal message */}
        <div 
          className="romantic-card p-10 md:p-12 text-center animate-fade-up bg-card/95 border border-blush/30"
          style={{ animationDelay: '0.9s' }}
        >
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 italic">
            Yeah, I remembered, just like I want to remember every other tiny detail you tell me. I never thought of a hibiscus as such a beautiful flower, until I tried learning more and more about it. Tell me why it's your favorite, tell me every other small thing that you love, tell me everything.
          </p>
          
          {/* Small flower decoration */}
          <div className="flex justify-center mt-8">
            <span className="text-3xl animate-float">🌺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerPage;
