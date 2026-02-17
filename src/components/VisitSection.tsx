import { MapPin, Clock, Car, ShieldCheck } from "lucide-react";

const VisitSection = () => {
  return (
    <section id="visit" className="relative py-24 md:py-32 bg-secondary/30 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-4">
            FIND <span className="text-gradient">US</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"/>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0 mt-1" size={20}/>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">To mouni ths manas sou<br/>Matago, Ethiopia</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Clock className="text-primary shrink-0 mt-1" size={20}/>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Wed – Thu: 6PM – 1AM<br/>
                  Fri – Sat: 6PM – 3AM<br/>
                  Sun: 5PM – 12AM<br/>
                  Mon – Tue: Closed
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <ShieldCheck className="text-primary shrink-0 mt-1" size={20}/>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Age Policy</h3>
                <p className="text-muted-foreground">18+ with valid ID. No exceptions except if you've got a pumped ass. Go girl.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Car className="text-primary shrink-0 mt-1" size={20}/>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wider text-foreground mb-1">Parking</h3>
                <p className="text-muted-foreground">Street parking available nearby.</p>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="bg-card border border-border rounded-lg overflow-hidden aspect-[4/3]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.69839870947!2d39.689941!3d5.897358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b8196f61be623d%3A0x706d0c90d79474!2sTo%20mouni%20ths%20manas%20sou!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
