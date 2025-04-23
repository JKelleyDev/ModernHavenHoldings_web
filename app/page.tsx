'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity fade — adjust the divisor for faster or slower fade
  const opacity = Math.max(1 - scrollY / 400, 0);


  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/HomeBackground.jpg" // Your large image in public/
          alt="Modern Real Estate"
          fill
          style={{ objectFit: "cover", opacity }}
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/15 z-10" />

        {/* Overlayed content */ }
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl">
            Modern Haven Holdings
          </h1>
        </div>
      </div>


        {/* Page Content */}
        <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-4">Featured Listings Section</h2>
        <p className="text-lg text-gray-600">
          This is where we need to place the featured listings followed by a footer
        </p>
      </section>
    </div>
  );
}