import { Beer, Wine, GlassWater, Flame } from "lucide-react";
import { useEffect, useRef } from "react";

const cocktails = [
  {
    name: "Whiskey in the Jar",
    desc: "Bourbon, honey, lemon, smoked rosemary",
    price: "$14",
    icon: Wine,
  },
  {
    name: "Back in Black IPA",
    desc: "Dark hoppy ale, citrus notes, 7.2% ABV",
    price: "$9",
    icon: Beer,
  },
  {
    name: "Highway to Helles",
    desc: "Bavarian lager, crisp and clean, 5.1% ABV",
    price: "$8",
    icon: Beer,
  },
  {
    name: "The Blackout",
    desc: "Espresso vodka, Kahlúa, cold brew, cream",
    price: "$15",
    icon: Wine,
  },
  {
    name: "Thunderstruck Mule",
    desc: "Vodka, ginger beer, lime, jalapeño",
    price: "$13",
    icon: GlassWater,
  },
  {
    name: "War Pigs Old Fashioned",
    desc: "Rye whiskey, bitters, demerara, orange",
    price: "$16",
    icon: Wine,
    special: "warPigs",
  },
  {
    name: "Big Dick Mike",
    desc: "Bourbon, Fireball, honey liqueur, lime, smoked salt rim – a real mouthful",
    price: "$18",
    icon: Wine,
    special: "bigDickMike",
  },
  {
    name: "Nigger Fireman",
    desc: "Black stout with a dropped shot of Fireball – bold, dark, and burns going down",
    price: "$12",
    icon: Flame,
  },
];

const BigDickMikeTitle = () => {
  const text = "Big Dick Mike";
  const letters = text.split("");
  const curveStartIndex = 5;
  const curveLength = letters.length - curveStartIndex;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.closest('.group');
    if (!card) return;

    const handleEnter = () => {
      const spans = container.querySelectorAll('.letter-span');
      spans.forEach((span, i) => {
        let riseAmount = 0;
        if (i >= curveStartIndex) {
          const curveProgress = (i - curveStartIndex) / (curveLength - 1);
          riseAmount = curveProgress * curveProgress * 20;
        }
        (span as HTMLElement).style.transform = `translateY(-${riseAmount}px)`;
      });
    };

    const handleLeave = () => {
      const spans = container.querySelectorAll('.letter-span');
      spans.forEach((span) => {
        (span as HTMLElement).style.transform = 'translateY(0px)';
      });
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <h3 className="font-heading text-lg font-bold tracking-wider mb-2">
      <span ref={containerRef} className="inline-flex items-end">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="letter-span inline-block text-foreground group-hover:text-accent transition-all duration-500 origin-bottom"
            style={{ letterSpacing: '0.05em' }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </h3>
  );
};

const WarPigsTitle = () => {
  return (
    <div className="relative mb-2">
      {/* Armored Pig SVG - slides from left to right on hover */}
      <svg 
        className="war-pig absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-8 opacity-0 pointer-events-none"
        viewBox="0 0 100 60"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Pig body */}
        <ellipse cx="50" cy="35" rx="30" ry="18" />
        {/* Pig head */}
        <ellipse cx="82" cy="30" rx="14" ry="12" />
        {/* Snout */}
        <ellipse cx="94" cy="32" rx="5" ry="4" />
        {/* Eye */}
        <circle cx="86" cy="28" r="2" fill="white" />
        {/* Ear */}
        <path d="M 78 20 Q 82 15 86 20" />
        {/* Legs */}
        <line x1="30" y1="50" x2="30" y2="58" />
        <line x1="42" y1="50" x2="42" y2="58" />
        <line x1="58" y1="50" x2="58" y2="58" />
        <line x1="70" y1="50" x2="70" y2="58" />
        {/* Tail */}
        <path d="M 20 35 Q 10 30 15 25 Q 8 20 12 15" />
        {/* Helmet */}
        <path d="M 70 18 Q 82 8 94 18" strokeWidth="2" />
        <line x1="82" y1="8" x2="82" y2="3" strokeWidth="2" />
        <circle cx="82" cy="2" r="2" fill="white" />
        {/* Armor plates */}
        <path d="M 25 20 L 50 15 L 75 20" strokeWidth="2" />
        <line x1="35" y1="17" x2="35" y2="25" strokeWidth="1" />
        <line x1="50" y1="15" x2="50" y2="25" strokeWidth="1" />
        <line x1="65" y1="17" x2="65" y2="25" strokeWidth="1" />
      </svg>
      
      <h3 className="font-heading text-lg font-bold tracking-wider text-foreground group-hover:text-accent transition-colors relative z-10">
        War Pigs Old Fashioned
      </h3>
    </div>
  );
};

const DrinksSection = () => {
  return (
    <section id="drinks" className="relative py-24 md:py-32 bg-secondary/30 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-4">
            HOUSE <span className="text-gradient">SPECIALS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"/>
          <p className="text-muted-foreground max-w-md mx-auto">
            Fuel the night. Our menu is loud, unapologetic, and crafted to keep you going.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cocktails.map((drink, i) => {
            const Icon = drink.icon;
            const isBigDickMike = drink.special === "bigDickMike";
            const isWarPigs = drink.special === "warPigs";
            
            return (
              <div
                key={i}
                className="group bg-card border border-border hover:border-accent/40 transition-all duration-300 p-6 overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon size={20} className="text-accent mt-1"/>
                  <span className="font-heading text-xl font-bold text-accent">{drink.price}</span>
                </div>
                
                {isBigDickMike ? (
                  <BigDickMikeTitle />
                ) : isWarPigs ? (
                  <WarPigsTitle />
                ) : (
                  <h3 className="font-heading text-lg font-bold tracking-wider text-foreground group-hover:text-accent transition-colors mb-2">
                    {drink.name}
                  </h3>
                )}
                
                <p className="text-sm text-muted-foreground mt-2">{drink.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .war-pig {
          opacity: 0;
          transform: translateX(-100px) translateY(-50%);
          transition: none;
        }
        
        .group:hover .war-pig {
          opacity: 0.8;
          animation: warPigMarch 1.5s ease-out forwards;
        }
        
        @keyframes warPigMarch {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(-50%);
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateX(180px) translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default DrinksSection;
