import type { Locale } from "@/lib/site-config";

export const SERVICE_SLUGS = [
  "diagnostics",
  "oil-change",
  "brake-repair",
  "battery-electrical",
  "car-performance",
  "tune-ups",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(v: string): v is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(v);
}

type ServiceCopy = {
  name: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string;
  whatsIncluded: { title: string; body: string }[];
  commonIssues: string[];
  whyMobile: string;
  cta: string;
};

const EN: Record<ServiceSlug, ServiceCopy> = {
  diagnostics: {
    name: "Diagnostics",
    shortDesc: "Check engine light, error codes, and complete vehicle troubleshooting.",
    metaTitle: "Mobile Car Diagnostics in DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Professional mobile diagnostics across Washington DC, Maryland, and Virginia. We scan your OBD-II codes, road-test if needed, and give you a clear, honest repair plan — right in your driveway.",
    heroTagline: "Check engine light on? Let's decode the real problem — at your location.",
    intro:
      "A check engine light can mean a $10 gas cap or a $2,000 catalytic converter. Most shops won't tell you which until they've had the car for hours. Anywhere Auto Repair brings a professional OBD-II scan tool directly to your home or office in the DMV, reads the live data in front of you, and explains what's actually wrong — without the dealership markup or the guesswork.",
    whatsIncluded: [
      { title: "Full OBD-II scan", body: "Every stored and pending code read, not just the flashing one. We also pull freeze-frame data so we know the exact conditions when the fault triggered." },
      { title: "Live data review", body: "Fuel trims, O2 sensor readings, misfire counters, transmission temps — we check the underlying symptoms, not just the code." },
      { title: "Visual inspection", body: "A walk-around of the engine bay: vacuum hoses, wiring, obvious leaks, and anything a scan tool can't see." },
      { title: "Plain-English report", body: "What's wrong, what it'll cost to fix, what's urgent vs. what can wait. No upsells, no scare tactics." },
    ],
    commonIssues: [
      "Check engine light (P0xxx / P1xxx codes)",
      "Misfires, rough idle, hesitation under load",
      "Failed emissions / state inspection",
      "Intermittent warning lights that come and go",
      "ABS, traction, or airbag warning lights",
      "Hard-start conditions and no-start diagnosis",
    ],
    whyMobile:
      "Most DMV shops charge $80–$150 just to pull a code and give you a one-line answer. We come to you, take the time to actually diagnose the fault, and if you want the repair done, the diagnostic fee often rolls into the job.",
    cta: "Get a free diagnostic quote",
  },
  "oil-change": {
    name: "Oil Change",
    shortDesc: "Synthetic and conventional oil changes with quality filters included.",
    metaTitle: "Mobile Oil Change Service — DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Mobile oil changes in Washington DC, Maryland, and Virginia. Full synthetic, synthetic blend, or conventional — OEM-quality filter included. We come to your home or office and dispose of the old oil properly.",
    heroTagline: "Fresh oil, better filter, at your driveway in under an hour.",
    intro:
      "Skip the quick-lube upsells and the 90-minute waiting room. Anywhere Auto Repair changes your oil right where your car is parked — home driveway, apartment lot, or office. We use the correct weight and spec for your vehicle (check your owner's manual or let us look it up), install a quality filter, reset your oil life monitor, and haul the used oil away for proper recycling.",
    whatsIncluded: [
      { title: "Full oil & filter change", body: "Up to 6 quarts of full synthetic, synthetic blend, or conventional — your choice. We match OEM viscosity (0W-20, 5W-30, etc.) and spec." },
      { title: "Quality filter", body: "OEM-equivalent or better (Wix, Purolator, or Mobil 1 depending on vehicle). No off-brand filters, ever." },
      { title: "Oil life reset", body: "We reset the onboard oil life monitor and record the mileage for your records." },
      { title: "Used oil recycling", body: "We collect and properly recycle your old oil and filter — no dumping, no mess left behind." },
      { title: "Quick visual inspection", body: "Free top-off of washer fluid and a glance at belts, hoses, tire tread, and obvious leaks while we're underneath." },
    ],
    commonIssues: [
      "Oil life light or maintenance-required message",
      "Dark, gritty oil on the dipstick",
      "Exceeding manufacturer's service interval",
      "Mileage-based service for leased or financed vehicles",
    ],
    whyMobile:
      "A shop oil change costs you two trips, an hour in the waiting room, and a flood of upsells. We come to you, do only the work you asked for, and you stay in your house. Most oil changes take about 30 minutes from arrival to cleanup.",
    cta: "Schedule a mobile oil change",
  },
  "brake-repair": {
    name: "Brake Repair",
    shortDesc: "Pads, rotors, brake fluid flush — everything to keep you stopping safely.",
    metaTitle: "Mobile Brake Repair in DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Brake pad and rotor replacement at your home or office across the DMV. Honest inspection, OEM-grade parts, and transparent quotes. Squeaking, grinding, or soft pedal? Let's fix it.",
    heroTagline: "Grinding, squealing, or just past due? We'll get you stopping safely — at your location.",
    intro:
      "Brakes are the one system on your car where cheap parts and cut corners get people hurt. When Anywhere Auto Repair does a brake job at your home in the DMV, you see every part before it goes on the car, you get real specs (pad thickness, rotor runout, fluid condition), and you pay one honest price — no mystery shop fees, no \"while we're in there\" upsells.",
    whatsIncluded: [
      { title: "Free brake inspection", body: "Measure pad life on all four wheels, check rotor thickness and surface condition, inspect calipers, slides, and hardware, and check fluid level and color." },
      { title: "Pad replacement", body: "Ceramic or semi-metallic pads depending on driving style. Hardware and clips replaced as needed, caliper pins re-lubed with high-temp grease." },
      { title: "Rotor service", body: "Resurface or replace depending on thickness and runout. We never reinstall rotors that are below minimum spec." },
      { title: "Brake fluid flush (optional)", body: "Moisture-contaminated fluid is the hidden killer of ABS units. We can bleed and flush while we're on-site." },
      { title: "Post-service test drive", body: "Bedding-in procedure so your new pads seat properly and you don't get squealing or pulsation later." },
    ],
    commonIssues: [
      "Squealing or grinding when braking",
      "Soft or sinking brake pedal",
      "Steering wheel shake under hard braking",
      "Brake warning light on the dash",
      "Pulling to one side when stopping",
      "Visibly thin pads through the wheel spokes",
    ],
    whyMobile:
      "Brake jobs in the DMV typically run $400–$900 per axle at a shop. By cutting out the shop overhead and the tow (because we come to you), mobile brake service is usually cheaper and faster — and you don't have to figure out how to get to work without your car.",
    cta: "Get a brake job quote",
  },
  "battery-electrical": {
    name: "Battery & Electrical",
    shortDesc: "Battery replacement, jump starts, alternator and starter repairs.",
    metaTitle: "Mobile Battery & Electrical Repair — DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Dead battery? Bad alternator? Starter won't crank? Anywhere Auto Repair handles mobile battery replacement and electrical diagnosis across DC, Maryland, and Virginia — often same-day.",
    heroTagline: "Won't start? Clicks and lights dim? We'll be there — often the same day.",
    intro:
      "A dead battery on a Monday morning doesn't care that your shop is 20 miles away and the tow truck is two hours out. Anywhere Auto Repair runs mobile battery and electrical service across the DMV: we load-test your battery, charge system, and starter on-site, tell you exactly what's failing, and swap the part right there. No tow, no Uber, no missing the meeting.",
    whatsIncluded: [
      { title: "Full electrical load test", body: "Battery cold-cranking amps measured under load. Alternator output tested at idle and under accessory load. Starter draw measured against spec." },
      { title: "Battery replacement", body: "OEM-spec group size and CCA rating. We match your vehicle's BMS / AGM requirements (many newer cars require registration after install — we handle that too)." },
      { title: "Alternator & starter service", body: "On-site replacement for most vehicles. We stock common parts and can usually source others within a few hours." },
      { title: "Jump start & roadside", body: "Stuck in a parking lot? We come to you. A jump start alone is cheap; we'll tell you if that's all you need or if the battery is toast." },
      { title: "Parasitic draw testing", body: "Battery dying overnight? We'll find the circuit that's killing it — interior light, aftermarket radio, bad module — without guessing." },
    ],
    commonIssues: [
      "Car won't crank or cranks slowly",
      "Battery warning light on dash",
      "Headlights or interior lights dim at idle",
      "Clicking sound when turning the key",
      "Battery dies overnight or over a weekend",
      "Dash electronics reset randomly",
    ],
    whyMobile:
      "When your car won't start, the last thing you need is a tow bill on top of the repair. We roll up with tools, parts, and a diagnostic plan — and most battery jobs are done in 30–45 minutes on the spot.",
    cta: "Get help with my battery or electrical issue",
  },
  "car-performance": {
    name: "Car Performance",
    shortDesc: "Engine enhancing upgrades, tuning, and performance optimization.",
    metaTitle: "Mobile Car Performance & Tuning — DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Performance parts, ECU tuning, bolt-on upgrades, and optimization for enthusiasts across the DMV. Professional install at your location.",
    heroTagline: "More power, better throttle response, done right — at your garage or shop space.",
    intro:
      "Enthusiast work gets messed up when the installer doesn't understand the platform. Anywhere Auto Repair handles bolt-on performance upgrades and tuning work at your location across the DMV — cold air intakes, cat-back exhausts, intercooler and downpipe jobs on turbo platforms, and tuning support. If you're building a car, we can be the hands on a weekend afternoon without forcing you to trailer it to a shop.",
    whatsIncluded: [
      { title: "Bolt-on installs", body: "Intakes, exhausts, catch cans, intercoolers, downpipes, charge pipes, and more. We follow the manufacturer's torque specs and bring the right tools for the platform." },
      { title: "Tune-friendly service", body: "We can install parts that your tuner needs to log against, coordinate with the tune file, and verify the install before you drive it." },
      { title: "Driveability check", body: "Every performance install includes a post-work scan and a road-test pass to verify no new codes, leaks, or drivability issues." },
      { title: "Honest feedback", body: "If a mod isn't going to give you what you think it will, we'll tell you before you buy the part. Unfortunately, not every TikTok mod is a good idea." },
    ],
    commonIssues: [
      "Needing pro install for expensive mods",
      "Platforms where DIY leads to broken bolts or damaged sensors",
      "Tuning support and logging visits",
      "Fixing someone else's bad install",
    ],
    whyMobile:
      "Enthusiasts usually have the space but not the tools. We show up with the tools and the experience — you stay with your build in your own space.",
    cta: "Talk to Tyler about a build",
  },
  "tune-ups": {
    name: "Tune-Ups",
    shortDesc: "Spark plugs, serpentine belts, power steering, and general maintenance.",
    metaTitle: "Mobile Tune-Up Service in DC, MD & VA | Anywhere Auto Repair",
    metaDescription:
      "Spark plugs, serpentine belts, fluids, and preventive maintenance at your home or office across Washington DC, Maryland, and Virginia.",
    heroTagline: "Preventive maintenance on your schedule, at your location.",
    intro:
      "A good tune-up is the cheapest repair you'll ever make — because it's the one that prevents the expensive ones. Anywhere Auto Repair handles scheduled-maintenance work at your home, apartment, or office anywhere in the DMV: spark plugs, belts, fluids, filters, and all the little things that keep a car running to 200,000 miles.",
    whatsIncluded: [
      { title: "Spark plugs", body: "OEM-spec plugs gapped correctly, with anti-seize and dielectric grease where appropriate. Coil packs inspected while we're in there." },
      { title: "Belts & hoses", body: "Serpentine belt inspection and replacement. Tensioner and idler pulleys checked for noise and play." },
      { title: "Fluids", body: "Power steering, transmission, coolant, and differential fluid service. We use the manufacturer-spec fluid, not generic." },
      { title: "Filters", body: "Engine air, cabin air, and fuel filter replacement per interval." },
      { title: "Interval-based maintenance", body: "Working from your vehicle's maintenance schedule, not an arbitrary \"tune-up package.\" You pay for what you need." },
    ],
    commonIssues: [
      "Maintenance-required light on dash",
      "Rough idle from old plugs",
      "Squealing belt or tensioner noise",
      "Approaching 60k / 100k / 150k mile service intervals",
      "Car feels sluggish or less responsive than it used to",
    ],
    whyMobile:
      "Scheduled maintenance is the definition of work that shouldn't require you to take a half-day off. We come to your driveway, do the service per manufacturer spec, and you never open your garage door.",
    cta: "Schedule a tune-up",
  },
};

const ES: Record<ServiceSlug, ServiceCopy> = {
  diagnostics: {
    name: "Diagnósticos",
    shortDesc: "Luz de check engine, códigos de error y diagnóstico completo del vehículo.",
    metaTitle: "Diagnóstico Móvil de Autos en DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "Diagnóstico móvil profesional en Washington DC, Maryland y Virginia. Escaneamos los códigos OBD-II de tu auto y te damos un plan de reparación claro y honesto — directo en tu casa.",
    heroTagline: "¿Luz de check engine encendida? Descubramos el problema real — en tu ubicación.",
    intro:
      "Una luz de check engine puede ser una tapa de gasolina de $10 o un convertidor catalítico de $2,000. La mayoría de los talleres no te lo dice hasta que han tenido el carro por horas. Anywhere Auto Repair lleva un escáner OBD-II profesional directo a tu casa u oficina en el área DMV, lee los datos en vivo frente a ti y te explica qué está realmente mal.",
    whatsIncluded: [
      { title: "Escaneo OBD-II completo", body: "Todos los códigos almacenados y pendientes — no solo el que parpadea. También leemos los datos de 'freeze-frame' para ver las condiciones exactas del fallo." },
      { title: "Revisión de datos en vivo", body: "Trims de combustible, sensores de O2, contadores de misfires, temperaturas de transmisión — revisamos los síntomas, no solo el código." },
      { title: "Inspección visual", body: "Recorrido bajo el capó: mangueras de vacío, cables, fugas y todo lo que un escáner no ve." },
      { title: "Reporte en palabras simples", body: "Qué está mal, cuánto cuesta arreglarlo, qué es urgente y qué puede esperar. Sin sustos ni sobreventa." },
    ],
    commonIssues: [
      "Luz de check engine (códigos P0xxx / P1xxx)",
      "Misfires, marcha irregular, titubeos",
      "Reprobar inspección de emisiones",
      "Luces de advertencia intermitentes",
      "Luces de ABS, tracción o airbag",
      "Problemas de arranque",
    ],
    whyMobile:
      "La mayoría de los talleres en el DMV cobran $80–$150 solo por leer un código y darte una respuesta corta. Nosotros vamos a ti, tomamos el tiempo para diagnosticar bien, y si haces la reparación con nosotros, la diagnóstica muchas veces se incluye en el trabajo.",
    cta: "Obtén una cotización de diagnóstico",
  },
  "oil-change": {
    name: "Cambio de Aceite",
    shortDesc: "Cambios de aceite sintético y convencional con filtros de calidad incluidos.",
    metaTitle: "Cambio de Aceite Móvil — DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "Cambios de aceite móviles en Washington DC, Maryland y Virginia. Sintético completo, mezcla sintética o convencional — filtro de calidad OEM incluido.",
    heroTagline: "Aceite fresco, filtro mejor, en tu entrada en menos de una hora.",
    intro:
      "Evita las ventas cruzadas del quick-lube y los 90 minutos de sala de espera. Anywhere Auto Repair cambia tu aceite justo donde el carro está estacionado — tu casa, edificio u oficina. Usamos el aceite correcto para tu vehículo, instalamos un filtro de calidad, reseteamos el monitor de vida del aceite y nos llevamos el aceite usado para reciclarlo.",
    whatsIncluded: [
      { title: "Cambio de aceite y filtro", body: "Hasta 6 cuartos de sintético completo, mezcla o convencional — tú eliges. Usamos la viscosidad OEM (0W-20, 5W-30, etc.)." },
      { title: "Filtro de calidad", body: "Equivalente OEM o mejor. Nunca filtros de marca genérica." },
      { title: "Reseteo de vida del aceite", body: "Reseteamos el monitor del vehículo y registramos el millaje." },
      { title: "Reciclaje del aceite", body: "Recogemos y reciclamos el aceite y filtro usado. Sin derrames ni desorden." },
      { title: "Inspección visual rápida", body: "Llenado gratis del líquido limpiaparabrisas y revisión de bandas, mangueras, llantas y fugas mientras estamos debajo." },
    ],
    commonIssues: [
      "Luz de vida del aceite o mantenimiento requerido",
      "Aceite oscuro en la varilla",
      "Pasar el intervalo de servicio",
      "Mantenimiento por millaje para carros arrendados o financiados",
    ],
    whyMobile:
      "Un cambio de aceite en taller te cuesta dos viajes, una hora de espera y muchas ventas extras. Nosotros vamos a ti, hacemos solo lo que pediste, y no sales de tu casa.",
    cta: "Agenda un cambio de aceite móvil",
  },
  "brake-repair": {
    name: "Frenos",
    shortDesc: "Pastillas, rotores, cambio de líquido de frenos — todo para que frenes con seguridad.",
    metaTitle: "Reparación de Frenos Móvil en DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "Cambio de pastillas y rotores en tu casa u oficina en el área DMV. Inspección honesta, partes de calidad OEM y cotizaciones transparentes.",
    heroTagline: "¿Rechinan, suenan o ya les toca? Te devolvemos el frenado seguro — en tu ubicación.",
    intro:
      "Los frenos son el sistema donde las partes baratas y el trabajo mal hecho lastiman gente. Cuando Anywhere Auto Repair te hace los frenos en tu casa en el DMV, tú ves cada parte antes de ir al carro, recibes medidas reales (espesor de pastillas, desviación de rotores, condición del líquido) y pagas un precio honesto.",
    whatsIncluded: [
      { title: "Inspección gratuita", body: "Medimos vida de pastillas en las 4 ruedas, espesor y condición de rotores, calipers, pasadores y nivel de líquido." },
      { title: "Cambio de pastillas", body: "Pastillas cerámicas o semi-metálicas según el manejo. Herrajes y pasadores nuevos, grasa de alta temperatura." },
      { title: "Servicio de rotores", body: "Rectificar o reemplazar según espesor y desviación. Nunca reinstalamos rotores bajo especificación." },
      { title: "Purga de líquido de frenos (opcional)", body: "El líquido contaminado es el enemigo escondido del ABS. Podemos purgar y cambiar el líquido mientras estamos ahí." },
      { title: "Prueba después del servicio", body: "Procedimiento de 'bedding-in' para que las pastillas asienten bien y no tengas ruido ni pulsación después." },
    ],
    commonIssues: [
      "Rechinido o ruido de metal al frenar",
      "Pedal suave o que se hunde",
      "Volante vibra al frenar fuerte",
      "Luz de frenos en el tablero",
      "El carro jala a un lado al frenar",
      "Pastillas delgadas visibles por la rueda",
    ],
    whyMobile:
      "Un trabajo de frenos en el DMV normalmente cuesta $400–$900 por eje en un taller. Al quitar el sobrecosto del taller, el servicio móvil suele ser más barato — y no tienes que buscar cómo ir al trabajo sin carro.",
    cta: "Cotiza un servicio de frenos",
  },
  "battery-electrical": {
    name: "Batería y Eléctrico",
    shortDesc: "Reemplazo de batería, arranques, reparación de alternador y motor de arranque.",
    metaTitle: "Batería y Eléctrico Móvil — DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "¿Batería muerta? ¿Mal alternador? ¿El motor de arranque no gira? Anywhere Auto Repair hace reemplazo móvil de baterías y diagnóstico eléctrico en DC, Maryland y Virginia.",
    heroTagline: "¿No enciende? ¿Suena 'click' y las luces bajan? Llegamos — muchas veces el mismo día.",
    intro:
      "Una batería muerta un lunes por la mañana no le importa que tu taller esté a 20 millas. Anywhere Auto Repair hace servicio móvil de batería y eléctrico en el DMV: probamos batería, alternador y motor de arranque en el sitio, te decimos qué está fallando y lo cambiamos ahí mismo. Sin grúa, sin Uber.",
    whatsIncluded: [
      { title: "Prueba de carga completa", body: "Amperaje de arranque en frío medido con carga. Salida del alternador en ralentí y con accesorios. Consumo del motor de arranque comparado contra especificación." },
      { title: "Reemplazo de batería", body: "Grupo y CCA correctos para tu vehículo. Respetamos los requisitos de BMS / AGM (muchos carros nuevos requieren registro — lo hacemos)." },
      { title: "Servicio de alternador y arranque", body: "Reemplazo en el sitio para la mayoría de vehículos. Tenemos partes comunes y podemos conseguir otras en horas." },
      { title: "Jump start y carretera", body: "¿Varado en el estacionamiento? Vamos. Un arranque es barato; te decimos si eso basta o si la batería ya se fue." },
      { title: "Pruebas de consumo parásito", body: "¿La batería se muere de un día para otro? Encontramos el circuito que la mata — luz interior, radio aftermarket, módulo malo — sin adivinar." },
    ],
    commonIssues: [
      "El carro no arranca o gira lento",
      "Luz de batería en el tablero",
      "Faros o luces interiores se opacan en ralentí",
      "Sonido de 'click' al girar la llave",
      "La batería se muere de noche o en un fin de semana",
      "Electrónica del tablero se resetea sola",
    ],
    whyMobile:
      "Cuando tu carro no arranca, lo último que necesitas es una grúa además de la reparación. Llegamos con herramientas, partes y plan — la mayoría de los trabajos de batería se terminan en 30–45 minutos.",
    cta: "Necesito ayuda con mi batería o sistema eléctrico",
  },
  "car-performance": {
    name: "Rendimiento del Auto",
    shortDesc: "Mejoras del motor, ajustes y optimización de rendimiento.",
    metaTitle: "Rendimiento y Tuning Móvil — DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "Partes de performance, tuning de ECU, bolt-ons y optimización para entusiastas en el área DMV. Instalación profesional en tu ubicación.",
    heroTagline: "Más potencia, mejor respuesta, bien hecho — en tu garaje o espacio de taller.",
    intro:
      "Los trabajos de entusiasta se arruinan cuando el mecánico no conoce la plataforma. Anywhere Auto Repair hace upgrades de bolt-on y trabajo de tuning en tu ubicación en el DMV — intakes, escapes cat-back, intercoolers y downpipes en turbos, y soporte de tune. Si estás construyendo un carro, somos las manos de un sábado sin tener que llevarlo en trailer a un taller.",
    whatsIncluded: [
      { title: "Instalaciones bolt-on", body: "Intakes, escapes, catch cans, intercoolers, downpipes, charge pipes y más. Seguimos el torque del fabricante y traemos las herramientas correctas para la plataforma." },
      { title: "Servicio amigable con tune", body: "Instalamos las partes que tu tuner necesita, coordinamos con el archivo del tune y verificamos antes de que manejes." },
      { title: "Prueba de manejo", body: "Cada instalación incluye un escaneo y una prueba de manejo para verificar que no hay códigos ni fugas nuevos." },
      { title: "Feedback honesto", body: "Si una mod no va a dar lo que crees, te lo decimos antes de comprar. No toda moda de TikTok es buena idea." },
    ],
    commonIssues: [
      "Necesitas instalación profesional para mods caros",
      "Plataformas donde el DIY rompe tornillos o sensores",
      "Soporte de tune y logs",
      "Arreglar la mala instalación de otro",
    ],
    whyMobile:
      "Los entusiastas suelen tener el espacio pero no las herramientas. Llegamos con herramientas y experiencia — tú te quedas con tu build en tu propio espacio.",
    cta: "Hablar con Tyler sobre un build",
  },
  "tune-ups": {
    name: "Afinaciones",
    shortDesc: "Bujías, bandas, dirección hidráulica y mantenimiento general.",
    metaTitle: "Afinaciones Móviles en DC, MD y VA | Anywhere Auto Repair",
    metaDescription:
      "Bujías, bandas, fluidos y mantenimiento preventivo en tu casa u oficina en el área DMV.",
    heroTagline: "Mantenimiento preventivo en tu horario, en tu ubicación.",
    intro:
      "Una buena afinación es la reparación más barata — porque previene las caras. Anywhere Auto Repair hace mantenimiento programado en tu casa, apartamento u oficina en todo el DMV: bujías, bandas, fluidos, filtros y todo lo que mantiene un carro corriendo hasta las 200,000 millas.",
    whatsIncluded: [
      { title: "Bujías", body: "Bujías OEM con la separación correcta, anti-seize y grasa dieléctrica donde aplica. Inspección de bobinas mientras estamos ahí." },
      { title: "Bandas y mangueras", body: "Inspección y cambio de banda serpentín. Tensores y poleas revisados." },
      { title: "Fluidos", body: "Dirección hidráulica, transmisión, anticongelante y diferencial. Usamos fluidos específicos del fabricante." },
      { title: "Filtros", body: "Filtro de aire del motor, de cabina y de combustible." },
      { title: "Mantenimiento por intervalos", body: "Trabajamos con el programa de mantenimiento de tu vehículo, no con un 'paquete de afinación' inventado." },
    ],
    commonIssues: [
      "Luz de mantenimiento requerido",
      "Ralentí irregular por bujías viejas",
      "Chillido de banda o tensor",
      "Acercándote a los intervalos de 60k / 100k / 150k millas",
      "El carro se siente lento o menos responsivo",
    ],
    whyMobile:
      "El mantenimiento programado es el trabajo que no debería obligarte a tomar medio día libre. Llegamos a tu entrada, hacemos el servicio según especificación y tú ni abres la puerta del garaje.",
    cta: "Agenda una afinación",
  },
};

export function getServiceContent(slug: ServiceSlug, lang: Locale): ServiceCopy {
  return (lang === "es" ? ES : EN)[slug];
}

export function getAllServices(lang: Locale) {
  return SERVICE_SLUGS.map((slug) => ({ slug, ...getServiceContent(slug, lang) }));
}
