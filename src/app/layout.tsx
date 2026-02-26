import type { Metadata } from "next";

import "./globals.css";
import WaterBackground from "@/components/UI/WaterBackground";
import { SplashProvider } from "@/context/SplashContext";
import SplashWrapper from "@/components/Splash/SplashWrapper";



export const metadata: Metadata = {
  title: "Shree Sai Borewell | Best Borewell Drilling & Pump Services in Vadodara",
  description: "Expert Direct Rotary borewell drilling, submersible pump installation, and water tank services in Vadodara. 30+ years of experience. Contact us for top-rated groundwater solutions.",
  keywords: "borewell drilling vadodara, submersible pumps vadodara, water borewell contractor, best borewell company vadodara, direct rotary drilling, water tank service, tubewell drilling gujarat, borewell repair vadodara, groundwater services vadodara, industrial borewell drilling, agricultural borewell gujarat, domestic borewell services, borewell cleaning vadodara, pump maintenance services, water source solution vadodara, geology survey vadodara, rainwater harvesting baroda, pvc pipe dealer vadodara, solar pump installation, 6 inch borewell price, 8 inch borewell cost",
  metadataBase: new URL("https://shreesaiborewell.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
    shortcut: "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
    apple: "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
    },
  },
  openGraph: {
    title: "Shree Sai Borewell | Premium Groundwater Solutions in Vadodara",
    description: "Trusted borewell drilling and pump services in Vadodara. 100% success rate with Direct Rotary technology.",
    url: "https://shreesaiborewell.com",
    siteName: "Shree Sai Borewell",
    images: [
      {
        url: "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
        width: 800,
        height: 600,
        alt: "Shree Sai Borewell Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.3072;73.1812", // Approximate Vadodara center
    "ICBM": "22.3072, 73.1812",
  },
};

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Note: maximumScale removed — pinch-to-zoom must be allowed for accessibility
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shree Sai Borewell",
  "image": "/SHREE_SAI_BOREWELL_FINAL_LOGO.png",
  "telephone": "+91 9510187991",
  "email": "info.shreesaiborewell@gmail.com",
  "url": "https://shreesaiborewell.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Elite Sahajanand, C-207, near Chanakya Nagari, Kalali",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.27,
    "longitude": 73.16
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Vadodara"
    },
    {
      "@type": "City",
      "name": "Anand"
    },
    {
      "@type": "City",
      "name": "Nadiad"
    },
    {
      "@type": "City",
      "name": "Bharuch"
    },
    {
      "@type": "City",
      "name": "Godhra"
    },
    {
      "@type": "City",
      "name": "Halol"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Gujarat"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Borewell Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Direct Rotary Drilling (1500+ ft)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tubewell Drilling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Submersible Pump Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Borewell Cleaning & Flushing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Geology Survey"
        }
      }
    ]
  },
  "priceRange": "₹₹",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/shreesaiborewell",
    "https://shreesaiborewell.com"
  ]
};

import FloatingContact from "@/components/FloatingContact/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <SplashProvider>
          <SplashWrapper />
          <WaterBackground />
          <FloatingContact />
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}

