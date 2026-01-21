import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import AIFrontDesk from "./components/AIFrontDesk";
import Hero from "./components/Hero";
import React, { useState } from "react";
import Header from "./components/Header";
import { AIConcierge } from "./components/AIConcierge";
import "./index.css";

function App() {
  const [businessType] = useState("Plumbing");
  const [city] = useState("Hampton Roads");

  const [showAI, setShowAI] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {/* Header */}
     <Header
  onAI={() => setShowAI(true)}
  onForm={() => setShowForm(true)}
  onCalendar={() => setShowCalendar(true)}
/>

<Hero
  businessType={businessType}
  city={city}
  onAI={() => setShowAI(true)}
  onForm={() => setShowForm(true)}
  onCalendar={() => setShowCalendar(true)}
/>
<AIFrontDesk onAI={() => setShowAI(true)} />
    <Services businessType={businessType} />
    <HowItWorks />

      {/* Main Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        
        {/* Hero / Navigation */}
        <nav className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">
              {businessType} Service
            </h1>
            <p className="text-sm text-slate-600">
              {city}, VA
            </p>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Expert {businessType} Services
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Get instant help with your {businessType.toLowerCase()} needs.
            Our AI assistant is available 24/7 to help with estimates, repairs,
            and more.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-slate-900">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-slate-600">
                Get instant answers from the AI assistant.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-slate-900">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
              <p className="text-slate-600">
                Chat anytime — day or night.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-slate-900">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Expert Help</h3>
              <p className="text-slate-600">
                Professional guidance tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <p className="text-slate-400">
              © 2024 {businessType} Service · {city}
            </p>
          </div>
        </footer>
      </div>

      {/* AI Concierge (Always Mounted, Controlled by UI Later) */}
      <AIConcierge businessType={businessType} city={city} />
    </>
  );
}

export default App;

