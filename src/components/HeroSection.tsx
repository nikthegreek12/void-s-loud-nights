import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="font-heading text-sm md:text-base tracking-[0.5em] uppercase text-primary mb-4 opacity-0 animate-fade-in-up">
          Live Music &amp; Spirits
        </p>
        <h1 className="font-heading text-7xl md:text-[10rem] lg:text-[12rem] font-bold leading-none tracking-[0.1em] text-foreground mb-6 opacity-0 animate-fade-in-up [animation-delay:0.15s]">
          VOID
        </h1>
        <p className="font-heading text-xl md:text-3xl tracking-[0.2em] uppercase text-foreground/60 mb-12 opacity-0 animate-fade-in-up [animation-delay:0.3s]">
          Where the Night Gets Loud
        </p>
        <a
          href="#shows"
          className="inline-block bg-primary text-primary-foreground font-heading text-sm md:text-base tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary/80 transition-all duration-300 animate-pulse-glow opacity-0 animate-fade-in-up [animation-delay:0.45s]"
        >
          Upcoming Shows
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
