import { AlertTriangle, Eye, BarChart2 } from "lucide-react";

const PAIN_POINTS = [
  {
    id: "downtime",
    title: "Tired of account bans?",
    description:
      "We provide verified, high-quality assets with 99.9% uptime so your campaigns never stop running.",
    icon: AlertTriangle,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: "visibility",
    title: "No transparency?",
    description:
      "Get total visibility with our verified asset tracking and real-time status monitoring.",
    icon: Eye,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "performance",
    title: "Losing ad spend?",
    description:
      "Our premium BMs and ad accounts are optimized for performance and reliability.",
    icon: BarChart2,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export const PainPoints = () => {
  return (
    <section
      className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="text-center mb-12">
        <h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat">
          Stop Letting Poor Assets{" "}
          <span className="text-stone-400">Hold You Back.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PAIN_POINTS.map((point) => {
          const IconComponent = point.icon;
          return (
            <div
              key={point.id}
              className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 ${point.iconBgColor} ${point.iconColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                {point.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

