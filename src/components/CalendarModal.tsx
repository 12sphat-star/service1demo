type CalendarModalProps = {
  onClose: () => void;
};

export default function CalendarModal({ onClose }: CalendarModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">Book a Free Consultation</h2>
        <p className="text-slate-600 mb-6">
          This is a demo placeholder. In production, a live calendar is embedded here.
        </p>

        <div className="border border-dashed border-slate-300 rounded-lg p-10 text-center text-slate-500">
          📅 Calendar Integration Goes Here
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-slate-900 text-white py-3 rounded-md font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
