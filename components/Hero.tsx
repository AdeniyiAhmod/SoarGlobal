"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Compass, Send } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-port.png",
    label: "Freight forwarding",
    title: "Global freight, handled clearly.",
  },
  {
    image: "/images/hero-air-freight.png",
    label: "Import and export",
    title: "Air, sea and road logistics.",
  },
  {
    image: "/images/hero-warehouse.png",
    label: "Procurement support",
    title: "Sourcing and shipping, simplified.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-navy-950 sm:min-h-[620px]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,39,0.9),rgba(4,20,39,0.58),rgba(4,20,39,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" />

      <div className="container-shell relative flex min-h-[560px] items-center py-20 sm:min-h-[620px]">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
            {slides[activeSlide].label}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {slides[activeSlide].title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
            From Northern Ireland to global markets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/quote" icon={Send} className="w-full sm:w-auto">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" icon={Compass} className="w-full sm:w-auto">
              Services
            </ButtonLink>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 sm:left-auto sm:right-8 sm:translate-x-0">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                index === activeSlide ? "w-9 bg-gold-500" : "w-2.5 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Show ${slide.label} image`}
              aria-current={index === activeSlide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
