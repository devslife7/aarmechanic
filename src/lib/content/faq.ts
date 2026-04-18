import type { Locale } from "@/lib/site-config";

export type FaqEntry = { q: string; a: string };

const EN: FaqEntry[] = [
  {
    q: "Where does Anywhere Auto Repair service?",
    a: "We serve the entire DMV — Washington D.C., Maryland (including Silver Spring, Bethesda, College Park, and PG County), and Virginia (including Springfield, Loudoun County, and Prince William County). Tyler is based in Springfield, VA and travels up to 50 miles for most jobs.",
  },
  {
    q: "How much does a mobile mechanic cost vs. a regular shop?",
    a: "For most common repairs — brakes, batteries, oil changes, diagnostics — our pricing is comparable to a traditional shop and often lower, because you're not paying for a building, a service writer, or a waiting room. We give free quotes before any work, and you see what you're paying for.",
  },
  {
    q: "What kinds of jobs can a mobile mechanic handle?",
    a: "Most repairs you'd normally take to a shop: diagnostics, brake pad and rotor replacement, oil changes, battery and alternator replacement, starter work, spark plugs, serpentine belts, fluid services, and performance bolt-ons. We don't do transmission rebuilds or frame work — anything that requires a lift or a full shop goes to a partner.",
  },
  {
    q: "How do I pay for the work?",
    a: "We accept cash, Zelle, CashApp, Venmo, Apple Pay, and major credit/debit cards. Payment is due when the job is complete. If it's a larger repair, we'll discuss parts deposits up front.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — every repair comes with a workmanship guarantee. If we did it and it fails, we come back and make it right. Parts are covered by the part manufacturer's warranty, and we use parts with real warranties (not bottom-of-the-rack).",
  },
  {
    q: "How do I book an appointment?",
    a: "The fastest way is WhatsApp at (610) 463-6087 — send us a few details about your car and the issue. You can also call, text, or use the quote form on this site. We reply fast.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes. Tyler speaks Spanish. Feel free to message or call in Spanish — el idioma nunca es una barrera.",
  },
  {
    q: "Can you come to an apartment complex or office parking lot?",
    a: "Yes, as long as parking rules allow it. Apartment lots, office lots, street parking in D.C., and home driveways are all common. For a few service types (like wheel work) we may need a flat, legal spot — we'll tell you up front if your location works.",
  },
  {
    q: "What if it's an emergency or roadside issue?",
    a: "Call or WhatsApp first — we'll tell you honestly if we can help same-day. For dead batteries, no-starts, and many electrical issues, same-day service is usually possible. If the car needs a tow or a full shop, we'll tell you that too.",
  },
  {
    q: "Are you ASE certified?",
    a: "Tyler has years of real-world experience and focuses on transparent diagnosis and honest repairs. We'll always tell you what we can and can't handle — and we'd rather refer you out than fake competence.",
  },
  {
    q: "Do I need to provide anything?",
    a: "Just a safe place to park the car (driveway, apartment lot, office lot) and access if needed. We bring tools, parts, fluids, and cleanup gear.",
  },
  {
    q: "Do you service both gas and diesel vehicles?",
    a: "Yes — for diesels, please mention it when you request a quote so we bring the right fluids, filters, and adapters.",
  },
];

const ES: FaqEntry[] = [
  {
    q: "¿Dónde da servicio Anywhere Auto Repair?",
    a: "Servimos toda el área DMV — Washington D.C., Maryland (Silver Spring, Bethesda, College Park, PG County) y Virginia (Springfield, Condado de Loudoun, Condado de Prince William). Tyler está basado en Springfield, VA y viaja hasta 50 millas para la mayoría de los trabajos.",
  },
  {
    q: "¿Cuánto cuesta un mecánico móvil vs. un taller?",
    a: "Para la mayoría de las reparaciones comunes — frenos, baterías, aceite, diagnóstico — nuestros precios son comparables y muchas veces más bajos, porque no pagas por un edificio, un 'service writer' ni una sala de espera. Damos cotizaciones gratis antes de cualquier trabajo.",
  },
  {
    q: "¿Qué tipo de trabajos puede hacer un mecánico móvil?",
    a: "La mayoría de las reparaciones que llevarías a un taller: diagnóstico, pastillas y rotores, cambios de aceite, batería y alternador, motor de arranque, bujías, bandas, fluidos e instalaciones de bolt-on. No hacemos reconstrucciones de transmisión ni trabajo de chasis.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Aceptamos efectivo, Zelle, CashApp, Venmo, Apple Pay y tarjetas de crédito/débito principales. El pago es al terminar. Para reparaciones grandes, hablamos del depósito de las partes por adelantado.",
  },
  {
    q: "¿Ofrecen garantía?",
    a: "Sí — cada reparación tiene garantía de mano de obra. Si nosotros lo hicimos y falla, regresamos y lo arreglamos. Las partes están cubiertas por la garantía del fabricante, y usamos partes con garantía real.",
  },
  {
    q: "¿Cómo agendo una cita?",
    a: "La forma más rápida es WhatsApp al (610) 463-6087 — mándanos detalles del carro y el problema. También puedes llamar, enviar texto o usar el formulario del sitio. Respondemos rápido.",
  },
  {
    q: "¿Hablan español?",
    a: "Sí. Tyler habla español. Puedes escribir o llamar en español — el idioma nunca es una barrera.",
  },
  {
    q: "¿Pueden ir a un complejo de apartamentos o estacionamiento de oficina?",
    a: "Sí, si las reglas de estacionamiento lo permiten. Estacionamientos de apartamentos, de oficinas, estacionamiento en la calle en D.C. y entradas de casa son comunes. Para algunos servicios (como trabajo de ruedas) puede que necesitemos un lugar plano y legal — te lo decimos por adelantado.",
  },
  {
    q: "¿Qué pasa si es una emergencia o en la carretera?",
    a: "Llama o manda WhatsApp primero — te decimos honestamente si podemos ayudar el mismo día. Para baterías muertas, carros que no encienden y muchos problemas eléctricos, el servicio mismo día usualmente es posible. Si necesita grúa o taller completo, también te lo decimos.",
  },
  {
    q: "¿Están certificados ASE?",
    a: "Tyler tiene años de experiencia real y se enfoca en diagnóstico transparente y reparaciones honestas. Siempre te diremos qué podemos y qué no — preferimos referirte antes que fingir.",
  },
  {
    q: "¿Necesito preparar algo?",
    a: "Solo un lugar seguro para estacionar (entrada, estacionamiento de apartamento o de oficina) y acceso si es necesario. Nosotros traemos herramientas, partes, fluidos y equipo de limpieza.",
  },
  {
    q: "¿Dan servicio a gasolina y diésel?",
    a: "Sí — si es diésel, por favor menciónalo al pedir cotización para llevar los fluidos, filtros y adaptadores correctos.",
  },
];

export function getFaqEntries(lang: Locale): FaqEntry[] {
  return lang === "es" ? ES : EN;
}
