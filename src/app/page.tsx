import { Container } from "@mui/material";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import About from "@components/About";
import Skills from "@/components/Skills";
import Projets from "@components/Projets";
import Contact from "@components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Container component="main">
          <HeroSection />
        </Container>
        <About />
        <Skills />
        <Projets />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
