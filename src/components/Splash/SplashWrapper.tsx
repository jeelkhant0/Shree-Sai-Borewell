"use client";

import { useSplash } from "@/context/SplashContext";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper() {
    const { isSplashVisible, setIsSplashVisible } = useSplash();

    // AnimatePresence removed — SplashScreen handles its own entry/exit animation internally
    if (!isSplashVisible) return null;

    return <SplashScreen onFinish={() => setIsSplashVisible(false)} />;
}
