"use client";

import { useState, useRef } from "react";
import { sets } from "@/data/sets";
import Header from "@/components/Header";
import ConcernGrid from "@/components/ConcernGrid";
import ProductList from "@/components/ProductList";

export default function Home() {
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const resultRef = useRef<HTMLElement>(null);

  const selectedSet = sets.find((s) => s.concern === selectedConcern) ?? null;

  const handleSelect = (concern: string) => {
    if (selectedConcern === concern) return;
    setSelectedConcern(concern);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen relative px-6">
      <Header />
      <ConcernGrid
        selectedConcern={selectedConcern}
        onSelect={handleSelect}
      />
      <section
        ref={resultRef}
        className={`
          pb-10
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${selectedSet ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
        `}
      >
        {selectedSet && (
          <>
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="font-serif text-[13px] tracking-[3px] uppercase text-text-light whitespace-nowrap">
                Your Routine
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ProductList selectedSet={selectedSet} />
          </>
        )}
      </section>
    </div>
  );
}
