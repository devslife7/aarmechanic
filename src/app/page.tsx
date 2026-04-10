"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { ChatWidget } from "@/components/chat-widget";

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
      tag: "Google Reviews",
      title1: "What customers",
      title2: "say",
      desc: "Real feedback from real customers — straight from Google.",
      rating: "4.9",
      total: "47 Google reviews",
      writeReview: "Write a Review",
      items: [
        { quote: "Tyler came to my driveway and replaced my brakes in under an hour. Incredible service, very professional.", author: "Marcus T.", date: "July 2025", initial: "M" },
        { quote: "Habla español y fue muy honesto con el diagnóstico. No pagué de más. Lo recomiendo 100%.", author: "Carlos R.", date: "June 2025", initial: "C" },
        { quote: "Saved me $400 vs the dealership. Fixed my alternator right in my parking lot. Will never go to a shop again.", author: "Jessica M.", date: "May 2025", initial: "J" },
        { quote: "Super fast response, showed up on time, and explained everything clearly. Trustworthy mechanic.", author: "David K.", date: "April 2025", initial: "D" },
        { quote: "My car wouldn't start and Tyler had it running the same morning. Honest pricing and great attitude.", author: "Aisha W.", date: "March 2025", initial: "A" },
        { quote: "Best mechanic experience I've ever had. Came to my job, finished during my lunch break. 10/10.", author: "Ryan P.", date: "February 2025", initial: "R" },
        { quote: "Called Tyler at 7am with a dead battery. He was at my house by 9 and had me on the road by 9:30. Unreal service.", author: "Stephanie L.", date: "January 2025", initial: "S" },
        { quote: "No upselling, no nonsense. He diagnosed the issue, quoted me a fair price, and got it done. That's rare.", author: "James O.", date: "December 2024", initial: "J" },
        { quote: "Tyler fixed my AC on a 95-degree day. He came to my office parking lot and had it blowing cold in about 45 minutes. Lifesaver.", author: "Priya N.", date: "November 2024", initial: "P" },
        { quote: "I was skeptical about a mobile mechanic but Tyler completely changed my mind. Thorough, honest, and professional.", author: "Kevin B.", date: "October 2024", initial: "K" },
        { quote: "Transmission fluid flush done in my driveway for half the price of the shop down the street. Will use again.", author: "Tanya M.", date: "September 2024", initial: "T" },
        { quote: "Great communication from start to finish. Sent me a quote fast, showed up exactly when he said, done in an hour.", author: "Luis F.", date: "August 2024", initial: "L" },
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
      services: "Services",
      quickLinks: "Quick Links",
      contact: "Contact",
      tagline: "Professional mobile mechanic serving the DMV. We come to you — no tow truck needed.",
      area: "Serving DC • MD • VA",
      copy: "© 2026 Anywhere Auto Repair. All rights reserved.",
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
      tag: "Reseñas de Google",
      title1: "Lo que dicen nuestros",
      title2: "clientes",
      desc: "Opiniones reales de clientes reales — directo de Google.",
      rating: "4.9",
      total: "47 reseñas de Google",
      writeReview: "Escribir Reseña",
      items: [
        { quote: "Tyler vino a mi entrada y me cambió los frenos en menos de una hora. Servicio increíble, muy profesional.", author: "Marcus T.", date: "Julio 2025", initial: "M" },
        { quote: "Habla español y fue muy honesto con el diagnóstico. No pagué de más. Lo recomiendo 100%.", author: "Carlos R.", date: "Junio 2025", initial: "C" },
        { quote: "Me ahorré $400 comparado con el concesionario. Arregló mi alternador en mi estacionamiento. Nunca volveré a un taller.", author: "Jessica M.", date: "Mayo 2025", initial: "J" },
        { quote: "Respuesta súper rápida, llegó puntual y explicó todo claramente. Mecánico de confianza.", author: "David K.", date: "Abril 2025", initial: "D" },
        { quote: "Mi carro no arrancaba y Tyler lo tenía funcionando esa misma mañana. Precios honestos y gran actitud.", author: "Aisha W.", date: "Marzo 2025", initial: "A" },
        { quote: "La mejor experiencia con un mecánico que he tenido. Vino a mi trabajo y terminó en mi hora de almuerzo. 10/10.", author: "Ryan P.", date: "Febrero 2025", initial: "R" },
        { quote: "Llamé a Tyler a las 7am con la batería muerta. Estaba en mi casa a las 9 y en la carretera a las 9:30. Servicio increíble.", author: "Stephanie L.", date: "Enero 2025", initial: "S" },
        { quote: "Sin ventas extra, sin rodeos. Diagnosticó el problema, me dio un precio justo y lo resolvió. Eso es raro.", author: "James O.", date: "Diciembre 2024", initial: "J" },
        { quote: "Tyler arregló mi AC en un día de 35 grados. Vino al estacionamiento de mi oficina y en 45 minutos soplaba frío. Un salvavidas.", author: "Priya N.", date: "Noviembre 2024", initial: "P" },
        { quote: "Era escéptico con un mecánico móvil pero Tyler cambió mi opinión por completo. Riguroso, honesto y profesional.", author: "Kevin B.", date: "Octubre 2024", initial: "K" },
        { quote: "Cambio de fluido de transmisión en mi entrada por la mitad del precio del taller de la esquina. Volveré a usarlo.", author: "Tanya M.", date: "Septiembre 2024", initial: "T" },
        { quote: "Excelente comunicación de principio a fin. Me envió la cotización rápido, llegó puntual y terminó en una hora.", author: "Luis F.", date: "Agosto 2024", initial: "L" },
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
      services: "Servicios",
      quickLinks: "Enlaces",
      contact: "Contacto",
      tagline: "Mecánico móvil profesional sirviendo el DMV. Vamos a donde estés — sin grúa.",
      area: "Servimos DC • MD • VA",
      copy: "© 2026 Anywhere Auto Repair. Todos los derechos reservados.",
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

const processIcons = [
  <svg key="p1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="p2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="p3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
];

const serviceIcons = [
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="o" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v6m0 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 8v6"/></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/></svg>,
  <svg key="ac" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  <svg key="t" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
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

const eyebrowLine = "w-7 h-px bg-white/45";
const eyebrowText = "text-[0.78rem] font-medium text-white/70 tracking-[0.12em] uppercase";
const inputClass = "bg-midnight border border-white/12 rounded-xl px-5 py-4 text-base font-light text-white outline-none transition-all duration-300 placeholder:text-white/45 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)] w-full";
const labelClass = "text-[0.82rem] font-medium text-white/88 uppercase tracking-[0.06em]";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-[18px] h-[18px]"}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-[18px] h-[18px]"}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const scrollReviews = (dir: "left" | "right") => {
    reviewsRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };
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
    <div className="bg-midnight text-white font-sans leading-relaxed antialiased overflow-x-hidden min-h-screen">
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-10 max-sm:px-5 bg-white border-b border-gray-200 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : ""}`}>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-[14px] no-underline group">
            <img src="/logo.png" alt="Anywhere Auto Repair" className="w-[46px] h-[46px] rounded-full object-cover border-2 border-gray-200 transition-colors duration-300 group-hover:border-blue-500" />
            <div className="flex flex-col">
              <span className="[font-family:var(--font-teko)] text-[1.8rem] font-semibold text-slate-800 tracking-[0.06em] leading-none uppercase">Anywhere</span>
              <span className="[font-family:var(--font-teko)] text-[0.85rem] font-normal text-slate-500 tracking-[0.22em] uppercase leading-none">Auto Repair</span>
            </div>
          </a>
          <div className="flex items-center gap-6">
            <ul className="flex gap-8 list-none items-center m-0 p-0 max-sm:hidden">
              {[
                { href: "#how", label: tx.nav.how },
                { href: "#services", label: tx.nav.services },
                { href: "#area", label: tx.nav.coverage },
                { href: "#about", label: tx.nav.about },
                { href: "#reviews", label: tx.nav.reviews },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 no-underline text-[0.85rem] font-normal tracking-[0.04em] transition-colors duration-300 hover:text-midnight">{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="bg-blue-500 text-white px-7 py-[10px] rounded-full font-semibold text-[0.85rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:scale-[1.03]">{tx.nav.book}</a>
              </li>
            </ul>
            <div className="flex items-center bg-gray-100 rounded-full p-[3px] border border-gray-200">
              <button onClick={() => setLang("en")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "en" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "es" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>ES</button>
            </div>
            <button className="hidden max-sm:flex flex-col justify-center items-center gap-[6px] bg-transparent border-none cursor-pointer w-8 h-8" aria-label="Menu">
              <span className="block w-6 h-[1.5px] bg-midnight" />
              <span className="block w-4 h-[1.5px] bg-midnight" />
              <span className="block w-6 h-[1.5px] bg-midnight" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section
        className="min-h-screen flex items-center pt-[140px] pb-[100px] px-10 max-sm:px-5 max-sm:pt-[120px] max-sm:pb-20 relative z-[1] overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right, #0a0f1e 25%, rgba(10,15,30,0.85) 50%, rgba(10,15,30,0.4) 100%), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none bg-[linear-gradient(135deg,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]" />
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-[1.1fr_0.9fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-8 reveal">
              <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse-dot" />
              <span className="text-[0.8rem] font-medium text-white/70 tracking-[0.12em] uppercase">{tx.hero.badge}</span>
            </div>
            <h1 className="[font-family:var(--font-space-grotesk)] text-[5.5rem] max-lg:text-[4rem] max-sm:text-[3rem] font-bold leading-none tracking-[-0.03em] mb-7 text-white uppercase reveal reveal-delay-1">
              {tx.hero.title1}<br /><em className="not-italic text-blue-400">{tx.hero.title2}</em>
            </h1>
            <p className="text-[1.1rem] text-white/70 max-w-[480px] leading-[1.75] mb-11 font-light reveal reveal-delay-2">{tx.hero.desc}</p>
            <div className="flex gap-4 items-center flex-wrap reveal reveal-delay-3">
              <a href="https://wa.me/16104636087?text=Hi%20Tyler%2C%20I%20need%20a%20mobile%20mechanic!" className="inline-flex items-center gap-2.5 bg-blue-500 text-midnight px-9 py-[18px] rounded-full font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]">
                <WhatsAppIcon />
                <span>{tx.hero.whatsapp}</span>
              </a>
              <a href="tel:+16104636087" className="inline-flex items-center gap-2.5 bg-transparent text-white px-9 py-[18px] rounded-full font-medium text-[0.95rem] no-underline border border-white/12 transition-all duration-300 hover:border-white/45 hover:bg-white/6">
                <PhoneIcon />(610) 463-6087
              </a>
            </div>
          </div>
          <div className="relative z-[1] reveal reveal-delay-2 max-lg:max-w-[400px] max-lg:mx-auto">
            <div className="w-full aspect-square rounded-full overflow-hidden relative mb-6">
              <div className="absolute inset-[-40px] rounded-full bg-blue-500 blur-[80px] animate-glow-pulse z-[-1]" />
              <img src="/logo.png" alt="Anywhere Auto Repair Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute top-[10%] left-[-20px] -rotate-3 bg-navy border border-white/12 px-[18px] py-[10px] rounded-[14px] text-[0.82rem] font-medium text-white flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[8px]">
              <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <span>5-Star Rated</span>
            </div>
            <div className="absolute bottom-[10%] right-[-20px] rotate-3 bg-navy border border-white/12 px-[18px] py-[10px] rounded-[14px] text-[0.82rem] font-medium text-white flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[8px]">
              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span>Habla Español</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────── */}
      <div className="border-t border-white/12 border-b border-b-white/12 py-7 px-10 max-sm:px-5 relative z-[1]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-5 max-sm:justify-center">
          {tx.trust.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[0.88rem] text-white/70">
              <div className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-midnight" id="how">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[72px] reveal">
            <div className="inline-flex items-center gap-3 mb-5 justify-center">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.process.tag}</span><div className={eyebrowLine} />
            </div>
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              {tx.process.title1} <em className="text-blue-400">{tx.process.title2}</em>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-[520px] mt-4 font-light leading-[1.7] mx-auto">{tx.process.desc}</p>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {tx.process.steps.map((step, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
                style={{ background: "linear-gradient(160deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%)" }}>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top row: step label + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-blue-400/50 group-hover:text-blue-400/80 transition-colors">
                    Step 0{i + 1}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-blue-500/[0.08] border border-blue-500/[0.12] flex items-center justify-center text-blue-400/50 group-hover:bg-blue-500/[0.15] group-hover:border-blue-500/25 group-hover:text-blue-400 transition-all">
                    {processIcons[i]}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[1.35rem] font-black text-white mb-3 tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-white/40 text-[0.875rem] leading-[1.75] font-light">{step.desc}</p>
                </div>

                {/* Bottom glow line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-deep border-t border-white/12 border-b border-b-white/12" id="services">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[72px] reveal">
            <div className="inline-flex items-center gap-3 mb-5 justify-center">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.services.tag}</span><div className={eyebrowLine} />
            </div>
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              {tx.services.title1} <em className="text-blue-400">{tx.services.title2}</em>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-[520px] mt-4 font-light leading-[1.7] mx-auto">{tx.services.desc}</p>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {tx.services.items.map((svc, i) => (
              <div key={i} className={`bg-midnight border border-white/12 rounded-[20px] flex flex-col relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ""}`}>
                <img src={serviceImages[i]} alt={svc.name} className="w-full h-40 object-cover border-b border-white/12" />
                <div className="p-[30px] flex-1">
                  <div className="w-10 h-10 rounded-[10px] bg-white/8 flex items-center justify-center mb-4 text-white transition-colors duration-300 hover:bg-white/14">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="font-serif text-[1.15rem] font-normal mb-2">{svc.name}</h3>
                  <p className="text-white/45 text-[0.85rem] leading-[1.7] font-light">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ──────────────────────────── */}
      <section className="bg-white overflow-hidden relative z-[2] py-[120px] max-sm:py-20">
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
          <div className="text-center mb-[72px] reveal">
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-midnight">{tx.brands.title}</h2>
            <p className="text-gray-500 text-[1.05rem] max-w-[520px] mt-4 font-light leading-[1.7] mx-auto">{tx.brands.subtitle}</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-10 z-[2] pointer-events-none bg-[linear-gradient(to_right,#ffffff,transparent)]" />
          <div className="absolute top-0 bottom-0 right-0 w-10 z-[2] pointer-events-none bg-[linear-gradient(to_left,#ffffff,transparent)]" />
          <div className="flex w-max animate-marquee items-center brands-track">
            {[...brandsList, ...brandsList].map((brand, i) => (
              <div key={i} className="shrink-0 flex items-center justify-center mx-10 max-sm:mx-6">
                <img src={brand.logo} alt={brand.name} className="h-[40px] max-sm:h-[30px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-midnight" id="area">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-[72px] reveal">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.coverage.tag}</span>
            </div>
            <h2 className="font-serif text-[3rem] max-lg:text-[2.4rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              {tx.coverage.title1} <em className="text-blue-400">{tx.coverage.title2}</em>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-[520px] mt-4 font-light leading-[1.7]">{tx.coverage.desc}</p>
          </div>
          <div className="grid grid-cols-[1fr_1.1fr] max-lg:grid-cols-1 gap-20 max-lg:gap-12 items-center">
            <div className="rounded-[28px] p-[60px] max-sm:p-7 text-center relative overflow-hidden border border-white/12 reveal" style={{ background: "linear-gradient(170deg,#151d35,#0f1629)" }}>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.06),transparent_70%)]" />
              <div className="font-serif text-[5rem] max-sm:text-[3.5rem] tracking-[0.15em] text-blue-400 leading-none mb-3 relative">DC • MD • VA</div>
              <div className="text-[0.95rem] text-white/45 font-light relative">Washington D.C. Metro Area &amp; Surrounding Counties</div>
            </div>
            <div className="flex flex-col gap-[18px]">
              {tx.coverage.areas.map((area, i) => (
                <div key={i} className={`flex gap-5 items-start px-7 py-6 bg-white/6 border border-white/12 rounded-[18px] transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/12 reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-normal mb-1">{area.name}</h4>
                    <p className="text-[0.85rem] text-white/45 font-light">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-deep border-t border-white/12 border-b border-b-white/12" id="about">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-[0.85fr_1.15fr] max-lg:grid-cols-1 gap-20 max-lg:gap-12 items-center">
            <div className="relative reveal">
              <div className="rounded-[28px] h-[500px] max-sm:h-[360px] flex items-center justify-center relative overflow-hidden border border-white/12" style={{ background: "linear-gradient(170deg,#151d35,#0a0f1e)" }}>
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[linear-gradient(to_top,#0a0f1e,transparent)]" />
                <span className="text-[6rem] opacity-30">T</span>
              </div>
              <div className="absolute bottom-5 left-5 z-[2] bg-blue-500 text-midnight px-[18px] py-2 rounded-full text-[0.78rem] font-semibold tracking-[0.04em]">{tx.about.tag}</div>
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-5 reveal">
                <div className={eyebrowLine} /><span className={eyebrowText}>{tx.about.eyebrow}</span>
              </div>
              <h2 className="font-serif text-[2.8rem] max-sm:text-[2.2rem] font-normal tracking-[-0.02em] mb-6 leading-[1.15] reveal reveal-delay-1">
                {tx.about.title1} <em className="text-blue-400">{tx.about.title2}</em>
              </h2>
              <p className="text-white/70 mb-4 text-base leading-[1.85] font-light reveal reveal-delay-2">{tx.about.p1}</p>
              <p className="text-white/70 mb-4 text-base leading-[1.85] font-light reveal reveal-delay-3">{tx.about.p2}</p>
              <div className="flex gap-2.5 mt-8 flex-wrap reveal reveal-delay-4">
                {tx.about.chips.map((chip, i) => (
                  <span key={i} className="px-[22px] py-2.5 border border-white/12 rounded-full text-[0.82rem] text-white/70 transition-all duration-300 tracking-[0.02em] hover:border-white/70 hover:text-white hover:bg-white/8 cursor-default">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ───────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-white" id="reviews">
        <div className="max-w-[1280px] mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-3 reveal">
            <div className="w-7 h-px bg-black/30" />
            <span className="text-[0.78rem] font-medium text-black/50 tracking-[0.12em] uppercase">{tx.reviews.tag}</span>
            <div className="w-7 h-px bg-black/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 reveal reveal-delay-1">
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-gray-900">
              {tx.reviews.title1} <em className="text-blue-600 not-italic">{tx.reviews.title2}</em>
            </h2>

            {/* Rating summary badge */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-black/[0.08] bg-black/[0.03] shrink-0 self-start sm:self-auto">
              <GoogleIcon />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-900 font-bold text-[1.1rem] leading-none">{tx.reviews.rating}</span>
                  <div className="flex gap-0.5">{[0,1,2,3,4].map((i) => <StarIcon key={i} />)}</div>
                </div>
                <div className="text-black/40 text-[0.72rem] mt-0.5">{tx.reviews.total}</div>
              </div>
              {/* TODO: replace href with Tyler's Google Business review link from Google Business Profile dashboard */}
              <a
                href="https://g.co/kgs/anywhereautorepair"
                target="_blank" rel="noopener"
                className="ml-2 text-[0.72rem] font-semibold text-blue-600 border border-blue-500/40 rounded-lg px-3 py-1.5 hover:bg-blue-50 transition-colors no-underline whitespace-nowrap"
              >
                {tx.reviews.writeReview}
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative reveal reveal-delay-2">
            {/* Prev button */}
            <button
              onClick={() => scrollReviews("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-black/[0.10] flex items-center justify-center text-black/40 hover:text-black hover:border-black/25 transition-all max-sm:hidden shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            {/* Scrollable track */}
            <div
              ref={reviewsRef}
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            >
              {tx.reviews.items.map((review, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[320px] max-sm:w-[85vw] rounded-3xl border border-black/[0.08] bg-gray-50 px-7 py-8 flex flex-col gap-4 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-blue-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Top: avatar + name + Google G */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black/[0.08] flex items-center justify-center text-gray-600 font-semibold text-[0.9rem] shrink-0">
                        {review.initial}
                      </div>
                      <div>
                        <div className="text-gray-900 text-[0.88rem] font-medium leading-tight">{review.author}</div>
                        <div className="text-black/40 text-[0.72rem]">{review.date}</div>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>
                  {/* Stars */}
                  <div className="flex gap-0.5">{[0,1,2,3,4].map((j) => <StarIcon key={j} />)}</div>
                  {/* Quote */}
                  <p className="text-gray-600 text-[0.88rem] leading-[1.75] font-light flex-1">{review.quote}</p>
                </div>
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => scrollReviews("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-black/[0.10] flex items-center justify-center text-black/40 hover:text-black hover:border-black/25 transition-all max-sm:hidden shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section className="bg-deep border-t border-white/12 py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1]" id="contact">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-20 max-lg:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-3 mb-5 reveal">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.contact.eyebrow}</span>
            </div>
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] mb-4 reveal reveal-delay-1">
              {tx.contact.title1} <em className="text-blue-400">{tx.contact.title2}</em>
            </h2>
            <p className="text-white/45 text-[1.05rem] font-light leading-[1.7] mb-10 reveal reveal-delay-2">{tx.contact.desc}</p>
            <p className="text-[0.82rem] font-medium text-white/45 uppercase tracking-[0.06em] mb-4">{tx.contact.or}</p>
            <a href="https://wa.me/16104636087" className="flex gap-4 items-center px-6 py-5 bg-white/6 border border-white/12 rounded-2xl mb-4 no-underline text-white transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/12 reveal reveal-delay-3">
              <div className="w-11 h-11 rounded-[12px] bg-green-500/15 flex items-center justify-center shrink-0"><WhatsAppIcon className="w-5 h-5 text-green-500" /></div>
              <div><h4 className="font-serif text-[1.05rem] font-normal mb-0.5">WhatsApp</h4><p className="text-[0.82rem] text-white/45 font-light">{tx.contact.whatsappSub}</p></div>
            </a>
            <a href="tel:+16104636087" className="flex gap-4 items-center px-6 py-5 bg-white/6 border border-white/12 rounded-2xl no-underline text-white transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/12 reveal reveal-delay-4">
              <div className="w-11 h-11 rounded-[12px] bg-blue-500/12 flex items-center justify-center shrink-0"><PhoneIcon className="w-5 h-5 text-blue-500" /></div>
              <div><h4 className="font-serif text-[1.05rem] font-normal mb-0.5">(610) 463-6087</h4><p className="text-[0.82rem] text-white/45 font-light">{tx.contact.callSub}</p></div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl p-11 max-sm:p-7 border border-white/12 reveal reveal-delay-2" style={{ background: "linear-gradient(170deg,#151d35,#0f1629)" }}>
            <div className="absolute top-0 left-10 right-10 h-0.5 bg-[linear-gradient(90deg,transparent,#3b82f6,transparent)]" />
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-500"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h4 className="font-serif text-[1.6rem] mb-2">{tx.contact.successTitle}</h4>
                <p className="text-white/45 text-[0.95rem] font-light mb-6">{tx.contact.successDesc}</p>
                <button onClick={() => setFormSubmitted(false)} className="bg-transparent border-none text-blue-500 font-semibold text-[0.9rem] cursor-pointer hover:text-blue-400 transition-colors duration-300">{tx.contact.another}</button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                  <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.name}</label><input type="text" required placeholder={tx.contact.namePh} className={inputClass} /></div>
                  <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.phone}</label><input type="tel" required placeholder={tx.contact.phonePh} className={inputClass} /></div>
                </div>
                <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.vehicle}</label><input type="text" required placeholder={tx.contact.vehiclePh} className={inputClass} /></div>
                <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.issue}</label><textarea required placeholder={tx.contact.issuePh} className={`${inputClass} resize-y min-h-[100px] leading-[1.6]`} /></div>
                <button type="submit" className="self-center inline-flex items-center justify-center gap-2.5 bg-blue-500 text-midnight border-none px-10 py-[18px] rounded-full font-semibold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  <span>{tx.contact.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="bg-midnight border-t border-white/12 py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
        <div className="max-w-[700px] mx-auto text-center relative reveal">
          <div className="inline-flex items-center gap-3 mb-5 justify-center">
            <div className={eyebrowLine} /><span className={eyebrowText}>{tx.cta.tag}</span><div className={eyebrowLine} />
          </div>
          <h2 className="font-serif text-[3.2rem] max-sm:text-[2.4rem] font-normal tracking-[-0.02em] mb-5 leading-[1.1]">
            {tx.cta.title1} <em className="text-blue-400">{tx.cta.title2}</em>
          </h2>
          <p className="text-white/45 text-[1.05rem] font-light mb-11 leading-[1.7]">{tx.cta.desc}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/16104636087?text=Hi%20Tyler%2C%20I%20need%20a%20mobile%20mechanic!" className="inline-flex items-center gap-2.5 bg-blue-500 text-midnight px-9 py-[18px] rounded-full font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]">
              <WhatsAppIcon /><span>{tx.cta.whatsapp}</span>
            </a>
            <a href="tel:+16104636087" className="inline-flex items-center gap-2.5 bg-transparent text-white px-9 py-[18px] rounded-full font-medium text-[0.95rem] no-underline border border-white/12 transition-all duration-300 hover:border-white/45 hover:bg-white/6">
              <PhoneIcon /><span>{tx.cta.call}</span>
            </a>
          </div>
          <div className="mt-7 text-white/45 text-[0.95rem] font-light">
            <span>{tx.cta.orText} </span>
            <a href="sms:+16104636087" className="text-white no-underline font-semibold">(610) 463-6087</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="bg-midnight border-t border-white/[0.08] pt-16 relative z-[1]">

        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 grid grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-12 pb-14 border-b border-white/[0.06]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="w-11 h-11 rounded-full opacity-60 grayscale flex-shrink-0" />
              <div>
                <div className="text-[0.9rem] font-black tracking-[0.15em] text-white/90">ANYWHERE</div>
                <div className="text-[0.62rem] font-semibold tracking-[0.2em] text-white/40 mt-0.5">AUTO REPAIR</div>
              </div>
            </div>
            <p className="text-[0.82rem] text-white/40 leading-relaxed mb-5 font-light">{tx.footer.tagline}</p>
            <div className="flex gap-2 flex-wrap">
              <a href="https://www.instagram.com/anywhere_auto_repair" target="_blank" rel="noopener" aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.tiktok.com/@cheftylermellen" target="_blank" rel="noopener" aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg>
              </a>
              <a href="https://wa.me/16104636087" target="_blank" rel="noopener" aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://linktr.ee/anywhereautorepair" target="_blank" rel="noopener" aria-label="Linktree"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.51 6.55l4.07-4.07 1.89 1.9-4.07 4.06h5.74v2.68H13.5l.01.01 6.14 6.14-1.9 1.89-5.74-5.74v8.07h-2.68v-8.07l-5.74 5.74-1.89-1.89 6.13-6.14H2.76V8.44h5.74L4.43 4.38l1.89-1.9 4.07 4.07V.53h2.68v6.02h-.56z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/55 mb-4">{tx.footer.services}</div>
            <ul className="space-y-2.5">
              {tx.services.items.map((s, i) => (
                <li key={i}><a href="#services" className="text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">{s.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/55 mb-4">{tx.footer.quickLinks}</div>
            <ul className="space-y-2.5">
              {[
                { href: "#how-it-works", label: tx.nav.how },
                { href: "#services",     label: tx.nav.services },
                { href: "#coverage",     label: tx.nav.coverage },
                { href: "#about",        label: tx.nav.about },
                { href: "#reviews",      label: tx.nav.reviews },
                { href: "#contact",      label: tx.nav.book },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/55 mb-4">{tx.footer.contact}</div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16104636087" className="flex items-center gap-2.5 text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">
                  <svg className="shrink-0 opacity-50" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  (610) 463-6087
                </a>
              </li>
              <li>
                <a href="https://wa.me/16104636087" target="_blank" rel="noopener" className="flex items-center gap-2.5 text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">
                  <svg className="shrink-0 opacity-50" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="sms:+16104636087" className="flex items-center gap-2.5 text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">
                  <svg className="shrink-0 opacity-50" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  SMS
                </a>
              </li>
              <li>
                <a href="https://linktr.ee/anywhereautorepair" target="_blank" rel="noopener" className="flex items-center gap-2.5 text-[0.83rem] text-white/40 hover:text-white transition-colors no-underline">
                  <svg className="shrink-0 opacity-50" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13.51 6.55l4.07-4.07 1.89 1.9-4.07 4.06h5.74v2.68H13.5l.01.01 6.14 6.14-1.9 1.89-5.74-5.74v8.07h-2.68v-8.07l-5.74 5.74-1.89-1.89 6.13-6.14H2.76V8.44h5.74L4.43 4.38l1.89-1.9 4.07 4.07V.53h2.68v6.02h-.56z"/></svg>
                  Linktree
                </a>
              </li>
            </ul>
            <div className="mt-5 inline-block text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-white/35 border border-white/[0.07] rounded-md px-2.5 py-1">
              {tx.footer.area}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-5 flex items-center justify-center gap-3 flex-wrap text-white/20 text-[0.72rem] font-light">
          <span>{tx.footer.copy}</span>
          <span className="opacity-40">·</span>
          <span>Mobile Mechanic — DC · MD · VA</span>
        </div>
      </footer>

      <ChatWidget lang={lang} />
    </div>
  );
}
