import { MapPin, Clock, Car, ShieldCheck } from "lucide-react";

const VisitSection = () => {
  return (
    <section id="visit" className="relative py-24 md:py-32 bg-secondary/30 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-4">
            FIND <span className="text-gradient">US</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">247 Lower Elm Street<br />Industrial District, Brooklyn NY 11222</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Wed – Thu: 6PM – 1AM<br />
                  Fri – Sat: 6PM – 3AM<br />
                  Sun: 5PM – 12AM<br />
                  Mon – Tue: Closed
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ShieldCheck className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Age Policy</h3>
                <p className="text-muted-foreground">21+ with valid ID. No exceptions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Car className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Parking</h3>
                <p className="text-muted-foreground">Street parking available. Nearest lot at 260 Elm St ($10 flat after 6PM).</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-card border border-border aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4 opacity-40" />
              <p className="text-muted-foreground font-heading tracking-wider text-sm uppercase">Map Embed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
