type QuoteModalProps = {
  onClose: () => void;
};

export default function QuoteModal({ onClose }: QuoteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">Request a Fast Quote</h2>
        <p className="text-slate-600 mb-6">
          This is a demo form. In production, this connects to your CRM.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-300 rounded-md px-4 py-3"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-slate-300 rounded-md px-4 py-3"
          />
          <input
            type="text"
            placeholder="Service Needed"
            className="w-full border border-slate-300 rounded-md px-4 py-3"
          />

          <button
            type="button"
            className="w-full bg-slate-900 text-white py-3 rounded-md font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

