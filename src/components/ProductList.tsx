"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import type { ConcernSet } from "@/data/sets";
import ProductCard from "./ProductCard";
import WarningBox from "./WarningBox";

type ProductListProps = {
  selectedSet: ConcernSet;
};

const steps = [
  { key: "lotion" as const, label: "化粧水", cls: "lotion" as const, num: "Step 1" },
  { key: "serum" as const, label: "美容液", cls: "serum" as const, num: "Step 2" },
  { key: "cream" as const, label: "乳液・クリーム", cls: "cream" as const, num: "Step 3" },
];

export default function ProductList({ selectedSet }: ProductListProps) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setVisibleCards([]);
    setShowWarning(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, i]);
        }, i * 120)
      );
    });

    if (selectedSet.warning) {
      timers.push(setTimeout(() => setShowWarning(true), 450));
    }

    return () => timers.forEach(clearTimeout);
  }, [selectedSet]);

  return (
    <>
      <div className="flex flex-col gap-3.5">
        {steps.map((step, i) => {
          const name = selectedSet[step.key];
          const product = products[name];
          return (
            <div key={`${selectedSet.concern}-${step.key}`}>
              {i > 0 && (
                <div className="flex justify-center items-center py-1 text-text-light text-lg opacity-30">
                  ↓
                </div>
              )}
              <ProductCard
                stepNum={step.num}
                categoryLabel={step.label}
                categoryClass={step.cls}
                productName={name}
                brand={product?.brand ?? ""}
                imageSrc={product?.image ?? ""}
                show={visibleCards.includes(i)}
              />
            </div>
          );
        })}
      </div>
      {selectedSet.warning && (
        <WarningBox text={selectedSet.warning} show={showWarning} />
      )}
    </>
  );
}
