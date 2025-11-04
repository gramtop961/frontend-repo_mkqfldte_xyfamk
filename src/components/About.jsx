import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Meet Acid</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I teach AI and Cryptocurrency with a focus on clarity, practicality, and
            sustainable growth. My goal is to help you build strong foundations,
            understand the landscape, and develop your own playbook for the future
            of work and finance.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 bg-emerald-500 rounded-full" /> Structured, step-by-step learning</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 bg-emerald-500 rounded-full" /> Real-world examples and templates</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 bg-emerald-500 rounded-full" /> Balanced view: opportunities and risks</li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
            <div className="h-16 w-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
              <User size={28} />
            </div>
            <p className="mt-6 text-slate-700">“Education should be empowering, not overwhelming. Together we’ll transform complexity into clarity.”</p>
            <div className="mt-6 text-sm text-slate-500">— Acid, Educator</div>
          </div>
          <div className="absolute -z-0 -top-6 -right-6 h-24 w-24 rounded-3xl bg-emerald-100 blur-xl opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default About;
