"use client";

import { useSplash } from "@/context/SplashContext";
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

// 3D Scene — always mounted immediately so models download during splash
const BorewellScene = dynamic(() => import("@/components/Scene/BorewellScene"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { isSplashVisible } = useSplash();
  const splashDone = !isSplashVisible;

  return (
    <main>
      <Navbar />
      <Hero />

      {/*
             * BorewellScene is always mounted — no visibility:hidden wrapper.
             * It controls its own opacity via the splashDone + modelsReady flags.
             * This avoids the repaint-flash that visibility:hidden caused.
             * Models are downloading in the background during the 3s splash.
             */}
      <BorewellScene splashDone={splashDone} />

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
