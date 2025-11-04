import React from 'react';
import { Brain, Coins, Shield, LineChart } from 'lucide-react';

const topics = [
  {
    icon: Brain,
    title: 'AI Foundations',
    desc: 'Core concepts, LLMs, prompts, and practical tools to boost productivity and insight.',
  },
  {
    icon: Coins,
    title: 'Crypto Essentials',
    desc: 'Blockchain basics, wallets, exchanges, and how to navigate the ecosystem safely.',
  },
  {
    icon: Shield,
    title: 'Security & Risk',
    desc: 'Protect your assets, avoid scams, and manage volatility with disciplined frameworks.',
  },
  {
    icon: LineChart,
    title: 'Strategies & Signals',
    desc: 'Build decision-making playbooks for research, entries, and long-term conviction.',
  },
];

const Topics = () => {
  return (
    <section id="topics" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What you’ll learn</h2>
          <p className="mt-3 text-slate-600">A carefully curated path that blends fundamentals with hands-on practice.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((t) => (
            <div
              key={t.title}
              className="group rounded-2xl border border-slate-200 p-6 bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <t.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
