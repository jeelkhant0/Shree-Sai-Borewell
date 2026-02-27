"use client";

import Navbar from "@/components/UI/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Process from "@/components/Process/Process";
import Beneficiaries from "@/components/Beneficiaries/Beneficiaries";
import Testimonials from "@/components/Testimonials/Testimonials";
import LiquidGallery from "@/components/Gallery/LiquidGallery";
import Showcase from "@/components/Showcase/Showcase";
import Quality from "@/components/Quality/Quality";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/UI/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero now contains static images — no WebGL needed */}
      <Hero />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <About />
        <WhyChooseUs />
        <Process />
        <Beneficiaries />
        <Testimonials />
        <LiquidGallery />
        <Showcase />
        <Quality />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
