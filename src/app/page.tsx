import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { PainPoints } from "@/components/sections/PainPoints";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Grid Background - Hero Only */}
      <div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
        <main className="flex-1 w-full">
          <Hero />

          {/* White Background Section */}
          <div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
            <Marquee />
            <PainPoints />
            <Services />
            <WhyUs />
            <CaseStudies />
            <CTA />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;

