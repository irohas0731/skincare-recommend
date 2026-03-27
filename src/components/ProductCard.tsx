"use client";

import Image from "next/image";
import { useState } from "react";

type ProductCardProps = {
  stepNum: string;
  categoryLabel: string;
  categoryClass: "lotion" | "serum" | "cream";
  productName: string;
  brand: string;
  imageSrc: string;
  show: boolean;
};

const badgeColors = {
  lotion: "bg-lotion",
  serum: "bg-serum",
  cream: "bg-cream",
} as const;

export default function ProductCard({
  stepNum,
  categoryLabel,
  categoryClass,
  productName,
  brand,
  imageSrc,
  show,
}: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-sm overflow-hidden
        transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="flex gap-4 p-[18px] items-center">
        <div className="w-20 h-20 rounded-xl bg-bg flex-shrink-0 flex items-center justify-center overflow-hidden">
          {imageSrc && !imgError ? (
            <Image
              src={`/images/products/${imageSrc}`}
              alt={productName}
              width={80}
              height={80}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-[32px] opacity-30">📦</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span
              className={`text-[10px] font-medium tracking-[1px] uppercase px-2.5 py-[3px] rounded-full text-white ${badgeColors[categoryClass]}`}
            >
              {categoryLabel}
            </span>
            <span className="font-serif text-xs text-text-light">
              {stepNum}
            </span>
          </div>
          <div className="text-sm font-medium leading-snug mb-[3px]">
            {productName}
          </div>
          <div className="text-xs text-text-light">{brand}</div>
        </div>
      </div>
    </div>
  );
}
