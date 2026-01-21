type HeaderProps = {
  onAI: () => void;
  onForm: () => void;
  onCalendar: () => void;
};

export default function Header({ onAI, onForm, onCalendar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">
            Service Demo
          </span>
          <span className="text-xs text-gray-500">
            AI-Powered Service Business Website
          </span>
        </div>

        {/* Right: CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={onAI}
            className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            🤖 Talk to AI
          </button>

          <button
            onClick={onForm}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
          >
            📝 Get a Quote
          </button>

          <button
            onClick={onCalendar}
            className="px-4 py-2 rounded-md text-sm font-medium text-blue-600 hover:underline"
          >
            📅 Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
