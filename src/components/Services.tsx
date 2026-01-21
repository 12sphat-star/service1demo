type ServicesProps = {
  businessType: string;
};

export default function Services({ businessType }: ServicesProps) {
  const services = [
    {
      icon: "🚿",
      title: "Emergency Repairs",
      description:
        "Fast response for urgent issues that need immediate attention.",
    },
    {
      icon: "🛠️",
      title: "Installations",
      description:
        "Professional installation services done right the first time.",
    },
    {
      icon: "🔧",
      title: "Maintenance & Inspections",
      description:
        "Prevent problems before they start with routine maintenance.",
    },
    {
      icon: "📋",
      title: "Estimates & Quotes",
      description:
        "Quick, accurate estimates powered by our AI assistant.",
    },
    {
      icon: "🏠",
      title: "Residential Services",
      description:
        "Reliable service solutions for homeowners and families.",
    },
    {
      icon: "🏢",
      title: "Commercial Services",
      description:
        "Scalable services for offices, retail, and commercial properties.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {businessType} Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This system is designed for real service businesses — helping
            customers get answers fast and connect with the right service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
