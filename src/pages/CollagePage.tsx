import React from 'react';
import BackButton from '@/components/BackButton';
import AestheticStickers from '@/components/decorations/AestheticStickers';
import photo1 from '@/assets/gf1.jpg';
import photo2 from '@/assets/gf2.jpg';
import photo3 from '@/assets/gf3.jpg';
import photo4 from '@/assets/gf4.jpg';
import photo5 from '@/assets/gf5.jpg';
import photo6 from '@/assets/gf6.jpg';

const CollagePage: React.FC = () => {
  // Photos positioned around the edges, not overlapping center
  const leftPhotos = [
    { src: photo1, rotation: -12, top: '8%', left: '-2%' },
    { src: photo3, rotation: 8, top: '38%', left: '-5%' },
    { src: photo5, rotation: -6, top: '68%', left: '0%' },
  ];

  const rightPhotos = [
    { src: photo2, rotation: 10, top: '5%', right: '-2%' },
    { src: photo4, rotation: -8, top: '40%', right: '-4%' },
    { src: photo6, rotation: 5, top: '70%', right: '0%' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-24">
      <BackButton />
      <AestheticStickers />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="font-script text-4xl md:text-5xl text-foreground text-center mb-16 animate-fade-up">
          You, being you
        </h1>

        {/* Container for photos and text */}
        <div className="relative min-h-[700px] flex items-center justify-center">
          
          {/* Left side photos */}
          {leftPhotos.map((photo, index) => (
            <div
              key={`left-${index}`}
              className="absolute photo-frame w-28 h-36 md:w-36 md:h-44 lg:w-44 lg:h-56 animate-fade-up hover:scale-105 hover:z-30 transition-all duration-500"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                top: photo.top,
                left: photo.left,
                animationDelay: `${0.1 + index * 0.15}s`,
                zIndex: 10 + index,
              }}
            >
              <img 
                src={photo.src} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Right side photos */}
          {rightPhotos.map((photo, index) => (
            <div
              key={`right-${index}`}
              className="absolute photo-frame w-28 h-36 md:w-36 md:h-44 lg:w-44 lg:h-56 animate-fade-up hover:scale-105 hover:z-30 transition-all duration-500"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                top: photo.top,
                right: photo.right,
                animationDelay: `${0.2 + index * 0.15}s`,
                zIndex: 10 + index,
              }}
            >
              <img 
                src={photo.src} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Text card in center */}
          <div 
            className="romantic-card max-w-xl mx-auto p-8 md:p-12 bg-card/95 backdrop-blur-md animate-fade-up border border-blush/30 relative z-20"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground/90 text-center first-letter:text-4xl first-letter:font-script first-letter:text-primary first-letter:mr-1 first-letter:float-left">
              You are the kind of beauty that stops time— Every glance, every smile, every curve of your face feels like it was crafted by something divine, as if angels themselves whispered your name into existence. Almost as if those angels were made, using you as an inspiration. I swear, I've never seen anyone like you, no one even comes close to your existence, the way your presence fills a room, the way your eyes hold galaxies, or the way your laughter lingers around in the air like a melody that refuses to fade.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground/90 text-center mt-6">
              Don't ever doubt the fact that there will never be a girl like you, because there is only one of you, you are the type of 1/1, the type of rare, people pray and beg for, you are perfection in a whole. You are my angel, my muse, my constant awe, and I want to carry that truth with you forever. You are without a question, THE most beautiful girl I have ever laid my eyes on, inside and out.
            </p>
            
            <div className="flex justify-center mt-8">
              <svg className="w-7 h-7 text-primary/50 animate-pulse-soft" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollagePage;
