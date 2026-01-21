type AIFrontDeskProps = {
  onAI: () => void;
};

export default function AIFrontDesk({ onAI }: AIFrontDeskProps) {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Copy */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-blue-400 uppercase tracking-wide">
            AI Front Desk
          </span>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Your 24/7 AI Front Desk —<br />
            Never Miss Another Lead
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            This system uses AI to answer customer questions instantly,
            qualify service requests, and capture leads — even when you’re busy
            or after hours.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <span>Answers customer questions instantly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <span>Captures name, phone number, and service need</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <span>Routes urgent vs non-urgent requests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <span>Books appointments automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <span>Works 24/7 — no missed calls, no voicemail</span>
            </li>
          </ul>

          <button
            onClick={onAI}
            className="px-6 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition"
          >
            🤖 See the AI in Action
          </button>
        </div>

        {/* RIGHT: Visual / Demo Placeholder */}
        <div className="relative">
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <div className="space-y-4">
              <div className="h-4 w-1/3 bg-slate-600 rounded"></div>
              <div className="h-4 w-2/3 bg-slate-600 rounded"></div>
              <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                AI Chat • Lead Captured • Appointment Booked
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
