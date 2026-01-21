export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: "👀",
      title: "Customer Visits Your Website",
      description:
        "A potential customer lands on your website looking for help or information.",
    },
    {
      step: "02",
      icon: "🤖",
      title: "AI Assistant Engages Instantly",
      description:
        "The AI assistant answers questions, qualifies the request, and captures contact details.",
    },
    {
      step: "03",
      icon: "📝",
      title: "Lead Is Captured or Booked",
      description:
        "The customer submits a form or books an appointment without any back-and-forth.",
    },
    {
      step: "04",
      icon: "📲",
      title: "You Receive a Qualified Lead",
      description:
        "You get a clean, qualified lead ready for follow-up or service.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How This System Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple, automated process designed to help service businesses
            capture more leads without extra effort.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.step}
              className="text-center px-4"
            >
              <div className="text-sm font-semibold text-blue-600 mb-2">
                STEP {step.step}
              </div>

              <div className="text-5xl mb-4">{step.icon}</div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
