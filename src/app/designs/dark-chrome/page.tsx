"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DarkChromeDesign() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = {
    en: {
      nav: { services: "Services", about: "About", quote: "Get Quote" },
      hero: {
        badge: "SERVING DC • MD • VA",
        title1: "The Garage",
        title2: "Comes to You.",
        desc: "Expert mobile mechanic service. We diagnose, repair, and maintain your vehicle right in your driveway. Skip the wait and the tow.",
        btn1: "Text Us a Video/Photo",
        btn2: "Call (610) 463-6087"
      },
      stats: { s1: "100%", l1: "MOBILE", s2: "EN/ES", l2: "BILINGUAL", s3: "24/7", l3: "MESSAGING", s4: "0", l4: "HIDDEN FEES" },
      services: {
        tag: "Our Expertise",
        title: "Everything Your Car Needs.",
        items: [
          { name: "Diagnostics", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop" },
          { name: "Brake Repair", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=800&auto=format&fit=crop" },
          { name: "Oil Changes", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=800&auto=format&fit=crop" },
          { name: "Battery & Electrical", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
          { name: "A/C & Cooling", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
          { name: "Tune-Ups", desc: "High-quality repairs performed right at your location, no tow truck required.", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" }
        ]
      },
      process: {
        tag: "The Process",
        title: "Skip the Dealership.",
        desc: "A streamlined, stress-free experience from start to finish.",
        steps: [
          { num: "01", title: "Reach Out", desc: "Text or WhatsApp us with your car's issue. Photos and videos help us diagnose faster and give you an accurate quote." },
          { num: "02", title: "Get a Quote", desc: "We'll give you an honest, upfront estimate. Parts and labor, all included. No surprises when the job is done." },
          { num: "03", title: "We Fix It", desc: "We arrive at your location fully equipped. We handle the repair right there, getting you back on the road." }
        ]
      },
      coverage: {
        tag: "Service Area",
        title: "Covering the DMV.",
        areas: [
          { state: "Washington, D.C.", desc: "All quadrants & neighborhoods" },
          { state: "Maryland", desc: "Silver Spring, Bethesda, PG County" },
          { state: "Virginia", desc: "Arlington, Alexandria, Springfield" }
        ]
      },
      about: {
        tag: "Meet Your Mechanic",
        title: "Hey, I'm Tyler.",
        desc: "Getting your car fixed shouldn't mean losing a whole day at the shop. I bring professional-grade tools directly to your driveway, office, or roadside. Honest work, transparent quotes, and zero upsells.",
        badge: "✓ Hablo Español"
      },
      brands: {
        title: "We Service Most Cars",
        subtitle: "Here is a partial list of the more popular vehicles we service. Not all brands we service are shown here."
      },
      reviews: {
        title: "Don't Take Our Word For It.",
        items: [
          { quote: "Tyler came to my apartment complex and replaced my brakes in under two hours. Super professional, fair price, and I didn't have to miss work. Highly recommend!", author: "Marcus T.", loc: "Arlington, VA" },
          { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD" },
          { quote: "My car wouldn't start and Tyler was at my house within an hour. Turned out it was the alternator — he had it fixed by the end of the day. Saved me a tow bill too.", author: "Jessica M.", loc: "Washington, DC" }
        ]
      },
      contact: {
        title: "Stop Waiting at the Shop.",
        desc: "Take a photo or video of your issue, send it to us on WhatsApp, and we'll give you a transparent quote instantly.",
        label: "VEHICLE ISSUE",
        ph: "What's going wrong?",
        btn: "Send Inquiry"
      }
    },
    es: {
      nav: { services: "Servicios", about: "Nosotros", quote: "Cotización" },
      hero: {
        badge: "SIRVIENDO DC • MD • VA",
        title1: "El Taller",
        title2: "Va Hacia Ti.",
        desc: "Servicio mecánico móvil experto. Diagnosticamos, reparamos y damos mantenimiento a tu vehículo en tu propia entrada. Evita la espera y la grúa.",
        btn1: "Envíanos un Video/Foto",
        btn2: "Llama (610) 463-6087"
      },
      stats: { s1: "100%", l1: "MÓVIL", s2: "EN/ES", l2: "BILINGÜE", s3: "24/7", l3: "MENSAJES", s4: "0", l4: "TARIFAS OCULTAS" },
      services: {
        tag: "Nuestra Experiencia",
        title: "Todo lo que Tu Auto Necesita.",
        items: [
          { name: "Diagnósticos", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop" },
          { name: "Reparación de Frenos", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=800&auto=format&fit=crop" },
          { name: "Cambios de Aceite", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=800&auto=format&fit=crop" },
          { name: "Batería y Eléctrico", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
          { name: "A/C y Enfriamiento", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
          { name: "Afinaciones", desc: "Reparaciones de alta calidad realizadas directamente en tu ubicación, sin necesidad de grúa.", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" }
        ]
      },
      process: {
        tag: "El Proceso",
        title: "Olvídate del Concesionario.",
        desc: "Una experiencia fluida y sin estrés de principio a fin.",
        steps: [
          { num: "01", title: "Contáctanos", desc: "Envíanos un mensaje o WhatsApp con el problema de tu auto. Fotos y videos nos ayudan a diagnosticar más rápido y darte una cotización precisa." },
          { num: "02", title: "Recibe una Cotización", desc: "Te daremos un estimado honesto y transparente. Piezas y mano de obra, todo incluido. Sin sorpresas al terminar el trabajo." },
          { num: "03", title: "Lo Reparamos", desc: "Llegamos a tu ubicación totalmente equipados. Manejamos la reparación ahí mismo, para que vuelvas al camino." }
        ]
      },
      coverage: {
        tag: "Área de Servicio",
        title: "Cubriendo el DMV.",
        areas: [
          { state: "Washington, D.C.", desc: "Todos los cuadrantes y vecindarios" },
          { state: "Maryland", desc: "Silver Spring, Bethesda, PG County" },
          { state: "Virginia", desc: "Arlington, Alexandria, Springfield" }
        ]
      },
      about: {
        tag: "Conoce a tu Mecánico",
        title: "Hola, soy Tyler.",
        desc: "Arreglar tu auto no debería significar perder un día entero en el taller. Llevo herramientas de nivel profesional directamente a tu entrada, oficina o en la carretera. Trabajo honesto, cotizaciones transparentes y sin ventas engañosas.",
        badge: "✓ Hablo Español"
      },
      brands: {
        title: "Damos Servicio a la Mayoría de Autos",
        subtitle: "Aquí hay una lista parcial de los vehículos más populares que atendemos. No todas las marcas que servimos aparecen aquí."
      },
      reviews: {
        title: "No te quedes solo con nuestra palabra.",
        items: [
          { quote: "Tyler came to my apartment complex and replaced my brakes in under two hours. Super professional, fair price, and I didn't have to miss work. Highly recommend!", author: "Marcus T.", loc: "Arlington, VA" },
          { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD" },
          { quote: "My car wouldn't start and Tyler was at my house within an hour. Turned out it was the alternator — he had it fixed by the end of the day. Saved me a tow bill too.", author: "Jessica M.", loc: "Washington, DC" }
        ]
      },
      contact: {
        title: "Deja de Esperar en el Taller.",
        desc: "Toma una foto o video de tu problema, envíanoslo por WhatsApp, y te daremos una cotización transparente al instante.",
        label: "PROBLEMA DEL VEHÍCULO",
        ph: "¿Qué está fallando?",
        btn: "Enviar Consulta"
      }
    }
  }[lang];

  const carBrands = [
    { name: "Acura", logo: "/logos/acura.svg" },
    { name: "Honda", logo: "/logos/honda.svg" },
    { name: "BMW", logo: "/logos/bmw.svg" },
    { name: "Toyota", logo: "/logos/toyota.svg" },
    { name: "Nissan", logo: "/logos/nissan.svg" },
    { name: "Jeep", logo: "/logos/jeep.svg" },
    { name: "Ford", logo: "/logos/ford.svg" },
    { name: "Dodge", logo: "/logos/dodge.svg" },
    { name: "Mercedes-Benz", logo: "/logos/mercedes-benz.svg" },
    { name: "Hyundai", logo: "/logos/hyundai.svg" },
    { name: "Mazda", logo: "/logos/mazda.svg" },
    { name: "Kia", logo: "/logos/kia.svg" },
    { name: "Chevrolet", logo: "/logos/chevrolet.svg" },
    { name: "Subaru", logo: "/logos/subaru.svg" },
    { name: "Volkswagen", logo: "/logos/volkswagen.svg" },
    { name: "Lexus", logo: "/logos/lexus.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#05080f] font-sans text-gray-200 selection:bg-blue-500 selection:text-white">
      {/* HEADER */}
      <header className="absolute top-0 inset-x-0 z-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 bg-[#0a101d] rounded-2xl flex items-center justify-center border border-gray-800 shadow-[0_0_20px_rgba(74,144,217,0.1)] group-hover:border-blue-500/50 transition-colors overflow-hidden">
              <Image src="/logo.png" alt="Logo" fill className="object-cover p-1 rounded-full" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-black tracking-widest text-white">ANYWHERE</div>
              <div className="text-xs font-semibold tracking-[0.2em] text-gray-500">AUTO REPAIR</div>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            </div>
            
            <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
              <button 
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'es' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                ES
              </button>
            </div>

            <a href="https://wa.me/16104636087" className="hidden sm:block bg-white text-slate-950 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-300 transition-colors">
              {t.nav.quote}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            
            <div className="mb-8 p-1 rounded-full bg-gradient-to-r from-gray-800 to-slate-900 inline-block">
              <div className="bg-[#05080f] rounded-full px-4 py-1.5 text-xs font-semibold text-blue-400 tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                {t.hero.badge}
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
              {t.hero.title1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-100 via-gray-400 to-gray-600">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/16104636087" className="w-full sm:w-auto justify-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(74,144,217,0.3)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                {t.hero.btn1}
              </a>
              <a href="tel:+16104636087" className="w-full sm:w-auto justify-center bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
                {t.hero.btn2}
              </a>
            </div>

            <div className="mt-20 w-full max-w-4xl mx-auto">
              <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-slate-950 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent"></div>
                <Image src="/logo.png" alt="AAR Logo Large" width={300} height={300} className="relative z-10 drop-shadow-[0_0_50px_rgba(74,144,217,0.5)] rounded-full" />
              </div>
            </div>
            
          </div>
        </section>

        {/* STATS/TRUST */}
        <section className="py-10 border-y border-gray-800/50 bg-[#080c16]">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-16 gap-y-8 text-center">
            <div>
              <div className="text-3xl font-black text-white mb-1">{t.stats.s1}</div>
              <div className="text-sm font-semibold text-gray-500 tracking-wider">{t.stats.l1}</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">{t.stats.s2}</div>
              <div className="text-sm font-semibold text-gray-500 tracking-wider">{t.stats.l2}</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">{t.stats.s3}</div>
              <div className="text-sm font-semibold text-gray-500 tracking-wider">{t.stats.l3}</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">{t.stats.s4}</div>
              <div className="text-sm font-semibold text-gray-500 tracking-wider">{t.stats.l4}</div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 relative overflow-hidden bg-[#05080f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{t.services.tag}</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-white mb-6">{t.services.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.items.map((service, i) => (
                <div key={i} className="group bg-[#0a101d] border border-gray-800 hover:border-blue-500 rounded-xl transition-all overflow-hidden flex flex-col">
                  <div className="h-40 bg-gray-900 border-b border-gray-800 relative overflow-hidden">
                    <img src={service.img} alt={service.name} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" />
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
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
        <section className="py-16 sm:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-4 uppercase tracking-tight">
              {t.brands.title}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              {t.brands.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              className="flex items-center"
              style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
            >
              {[...carBrands, ...carBrands].map((brand, i) => (
                <div key={i} className="flex-shrink-0 mx-6 sm:mx-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#080c16] border-y border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{t.process.tag}</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-white mb-6">{t.process.title}</h3>
              <p className="text-gray-400 text-lg">{t.process.desc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.process.steps.map((item, i) => (
                <div key={i} className="bg-[#05080f] border border-gray-800 p-8 rounded-2xl relative group hover:border-blue-500/50 transition-colors">
                  <div className="text-5xl font-black text-gray-800 group-hover:text-blue-500/20 transition-colors mb-6">{item.num}</div>
                  <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE & ABOUT */}
        <section className="py-24 border-b border-gray-800/50 bg-[#080c16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20">
            {/* Coverage */}
            <div id="coverage">
              <div className="mb-8">
                <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{t.coverage.tag}</h2>
                <h3 className="text-3xl sm:text-5xl font-black text-white">{t.coverage.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.coverage.areas.map((loc, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(74,144,217,0.8)]"></div>
                    <div>
                      <div className="text-xl font-bold text-white">{loc.state}</div>
                      <div className="text-gray-400">{loc.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* About */}
            <div id="about" className="relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl border border-gray-800 transform rotate-2"></div>
              <div className="relative bg-[#05080f] rounded-3xl border border-gray-800 h-full flex flex-col justify-end overflow-hidden group">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Tyler" className="object-cover w-full h-full opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/80 to-transparent"></div>
                </div>
                <div className="relative p-8 sm:p-12 mt-32">
                  <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{t.about.tag}</h2>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">{t.about.title}</h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {t.about.desc}
                  </p>
                  <div className="inline-block border border-gray-700 bg-gray-900/50 text-white px-4 py-2 rounded-lg font-bold text-sm w-fit backdrop-blur-md">
                    {t.about.badge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-24 relative overflow-hidden bg-[#05080f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-16 text-center">{t.reviews.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.reviews.items.map((review, i) => (
                <div key={i} className="bg-[#0a101d] p-8 rounded-2xl border border-gray-800 flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <div className="flex text-blue-500 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>
                  <p className="text-gray-300 flex-grow mb-8 relative z-10 leading-relaxed">"{review.quote}"</p>
                  <div className="mt-auto relative z-10">
                    <div className="font-bold text-white tracking-wide">{review.author}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{review.loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">{t.contact.title}</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{t.contact.desc}</p>
            <form className="max-w-md mx-auto bg-[#0a101d] p-6 rounded-2xl border border-gray-800 text-left shadow-2xl">
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-400 tracking-wider mb-2">{t.contact.label}</label>
                <textarea className="w-full bg-[#05080f] border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" rows={3} placeholder={t.contact.ph}></textarea>
              </div>
              <button type="button" className="w-full bg-white text-slate-950 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                {t.contact.btn}
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800/50">
        © 2026 Anywhere Auto Repair. Crafted with Next.js & Tailwind.
      </footer>
    </div>
  );
}