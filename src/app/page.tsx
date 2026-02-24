"use client";

import { useState, useEffect } from "react";
import { useSplash } from "@/context/SplashContext";
import Navbar from "@/components/UI/Navbar";
import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";

// Eagerly-loaded above-the-fold sections
import About from "@/components/About/About";

// Lazily loaded below-the-fold sections — reduces initial bundle size
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs/WhyChooseUs"), { ssr: false });
const Process = dynamic(() => import("@/components/Process/Process"), { ssr: false });
const Beneficiaries = dynamic(() => import("@/components/Beneficiaries/Beneficiaries"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"), { ssr: false });
const LiquidGallery = dynamic(() => import("@/components/Gallery/LiquidGallery"), { ssr: false });
const Showcase = dynamic(() => import("@/components/Showcase/Showcase"), { ssr: false });
const Quality = dynamic(() => import("@/components/Quality/Quality"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/UI/Footer"), { ssr: false });

// 3D scene — only load after splash
const BorewellScene = dynamic(() => import("@/components/Scene/BorewellScene"), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  const { isSplashVisible } = useSplash();

  return (
    <main>
      <Navbar />
      <Hero />
      {/* 3D Scene — loads only after splash is dismissed */}
      {!isSplashVisible && <BorewellScene />}

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
