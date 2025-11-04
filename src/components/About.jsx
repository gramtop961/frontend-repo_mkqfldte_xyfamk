import React from 'react';
import { User, CheckCircle, Award, BookOpen, GraduationCap, Globe, MessageCircle } from 'lucide-react';

const About = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Bio & Highlights */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 text-xs font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            About the educator
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Meet Acid — your guide to AI & Crypto clarity
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            I help beginners and busy professionals build confident foundations in
            Artificial Intelligence and Cryptocurrency. My approach is simple:
            remove jargon, focus on principles, and practice with real examples
            you can apply the same day.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            {[
              'Step-by-step roadmaps from zero to practical skills',
              'Balanced perspective: opportunities and risks',
              'Tool-first demos with templates and checklists',
              'Ethical, security-aware, and sustainable growth mindset',
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 text-emerald-600" size={18} />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: '4+', label: 'Years teaching' },
              { value: '1k+', label: 'Learners guided' },
              { value: '120+', label: 'Lessons & resources' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { icon: BookOpen, label: 'Hands-on lessons' },
              { icon: Award, label: 'Proven frameworks' },
              { icon: GraduationCap, label: 'Beginner-friendly' },
              { icon: Globe, label: 'Global perspective' },
            ].map((tag) => (
              <span key={tag.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <tag.icon size={14} className="text-slate-900" /> {tag.label}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-800 transition"
            >
              <MessageCircle size={18} /> Get in touch
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-xl">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <User size={28} />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Acid</div>
                <div className="text-sm text-slate-500">Educator • AI & Crypto</div>
              </div>
            </div>

            <p className="mt-6 text-slate-700">
              “Education should be empowering, not overwhelming. I turn complex
              systems into clear mental models so you can make better decisions.”
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'AI Track', points: ['LLMs & prompting', 'Automation workflows', 'Research with agents'] },
                { title: 'Crypto Track', points: ['Wallet security', 'On-chain basics', 'Risk frameworks'] },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-slate-900">{card.title}</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Accent glow */}
          <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-3xl bg-emerald-100 blur-2xl opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default About;
