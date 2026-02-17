import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowsSection from "@/components/ShowsSection";
import AboutSection from "@/components/AboutSection";
import DrinksSection from "@/components/DrinksSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShowsSection />
      <AboutSection />
      <DrinksSection />
      <GallerySection />
      <VisitSection />
      <Footer />
    </div>
  );
};

export default Index;
