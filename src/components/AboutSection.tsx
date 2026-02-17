import aboutVenue from "@/assets/about-venue.jpg";
import venueInterior from "@/assets/venue-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-4">Est. 2019</p>
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-8">
              ABOUT <span className="text-gradient">VOID</span>
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Born from the ashes of an abandoned warehouse on the lower east side, VOID is where raw sound meets raw spirit. We opened our doors in 2019 with one mission: give the underground a home.
              </p>
              <p>
                350 capacity. No corporate sponsors. No mainstream playlists. Just volume, sweat, and the kind of nights you won't forget — or maybe you will.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">350</p>
                <p className="text-sm text-muted-foreground mt-1">Capacity</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Shows Hosted</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">21+</p>
                <p className="text-sm text-muted-foreground mt-1">Age Policy</p>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutVenue}
                alt="VOID stage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <img
                src={venueInterior}
                alt="VOID bar interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
