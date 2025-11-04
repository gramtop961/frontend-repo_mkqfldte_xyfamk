import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Spline 3D scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to boost contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Modern • Practical • Beginner-friendly
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Master AI & Cryptocurrency
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            I’m Acid — your educator for cutting-edge AI and Crypto. Learn the
            essentials, understand the risks, and build confident strategies in a
            fast-moving digital world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo('topics')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-800 transition"
            >
              <Rocket size={18} /> Start learning
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold border border-slate-200 hover:bg-slate-50 transition"
            >
              <MessageCircle size={18} /> Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
