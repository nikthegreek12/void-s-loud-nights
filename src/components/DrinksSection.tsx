import { Beer, Wine, GlassWater, Flame } from "lucide-react";

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
  
  return (
    <div className="h-14 flex items-end justify-center overflow-visible">
      <div className="flex items-end relative">
        {letters.map((letter, i) => {
          let riseAmount = 0;
          
          if (i >= curveStartIndex) {
            const curveProgress = (i - curveStartIndex) / (curveLength - 1);
            riseAmount = curveProgress * curveProgress * 18;
          }
          
          return (
            <span
              key={i}
              className="inline-block font-heading text-lg font-bold text-foreground group-hover:text-accent transition-all duration-500 origin-bottom"
              style={{
                transform: `translateY(${riseAmount}px)`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </div>
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
            
            return (
              <div
                key={i}
                className="group bg-card border border-border hover:border-accent/40 transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon size={20} className="text-accent mt-1"/>
                  <span className="font-heading text-xl font-bold text-accent">{drink.price}</span>
                </div>
                
                {isBigDickMike ? (
                  <BigDickMikeTitle />
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
    </section>
  );
};

export default DrinksSection;
