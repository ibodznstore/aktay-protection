import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Careers />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
