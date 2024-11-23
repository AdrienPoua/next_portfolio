import Header from "@components/Header";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import About from "@/components/Services";
import Skills from "@/components/Skills";
import Projets from "@components/Projets";
import { Toaster } from "@/components/ui/toaster";
import Contact from "@components/Contact";


export default function Home() {
  return (
    <>
      <Header />
      <Toaster />
      <HeroSection />
      <About />
      <Skills />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
}
