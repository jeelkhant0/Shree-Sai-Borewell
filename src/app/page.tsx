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

// 3D Scene — loaded immediately so models download during the splash screen
const BorewellScene = dynamic(() => import("@/components/Scene/BorewellScene"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { isSplashVisible } = useSplash();

  return (
    <main>
      <Navbar />
      <Hero />

      {/*
             * BorewellScene is ALWAYS mounted so WebGL context & GLB files
             * are initialized during the 3-second splash.
             * - During splash: hidden (visibility:hidden keeps it off-screen but active)
             * - After splash: visible. The scene itself fades in via opacity transition
             *   only once Three.js signals models are on the GPU (SceneReadyNotifier).
             * This completely eliminates any visible "pop" or delay.
             */}
      <div style={{ visibility: isSplashVisible ? 'hidden' : 'visible' }}>
        <BorewellScene />
      </div>

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
