import { Zap, Globe, Server, Database, Cpu, CloudLightning } from "lucide-react";

const TRUST_COMPANIES = [
  { name: "SaaSforce", icon: CloudLightning },
  { name: "TechFlow", icon: Cpu },
  { name: "DataScale", icon: Database },
  { name: "VentureCorp", icon: Globe },
  { name: "CloudNine", icon: Server },
  { name: "BoltSoft", icon: Zap },
];

const CompanyList = () => (
  <div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
    {TRUST_COMPANIES.map((company) => {
      const IconComponent = company.icon;
      return (
        <div
          key={company.name}
          className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"
        >
          <IconComponent className="w-5 h-5 lg:w-6 lg:h-6" />
          {company.name}
        </div>
      );
    })}
  </div>
);

export const Marquee = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
      <p className="text-left text-sm font-medium text-stone-400 uppercase tracking-widest mb-6">
        Trusted by forward-thinking companies
      </p>
      <div className="overflow-hidden w-full relative">
        {/* Left Fade */}
        <div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white" />
        {/* Right Fade */}
        <div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:pause-animation">
          <CompanyList />
          <div className="ml-12 lg:ml-24">
            <CompanyList />
          </div>
        </div>
      </div>
    </section>
  );
};

