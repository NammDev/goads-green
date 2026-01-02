import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const FOOTER_LINKS = {
  company: [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#cases" },
    { label: "Login", href: "#" },
  ],
  connect: [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "GitHub", href: "#", icon: Github },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
      <div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
          {/* Logo & Description */}
          <div className="lg:w-1/3 space-y-5">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-bold tracking-tighter">
                GoAds<span className="text-lime-500">Green</span>
              </span>
            </div>
            <p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
              Premium Meta assets and advertising solutions for modern
              businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                Company
              </h3>
              <ul className="space-y-3 text-stone-600">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                Connect
              </h3>
              <ul className="space-y-3 text-stone-600">
                {FOOTER_LINKS.connect.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 hover:text-stone-900 transition-colors"
                        aria-label={link.label}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                Legal
              </h3>
              <ul className="space-y-3 text-stone-600">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
          <p>© {new Date().getFullYear()} GoAds Green. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

