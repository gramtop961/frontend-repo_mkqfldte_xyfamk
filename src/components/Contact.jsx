import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
  const instagramHandle = import.meta.env.VITE_INSTAGRAM_HANDLE || '';

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${encodeURIComponent(whatsappNumber)}`
    : '';
  const instagramUrl = instagramHandle
    ? `https://instagram.com/${encodeURIComponent(instagramHandle)}`
    : '';

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Contact links are not set yet. Please provide your WhatsApp number (VITE_WHATSAPP_NUMBER) or Instagram handle (VITE_INSTAGRAM_HANDLE) in the environment settings.');
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Contact me</h2>
          <p className="mt-3 text-slate-600">Have questions or want to start learning? Reach out directly on WhatsApp or Instagram.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => handleClick(whatsappUrl)}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-left hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="font-semibold text-slate-900">WhatsApp</div>
                <div className="text-sm text-slate-600">Chat with me instantly</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleClick(instagramUrl)}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-left hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md">
                <Instagram size={22} />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Instagram</div>
                <div className="text-sm text-slate-600">DM me on Instagram</div>
              </div>
            </div>
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-500">Tip: set VITE_WHATSAPP_NUMBER like 628123456789 and VITE_INSTAGRAM_HANDLE like your_username.</p>
      </div>
    </section>
  );
};

export default Contact;
