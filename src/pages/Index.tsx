import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FilmographySection from "@/components/FilmographySection";
import ListenSection from "@/components/ListenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FilmographySection />
      <ListenSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
