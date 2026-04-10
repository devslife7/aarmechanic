"use client";

import { useState, useEffect, FormEvent } from "react";
import "./home.css";

type Lang = "en" | "es";

const translations = {
  en: {
    nav: { how: "How It Works", services: "Services", coverage: "Coverage", about: "About", reviews: "Reviews", book: "Book Now" },
    hero: {
      badge: "Mobile Mechanic — DC • MD • VA",
      title1: "The garage",
      title2: "comes to you.",
      desc: "Professional auto repair that comes to your home, office, or roadside. Honest work, fair pricing, and zero waiting rooms.",
      whatsapp: "WhatsApp Us",
    },
    trust: ["Bilingual EN/ES", "24/7 Messaging", "Upfront Pricing", "Flexible Payments", "Same-Day Available"],
    process: {
      tag: "How It Works",
      title1: "Three steps to getting your car",
      title2: "fixed",
      desc: "No tow truck. No waiting room. No runaround.",
      steps: [
        { title: "Reach Out", desc: "Text or WhatsApp us with your car's issue. Photos and videos help us diagnose faster and give you an accurate quote." },
        { title: "Get a Quote", desc: "We'll give you an honest, upfront estimate. Parts and labor, all included. You know exactly what you're paying." },
        { title: "We Fix It", desc: "We come to your location — home, office, or roadside — fully equipped and ready to get you back on the road." },
      ],
    },
    services: {
      tag: "Services",
      title1: "What we",
      title2: "fix",
      desc: "From routine maintenance to complex repairs, handled right at your location.",
      items: [
        { name: "Diagnostics", desc: "Check engine light, error codes, and complete vehicle troubleshooting." },
        { name: "Oil Changes", desc: "Synthetic and conventional oil changes with quality filters included." },
        { name: "Brake Repair", desc: "Pads, rotors, brake fluid flush — everything to keep you stopping safely." },
        { name: "Battery & Electrical", desc: "Battery replacement, jump starts, alternator and starter repairs." },
        { name: "A/C & Cooling", desc: "A/C recharge, coolant flush, radiator and water pump service." },
        { name: "Tune-Ups", desc: "Spark plugs, serpentine belts, power steering, and general maintenance." },
      ],
    },
    brands: {
      title: "We Service Most Cars",
      subtitle: "Here is a partial list of the more popular vehicles we service.",
    },
    coverage: {
      tag: "Service Area",
      title1: "Covering the entire",
      title2: "DMV",
      desc: "We drive to you anywhere in D.C., Maryland, and Virginia.",
      areas: [
        { name: "Washington, D.C.", desc: "All neighborhoods, NW through SE — the full District" },
        { name: "Virginia", desc: "Springfield, Arlington, Alexandria, Fairfax, and all of Northern Virginia" },
        { name: "Maryland", desc: "Silver Spring, Bethesda, College Park, PG County, and beyond" },
        { name: "Roadside, Anywhere", desc: "Stranded? We'll come to wherever you are in the DMV" },
      ],
    },
    about: {
      eyebrow: "About",
      tag: "Your Mechanic",
      title1: "Hey, I'm",
      title2: "Tyler.",
      p1: "I started Anywhere Auto Repair because I believe getting your car fixed shouldn't mean losing your whole day at a shop. I bring professional-grade tools and parts directly to you — whether that's your driveway, your office parking lot, or the side of the road.",
      p2: "Hablo español. I serve the entire DMV area and language is never a barrier. My goal is simple: honest work, fair prices, and getting you back on the road.",
      chips: ["English", "Español", "Mobile Service", "Fair Pricing", "DMV Coverage"],
    },
    reviews: {
      tag: "Reviews",
      title1: "What customers",
      title2: "say",
      desc: "Real feedback from real people across the DMV.",
      items: [
        { quote: "Tyler came to my apartment complex and replaced my brakes in under two hours. Super professional, fair price, and I didn't have to miss work. Highly recommend!", author: "Marcus T.", loc: "Arlington, VA", initial: "M" },
        { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD", initial: "C" },
        { quote: "My car wouldn't start and Tyler was at my house within an hour. Turned out it was the alternator — he had it fixed by the end of the day. Saved me a tow bill too.", author: "Jessica M.", loc: "Washington, DC", initial: "J" },
      ],
    },
    contact: {
      eyebrow: "Get in Touch",
      title1: "Get a free",
      title2: "quote.",
      desc: "Send us a message with your car's issue and we'll get back to you with a free quote.",
      or: "or reach us directly",
      whatsappSub: "Contact on WhatsApp",
      callSub: "Call or text us",
      name: "Your Name",
      namePh: "e.g. Maria Garcia",
      phone: "Phone Number",
      phonePh: "(555) 123-4567",
      vehicle: "Vehicle",
      vehiclePh: "e.g. 2019 Honda Civic",
      issue: "What's going on with your car?",
      issuePh: "Briefly describe the issue — strange noise, won't start, check engine light, etc.",
      submit: "Send Message",
      successTitle: "Message sent!",
      successDesc: "We'll get back to you shortly with a free quote.",
      another: "Send another",
    },
    cta: {
      tag: "Get Started",
      title1: "Ready to get your car",
      title2: "fixed?",
      desc: "Text us on WhatsApp or give us a call. We'll get back to you fast and have you back on the road.",
      whatsapp: "WhatsApp Tyler",
      call: "Call Now",
      orText: "or text",
    },
    footer: {
      copy: "© 2026 Anywhere Auto Repair — Mobile Mechanic Service — DC • MD • VA",
    },
  },
  es: {
    nav: { how: "Cómo Funciona", services: "Servicios", coverage: "Cobertura", about: "Nosotros", reviews: "Reseñas", book: "Reservar" },
    hero: {
      badge: "Mecánico Móvil — DC • MD • VA",
      title1: "El taller",
      title2: "llega a ti.",
      desc: "Reparación de autos profesional que llega a tu casa, oficina o carretera. Trabajo honesto, precios justos y cero salas de espera.",
      whatsapp: "Escríbenos",
    },
    trust: ["Bilingüe EN/ES", "Mensajería 24/7", "Precios Transparentes", "Pagos Flexibles", "Servicio el Mismo Día"],
    process: {
      tag: "Cómo Funciona",
      title1: "Tres pasos para reparar tu auto",
      title2: "rápido",
      desc: "Sin grúas, sin salas de espera, sin vueltas.",
      steps: [
        { title: "Contáctanos", desc: "Envíanos un mensaje o WhatsApp con el problema de tu vehículo. Las fotos y videos nos ayudan a diagnosticar más rápido." },
        { title: "Recibe una Cotización", desc: "Te daremos un estimado honesto y transparente. Partes y mano de obra incluidas. Sabrás exactamente qué estás pagando." },
        { title: "Lo Reparamos", desc: "Vamos a tu ubicación — casa, oficina o carretera — totalmente equipados y listos para ponerte de nuevo en el camino." },
      ],
    },
    services: {
      tag: "Servicios",
      title1: "Lo que",
      title2: "reparamos",
      desc: "Desde mantenimiento de rutina hasta reparaciones complejas, todo en tu ubicación.",
      items: [
        { name: "Diagnósticos", desc: "Luz de check engine, códigos de error y diagnóstico completo del vehículo." },
        { name: "Cambio de Aceite", desc: "Cambios de aceite sintético y convencional con filtros de calidad incluidos." },
        { name: "Frenos", desc: "Pastillas, rotores, cambio de líquido de frenos — todo para que frenes con seguridad." },
        { name: "Batería y Eléctrico", desc: "Reemplazo de batería, arranques, reparación de alternador y motor de arranque." },
        { name: "A/C y Enfriamiento", desc: "Recarga de A/C, cambio de refrigerante, servicio de radiador y bomba de agua." },
        { name: "Afinaciones", desc: "Bujías, bandas, dirección hidráulica y mantenimiento general." },
      ],
    },
    brands: {
      title: "Damos Servicio a la Mayoría de los Autos",
      subtitle: "Aquí hay una lista parcial de los vehículos más populares a los que damos servicio.",
    },
    coverage: {
      tag: "Área de Servicio",
      title1: "Cubriendo todo el",
      title2: "DMV",
      desc: "Manejamos hasta ti en cualquier parte de D.C., Maryland y Virginia.",
      areas: [
        { name: "Washington, D.C.", desc: "Todos los vecindarios, de NO a SE — todo el Distrito" },
        { name: "Virginia", desc: "Springfield, Arlington, Alexandria, Fairfax y todo el Norte de Virginia" },
        { name: "Maryland", desc: "Silver Spring, Bethesda, College Park, PG County y más" },
        { name: "En la Carretera", desc: "¿Varado? Vamos a donde estés en el DMV" },
      ],
    },
    about: {
      eyebrow: "Nosotros",
      tag: "Tu Mecánico",
      title1: "Hola, soy",
      title2: "Tyler.",
      p1: "Empecé Anywhere Auto Repair porque creo que arreglar tu auto no debería significar perder todo el día en un taller. Llevo herramientas y piezas de calidad profesional directamente a ti — ya sea tu entrada, el estacionamiento de tu oficina o el lado de la carretera.",
      p2: "Hablo español. Sirvo toda el área del DMV y el idioma nunca es una barrera. Mi objetivo es simple: trabajo honesto, precios justos y regresarte al camino.",
      chips: ["English", "Español", "Servicio Móvil", "Precios Justos", "Cobertura DMV"],
    },
    reviews: {
      tag: "Reseñas",
      title1: "Lo que dicen nuestros",
      title2: "clientes",
      desc: "Comentarios reales de personas reales en todo el DMV.",
      items: [
        { quote: "Tyler vino a mi complejo de apartamentos y me cambió los frenos en menos de dos horas. Súper profesional, precio justo y no tuve que faltar al trabajo. ¡Muy recomendado!", author: "Marcus T.", loc: "Arlington, VA", initial: "M" },
        { quote: "Lo mejor es que habla español. Me explicó todo lo que estaba mal con mi carro y no me cobró de más. Excelente servicio, lo recomiendo 100%.", author: "Carlos R.", loc: "Silver Spring, MD", initial: "C" },
        { quote: "Mi carro no arrancaba y Tyler estaba en mi casa en una hora. Resultó ser el alternador — lo arregló antes de que terminara el día. Me ahorró la grúa también.", author: "Jessica M.", loc: "Washington, DC", initial: "J" },
      ],
    },
    contact: {
      eyebrow: "Contáctanos",
      title1: "Obtén una cotización",
      title2: "gratis.",
      desc: "Envíanos un mensaje con el problema de tu auto y te responderemos con una cotización gratuita.",
      or: "o contáctanos directamente",
      whatsappSub: "Contactar por WhatsApp",
      callSub: "Llámanos o envía un texto",
      name: "Tu Nombre",
      namePh: "ej. Maria Garcia",
      phone: "Teléfono",
      phonePh: "(555) 123-4567",
      vehicle: "Vehículo",
      vehiclePh: "ej. 2019 Honda Civic",
      issue: "¿Qué le pasa a tu carro?",
      issuePh: "Describe brevemente el problema — ruido extraño, no enciende, luz de check engine, etc.",
      submit: "Enviar Mensaje",
      successTitle: "¡Mensaje enviado!",
      successDesc: "Te responderemos pronto con una cotización gratuita.",
      another: "Enviar otro",
    },
    cta: {
      tag: "Empieza Ya",
      title1: "Listo para reparar tu auto",
      title2: "¿hoy?",
      desc: "Escríbenos por WhatsApp o llámanos. Te responderemos rápido y te pondremos de vuelta en el camino.",
      whatsapp: "WhatsApp Tyler",
      call: "Llamar Ahora",
      orText: "o envía texto al",
    },
    footer: {
      copy: "© 2026 Anywhere Auto Repair — Servicio de Mecánico Móvil — DC • MD • VA",
    },
  },
};

const serviceImages = [
  "https://images.unsplash.com/photo-1486262715619-670810a079e1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
];

const serviceIcons = [
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="o" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 8v6"/></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/></svg>,
  <svg key="ac" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  <svg key="t" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
];

const brandsList = [
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

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tx = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <img src="/logo.png" alt="Anywhere Auto Repair" className="nav-brand-img" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Anywhere</span>
              <span className="nav-brand-sub">Auto Repair</span>
            </div>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#how">{tx.nav.how}</a></li>
              <li><a href="#services">{tx.nav.services}</a></li>
              <li><a href="#area">{tx.nav.coverage}</a></li>
              <li><a href="#about">{tx.nav.about}</a></li>
              <li><a href="#reviews">{tx.nav.reviews}</a></li>
              <li><a href="#contact" className="nav-cta-link">{tx.nav.book}</a></li>
            </ul>
            <div className="lang-toggle">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
            </div>
            <button className="mobile-toggle" aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow reveal">
              <div className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">{tx.hero.badge}</span>
            </div>
            <h1 className="reveal reveal-delay-1">
              {tx.hero.title1}<br /><em>{tx.hero.title2}</em>
            </h1>
            <p className="hero-desc reveal reveal-delay-2">{tx.hero.desc}</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a href="https://wa.me/16104636087?text=Hi%20Tyler%2C%20I%20need%20a%20mobile%20mechanic!" className="btn-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>{tx.hero.whatsapp}</span>
              </a>
              <a href="tel:+16104636087" className="btn-ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (610) 463-6087
              </a>
            </div>
          </div>
          <div className="hero-right reveal reveal-delay-2">
            <div className="hero-logo-box">
              <div className="hero-glow" />
              <img src="/logo.png" alt="Anywhere Auto Repair Logo" />
            </div>
            <div className="hero-badge hero-badge-top">
              <div className="hero-badge-dot green" />
              <span>5-Star Rated</span>
            </div>
            <div className="hero-badge hero-badge-bottom">
              <div className="hero-badge-dot blue" />
              <span>Habla Español</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {tx.trust.map((item, i) => (
            <div className="trust-pill" key={i}>
              <div className="trust-pill-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <div className="section-intro centered reveal">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">{tx.process.tag}</span>
              <div className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading">
              {tx.process.title1} <em>{tx.process.title2}</em>
            </h2>
            <p className="section-desc">{tx.process.desc}</p>
          </div>
          <div className="how-grid">
            {tx.process.steps.map((step, i) => (
              <div className={`how-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={i}>
                <div className="how-num">0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-intro centered reveal">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">{tx.services.tag}</span>
              <div className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading">
              {tx.services.title1} <em>{tx.services.title2}</em>
            </h2>
            <p className="section-desc">{tx.services.desc}</p>
          </div>
          <div className="services-grid">
            {tx.services.items.map((svc, i) => (
              <div className={`svc reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ""}`} key={i}>
                <img src={serviceImages[i]} alt={svc.name} className="svc-img" />
                <div className="svc-content">
                  <div className="svc-icon">{serviceIcons[i]}</div>
                  <h3>{svc.name}</h3>
                  <p>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="brands-section">
        <div className="container">
          <div className="section-intro centered reveal">
            <h2 className="section-heading">{tx.brands.title}</h2>
            <p className="section-desc">{tx.brands.subtitle}</p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="brands-fade-left" />
          <div className="brands-fade-right" />
          <div className="brands-track">
            {[...brandsList, ...brandsList].map((brand, i) => (
              <div className="brand-item" key={i}>
                <img src={brand.logo} alt={brand.name} />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="area" id="area">
        <div className="container">
          <div className="section-intro reveal">
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">{tx.coverage.tag}</span>
            </div>
            <h2 className="section-heading">
              {tx.coverage.title1} <em>{tx.coverage.title2}</em>
            </h2>
            <p className="section-desc">{tx.coverage.desc}</p>
          </div>
          <div className="area-layout">
            <div className="area-visual reveal">
              <div className="area-visual-letters">DC • MD • VA</div>
              <div className="area-visual-sub">Washington D.C. Metro Area &amp; Surrounding Counties</div>
            </div>
            <div className="area-list">
              {tx.coverage.areas.map((area, i) => (
                <div className={`area-item reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={i}>
                  <div className="area-marker" />
                  <div>
                    <h4>{area.name}</h4>
                    <p>{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-portrait reveal">
              <div className="about-portrait-frame">
                <div className="about-portrait-placeholder">T</div>
              </div>
              <div className="about-portrait-tag">{tx.about.tag}</div>
            </div>
            <div className="about-text">
              <div className="section-eyebrow reveal">
                <div className="section-eyebrow-line" />
                <span className="section-eyebrow-text">{tx.about.eyebrow}</span>
              </div>
              <h2 className="reveal reveal-delay-1">
                {tx.about.title1} <em>{tx.about.title2}</em>
              </h2>
              <p className="reveal reveal-delay-2">{tx.about.p1}</p>
              <p className="reveal reveal-delay-3">{tx.about.p2}</p>
              <div className="about-chips reveal reveal-delay-4">
                {tx.about.chips.map((chip, i) => (
                  <span className="about-chip" key={i}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="container">
          <div className="section-intro centered reveal">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">{tx.reviews.tag}</span>
              <div className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading">
              {tx.reviews.title1} <em>{tx.reviews.title2}</em>
            </h2>
            <p className="section-desc">{tx.reviews.desc}</p>
          </div>
          <div className="reviews-grid">
            {tx.reviews.items.map((review, i) => (
              <div className={`rev reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={i}>
                <div className="rev-quote">&ldquo;</div>
                <div className="rev-stars">
                  {[0,1,2,3,4].map((s) => <StarIcon key={s} />)}
                </div>
                <blockquote>{review.quote}</blockquote>
                <div className="rev-author">
                  <div className="rev-avatar">{review.initial}</div>
                  <div>
                    <div className="rev-name">{review.author}</div>
                    <div className="rev-loc">{review.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-layout">
          <div>
            <div className="section-eyebrow reveal">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">{tx.contact.eyebrow}</span>
            </div>
            <h2 className="section-heading reveal reveal-delay-1" style={{ marginBottom: 16 }}>
              {tx.contact.title1} <em>{tx.contact.title2}</em>
            </h2>
            <p className="section-desc reveal reveal-delay-2" style={{ marginBottom: 40 }}>{tx.contact.desc}</p>
            <p style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>
              {tx.contact.or}
            </p>
            <a href="https://wa.me/16104636087" className="contact-info-card reveal reveal-delay-3">
              <div className="contact-info-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="contact-info-text">
                <h4>WhatsApp</h4>
                <p>{tx.contact.whatsappSub}</p>
              </div>
            </a>
            <a href="tel:+16104636087" className="contact-info-card reveal reveal-delay-4">
              <div className="contact-info-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info-text">
                <h4>(610) 463-6087</h4>
                <p>{tx.contact.callSub}</p>
              </div>
            </a>
          </div>

          <div className="contact-form-box reveal reveal-delay-2">
            {formSubmitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h4>{tx.contact.successTitle}</h4>
                <p>{tx.contact.successDesc}</p>
                <button onClick={() => setFormSubmitted(false)}>{tx.contact.another}</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{tx.contact.name}</label>
                    <input type="text" required placeholder={tx.contact.namePh} />
                  </div>
                  <div className="form-group">
                    <label>{tx.contact.phone}</label>
                    <input type="tel" required placeholder={tx.contact.phonePh} />
                  </div>
                </div>
                <div className="form-group">
                  <label>{tx.contact.vehicle}</label>
                  <input type="text" required placeholder={tx.contact.vehiclePh} />
                </div>
                <div className="form-group">
                  <label>{tx.contact.issue}</label>
                  <textarea required placeholder={tx.contact.issuePh} />
                </div>
                <button type="submit" className="form-submit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>{tx.contact.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner reveal">
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">{tx.cta.tag}</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2>
            {tx.cta.title1} <em>{tx.cta.title2}</em>
          </h2>
          <p>{tx.cta.desc}</p>
          <div className="cta-actions">
            <a href="https://wa.me/16104636087?text=Hi%20Tyler%2C%20I%20need%20a%20mobile%20mechanic!" className="btn-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{tx.cta.whatsapp}</span>
            </a>
            <a href="tel:+16104636087" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{tx.cta.call}</span>
            </a>
          </div>
          <div className="cta-phone">
            <span>{tx.cta.orText} </span>
            <a href="sms:+16104636087">(610) 463-6087</a>
          </div>
        </div>
      </section>

      {/* OTHER DESIGNS */}
      <div className="designs-section reveal">
        <div className="container">
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Explore</span>
          </div>
          <h2 className="designs-heading">Other Design Concepts</h2>
          <p className="designs-desc">Browse alternate design directions for the site.</p>
          <div className="designs-grid">
            <a href="/" className="design-card design-card-current">
              <div className="design-card-label">Current</div>
              <div className="design-card-name">Design H — Sleek Blue</div>
              <div className="design-card-desc">Dark, minimal layout with sleek typography and subtle blue accents.</div>
            </a>
            <a href="/designs/brand-blue" className="design-card">
              <div className="design-card-label">Design F</div>
              <div className="design-card-name">Brand Blue</div>
              <div className="design-card-desc">Hero background image with a professional, brand-forward feel.</div>
            </a>
            <a href="/designs/dark-chrome" className="design-card">
              <div className="design-card-label">Design G</div>
              <div className="design-card-name">Dark Chrome</div>
              <div className="design-card-desc">Bold uppercase type with metallic chrome gradients on dark.</div>
            </a>
            <a href="/designs/option-a-clean-trustworthy.html" className="design-card">
              <div className="design-card-label">Design A</div>
              <div className="design-card-name">Clean &amp; Trustworthy</div>
              <div className="design-card-desc">Light, approachable layout built around trust and clarity.</div>
            </a>
            <a href="/designs/option-d-high-end.html" className="design-card">
              <div className="design-card-label">Design D</div>
              <div className="design-card-name">High End</div>
              <div className="design-card-desc">Premium aesthetic with rich visuals and refined details.</div>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="Logo" />
            <span className="footer-brand-text">Anywhere Auto</span>
          </div>
          <div className="footer-nav">
            <a href="https://www.instagram.com/anywhere_auto_repair" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.tiktok.com/@cheftylermellen" target="_blank" rel="noopener">TikTok</a>
            <a href="https://wa.me/16104636087" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">{tx.footer.copy}</div>
      </footer>
    </>
  );
}
