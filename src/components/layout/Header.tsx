"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Building2,
  FileText,
  Users,
  BarChart3,
  RotateCcw,
  Layers,
  BookOpen,
  HelpCircle,
  MessageCircle,
  Info,
  Briefcase,
} from "lucide-react";

// Navigation structure with dropdowns
const NAV_ITEMS = [
  {
    label: "Agency Accounts",
    href: "#",
    hasDropdown: true,
    columns: [
      {
        title: "ACCOUNT TYPES",
        items: [
          {
            label: "FB Agency Account",
            description: "Verified agency accounts for scaling",
            href: "/products/fb-agency",
            icon: Building2,
          },
          {
            label: "TikTok Agency",
            description: "Premium TikTok ad accounts",
            href: "/products/tiktok-agency",
            icon: BarChart3,
          },
          {
            label: "Google Ads MCC",
            description: "Manager accounts for agencies",
            href: "/products/google-mcc",
            icon: Layers,
          },
        ],
      },
      {
        title: "AGENCY SERVICES",
        items: [
          {
            label: "White Label Solutions",
            description: "Resell under your brand",
            href: "/services/white-label",
            icon: Briefcase,
          },
          {
            label: "Account Management",
            description: "Let us manage your accounts",
            href: "/services/management",
            icon: Users,
          },
        ],
      },
    ],
    footer: {
      text: "New: Agency partnership program now available",
      linkText: "Learn More",
      linkHref: "/partners",
    },
  },
  {
    label: "Meta Assets",
    href: "#",
    hasDropdown: true,
    columns: [
      {
        title: "CORE ASSETS",
        items: [
          {
            label: "Business Managers",
            description: "Clean BMs with proper structure and permissions",
            href: "/products/bm",
            icon: Building2,
          },
          {
            label: "Facebook Pages",
            description: "Aged, verified pages for credibility and ads",
            href: "/products/pages",
            icon: FileText,
          },
          {
            label: "Facebook Profiles",
            description: "Aged profiles for BM admin roles",
            href: "/products/profiles",
            icon: Users,
          },
        ],
      },
      {
        title: "PREMIUM SERVICES",
        items: [
          {
            label: "Page Feedback Boost",
            description: "Recover and grow page feedback scores",
            href: "/services/feedback",
            icon: BarChart3,
          },
          {
            label: "Unban Service",
            description: "Ethical recovery for restricted assets",
            href: "/services/unban",
            icon: RotateCcw,
          },
          {
            label: "Bulk Orders",
            description: "Volume discounts for agencies",
            href: "/services/bulk",
            icon: Layers,
          },
        ],
      },
    ],
    footer: {
      text: "New: Bulk discounts available for agencies",
      linkText: "View Pricing",
      linkHref: "/pricing",
    },
  },
  {
    label: "Resources",
    href: "#",
    hasDropdown: true,
    columns: [
      {
        title: "LEARN",
        items: [
          {
            label: "Blog",
            description: "Tips and strategies for ad success",
            href: "/blog",
            icon: BookOpen,
          },
          {
            label: "FAQ",
            description: "Common questions answered",
            href: "/faq",
            icon: HelpCircle,
          },
          {
            label: "Case Studies",
            description: "Real results from our clients",
            href: "/cases",
            icon: BarChart3,
          },
        ],
      },
      {
        title: "COMPANY",
        items: [
          {
            label: "About Us",
            description: "Our story and mission",
            href: "/about",
            icon: Info,
          },
          {
            label: "Contact",
            description: "Get in touch with our team",
            href: "/contact",
            icon: MessageCircle,
          },
        ],
      },
    ],
  },
  {
    label: "Affiliates",
    href: "/affiliates",
    hasDropdown: false,
  },
];

type DropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type DropdownColumn = {
  title: string;
  items: DropdownItem[];
};

type NavItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  columns?: DropdownColumn[];
  footer?: {
    text: string;
    linkText: string;
    linkHref: string;
  };
};

const DropdownMenu = ({ item }: { item: NavItem }) => {
  if (!item.columns) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-stone-900 rounded-2xl shadow-2xl border border-stone-800 overflow-hidden min-w-[500px]">
        {/* Columns */}
        <div className="flex p-6 gap-8">
          {item.columns.map((column) => (
            <div key={column.title} className="flex-1 min-w-[200px]">
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-1">
                {column.items.map((subItem) => {
                  const IconComponent = subItem.icon;
                  return (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-800 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-800 group-hover/item:bg-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4 text-stone-400 group-hover/item:text-brand-lime transition-colors" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-white group-hover/item:text-brand-lime transition-colors">
                            {subItem.label}
                          </span>
                          <span className="block text-xs text-stone-500 mt-0.5 leading-relaxed">
                            {subItem.description}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        {item.footer && (
          <div className="bg-stone-950 px-6 py-4 flex items-center justify-between border-t border-stone-800">
            <span className="text-sm text-stone-400">
              <span className="text-brand-lime font-medium">New:</span>{" "}
              {item.footer.text.replace("New: ", "")}
            </span>
            <Link
              href={item.footer.linkHref}
              className="text-sm font-medium text-brand-lime hover:underline underline-offset-2 flex items-center gap-1"
            >
              {item.footer.linkText}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileDropdown = ({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  if (!item.hasDropdown || !item.columns) {
    return (
      <Link
        href={item.href}
        className="flex items-center justify-between py-3 text-stone-700 hover:text-stone-900 transition-colors font-medium"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-stone-700 hover:text-stone-900 transition-colors font-medium"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="pl-4 pb-4 space-y-4">
          {item.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.items.map((subItem) => {
                  const IconComponent = subItem.icon;
                  return (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className="flex items-center gap-3 py-2 text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm">{subItem.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const handleMobileDropdownToggle = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMobileMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="block text-2xl lg:text-3xl font-semibold tracking-tighter"
          aria-label="GoAds Green Home"
        >
          GoAds<span className="transition-colors text-stone-500">Green</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex font-montserrat items-center">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100 group-hover:bg-stone-100"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
                >
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && <DropdownMenu item={item} />}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex gap-x-4 items-center">
          <button
            className="bg-stone-900 text-brand-lime hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group"
            aria-label="Book Strategy Call"
          >
            <span className="hidden sm:inline">Book Strategy Call</span>
            <span className="sm:hidden">Contact</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            onClick={handleToggleMobileMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200/50 max-h-[80vh] overflow-y-auto">
          <nav className="px-6 py-4 font-montserrat divide-y divide-stone-100">
            {NAV_ITEMS.map((item) => (
              <MobileDropdown
                key={item.label}
                item={item}
                isOpen={openMobileDropdown === item.label}
                onToggle={() => handleMobileDropdownToggle(item.label)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
