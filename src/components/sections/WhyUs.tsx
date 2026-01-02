import { Binary, Monitor, Users } from "lucide-react";

const REASONS = [
  {
    id: "data",
    title: "Premium Quality",
    description:
      "No guessing. Every asset is verified, tested, and backed by our quality guarantee.",
    icon: Binary,
  },
  {
    id: "visibility",
    title: "Full Transparency",
    description:
      "We don't just sell assets; we provide complete documentation and support.",
    icon: Monitor,
  },
  {
    id: "partner",
    title: "Partner, Not Vendor",
    description:
      "We integrate with your team via Telegram/WhatsApp for real-time support.",
    icon: Users,
  },
];

export const WhyUs = () => {
  return (
    <section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-montserrat leading-tight">
          Why GoAds Green?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {REASONS.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div key={reason.id} className="space-y-3">
                <div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {reason.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

