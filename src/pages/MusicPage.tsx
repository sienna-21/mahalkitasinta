import React from 'react';
import BackButton from '@/components/BackButton';
import AestheticStickers from '@/components/decorations/AestheticStickers';

const MusicPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-24">
      <BackButton />
      <AestheticStickers />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* Title */}
        <h1 className="font-script text-4xl md:text-5xl text-foreground text-center mb-4 animate-fade-up">
          This song reminds me of you
        </h1>
        <p className="font-body text-muted-foreground text-center mb-16 animate-fade-up italic" style={{ animationDelay: '0.1s' }}>
          every time it plays, I think of you
        </p>

        {/* Spinning Vinyl */}
        <div 
          className="relative w-72 h-72 md:w-96 md:h-96 mb-14 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Outer ring glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-deep-rose/25 blur-2xl animate-pulse-soft" />
          
          {/* Vinyl record */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 shadow-2xl animate-spin-slow">
            {/* Grooves */}
            <div className="absolute inset-6 rounded-full border border-foreground/20" />
            <div className="absolute inset-10 rounded-full border border-foreground/15" />
            <div className="absolute inset-14 rounded-full border border-foreground/20" />
            <div className="absolute inset-18 rounded-full border border-foreground/15" />
            <div className="absolute inset-[4.5rem] rounded-full border border-foreground/20" />
            <div className="absolute inset-[5.5rem] rounded-full border border-foreground/15" />
            
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary via-rose to-deep-rose flex items-center justify-center shadow-inner">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-foreground/90" />
              </div>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-background/10 to-transparent" />
          </div>
        </div>

        {/* Song info */}
        <div 
          className="text-center mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="font-elegant text-3xl md:text-4xl text-foreground italic mb-2">
            If Looks Could Kill
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Destroy Lonely
          </p>
        </div>

        {/* Spotify button */}
        <a
          href="https://open.spotify.com/playlist/4VmjygkXsyf62wVkDa7BRt?si=22d3359fec1f467d"
          target="_blank"
          rel="noopener noreferrer"
          className="romantic-card px-10 py-5 flex items-center gap-4 hover:scale-105 transition-all duration-500 animate-fade-up border border-primary/30 hover:border-primary/60 hover:shadow-xl group"
          style={{ animationDelay: '0.5s' }}
        >
          <svg className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span className="font-elegant text-lg text-foreground italic">Open in Spotify</span>
        </a>

        {/* Personal message */}
        <div 
          className="romantic-card p-10 md:p-12 text-center mt-14 animate-fade-up max-w-xl bg-card/95 border border-blush/30"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="font-body text-base md:text-lg leading-loose text-foreground/90 italic">
            If Looks Could Kill by Lone, mhm, why? I don't know, your beauty is enough to get someone killed. I mean, I sure would kill for you. Your eyes on their own are dangerous, not because they are sharp, but because of their depth, how far deep guys can get lost in them.
          </p>
          
          {/* Music note decoration */}
          <div className="flex justify-center mt-8 gap-2">
            <span className="text-2xl animate-float">♪</span>
            <span className="text-xl animate-float-delayed">♫</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
