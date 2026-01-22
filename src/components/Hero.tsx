import { Link } from "react-router-dom";

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
  Never Miss Another Customer — Even When You’re Busy
</h1>
         <p className="text-xl text-slate-600 mb-10 max-w-xl">
  Your AI Attendant answers inquiries instantly, captures leads, and books jobs
  automatically — so your website works 24/7, even when you can’t.
</p>
{/* HOW IT WORKS */}
<div className="mt-24 max-w-4xl">
  <h2 className="text-3xl font-bold text-slate-900 mb-8">
    How the AI Attendant Works
  </h2>

  <div className="space-y-6 text-lg text-slate-600">
    <div>
      <strong className="text-slate-900">Step 1 – Customers Reach Out</strong>
      <p>
        Customers message your website or request service — day or night.
      </p>
    </div>

    <div>
      <strong className="text-slate-900">Step 2 – AI Responds Instantly</strong>
      <p>
        The AI Attendant answers common questions, confirms service areas,
        and gathers contact details automatically.
      </p>
    </div>

    <div>
      <strong className="text-slate-900">Step 3 – Lead Is Captured</strong>
      <p>
        Customer information is saved instantly so nothing slips through the cracks.
      </p>
    </div>

    <div>
      <strong className="text-slate-900">Step 4 – Booking or Follow-Up Happens</strong>
      <p>
        Appointments can be booked automatically or routed for follow-up —
        no phone tag required.
      </p>
    </div>
  </div>

  <p className="mt-10 text-slate-700 font-medium">
    This is what turns a basic website into a revenue-generating system.
  </p>
</div>


          {/* CTA BUTTONS */}
         <div className="flex flex-wrap gap-4">
  <button
    onClick={onAI}
    className="px-6 py-3 rounded-md bg-black text-white text-base font-medium hover:bg-slate-800 transition"
  >
    🤖 See the AI Answer a Customer
  </button>

  <button
    onClick={onForm}
    className="px-6 py-3 rounded-md border border-slate-300 text-base font-medium hover:bg-slate-100 transition"
  >
    📝 See How Leads Are Captured
  </button>

  <button
    onClick={onCalendar}
    className="px-6 py-3 text-base font-medium text-blue-600 hover:underline"
  >
    📅 See the Booking Workflow
  </button>

  <Link
    to="/example-site"
    className="px-6 py-3 text-base font-medium text-slate-700 hover:underline"
  >
    👀 View a Typical Service Website
  </Link>
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
