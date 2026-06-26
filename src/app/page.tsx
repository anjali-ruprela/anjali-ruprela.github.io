import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Qualification } from "@/components/Qualification";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { Certifications } from "@/components/Certifications";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <DashboardShowcase />
        <Certifications />
        <Qualification />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
