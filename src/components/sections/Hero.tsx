import { ArrowRight, Server, Database } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import { FloatingCard } from "@/components/ui/FloatingCard";

export const Hero = () => {
  return (
    <section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mx-auto pt-8 px-6 pb-12 items-center">
      {/* Left Content */}
      <div
        className="animate-clip-in lg:col-span-7 space-y-6"
        style={{ animationDelay: "0.1s" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
          Premium Meta Assets & Solutions
        </div>

        {/* Headline */}
        <h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
          Your Advertising,{" "}
          <span className="text-slate-950 relative inline-block">
            Optimized
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-brand-lime -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                opacity="0.4"
              />
            </svg>
          </span>{" "}
          for Growth.
        </h1>

        {/* Description */}
        <p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
          We provide premium verified Meta assets—Business Managers, Ad
          Accounts, Pages, and Profiles—that power your advertising campaigns.
          No hassles, just results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <GlassButton>Start Your Journey</GlassButton>
          <button
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors"
            aria-label="View Our Assets"
          >
            View Our Assets
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div
        className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-lime opacity-20 blur-[100px] rounded-full pointer-events-none" />

        {/* Floating Cards */}
        <div className="relative space-y-4">
          {/* Card 1: Business Manager Status */}
          <FloatingCard
            delay="0s"
            className="lg:ml-0"
            icon={<Server className="w-5 h-5" />}
            iconBgClass="bg-lime-50 text-lime-600 border-lime-100"
            title="Business Manager"
            subtitle="Verified & Active"
            location="Premium Tier"
            badge="100% Verified"
            badgeClass="bg-stone-100 text-stone-600 border-stone-200"
          />

          {/* Card 2: Ad Account Performance */}
          <FloatingCard
            delay="1.5s"
            className="lg:ml-8"
            icon={<ArrowRight className="w-5 h-5" />}
            iconBgClass="bg-brand-lime text-stone-900 border-lime-600"
            title="Ad Account ROAS"
            subtitle="Q4 Campaign Performance"
            location="Real-time"
            badge="+23.7%"
            badgeClass="bg-brand-lime text-stone-900 border-[#aae65f]"
          />

          {/* Card 3: Page Integration */}
          <FloatingCard
            delay="2.5s"
            className="lg:-ml-4"
            icon={<Database className="w-5 h-5" />}
            iconBgClass="bg-stone-900 text-brand-lime border-stone-800"
            title="Page Setup"
            subtitle="FB Page <-> BM Connected"
            location="Now"
            badge="Active"
            badgeClass="bg-stone-900 text-white border-stone-700"
          />
        </div>
      </div>
    </section>
  );
};

