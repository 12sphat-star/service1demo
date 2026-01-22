export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Example Service Company
          </h3>
          <p>
            Reliable, professional service for homeowners and businesses
            throughout Hampton Roads.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>(757) 555-0123</p>
          <p>Hampton Roads, VA</p>
        </div>

        {/* Trust */}
        <div>
          <h4 className="text-white font-semibold mb-2">Why Choose Us</h4>
          <ul className="space-y-1">
            <li>✔ Licensed & Insured</li>
            <li>✔ Local & Trusted</li>
            <li>✔ Fast Response Times</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} Example Service Company · All Rights Reserved
      </div>
    </footer>
  );
}
