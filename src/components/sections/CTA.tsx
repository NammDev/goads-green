export const CTA = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
      <div className="lg:p-20 overflow-hidden text-center bg-brand-lime rounded-[32px] p-8 relative">
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">
            Ready to scale your advertising?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex"
              aria-label="Book a Strategy Call"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>

        {/* Decorative Background */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

