import React from 'react';
import Hero from './components/Hero';
import Topics from './components/Topics';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-200/60 selection:text-slate-900">
      {/* Simple top nav */}
      <header className="fixed top-0 inset-x-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">Acid Academy</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => handleScrollTo('topics')} className="hover:text-slate-600">Learn</button>
            <button onClick={() => handleScrollTo('about')} className="hover:text-slate-600">About</button>
            <button onClick={() => handleScrollTo('contact')} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Contact</button>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <Topics />
        <About />
        <Contact />
      </main>

      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Acid — AI & Crypto Education</div>
          <div className="opacity-80">Built with love and curiosity.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
