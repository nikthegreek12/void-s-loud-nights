import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import venueInterior from "@/assets/venue-interior.jpg";

const images = [
  { src: gallery1, alt: "Live band performance", span: "row-span-2" },
  { src: gallery2, alt: "Crowd at VOID", span: "" },
  { src: gallery3, alt: "Drummer on stage", span: "row-span-2" },
  { src: gallery4, alt: "Bar area", span: "" },
  { src: gallery5, alt: "Electric guitar", span: "" },
  { src: venueInterior, alt: "Venue interior", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.1em] text-foreground mb-4">
          THE <span className="text-gradient">SCENE</span>
        </h2>
        <div className="w-24 h-1 bg-primary mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
