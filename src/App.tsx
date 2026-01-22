import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AIFrontDesk from "./components/AIFrontDesk";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import QuoteModal from "./components/QuoteModal";
import CalendarModal from "./components/CalendarModal";

function App() {
  const [businessType] = useState("Plumbing");
  const [city] = useState("Hampton Roads");

  const [showAI, setShowAI] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header
        onAI={() => setShowAI(true)}
        onForm={() => setShowForm(true)}
        onCalendar={() => setShowCalendar(true)}
      />

      {/* HERO */}
      <Hero
        businessType={businessType}
        city={city}
        onAI={() => setShowAI(true)}
        onForm={() => setShowForm(true)}
        onCalendar={() => setShowCalendar(true)}
      />

      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <AIFrontDesk onAI={() => setShowAI(true)} />
        <Services businessType={businessType} />
        <HowItWorks />
      </div>

      {/* MODALS (MUST BE HERE) */}
      {showForm && <QuoteModal onClose={() => setShowForm(false)} />}
      {showCalendar && (
        <CalendarModal onClose={() => setShowCalendar(false)} />
      )}
            <Footer />

      {showForm && <QuoteModal onClose={() => setShowForm(false)} />}
      {showCalendar && (
        <CalendarModal onClose={() => setShowCalendar(false)} />
      )}

    </>
  );
}

export default App;



