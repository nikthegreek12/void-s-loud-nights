import { Calendar, Tag } from "lucide-react";

const shows = [
  { band: "IRON TEETH", date: "FEB 22, 2026", genre: ["Stoner Metal", "Doom"], price: "$18" },
  { band: "THE RUST PROPHETS", date: "MAR 01, 2026", genre: ["Garage Rock", "Punk"], price: "$15" },
  { band: "STATIC BURIAL", date: "MAR 08, 2026", genre: ["Post-Punk", "Noise"], price: "$20" },
  { band: "HOLLOW VEINS", date: "MAR 15, 2026", genre: ["Grunge", "Alt Rock"], price: "$22" },
  { band: "DEAD SATELLITE", date: "MAR 22, 2026", genre: ["Psych Rock", "Shoegaze"], price: "$16" },
];

const ShowsSection = () => {
  return (
    <section id="shows" className="relative py-24 md:py-32 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-4">
          UPCOMING <span className="text-gradient">SHOWS</span>
        </h2>
        <div className="w-24 h-1 bg-primary mb-16" />

        <div className="space-y-4">
          {shows.map((show, i) => (
            <div
              key={i}
              className="group bg-card border border-border hover:border-primary/50 transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="flex items-center gap-3 text-muted-foreground md:w-48 shrink-0">
                <Calendar size={16} className="text-primary" />
                <span className="font-heading text-sm tracking-[0.1em]">{show.date}</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors flex-1">
                {show.band}
              </h3>

              <div className="flex items-center gap-2 flex-wrap">
                {show.genre.map((g) => (
                  <span
                    key={g}
                    className="inline-flex items-center gap-1 bg-secondary text-muted-foreground text-xs font-heading tracking-wider uppercase px-3 py-1"
                  >
                    <Tag size={10} />
                    {g}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 md:ml-auto shrink-0">
                <span className="font-heading text-lg text-accent">{show.price}</span>
                <a
                  href="#"
                  className="bg-primary text-primary-foreground font-heading text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-primary/80 transition-colors"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
