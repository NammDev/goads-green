"use client";

type GlassButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const GlassButton = ({
  children,
  onClick,
  className = "",
}: GlassButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <button
      className={`glass-button cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={typeof children === "string" ? children : "Action button"}
    >
      <span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight py-4 px-8 relative">
        {children}
      </span>
      <div className="button-shine" aria-hidden="true" />
    </button>
  );
};

