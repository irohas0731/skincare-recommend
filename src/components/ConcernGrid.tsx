"use client";

import { sets } from "@/data/sets";
import ConcernCard from "./ConcernCard";

type ConcernGridProps = {
  selectedConcern: string | null;
  onSelect: (concern: string) => void;
};

export default function ConcernGrid({
  selectedConcern,
  onSelect,
}: ConcernGridProps) {
  return (
    <section className="px-6 pb-4">
      <div className="text-[11px] tracking-[2px] uppercase text-text-light mb-3.5 text-center">
        Select your concern
      </div>
      <div className="grid grid-cols-2 gap-3">
        {sets.map((s) => (
          <ConcernCard
            key={s.concern}
            concern={s.concern}
            desc={s.desc}
            isActive={selectedConcern === s.concern}
            onSelect={() => onSelect(s.concern)}
          />
        ))}
      </div>
    </section>
  );
}
