import { memo } from "react";

type DividerVariant = "glow" | "fade" | "diamond" | "dots";

const SectionDivider = memo(({ variant = "glow" }: { variant?: DividerVariant }) => {
  if (variant === "diamond") {
    return (
      <div className="flex items-center justify-center gap-3 py-4" aria-hidden="true">
        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/40" />
        <div className="w-2 h-2 rotate-45 bg-gold/50" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/30" />
        <div className="w-2 h-2 rotate-45 bg-gold/50" />
        <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/40" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-2 py-4" aria-hidden="true">
        <div className="w-1 h-1 rounded-full bg-gold/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </div>
    );
  }

  if (variant === "fade") {
    return (
      <div className="py-2" aria-hidden="true">
        <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    );
  }

  // "glow" default
  return (
    <div className="py-2" aria-hidden="true">
      <div className="mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
});

SectionDivider.displayName = "SectionDivider";
export { SectionDivider };
