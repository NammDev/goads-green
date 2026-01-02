import { cn } from "@/lib/utils";

type FloatingCardProps = {
  delay: string;
  className?: string;
  icon: React.ReactNode;
  iconBgClass: string;
  title: string;
  subtitle: string;
  location: string;
  badge: string;
  badgeClass: string;
};

export const FloatingCard = ({
  delay,
  className = "",
  icon,
  iconBgClass,
  title,
  subtitle,
  location,
  badge,
  badgeClass,
}: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg max-w-sm mx-auto w-full",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center border shrink-0",
          iconBgClass
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <p className="text-xs font-semibold text-stone-900">{title}</p>
          <span className="text-[10px] text-stone-400">{location}</span>
        </div>
        <p className="text-xs text-stone-500 truncate">{subtitle}</p>
      </div>
      <span
        className={cn(
          "text-[10px] px-2 py-0.5 rounded border font-medium",
          badgeClass
        )}
      >
        {badge}
      </span>
    </div>
  );
};

