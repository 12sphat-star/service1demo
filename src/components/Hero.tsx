type HeroProps = {
  businessType: string;
  city: string;
  onAI: () => void;
  onForm: () => void;
  onCalendar: () => void;
};

export default function Hero({
  businessType,
  city,
  onAI,
  onForm,
  onCalendar,
}: HeroProps) {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Copy */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide">
            AI-Powered Service Business Website
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            A Smarter Website for Modern {businessType} Businesses
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-xl">
            This system helps service businesses in {city} capture more leads,
            answer customers instantly, and book jobs automatically — powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onAI}
              className="px-6 py-3 rounded-md bg-black text-white text-base font-medium hover:bg-slate-800 transition"
            >
              🤖 Talk to the AI Assistant
            </button>

            <button
              onClick={onForm}
              className="px-6 py-3 rounded-md border border-slate-300 text-base font-medium hover:bg-slate-100 transition"
            >
              📝 Get a Fast Quote
            </button>

            <button
              onClick={onCalendar}
              className="px-6 py-3 text-base font-medium text-blue-600 hover:underline"
            >
              📅 Book a Free Consultation
            </button>
          </div>
        </div>

        {/* RIGHT: Visual Placeholder */}
        <div className="relative">
          <div className="rounded-xl border border-slate-200 shadow-lg bg-slate-50 p-6">
            <div className="space-y-4">
              <div className="h-4 w-1/3 bg-slate-300 rounded"></div>
              <div className="h-4 w-2/3 bg-slate-300 rounded"></div>
              <div className="h-24 bg-white rounded-lg shadow-inner flex items-center justify-center text-slate-500">
                AI Chat • Lead Captured • Booking Confirmed
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
