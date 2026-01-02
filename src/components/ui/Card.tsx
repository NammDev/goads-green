import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "dark" | "lime" | "mint" | "sky";

type CardProps = {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  spotlight?: boolean;
};

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: "bg-neutral-50 border border-stone-200",
  glass: "glass-panel",
  dark: "bg-stone-900 border-stone-800 text-white",
  lime: "bg-lime-300 border-lime-300",
  mint: "bg-lime-100/80 border border-lime-200",
  sky: "bg-sky-50 border border-sky-100",
};

export const Card = ({
  children,
  variant = "default",
  className = "",
  hover = false,
  spotlight = false,
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 lg:p-8 transition-all",
        VARIANT_CLASSES[variant],
        hover && "hover:shadow-md hover:scale-[1.01] duration-300",
        spotlight && "spotlight-card",
        className
      )}
    >
      {children}
    </div>
  );
};

