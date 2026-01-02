import { ArrowRight, Timer, Server, Check } from "lucide-react";

export const CaseStudies = () => {
  return (
    <section
      id="cases"
      className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20"
    >
      <div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
        {/* Grid Pattern */}
        <div
          className="opacity-20 absolute top-0 right-0 bottom-0 left-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex-1 lg:p-16 flex flex-col z-10 p-8 relative justify-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-brand-lime rounded-full animate-pulse" />
              <span className="text-brand-lime font-mono text-xs uppercase tracking-wider">
                Verified Results
              </span>
            </div>

            <h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
              Results that Compound.
            </h2>

            <p className="text-base lg:text-lg text-stone-400 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
              See how our premium assets deliver measurable impact for our
              partners.
            </p>

            <button
              className="group flex items-center gap-3 bg-brand-lime hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900"
              aria-label="Read Case Studies"
            >
              <span>Read Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 p-4 pb-16 relative items-end">
            <div className="lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl p-8 pb-16 shadow-2xl backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800">
                <span className="text-stone-300">performance_metrics.json</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-500/50" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">
                    Account Uptime
                  </span>
                  <span className="text-2xl font-bold text-white block mb-1">
                    99.9%
                  </span>
                  <span className="text-brand-lime text-[10px]">
                    All BM Assets
                  </span>
                </div>
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">ROAS Boost</span>
                  <span className="text-2xl font-bold text-white block mb-1">
                    +47%
                  </span>
                  <span className="text-brand-lime text-[10px]">
                    Premium Ad Accounts
                  </span>
                </div>
              </div>

              {/* Status Items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <Timer className="w-4 h-4 text-lime-400" />
                    <span className="text-stone-300">
                      Onboarding time reduced by 80%
                    </span>
                  </div>
                  <span className="text-brand-lime">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-lime-400" />
                    <span className="text-stone-300">
                      Zero account bans in 12 months
                    </span>
                  </div>
                  <span className="text-brand-lime">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

