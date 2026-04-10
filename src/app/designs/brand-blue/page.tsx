"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BrandBlueDesign() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = {
    en: {
      nav: { how: "How It Works", services: "Services", coverage: "Coverage", contact: "Contact", book: "Book Now" },
      hero: {
        badge: "Mobile Mechanic • DC | MD | VA",
        title1: "Your mechanic,",
        title2: "anywhere you are.",
        desc: "Professional auto repair that comes to your home, office, or roadside. Honest work, fair pricing, and zero waiting rooms.",
        whatsapp: "WhatsApp Us",
        call: "Call"
      },
      trust: ["Licensed & Insured", "12-Month Warranty", "Upfront Pricing", "Flexible Payments"],
      process: {
        tag: "How It Works",
        title: "Three steps to a fixed car.",
        desc: "No tow trucks, no waiting rooms, no hidden fees.",
        steps: [
          { title: "Reach Out", desc: "Send us a message or give us a call with your vehicle's issue. Photos and videos help us diagnose faster." },
          { title: "Get a Quote", desc: "We'll give you an honest, upfront estimate. Parts and labor included. You'll know exactly what you're paying." },
          { title: "We Fix It", desc: "We come to your location—home, office, or roadside—fully equipped and ready to get you back on the road." }
        ]
      },
      services: {
        tag: "Our Services",
        title: "Everything your car needs.",
        desc: "We handle maintenance and repairs on the spot, so you can skip the tow truck and the dealership markup.",
        items: [
          { name: "Diagnostics", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop" },
          { name: "Brake Repair", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=800&auto=format&fit=crop" },
          { name: "Oil Changes", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=800&auto=format&fit=crop" },
          { name: "Battery & Electrical", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
          { name: "A/C & Cooling", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
          { name: "Tune-Ups", desc: "Professional grade repairs performed right at your location with high-quality parts.", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" }
        ]
      },
      coverage: {
        tag: "Service Area",
        title: "Covering the entire DMV.",
        desc: "We drive to you anywhere in Washington D.C., Maryland, and Virginia. Whether you're stuck at home, in the office parking lot, or on the side of the road.",
        areas: [
          { name: "Washington, D.C.", desc: "All neighborhoods, NW to SE" },
          { name: "Virginia", desc: "Arlington, Alexandria, Fairfax & Northern VA" },
          { name: "Maryland", desc: "Silver Spring, Bethesda, PG County & beyond" }
        ]
      },
      about: {
        tag: "About Your Mechanic",
        title: "Hey, I'm Tyler.",
        p1: "I started Anywhere Auto Repair because I believe getting your car fixed shouldn't mean losing your whole day at a shop.",
        p2: "I bring professional-grade tools and parts directly to you. My goal is simple: honest work, fair prices, and getting you back on the road safely.",
        badge: "Hablo Español"
      },
      brands: {
        title: "We Service Most Cars",
        subtitle: "Here is a partial list of the more popular vehicles we service. Not all brands we service are shown here."
      },
      reviews: {
        tag: "Real Feedback",
        title: "What our customers say.",
        items: [
          { quote: "Tyler came to my apartment complex and replaced my brakes in under two hours. Super professional, fair price, and I didn't have to miss work. Highly recommend!", author: "Marcus T.", loc: "Arlington, VA" },
          { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD" },
          { quote: "My car wouldn't start and Tyler was at my house within an hour. Turned out it was the alternator — he had it fixed by the end of the day. Saved me a tow bill too.", author: "Jessica M.", loc: "Washington, DC" }
        ]
      },
      cta: {
        title: "Need a fix today?",
        desc: "Send us a message with your car's issue and we'll get back to you with a free quote.",
        btn: "Contact on WhatsApp"
      },
      contact: {
        tag: "Contact Us",
        title: "Get a free quote.",
        name: "Your Name",
        namePh: "John Doe",
        phone: "Phone Number",
        phonePh: "(555) 123-4567",
        vehicle: "Vehicle",
        vehiclePh: "e.g. 2019 Honda Civic",
        issue: "Describe the Issue",
        issuePh: "What's going on with your car?",
        submit: "Send Message",
        or: "or reach us directly",
        successTitle: "Message sent!",
        successDesc: "We'll get back to you shortly with a free quote.",
        another: "Send another"
      }
    },
    es: {
      nav: { how: "Cómo Funciona", services: "Servicios", coverage: "Cobertura", contact: "Contacto", book: "Reservar" },
      hero: {
        badge: "Mecánico Móvil • DC | MD | VA",
        title1: "Tu mecánico,",
        title2: "donde estés.",
        desc: "Reparación de autos profesional que llega a tu casa, oficina o carretera. Trabajo honesto, precios justos y cero salas de espera.",
        whatsapp: "Escríbenos",
        call: "Llamar"
      },
      trust: ["Licencia y Seguro", "Garantía de 12 Meses", "Precios Transparentes", "Pagos Flexibles"],
      process: {
        tag: "Cómo Funciona",
        title: "Tres pasos para reparar tu auto.",
        desc: "Sin grúas, sin salas de espera, sin tarifas ocultas.",
        steps: [
          { title: "Contáctanos", desc: "Envíanos un mensaje o llámanos con el problema de tu vehículo. Las fotos y videos nos ayudan a diagnosticar más rápido." },
          { title: "Recibe una Cotización", desc: "Te daremos un estimado honesto y transparente. Partes y mano de obra incluidas. Sabrás exactamente qué estás pagando." },
          { title: "Lo Reparamos", desc: "Vamos a tu ubicación—casa, oficina o carretera—totalmente equipados y listos para ponerte de nuevo en el camino." }
        ]
      },
      services: {
        tag: "Nuestros Servicios",
        title: "Todo lo que tu auto necesita.",
        desc: "Manejamos mantenimiento y reparaciones en el lugar, para que puedas evitar la grúa y los precios del concesionario.",
        items: [
          { name: "Diagnósticos", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop" },
          { name: "Frenos", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=800&auto=format&fit=crop" },
          { name: "Cambio de Aceite", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=800&auto=format&fit=crop" },
          { name: "Batería y Eléctrico", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
          { name: "A/C y Enfriamiento", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
          { name: "Afinaciones", desc: "Reparaciones de nivel profesional realizadas directamente en tu ubicación con piezas de alta calidad.", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" }
        ]
      },
      coverage: {
        tag: "Área de Servicio",
        title: "Cubriendo todo el DMV.",
        desc: "Manejamos hasta ti en cualquier parte de Washington D.C., Maryland y Virginia. Ya sea que estés en casa, en la oficina o en la carretera.",
        areas: [
          { name: "Washington, D.C.", desc: "Todos los vecindarios, de NO a SE" },
          { name: "Virginia", desc: "Arlington, Alexandria, Fairfax y el Norte de VA" },
          { name: "Maryland", desc: "Silver Spring, Bethesda, PG County y más" }
        ]
      },
      about: {
        tag: "Sobre tu Mecánico",
        title: "Hola, soy Tyler.",
        p1: "Empecé Anywhere Auto Repair porque creo que arreglar tu auto no debería significar perder todo el día en un taller.",
        p2: "Llevo herramientas y piezas de calidad profesional directamente a ti. Mi objetivo es simple: trabajo honesto, precios justos y regresarte al camino con seguridad.",
        badge: "Hablo Español"
      },
      brands: {
        title: "Damos Servicio a la Mayoría de Autos",
        subtitle: "Aquí hay una lista parcial de los vehículos más populares que atendemos. No todas las marcas que servimos aparecen aquí."
      },
      reviews: {
        tag: "Comentarios Reales",
        title: "Lo que dicen nuestros clientes.",
        items: [
          { quote: "Tyler came to my apartment complex and replaced my brakes in under two hours. Super professional, fair price, and I didn't have to miss work. Highly recommend!", author: "Marcus T.", loc: "Arlington, VA" },
          { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD" },
          { quote: "My car wouldn't start and Tyler was at my house within an hour. Turned out it was the alternator — he had it fixed by the end of the day. Saved me a tow bill too.", author: "Jessica M.", loc: "Washington, DC" }
        ]
      },
      cta: {
        title: "¿Necesitas una reparación hoy?",
        desc: "Envíanos un mensaje con el problema de tu auto y te responderemos con una cotización gratuita.",
        btn: "Contactar por WhatsApp"
      },
      contact: {
        tag: "Contáctanos",
        title: "Obtén una cotización gratis.",
        name: "Tu Nombre",
        namePh: "Juan Pérez",
        phone: "Teléfono",
        phonePh: "(555) 123-4567",
        vehicle: "Vehículo",
        vehiclePh: "ej. 2019 Honda Civic",
        issue: "Describe el Problema",
        issuePh: "¿Qué le pasa a tu carro?",
        submit: "Enviar Mensaje",
        or: "o contáctanos directamente",
        successTitle: "¡Mensaje enviado!",
        successDesc: "Te responderemos pronto con una cotización gratuita.",
        another: "Enviar otro"
      }
    }
  }[lang];

  const carBrands = [
    { name: "Acura", logo: "/logos/acura.png" },
    { name: "Honda", logo: "/logos/honda.png" },
    { name: "BMW", logo: "/logos/bmw.png" },
    { name: "Toyota", logo: "/logos/toyota.png" },
    { name: "Nissan", logo: "/logos/nissan.png" },
    { name: "Jeep", logo: "/logos/jeep.png" },
    { name: "Ford", logo: "/logos/ford.png" },
    { name: "Dodge", logo: "/logos/dodge.png" },
    { name: "Mercedes-Benz", logo: "/logos/mercedes-benz.png" },
    { name: "Hyundai", logo: "/logos/hyundai.png" },
    { name: "Mazda", logo: "/logos/mazda.png" },
    { name: "Kia", logo: "/logos/kia.png" },
    { name: "Chevrolet", logo: "/logos/chevrolet.png" },
    { name: "Subaru", logo: "/logos/subaru.png" },
    { name: "Volkswagen", logo: "/logos/volkswagen.png" },
    { name: "Lexus", logo: "/logos/lexus.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-950">
      {/* NAVIGATION */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white/20 group-hover:border-white/40 transition-colors">
              <Image src="/logo.png" alt="Anywhere Auto Repair" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none tracking-tight">ANYWHERE</span>
              <span className="text-sm font-semibold text-blue-400 leading-none tracking-widest">AUTO REPAIR</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">{t.nav.how}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#coverage" className="hover:text-white transition-colors">{t.nav.coverage}</a>
            <Link href="/designs/brand-blue/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'es' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-white'}`}
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
        <section className="relative text-white overflow-hidden py-20 sm:py-32">
          {/* Hero background image */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-blue-300 font-medium text-xs tracking-wider uppercase mb-6 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                {t.hero.title1}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">{t.hero.title2}</span>
              </h1>
              <p className="text-lg text-slate-100 mb-8 max-w-lg leading-relaxed font-light">
                {t.hero.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/16104636087" className="bg-blue-500 hover:bg-blue-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-xl shadow-blue-500/20 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  {t.hero.whatsapp}
                </a>
                <a href="tel:+16104636087" className="bg-slate-800/50 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-colors border border-slate-500 backdrop-blur-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  (610) 463-6087
                </a>
              </div>
            </div>
            
            {/* Right side hero visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative aspect-square rounded-full shadow-2xl overflow-hidden">
                <Image src="/logo.png" alt="Anywhere Auto Repair Logo" fill className="object-cover drop-shadow-2xl" priority />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 -left-6 bg-white text-slate-900 py-2 px-4 rounded-xl shadow-xl border border-gray-100 font-semibold text-sm flex items-center gap-2 transform -rotate-3">
                <span className="text-green-500">✓</span> 5-Star Rated
              </div>
              <div className="absolute bottom-10 -right-6 bg-white text-slate-900 py-2 px-4 rounded-xl shadow-xl border border-gray-100 font-semibold text-sm flex items-center gap-2 transform rotate-3">
                <span className="text-blue-500">Habla Español</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <div className="bg-slate-900 text-slate-50 py-4 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-sm font-medium">
            {t.trust.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-slate-600 font-bold tracking-wide uppercase text-sm mb-2">{t.process.tag}</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">{t.process.title}</h3>
              <p className="text-gray-600 text-lg">{t.process.desc}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gray-200 -z-10"></div>
              {t.process.steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-sm">
                    <span className="text-3xl font-black text-blue-600">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-slate-600 font-bold tracking-wide uppercase text-sm mb-2">{t.services.tag}</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">{t.services.title}</h3>
              <p className="text-gray-600 text-lg">{t.services.desc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.services.items.map((service, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-slate-300 hover:shadow-lg transition-all group flex flex-col">
                  <div className="h-48 relative overflow-hidden bg-slate-200">
                    <img src={service.img} alt={service.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WE SERVICE MOST CARS */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 uppercase tracking-tight">
              {t.brands.title}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              {t.brands.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            <div
              className="flex items-center"
              style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
            >
              {[...carBrands, ...carBrands].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-[100px] sm:w-[140px] mx-3 sm:mx-5 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium text-center whitespace-nowrap">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">{t.coverage.tag}</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">{t.coverage.title}</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {t.coverage.desc}
                </p>
                <ul className="space-y-4">
                  {t.coverage.areas.map((loc, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <div>
                        <div className="font-bold text-white">{loc.name}</div>
                        <div className="text-sm text-slate-400">{loc.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 relative overflow-hidden shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-slate-700/20 tracking-tighter pointer-events-none">DMV</div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-600/50">
                    <div className="text-blue-400 font-bold mb-1">DC</div>
                    <div className="text-slate-400 text-sm">District of Columbia</div>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-600/50 mt-8">
                    <div className="text-blue-400 font-bold mb-1">MD</div>
                    <div className="text-slate-400 text-sm">Maryland</div>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-600/50 col-span-2">
                    <div className="text-blue-400 font-bold mb-1">VA</div>
                    <div className="text-slate-400 text-sm">Virginia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TYLER */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative flex items-center justify-center border border-slate-300">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Tyler" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">{t.about.tag}</h2>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-6">{t.about.title}</h3>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                  </div>
                  <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium border border-blue-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                    {t.about.badge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-slate-600 font-bold tracking-wide uppercase text-sm mb-2">{t.reviews.tag}</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">{t.reviews.title}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.reviews.items.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic flex-grow mb-6">"{review.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{review.author}</div>
                      <div className="text-sm text-gray-500">{review.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">{t.contact.tag}</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">{t.contact.title}</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">{t.cta.desc}</p>

                <div className="space-y-4">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t.contact.or}</p>
                  <a href="https://wa.me/16104636087" className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-4 border border-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">WhatsApp</div>
                      <div className="text-sm text-slate-400">{t.cta.btn}</div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                  <a href="tel:+16104636087" className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-4 border border-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">(610) 463-6087</div>
                      <div className="text-sm text-slate-400">{t.cta.title}</div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{t.contact.successTitle}</h4>
                    <p className="text-slate-400 mb-6">{t.contact.successDesc}</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                      {t.contact.another}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5">{t.contact.name}</label>
                        <input type="text" required placeholder={t.contact.namePh} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5">{t.contact.phone}</label>
                        <input type="tel" required placeholder={t.contact.phonePh} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">{t.contact.vehicle}</label>
                      <input type="text" required placeholder={t.contact.vehiclePh} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">{t.contact.issue}</label>
                      <textarea required rows={3} placeholder={t.contact.issuePh} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-slate-950 px-6 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-xl shadow-blue-500/20">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
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
          <p className="mb-4">© 2026 Anywhere Auto Repair. Serving DC, MD, and VA.</p>
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