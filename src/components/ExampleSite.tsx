export default function ExampleSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Simple Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold">
            Example Service Company
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">(757) 555-0123</span>
            <button className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm">
              Request Service
            </button>
          </div>
        </div>
      </header>

      {/* Traditional Hero */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Reliable Service You Can Count On
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Professional, on-time service for residential and commercial customers
            throughout Hampton Roads.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-slate-900 text-white font-medium">
              Request Service
            </button>
            <button className="px-6 py-3 rounded-md border border-slate-300 font-medium">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Emergency Service",
              "Repairs",
              "Installations",
              "Routine Maintenance",
              "Residential Services",
              "Commercial Services",
            ].map((service) => (
              <div
                key={service}
                className="border border-slate-200 rounded-lg p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-slate-600">
                  Reliable, professional service delivered by experienced technicians.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Local. Professional. Trusted.
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Locally owned and operated, we proudly serve homeowners and businesses
            throughout Hampton Roads with dependable service.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-700">
            <span>✔ Licensed & Insured</span>
            <span>✔ Experienced Technicians</span>
            <span>✔ Local Service Experts</span>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Proudly Serving Hampton Roads
        </h2>
        <p className="text-slate-600">
          Virginia Beach · Norfolk · Chesapeake · Portsmouth · Suffolk ·
          Hampton · Newport News
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-sm py-8 text-center">
        © {new Date().getFullYear()} Example Service Company · Hampton Roads
      </footer>

    </div>
  );
}
