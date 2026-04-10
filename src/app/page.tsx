"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { ChatWidget } from "@/components/chat-widget";
import { submitContact } from "@/lib/submitContact";

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
      tag: "The Process",
      title1: "The",
      title2: "Process",
      desc: "Three simple steps to automotive peace of mind.",
      steps: [
        { title: "Consultation", desc: "Contact us via text, call, or WhatsApp with your vehicle's symptoms or maintenance needs." },
        { title: "Transparent Quote", desc: "Receive a clear, upfront estimate covering parts and labor with zero hidden fees." },
        { title: "On-Site Service", desc: "We arrive fully equipped to your home or office and complete the work professionally." },
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
      title: "We Service All Car Makes",
      subtitle: "A partial list of the most popular vehicle makes we service.",
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
      rating: "5.0",
      total: "Google reviews",
      writeReview: "Write a Review",
      items: [
        { quote: "Tyler did a great job with my car. He is very educated in his field and was able to give me a good price! Will use his service again!!", author: "Katerine Luna", date: "a month ago", initial: "K", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2334A853'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='500' fill='white'%3EK%3C/text%3E%3C/svg%3E" },
        { quote: "Tyler did a great job getting me back on the road on the same day that I contacted him. He was affordable and very kind in answering all my questions. Defiantly would send others his way!", author: "Anahi Villaroel", date: "a month ago", initial: "A", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=AnahiVillaroel&backgroundColor=ffd5dc" },
        { quote: "Highly recommend!! Tyler is such a professional, he knew exactly what was wrong with my car by hearing the noise. He had the part the next day and installed it very quickly.", author: "Ingrid Velasquez", date: "a month ago", initial: "I", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23FBBC04'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='500' fill='white'%3EI%3C/text%3E%3C/svg%3E" },
        { quote: "Great service! We discussed the issue, he was able to come right out to fix the problem! Reasonable prices, great knowledge! Very helpful! Will definitely use again!", author: "Tara Conard", date: "a month ago", initial: "T", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=TaraConard&backgroundColor=c0aede" },
        { quote: "Highly recommend!! Anywhere Auto Repair. Tyler is extremely knowledgeable and professional. He took the time to properly diagnose the issue with my car and explained everything clearly before starting the work. The repair was done quickly and professionally.", author: "Franklin Lopes", date: "a month ago", initial: "F", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=FranklinLopes&backgroundColor=b6e3f4" },
        { quote: "I was in a jam stuck in the middle of nowhere with a dead battery that wouldn't jumpstart and Tyler came through helping me install a new one asap.", author: "Will", date: "a month ago", initial: "W", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=WillGuide&backgroundColor=d1f4d1" },
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
      vin: "VIN # (optional)",
      vinPh: "e.g. 1HGBH41JXMN109186",
      fuel: "Gas or Diesel?",
      fuelGas: "Gas",
      fuelDiesel: "Diesel",
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
      tag: "El Proceso",
      title1: "El",
      title2: "Proceso",
      desc: "Tres simples pasos para tu tranquilidad automotriz.",
      steps: [
        { title: "Consulta", desc: "Contáctanos por mensaje, llamada o WhatsApp con los síntomas o necesidades de mantenimiento de tu vehículo." },
        { title: "Cotización Transparente", desc: "Recibe un estimado claro y directo que cubre partes y mano de obra sin cargos ocultos." },
        { title: "Servicio a Domicilio", desc: "Llegamos totalmente equipados a tu casa u oficina y completamos el trabajo profesionalmente." },
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
      total: "Reseñas de Google",
      writeReview: "Escribir Reseña",
      items: [
        { quote: "Tyler hizo un excelente trabajo con mi carro. Es muy experto en su campo y pudo darme un buen precio. ¡Usaré su servicio de nuevo!", author: "Katerine Luna", date: "hace un mes", initial: "K", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2334A853'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='500' fill='white'%3EK%3C/text%3E%3C/svg%3E" },
        { quote: "Tyler hizo un gran trabajo regresándome al camino el mismo día que lo contacté. Fue económico y muy amable al responder todas mis preguntas. Definitivamente lo recomendaría.", author: "Anahi Villaroel", date: "hace un mes", initial: "A", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=AnahiVillaroel&backgroundColor=ffd5dc" },
        { quote: "¡Muy recomendado! Tyler es muy profesional, supo exactamente qué tenía mal el carro solo con escuchar el ruido. Tenía la pieza al día siguiente y la instaló muy rápidamente.", author: "Ingrid Velasquez", date: "hace un mes", initial: "I", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23FBBC04'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='500' fill='white'%3EI%3C/text%3E%3C/svg%3E" },
        { quote: "¡Excelente servicio! Hablamos del problema y pudo venir de inmediato a resolverlo. Precios razonables, gran conocimiento. ¡Muy útil! ¡Definitivamente lo usaré de nuevo!", author: "Tara Conard", date: "hace un mes", initial: "T", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=TaraConard&backgroundColor=c0aede" },
        { quote: "¡Muy recomendado! Tyler es extremadamente experto y profesional. Se tomó el tiempo para diagnosticar correctamente el problema y explicó todo claramente antes de comenzar. El trabajo fue rápido y profesional.", author: "Franklin Lopes", date: "hace un mes", initial: "F", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=FranklinLopes&backgroundColor=b6e3f4" },
        { quote: "Estaba varado en medio de la nada con una batería muerta que no arrancaba y Tyler llegó a ayudarme a instalar una nueva de inmediato.", author: "Will", date: "hace un mes", initial: "W", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=WillGuide&backgroundColor=d1f4d1" },
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
      vin: "# VIN (opcional)",
      vinPh: "ej. 1HGBH41JXMN109186",
      fuel: "¿Gasolina o Diésel?",
      fuelGas: "Gasolina",
      fuelDiesel: "Diésel",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const scrollReviews = (dir: "left" | "right") => {
    reviewsRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const formRenderTime = useRef(Date.now());
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setFormSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const result = await submitContact({
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      vehicle: fd.get("vehicle") as string,
      vin: fd.get("vin") as string,
      fuel: fd.get("fuel") as string,
      issue: fd.get("issue") as string,
      website: fd.get("website") as string,
      _t: formRenderTime.current,
    });

    setFormSubmitting(false);
    if (result.ok) {
      setFormSubmitted(true);
    } else {
      setFormError(result.error ?? "Something went wrong");
    }
  }

  function handleFormReset() {
    setFormSubmitted(false);
    setFormError("");
    formRenderTime.current = Date.now();
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
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[90px]">
          <div className="flex items-center gap-8 max-sm:gap-3">
            <a href="#" className="flex items-center no-underline group">
              <img src="/logo.png" alt="Anywhere Auto Repair" className="w-[110px] h-[110px] rounded-full object-cover border-2 border-gray-200 transition-colors duration-300 group-hover:border-blue-500 translate-y-3" />
            </a>
            {/* EN/ES — mobile only, next to logo */}
            <div className="hidden max-sm:flex items-center bg-gray-100 rounded-full p-[3px] border border-gray-200">
              <button onClick={() => setLang("en")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "en" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "es" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>ES</button>
            </div>
            <ul className="flex gap-8 list-none items-center m-0 p-0 max-sm:hidden">
              {[
                { href: "#how", label: tx.nav.how },
                { href: "#services", label: tx.nav.services },
                { href: "#area", label: tx.nav.coverage },
                { href: "#about", label: tx.nav.about },
                { href: "#reviews", label: tx.nav.reviews },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-900 no-underline text-[0.85rem] font-normal tracking-[0.04em] transition-colors duration-300 hover:text-midnight">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="max-sm:hidden flex items-center bg-gray-100 rounded-full p-[3px] border border-gray-200">
              <button onClick={() => setLang("en")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "en" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-3 py-[5px] rounded-full border-none text-[0.72rem] font-bold cursor-pointer transition-all duration-300 ${lang === "es" ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"}`}>ES</button>
            </div>
            <a href="#contact" className="max-sm:hidden bg-blue-500 text-white px-7 py-[10px] rounded-full font-semibold text-[0.85rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:scale-[1.03]">{tx.nav.book}</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="hidden max-sm:flex flex-col justify-center items-center gap-[6px] bg-transparent border-none cursor-pointer w-8 h-8" aria-label="Menu">
              <span className={`block w-6 h-[1.5px] bg-midnight transition-all duration-300 ${menuOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-midnight transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-midnight transition-all duration-300 ${menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div className="sm:hidden border-t border-gray-200 bg-white px-5 py-6 flex flex-col gap-5">
            {[
              { href: "#how", label: tx.nav.how },
              { href: "#services", label: tx.nav.services },
              { href: "#area", label: tx.nav.coverage },
              { href: "#about", label: tx.nav.about },
              { href: "#reviews", label: tx.nav.reviews },
            ].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-gray-700 no-underline text-[1rem] font-normal tracking-[0.04em] transition-colors duration-300 hover:text-midnight">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block text-center bg-blue-500 text-white px-7 py-[12px] rounded-full font-semibold text-[0.9rem] no-underline transition-all duration-300 hover:bg-blue-400">
              {tx.nav.book}
            </a>
          </div>
        )}
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
              <a href="https://wa.me/16104636087?text=Hi%20Tyler%2C%20I%20need%20a%20mobile%20mechanic!" className="inline-flex items-center gap-2.5 bg-blue-500 text-white px-9 py-[18px] rounded-full font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]">
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

      {/* ── THE PROCESS ─────────────────────────────── */}
      <section className="py-16 px-10 max-sm:py-12 max-sm:px-5 relative z-[1] bg-white" id="how">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 max-sm:mb-10 reveal">
            <h2 className="font-serif text-[3.5rem] max-sm:text-[2.5rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#0f1b3d]">
              {tx.process.title1} <em className="text-primary-600">{tx.process.title2}</em>
            </h2>
            <p className="text-[#5a6275] text-[1.05rem] max-w-[460px] mt-5 font-light leading-[1.7] mx-auto">{tx.process.desc}</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:gap-14">
            {tx.process.steps.map((step, i) => (
              <div key={i} className={`text-center reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
                {/* Large number */}
                <span className="block font-serif text-[5.5rem] max-sm:text-[4.5rem] leading-none font-normal text-primary-600/40 mb-4 select-none tracking-tight">
                  0{i + 1}
                </span>
                {/* Title */}
                <h3 className="font-serif text-[1.3rem] font-normal text-[#0f1b3d] mb-4 tracking-normal">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-[#5a6275] text-[0.95rem] leading-[1.8] font-light max-w-[300px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section className="py-[100px] px-10 max-sm:py-16 max-sm:px-5 relative z-[1] bg-midnight" id="services">
        <div className="max-w-[1280px] mx-auto">
          {/* Header — left-aligned */}
          <div className="mb-16 max-sm:mb-12 reveal">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.services.tag}</span>
            </div>
            <h2 className="font-serif text-[3rem] max-sm:text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              {tx.services.title1} <em className="text-blue-400">{tx.services.title2}</em>
            </h2>
            <p className="text-white/45 text-[1rem] max-w-[500px] mt-4 font-light leading-[1.7]">{tx.services.desc}</p>
          </div>

          {/* 2-column: stacked list + feature image */}
          <div className="grid grid-cols-[1fr_1.2fr] max-lg:grid-cols-1 gap-10 items-start">
            {/* Left: service rows */}
            <div className="flex flex-col gap-px rounded-2xl overflow-hidden reveal">
              {tx.services.items.map((svc, i) => (
                <div key={i} className="group p-6 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 cursor-default">
                  <h3 className="text-[1.05rem] font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{svc.name}</h3>
                  <p className="text-white/40 text-[0.85rem] leading-[1.7] font-light">{svc.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: feature image */}
            <div className="relative rounded-2xl overflow-hidden max-lg:order-first reveal reveal-delay-1">
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop" alt="Mobile mechanic at work" className="w-full h-full min-h-[520px] max-lg:min-h-[300px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2">
                  {tx.services.items.map((svc, i) => (
                    <span key={i} className="text-[0.75rem] font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                      {svc.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Book Now button */}
          <div className="mt-14 text-center reveal reveal-delay-2">
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-blue-500 text-white px-9 py-[18px] rounded-full font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]">
              {tx.nav.book}
            </a>
          </div>
        </div>
      </section>
      {/* ── BRANDS MARQUEE ──────────────────────────── */}
      <section className="bg-slate-50 overflow-hidden relative z-[2] py-20 max-sm:py-12 border-y border-gray-200">
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-blue-500" />
              <span className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-blue-600">All Makes Welcome</span>
              <span className="w-6 h-px bg-blue-500" />
            </div>
            <h2 className="font-serif text-[2.8rem] max-sm:text-[1.9rem] font-normal leading-[1.1] tracking-[-0.02em] text-midnight">{tx.brands.title}</h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 z-[2] pointer-events-none bg-[linear-gradient(to_right,#f8fafc,transparent)]" />
          <div className="absolute top-0 bottom-0 right-0 w-24 z-[2] pointer-events-none bg-[linear-gradient(to_left,#f8fafc,transparent)]" />
          <div className="flex w-max animate-marquee items-center brands-track">
            {[...brandsList, ...brandsList].map((brand, i) => (
              <div key={i} className="shrink-0 flex items-center justify-center mx-10 max-sm:mx-6">
                <img src={brand.logo} alt={brand.name} className="h-[50px] max-sm:h-[36px] w-[110px] max-sm:w-[80px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────── */}
      <section className="relative z-[1] bg-midnight border-t border-white/8" id="area">
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-[100px] max-sm:py-16">

          {/* Header */}
          <div className="mb-12 reveal">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className={eyebrowLine} /><span className={eyebrowText}>{tx.coverage.tag}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="font-serif text-[3rem] max-sm:text-[2.2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white">
                {tx.coverage.title1} <em className="text-blue-400">{tx.coverage.title2}</em>
              </h2>
              <p className="text-white/45 text-[0.95rem] max-w-[340px] font-light leading-[1.7] sm:text-right">{tx.coverage.desc}</p>
            </div>
          </div>

          {/* Map + Cards two-column */}
          <div className="grid grid-cols-[1fr_420px] max-lg:grid-cols-1 gap-6">

            {/* Interactive map */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[480px] max-sm:min-h-[320px] reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d213303.92352098727!2d-77.26171428713899!3d38.86284722273665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUwJzUyLjIiTiA3N8KwMDEnMjAuMCJX!5e0!3m2!1sen!2sus!4v1775804283324!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DMV Service Area"
              />
              {/* DC • MD • VA overlay badge */}
              <div className="absolute bottom-4 left-4 z-[2] bg-midnight/80 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-2.5">
                <span className="font-serif text-[1.1rem] tracking-[0.2em] text-blue-400 font-normal">DC &bull; MD &bull; VA</span>
              </div>
            </div>

            {/* Area cards stacked */}
            <div className="flex flex-col gap-3">
              {tx.coverage.areas.map((area, i) => {
                const icons = [
                  <svg key="dc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>,
                  <svg key="va" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>,
                  <svg key="md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/></svg>,
                  <svg key="road" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>,
                ];
                return (
                  <div key={i}
                    className={`group flex items-start gap-4 py-4 reveal${i > 0 ? ` reveal-delay-${i}` : ""}${i < tx.coverage.areas.length - 1 ? " border-b border-white/8" : ""}`}>
                    <div className="mt-0.5 text-blue-400/60 group-hover:text-blue-400 transition-colors">{icons[i]}</div>
                    <div>
                      <h4 className="font-serif text-[1rem] font-normal text-white mb-1">{area.name}</h4>
                      <p className="text-[0.82rem] text-white/40 font-light leading-[1.65]">{area.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section className="py-[120px] px-10 max-sm:py-20 max-sm:px-5 relative z-[1] bg-deep border-t border-white/12 border-b border-b-white/12" id="about">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-[0.85fr_1.15fr] max-lg:grid-cols-1 gap-20 max-lg:gap-12 items-center">
            <div className="relative reveal">
              <div className="rounded-[28px] h-[500px] max-sm:h-[360px] relative overflow-hidden border border-white/12">
                <img src="/tyler.png" alt="Tyler" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[linear-gradient(to_top,#0a0f1e,transparent)]" />
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
              <img src="/logo.png" alt="Anywhere Auto Repair" className="w-9 h-9 rounded-full object-cover shrink-0" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Google Maps">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="#fff"/>
              </svg>
              <div>
                <div className="flex items-center gap-1.5">
                  <GoogleIcon />
                  <span className="text-gray-900 font-bold text-[1.1rem] leading-none">{tx.reviews.rating}</span>
                  <div className="flex gap-0.5">{[0,1,2,3,4].map((i) => <StarIcon key={i} />)}</div>
                </div>
                <div className="text-black/40 text-[0.72rem] mt-0.5">{tx.reviews.total}</div>
              </div>
              {/* TODO: replace href with Tyler's Google Business review link from Google Business Profile dashboard */}
              <a
                href="https://maps.app.goo.gl/mtHYV4MtZjDgmWVa9"
                target="_blank" rel="noopener"
                className="ml-2 text-[0.72rem] font-semibold text-blue-600 border border-blue-500/40 rounded-lg px-3 py-1.5 hover:bg-blue-50 transition-colors no-underline whitespace-nowrap"
              >
                {tx.reviews.writeReview}
              </a>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 reveal reveal-delay-2">
            {tx.reviews.items.map((review, i) => (
              <div
                key={i}
                className="rounded-3xl border border-black/[0.08] bg-gray-50 px-7 py-8 flex flex-col gap-4 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-blue-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Top: avatar + name + Google G */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full shrink-0 object-cover" />
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
                <button onClick={handleFormReset} className="bg-transparent border-none text-blue-500 font-semibold text-[0.9rem] cursor-pointer hover:text-blue-400 transition-colors duration-300">{tx.contact.another}</button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Honeypot — hidden from real users */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                  <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.name}</label><input name="name" type="text" required placeholder={tx.contact.namePh} className={inputClass} /></div>
                  <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.phone}</label><input name="phone" type="tel" required placeholder={tx.contact.phonePh} className={inputClass} /></div>
                </div>
                <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.vehicle}</label><input name="vehicle" type="text" required placeholder={tx.contact.vehiclePh} className={inputClass} /></div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                  <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.vin}</label><input name="vin" type="text" placeholder={tx.contact.vinPh} className={inputClass} /></div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{tx.contact.fuel}</label>
                    <div className="flex gap-3">
                      <label className="flex-1 flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-white/12 bg-midnight px-4 py-3.5 text-sm font-light text-white/70 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/12 has-[:checked]:text-white">
                        <input type="radio" name="fuel" value="gas" defaultChecked className="sr-only" />
                        {tx.contact.fuelGas}
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-white/12 bg-midnight px-4 py-3.5 text-sm font-light text-white/70 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/12 has-[:checked]:text-white">
                        <input type="radio" name="fuel" value="diesel" className="sr-only" />
                        {tx.contact.fuelDiesel}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2"><label className={labelClass}>{tx.contact.issue}</label><textarea name="issue" required placeholder={tx.contact.issuePh} className={`${inputClass} resize-y min-h-[100px] leading-[1.6]`} /></div>
                {formError && <p className="text-sm text-red-400 text-center">{formError}</p>}
                <button type="submit" disabled={formSubmitting} className="self-center inline-flex items-center justify-center gap-2.5 bg-blue-500 text-midnight border-none px-10 py-[18px] rounded-full font-semibold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:pointer-events-none">
                  {formSubmitting ? (
                    <svg className="animate-spin w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  )}
                  <span>{tx.contact.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="bg-[#06090f] border-t border-white/[0.07] relative z-[1]">

        {/* Main columns */}
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-14 grid grid-cols-[1.6fr_1fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="max-lg:col-span-2 max-sm:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-2xl opacity-70 flex-shrink-0" />
              <div>
                <div className="text-[0.95rem] font-black tracking-[0.14em] text-white">ANYWHERE</div>
                <div className="text-[0.6rem] font-semibold tracking-[0.22em] text-white/35 mt-0.5">AUTO REPAIR</div>
              </div>
            </div>
            <p className="text-[0.85rem] text-white/40 leading-relaxed mb-6 max-w-[320px] font-light">{tx.footer.tagline}</p>
            <div className="flex items-center gap-2.5 flex-wrap">
              {[
                { href: "https://www.instagram.com/anywhere_auto_repair", label: "Instagram",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
                { href: "https://www.tiktok.com/@cheftylermellen", label: "TikTok",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg> },
                { href: "https://wa.me/16104636087", label: "WhatsApp",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                { href: "https://linktr.ee/anywhereautorepair", label: "Linktree",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.51 6.55l4.07-4.07 1.89 1.9-4.07 4.06h5.74v2.68H13.5l.01.01 6.14 6.14-1.9 1.89-5.74-5.74v8.07h-2.68v-8.07l-5.74 5.74-1.89-1.89 6.13-6.14H2.76V8.44h5.74L4.43 4.38l1.89-1.9 4.07 4.07V.53h2.68v6.02h-.56z"/></svg> },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/35 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all">
                  {s.icon}
                </a>
              ))}
              <a href="https://linktr.ee/anywhereautorepair" target="_blank" rel="noopener"
                className="text-[0.75rem] font-medium text-white/30 hover:text-blue-400 transition-colors no-underline flex items-center gap-1 ml-1">
                All links
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">{tx.footer.services}</p>
            <ul className="space-y-3">
              {tx.services.items.map((s, i) => (
                <li key={i}><a href="#services" className="text-[0.85rem] text-white/50 hover:text-white transition-colors no-underline">{s.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Navigate + Contact */}
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">{tx.footer.quickLinks}</p>
            <ul className="space-y-3 mb-8">
              {[
                { href: "#how", label: tx.nav.how },
                { href: "#services",     label: tx.nav.services },
                { href: "#coverage",     label: tx.nav.coverage },
                { href: "#about",        label: tx.nav.about },
                { href: "#reviews",      label: tx.nav.reviews },
                { href: "#contact",      label: tx.nav.book },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="text-[0.85rem] text-white/50 hover:text-white transition-colors no-underline">{l.label}</a></li>
              ))}
            </ul>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-4">{tx.footer.contact}</p>
            <ul className="space-y-2.5">
              <li><a href="tel:+16104636087" className="text-[0.85rem] text-white/50 hover:text-white transition-colors no-underline">(610) 463-6087</a></li>
              <li><a href="sms:+16104636087" className="text-[0.85rem] text-white/50 hover:text-white transition-colors no-underline">SMS</a></li>
              <li><a href="https://linktr.ee/anywhereautorepair" target="_blank" rel="noopener" className="text-[0.85rem] text-white/50 hover:text-white transition-colors no-underline">Linktree ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-5 flex items-center justify-between flex-wrap gap-3">
          <span className="text-white/20 text-[0.72rem] font-light">{tx.footer.copy}</span>
          <span className="text-white/15 text-[0.72rem] tracking-wider">DC · MD · VA</span>
        </div>
      </footer>

      <ChatWidget lang={lang} />
    </div>
  );
}
