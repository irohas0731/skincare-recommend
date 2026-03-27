"use client";

type ConcernCardProps = {
  concern: string;
  desc: string;
  isActive: boolean;
  onSelect: () => void;
};

export default function ConcernCard({
  concern,
  desc,
  isActive,
  onSelect,
}: ConcernCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        relative overflow-hidden text-left rounded-[10px] border-[1.5px] px-3.5 py-4
        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
        before:h-[3px] before:bg-accent before:transition-transform before:duration-300 before:ease-out
        ${
          isActive
            ? "bg-selected border-selected shadow-md scale-[0.97] before:scale-x-100"
            : "bg-white border-border hover:border-accent hover:shadow-sm before:scale-x-0 hover:before:scale-x-100"
        }
      `}
    >
      <div
        className={`text-[15px] font-medium mb-1 transition-colors duration-300 ${
          isActive ? "text-text-on-dark" : "text-text"
        }`}
      >
        {concern}
      </div>
      <div
        className={`text-[11px] leading-relaxed transition-colors duration-300 ${
          isActive ? "text-[rgba(247,244,240,0.6)]" : "text-text-light"
        }`}
      >
        {desc}
      </div>
    </button>
  );
}
