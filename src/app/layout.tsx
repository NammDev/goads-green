import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoAds Green - Premium Meta Assets & Ad Account Solutions",
  description:
    "Your trusted partner for Meta Business Manager, Ad Accounts, Pages, and Profiles. Scale your advertising with our premium verified assets.",
  keywords: [
    "Meta Ads",
    "Business Manager",
    "Ad Account",
    "Facebook Advertising",
    "Meta Assets",
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${montserrat.variable} min-h-screen overflow-x-hidden text-neutral-900 font-sans bg-neutral-100 relative antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

