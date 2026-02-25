"use client";

import Navbar from "@/components/UI/Navbar";
import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
import About from "@/components/About/About";

// Lazily loaded below-the-fold sections
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs/WhyChooseUs"), { ssr: false });
const Process = dynamic(() => import("@/components/Process/Process"), { ssr: false });
const Beneficiaries = dynamic(() => import("@/components/Beneficiaries/Beneficiaries"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"), { ssr: false });
const LiquidGallery = dynamic(() => import("@/components/Gallery/LiquidGallery"), { ssr: false });
const Showcase = dynamic(() => import("@/components/Showcase/Showcase"), { ssr: false });
const Quality = dynamic(() => import("@/components/Quality/Quality"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/UI/Footer"), { ssr: false });

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
