import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "lime" | "success" | "warning" | "dark";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  pulse?: boolean;
};

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-white border-stone-200 text-stone-600",
  lime: "bg-brand-lime border-[#aae65f] text-stone-900",
  success: "bg-green-100 border-green-200 text-green-700",
  warning: "bg-amber-100 border-amber-200 text-amber-700",
  dark: "bg-stone-900 border-stone-700 text-white",
};

export const Badge = ({
  children,
  variant = "default",
  className = "",
  pulse = false,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
      )}
      {children}
    </span>
  );
};

