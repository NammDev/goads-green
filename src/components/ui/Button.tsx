"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-stone-900 text-brand-lime hover:bg-stone-800 shadow-lg hover:shadow-xl",
  secondary:
    "bg-brand-lime text-stone-900 hover:bg-[#b0f060] shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)]",
  outline:
    "border border-stone-300 text-stone-700 hover:bg-stone-200/50 bg-transparent",
  ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100 bg-transparent",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  showArrow = false,
  ariaLabel,
  type = "button",
}: ButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <button
      type={type}
      className={cn(
        "font-medium rounded-full transition-all flex items-center justify-center gap-2 group",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      tabIndex={0}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

