"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [submitted, setSubmitted] = useState(false);

  const t = {
    en: {
      nav: { how: "How It Works", services: "Services", coverage: "Coverage", book: "Book Now" },
      hero: {
        badge: "Get In Touch",
        title1: "Let's get your",
        title2: "car fixed.",
        desc: "Send us your vehicle's issue and we'll get back to you with a free, no-obligation quote. Photos and videos help us diagnose faster."
      },
      form: {
        name: "Your Name",
        namePlaceholder: "John Doe",
        phone: "Phone Number",
        phonePlaceholder: "(555) 123-4567",
        email: "Email (optional)",
        emailPlaceholder: "john@example.com",
        vehicle: "Vehicle",
        vehiclePlaceholder: "e.g. 2019 Honda Civic",
        issue: "Describe the Issue",
        issuePlaceholder: "Tell us what's going on with your car. The more detail, the better — include any warning lights, sounds, or symptoms.",
        photos: "Have photos or videos?",
        photosDesc: "Send them directly via WhatsApp for a faster diagnosis.",
        submit: "Send Message",
        sending: "Sending..."
      },
      info: {
        tag: "Other Ways to Reach Us",
        title: "We're here to help.",
        desc: "Prefer to reach out directly? Call, text, or message us on WhatsApp. We typically respond within 30 minutes during business hours.",
        whatsapp: "WhatsApp",
        whatsappDesc: "Fastest way to reach us. Send photos & videos of the issue.",
        whatsappBtn: "Message on WhatsApp",
        call: "Call or Text",
        callDesc: "Give us a call or send a text. We'll get back to you ASAP.",
        hours: "Hours",
        hoursDesc: "Monday – Saturday: 8 AM – 6 PM",
        hoursSub: "Sunday: By appointment",
        area: "Service Area",
        areaDesc: "Washington D.C., Maryland, and Virginia",
        areaSub: "We come to you — home, office, or roadside"
      },
      success: {
        title: "Message sent!",
        desc: "We'll get back to you shortly with a free quote. Check your phone for a confirmation.",
        another: "Send another message"
      },
      footer: {
        copy: "© 2026 Anywhere Auto Repair. Serving DC, MD, and VA."
      }
    },
    es: {
      nav: { how: "Cómo Funciona", services: "Servicios", coverage: "Cobertura", book: "Reservar" },
      hero: {
        badge: "Contáctanos",
        title1: "Vamos a arreglar",
        title2: "tu auto.",
        desc: "Envíanos el problema de tu vehículo y te responderemos con una cotización gratuita y sin compromiso. Las fotos y videos nos ayudan a diagnosticar más rápido."
      },
      form: {
        name: "Tu Nombre",
        namePlaceholder: "Juan Pérez",
        phone: "Número de Teléfono",
        phonePlaceholder: "(555) 123-4567",
        email: "Correo Electrónico (opcional)",
        emailPlaceholder: "juan@ejemplo.com",
        vehicle: "Vehículo",
        vehiclePlaceholder: "ej. 2019 Honda Civic",
        issue: "Describe el Problema",
        issuePlaceholder: "Cuéntanos qué le pasa a tu carro. Entre más detalle, mejor — incluye luces de advertencia, sonidos o síntomas.",
        photos: "¿Tienes fotos o videos?",
        photosDesc: "Envíalos directamente por WhatsApp para un diagnóstico más rápido.",
        submit: "Enviar Mensaje",
        sending: "Enviando..."
      },
      info: {
        tag: "Otras Formas de Contactarnos",
        title: "Estamos para ayudarte.",
        desc: "¿Prefieres contactarnos directamente? Llama, envía un texto o escríbenos por WhatsApp. Generalmente respondemos en 30 minutos durante horario laboral.",
        whatsapp: "WhatsApp",
        whatsappDesc: "La forma más rápida de contactarnos. Envía fotos y videos del problema.",
        whatsappBtn: "Mensaje por WhatsApp",
        call: "Llamar o Texto",
        callDesc: "Llámanos o envía un texto. Te responderemos lo antes posible.",
        hours: "Horario",
        hoursDesc: "Lunes – Sábado: 8 AM – 6 PM",
        hoursSub: "Domingo: Con cita previa",
        area: "Área de Servicio",
        areaDesc: "Washington D.C., Maryland y Virginia",
        areaSub: "Vamos a ti — casa, oficina o carretera"
      },
      success: {
        title: "¡Mensaje enviado!",
        desc: "Te responderemos pronto con una cotización gratuita. Revisa tu teléfono para una confirmación.",
        another: "Enviar otro mensaje"
      },
      footer: {
        copy: "© 2026 Anywhere Auto Repair. Sirviendo DC, MD y VA."
      }
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-950">
      {/* NAVIGATION */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/designs/brand-blue" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-slate-100 group-hover:border-slate-300 transition-colors">
              <Image src="/logo.png" alt="Anywhere Auto Repair" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">ANYWHERE</span>
              <span className="text-sm font-semibold text-blue-500 leading-none tracking-widest">AUTO REPAIR</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link href="/designs/brand-blue#how-it-works" className="hover:text-slate-600 transition-colors">{t.nav.how}</Link>
            <Link href="/designs/brand-blue#services" className="hover:text-slate-600 transition-colors">{t.nav.services}</Link>
            <Link href="/designs/brand-blue#coverage" className="hover:text-slate-600 transition-colors">{t.nav.coverage}</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-slate-800'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'es' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-slate-800'}`}
              >
                ES
              </button>
            </div>
            <a href="https://wa.me/16104636087" className="hidden sm:flex bg-slate-600 hover:bg-slate-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-blue-300 font-medium text-xs tracking-wider uppercase mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              {t.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              {t.hero.title1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">{t.hero.title2}</span>
            </h1>
            <p className="text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-light">
              {t.hero.desc}
            </p>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* CONTACT FORM */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-3xl p-12 text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-950 mb-3">{t.success.title}</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">{t.success.desc}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      {t.success.another}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t.form.name}</label>
                        <input
                          type="text"
                          required
                          placeholder={t.form.namePlaceholder}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t.form.phone}</label>
                        <input
                          type="tel"
                          required
                          placeholder={t.form.phonePlaceholder}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t.form.email}</label>
                        <input
                          type="email"
                          placeholder={t.form.emailPlaceholder}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t.form.vehicle}</label>
                        <input
                          type="text"
                          required
                          placeholder={t.form.vehiclePlaceholder}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">{t.form.issue}</label>
                      <textarea
                        required
                        rows={5}
                        placeholder={t.form.issuePlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-gray-400 resize-none"
                      ></textarea>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <div>
                        <p className="text-sm font-semibold text-blue-900">{t.form.photos}</p>
                        <p className="text-sm text-blue-700">{t.form.photosDesc}</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-xl shadow-blue-500/20 text-lg"
                    >
                      {t.form.submit}
                    </button>
                  </form>
                )}
              </div>

              {/* CONTACT INFO SIDEBAR */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">{t.info.tag}</h2>
                  <h3 className="text-2xl font-extrabold text-slate-950 mb-3">{t.info.title}</h3>
                  <p className="text-gray-600">{t.info.desc}</p>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </div>
                    <h4 className="font-bold text-slate-900">{t.info.whatsapp}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{t.info.whatsappDesc}</p>
                  <a
                    href="https://wa.me/16104636087"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
                  >
                    {t.info.whatsappBtn}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <h4 className="font-bold text-slate-900">{t.info.call}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{t.info.callDesc}</p>
                  <a href="tel:+16104636087" className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors">(610) 463-6087</a>
                </div>

                {/* Hours Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-slate-900">{t.info.hours}</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{t.info.hoursDesc}</p>
                  <p className="text-gray-500 text-sm">{t.info.hoursSub}</p>
                </div>

                {/* Service Area Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-slate-900">{t.info.area}</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{t.info.areaDesc}</p>
                  <p className="text-gray-500 text-sm">{t.info.areaSub}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="opacity-50 grayscale rounded-full" />
          </div>
          <p className="mb-4">{t.footer.copy}</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
