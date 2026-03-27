"use client";

type WarningBoxProps = {
  text: string;
  show: boolean;
};

export default function WarningBox({ text, show }: WarningBoxProps) {
  return (
    <div
      className={`
        mt-20 bg-warning-bg border-[1.5px] border-warning-border rounded-[10px] px-[18px] py-4
        transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] delay-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"}
      `}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">⚠️</span>
        <span className="text-[13px] font-semibold text-warning-text">
          使用時の注意事項
        </span>
      </div>
      <div className="text-[12.5px] leading-[1.7] text-warning-text">
        {text}
      </div>
    </div>
  );
}
