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

        {/* LEFT SIDE */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide">
            AI-Powered Service Business Website
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            A Smarter Website for Modern {businessType} Businesses
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-xl">
            Capture more leads, answer customers instantly, and book jobs
            automatically across {city} — powered by AI.
          </p>

          {/* CTA BUTTONS */}
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

            <a
              href="/example-site"
              className="px-6 py-3 text-base font-medium text-slate-700 hover:underline"
            >
              👀 View Example Website
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – AI SYSTEM PREVIEW */}
        <div className="relative">
          <div className="rounded-xl border border-slate-200 shadow-xl bg-white overflow-hidden">

            <div className="bg-slate-900 text-white px-5 py-3 text-sm font-medium">
              AI Front Desk – Live Preview
            </div>

            <div className="p-5 space-y-4 text-sm">
              <div>
                <p className="font-semibold">Incoming Customer</p>
                <p className="text-slate-600">
                  “Hi, I need service today. Do you cover Hampton Roads?”
                </p>
              </div>

              <div>
                <p className="font-semibold">AI Responds Instantly</p>
                <p className="text-slate-600">
                  “Yes! Can I get your name and best number?”
                </p>
              </div>

              <div>
                <p className="font-semibold">Lead Captured</p>
                <p className="text-slate-600">
                  Customer info saved automatically.
                </p>
              </div>

              <div>
                <p className="font-semibold">Job Booked</p>
                <p className="text-slate-600">
                  Appointment scheduled — no phone tag.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 px-5 py-3 text-xs text-slate-500 text-center">
              Demo preview of the automated workflow
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
