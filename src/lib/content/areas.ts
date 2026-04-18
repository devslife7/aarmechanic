import type { Locale } from "@/lib/site-config";

export const AREA_SLUGS = [
  "washington-dc",
  "springfield-va",
  "loudoun-county-va",
  "prince-william-county-va",
  "silver-spring-md",
  "bethesda-md",
  "college-park-md",
  "prince-georges-county-md",
] as const;

export type AreaSlug = (typeof AREA_SLUGS)[number];

export function isAreaSlug(v: string): v is AreaSlug {
  return (AREA_SLUGS as readonly string[]).includes(v);
}

type AreaCopy = {
  name: string;
  state: string;
  region: "DC" | "MD" | "VA";
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  travelNote: string;
  cta: string;
};

const EN: Record<AreaSlug, AreaCopy> = {
  "washington-dc": {
    name: "Washington, D.C.",
    state: "District of Columbia",
    region: "DC",
    metaTitle: "Mobile Mechanic in Washington, D.C. | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair in Washington, D.C. — from Capitol Hill to Georgetown to Petworth. Bilingual service, transparent pricing, no tow truck needed.",
    intro:
      "Finding parking at a D.C. shop is often harder than the repair itself. Anywhere Auto Repair comes to you anywhere in the District — from Capitol Hill to Georgetown, from Petworth to Navy Yard. We handle diagnostics, brake jobs, oil changes, batteries, and general service on the street, in your garage, or in your office parking lot.",
    neighborhoods: [
      "Capitol Hill",
      "Georgetown",
      "Dupont Circle",
      "Logan Circle",
      "Adams Morgan",
      "Columbia Heights",
      "Shaw",
      "Petworth",
      "Navy Yard",
      "NoMa",
      "Brookland",
      "Anacostia",
    ],
    travelNote: "Tyler is based in Springfield, VA and travels into D.C. daily. Same-day service is common for most of NW, NE, SE, and SW.",
    cta: "Book mobile service in D.C.",
  },
  "springfield-va": {
    name: "Springfield, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mobile Mechanic in Springfield, VA | Anywhere Auto Repair",
    metaDescription:
      "Home-base mobile auto repair in Springfield, VA. Fast response, bilingual service, and fair pricing for everyone from Franconia to West Springfield.",
    intro:
      "Springfield is home base for Anywhere Auto Repair. If you're in Springfield, West Springfield, Franconia, or Newington, Tyler can usually be at your driveway within a couple of hours for simple jobs — and same-day for most repairs that don't need special-order parts.",
    neighborhoods: [
      "Springfield",
      "West Springfield",
      "North Springfield",
      "Franconia",
      "Newington",
      "Burke",
      "Kingstowne",
    ],
    travelNote: "As the home base, Springfield gets priority scheduling. Short-notice service is usually possible here.",
    cta: "Book a Springfield, VA visit",
  },
  "loudoun-county-va": {
    name: "Loudoun County, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mobile Mechanic in Loudoun County, VA | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair throughout Loudoun County — Ashburn, Leesburg, Sterling, and Reston-adjacent service from Anywhere Auto Repair.",
    intro:
      "Loudoun County drives more miles per resident than most counties in the country, and a mobile mechanic in the DMV is often the fastest way to keep things moving. We serve Ashburn, Leesburg, Sterling, and the tech-corridor commuter belt — brakes, oil changes, diagnostics, and more at your home or office.",
    neighborhoods: ["Ashburn", "Leesburg", "Sterling", "Herndon-adjacent", "Dulles-area", "South Riding", "Broadlands"],
    travelNote: "Loudoun County is about 35–50 miles from Springfield depending on neighborhood — plan on same-day-or-next-day scheduling.",
    cta: "Book mobile service in Loudoun County",
  },
  "prince-william-county-va": {
    name: "Prince William County, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mobile Mechanic in Prince William County, VA | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair across Prince William County — Woodbridge, Manassas, Dale City, Gainesville, and Bristow.",
    intro:
      "From Woodbridge down the I-95 corridor to Manassas and Gainesville, Prince William County is well inside our regular service area. We're a short drive from Springfield and can typically get to you within the same day for battery jobs, diagnostics, brakes, and routine maintenance.",
    neighborhoods: ["Woodbridge", "Manassas", "Manassas Park", "Dale City", "Gainesville", "Bristow", "Lake Ridge", "Dumfries"],
    travelNote: "Prince William County is 15–35 miles from home base — one of our most common service areas.",
    cta: "Book mobile service in Prince William County",
  },
  "silver-spring-md": {
    name: "Silver Spring, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mobile Mechanic in Silver Spring, MD | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair in Silver Spring, MD. Downtown Silver Spring, Four Corners, Wheaton-area — we come to you.",
    intro:
      "Silver Spring's mix of condo lots, single-family homes, and office parks is perfect for mobile service. Anywhere Auto Repair handles diagnostics, brakes, oil changes, and batteries throughout Silver Spring — from downtown and the Four Corners area to the Wheaton and Takoma Park edges.",
    neighborhoods: ["Downtown Silver Spring", "Four Corners", "Wheaton-adjacent", "Takoma Park", "Woodside", "Forest Glen"],
    travelNote: "About 20 miles from home base. Same-day service possible for most requests booked before mid-day.",
    cta: "Book mobile service in Silver Spring",
  },
  "bethesda-md": {
    name: "Bethesda, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mobile Mechanic in Bethesda, MD | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair in Bethesda, MD. Professional mobile mechanic for downtown Bethesda, Chevy Chase, and North Bethesda.",
    intro:
      "Bethesda drivers don't have time to sit in a shop lobby. Anywhere Auto Repair brings the full range of mobile service — diagnostics, brake repair, oil changes, battery and electrical — directly to your home or office anywhere in Bethesda, Chevy Chase, and North Bethesda.",
    neighborhoods: ["Downtown Bethesda", "Chevy Chase", "North Bethesda", "Bradley Hills", "Kenwood", "Battery Park"],
    travelNote: "Bethesda is roughly 25 miles from home base. Same- or next-day service typical.",
    cta: "Book mobile service in Bethesda",
  },
  "college-park-md": {
    name: "College Park, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mobile Mechanic in College Park, MD | Anywhere Auto Repair",
    metaDescription:
      "Mobile mechanic in College Park, MD — service for students, staff, and residents of the University of Maryland area.",
    intro:
      "If you're a student, staff member, or resident in College Park, you know campus parking and car trouble are a bad mix. Anywhere Auto Repair comes to your apartment, dorm lot, or driveway — jump starts, battery swaps, brake jobs, oil changes, and diagnostics, so you don't have to find a tow to a shop.",
    neighborhoods: ["UMD campus area", "Old Town College Park", "Calvert Hills", "Berwyn Heights", "Riverdale Park-adjacent"],
    travelNote: "About 30 miles from home base. Scheduling typically within 24–48 hours.",
    cta: "Book mobile service in College Park",
  },
  "prince-georges-county-md": {
    name: "Prince George's County, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mobile Mechanic in Prince George's County, MD | Anywhere Auto Repair",
    metaDescription:
      "Mobile auto repair across Prince George's County — Hyattsville, Bowie, Greenbelt, Laurel, and Upper Marlboro.",
    intro:
      "PG County is one of our most-served regions on the Maryland side. From Hyattsville and Greenbelt to Bowie and Laurel, Anywhere Auto Repair handles diagnostics, brake service, oil changes, and battery work at your home or office.",
    neighborhoods: ["Hyattsville", "Greenbelt", "Bowie", "Laurel", "Upper Marlboro", "Lanham", "Beltsville", "Largo"],
    travelNote: "Most PG County neighborhoods are 25–35 miles from home base. Same- or next-day service is typical.",
    cta: "Book mobile service in Prince George's County",
  },
};

const ES: Record<AreaSlug, AreaCopy> = {
  "washington-dc": {
    name: "Washington, D.C.",
    state: "Distrito de Columbia",
    region: "DC",
    metaTitle: "Mecánico Móvil en Washington, D.C. | Anywhere Auto Repair",
    metaDescription:
      "Reparación de autos móvil en Washington, D.C. — desde Capitol Hill hasta Georgetown y Petworth. Servicio bilingüe, precios claros, sin grúa.",
    intro:
      "Encontrar estacionamiento en un taller de D.C. a veces es más difícil que la reparación misma. Anywhere Auto Repair llega a ti en todo el Distrito — Capitol Hill, Georgetown, Petworth, Navy Yard. Hacemos diagnóstico, frenos, cambio de aceite, baterías y servicio general en la calle, en tu garaje o en el estacionamiento de tu oficina.",
    neighborhoods: [
      "Capitol Hill",
      "Georgetown",
      "Dupont Circle",
      "Logan Circle",
      "Adams Morgan",
      "Columbia Heights",
      "Shaw",
      "Petworth",
      "Navy Yard",
      "NoMa",
      "Brookland",
      "Anacostia",
    ],
    travelNote: "Tyler está basado en Springfield, VA y entra a D.C. todos los días. Servicio el mismo día es común para la mayor parte de NW, NE, SE y SW.",
    cta: "Agenda servicio móvil en D.C.",
  },
  "springfield-va": {
    name: "Springfield, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mecánico Móvil en Springfield, VA | Anywhere Auto Repair",
    metaDescription:
      "Base móvil de reparación de autos en Springfield, VA. Respuesta rápida, servicio bilingüe y precios justos.",
    intro:
      "Springfield es la base de Anywhere Auto Repair. Si estás en Springfield, West Springfield, Franconia o Newington, Tyler suele poder llegar a tu entrada en un par de horas para trabajos sencillos — y el mismo día para reparaciones que no requieren parte especial.",
    neighborhoods: [
      "Springfield",
      "West Springfield",
      "North Springfield",
      "Franconia",
      "Newington",
      "Burke",
      "Kingstowne",
    ],
    travelNote: "Como es la base, Springfield tiene prioridad. Servicio de corto aviso suele ser posible.",
    cta: "Agenda una visita en Springfield, VA",
  },
  "loudoun-county-va": {
    name: "Condado de Loudoun, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mecánico Móvil en Loudoun County, VA | Anywhere Auto Repair",
    metaDescription:
      "Reparación de autos móvil en Loudoun County — Ashburn, Leesburg, Sterling y zonas cercanas a Reston.",
    intro:
      "El Condado de Loudoun maneja más millas por residente que casi cualquier condado del país. Servimos Ashburn, Leesburg, Sterling y el corredor tecnológico de commuters — frenos, cambios de aceite, diagnósticos y más en tu casa u oficina.",
    neighborhoods: ["Ashburn", "Leesburg", "Sterling", "Cerca de Herndon", "Área de Dulles", "South Riding", "Broadlands"],
    travelNote: "Loudoun está a 35–50 millas de Springfield. Planea servicio mismo día o al siguiente.",
    cta: "Agenda servicio móvil en Loudoun County",
  },
  "prince-william-county-va": {
    name: "Condado de Prince William, VA",
    state: "Virginia",
    region: "VA",
    metaTitle: "Mecánico Móvil en Prince William County, VA | Anywhere Auto Repair",
    metaDescription:
      "Reparación móvil de autos en Prince William County — Woodbridge, Manassas, Dale City, Gainesville y Bristow.",
    intro:
      "Desde Woodbridge por el corredor I-95 hasta Manassas y Gainesville, Prince William County está dentro de nuestra área regular. Estamos cerca de Springfield y normalmente podemos llegar el mismo día.",
    neighborhoods: ["Woodbridge", "Manassas", "Manassas Park", "Dale City", "Gainesville", "Bristow", "Lake Ridge", "Dumfries"],
    travelNote: "Prince William está a 15–35 millas de la base — una de nuestras áreas más comunes.",
    cta: "Agenda servicio móvil en Prince William County",
  },
  "silver-spring-md": {
    name: "Silver Spring, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mecánico Móvil en Silver Spring, MD | Anywhere Auto Repair",
    metaDescription:
      "Reparación de autos móvil en Silver Spring, MD. Downtown, Four Corners y zona de Wheaton — vamos a ti.",
    intro:
      "La mezcla de condominios, casas y oficinas en Silver Spring es perfecta para servicio móvil. Anywhere Auto Repair hace diagnóstico, frenos, cambio de aceite y baterías en todo Silver Spring — desde el downtown y Four Corners hasta Wheaton y Takoma Park.",
    neighborhoods: ["Downtown Silver Spring", "Four Corners", "Cerca de Wheaton", "Takoma Park", "Woodside", "Forest Glen"],
    travelNote: "A unas 20 millas de la base. Servicio mismo día posible si se agenda antes del mediodía.",
    cta: "Agenda servicio móvil en Silver Spring",
  },
  "bethesda-md": {
    name: "Bethesda, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mecánico Móvil en Bethesda, MD | Anywhere Auto Repair",
    metaDescription:
      "Reparación móvil de autos en Bethesda, MD. Profesional para downtown Bethesda, Chevy Chase y North Bethesda.",
    intro:
      "Los conductores de Bethesda no tienen tiempo para sentarse en la sala de un taller. Anywhere Auto Repair lleva el servicio móvil — diagnóstico, frenos, cambio de aceite, batería y eléctrico — directo a tu casa u oficina en Bethesda, Chevy Chase y North Bethesda.",
    neighborhoods: ["Downtown Bethesda", "Chevy Chase", "North Bethesda", "Bradley Hills", "Kenwood", "Battery Park"],
    travelNote: "Bethesda está a unas 25 millas de la base. Servicio mismo día o al siguiente, típicamente.",
    cta: "Agenda servicio móvil en Bethesda",
  },
  "college-park-md": {
    name: "College Park, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mecánico Móvil en College Park, MD | Anywhere Auto Repair",
    metaDescription:
      "Mecánico móvil en College Park, MD — servicio para estudiantes, personal y residentes del área de la Universidad de Maryland.",
    intro:
      "Si eres estudiante, empleado o residente en College Park, sabes que el estacionamiento en el campus y los problemas de carro son mala combinación. Anywhere Auto Repair llega a tu apartamento, parking del dorm o entrada — arranques, cambios de batería, frenos, aceite y diagnóstico.",
    neighborhoods: ["Área del campus UMD", "Old Town College Park", "Calvert Hills", "Berwyn Heights", "Cerca de Riverdale Park"],
    travelNote: "A unas 30 millas de la base. Agendamos usualmente en 24–48 horas.",
    cta: "Agenda servicio móvil en College Park",
  },
  "prince-georges-county-md": {
    name: "Condado de Prince George's, MD",
    state: "Maryland",
    region: "MD",
    metaTitle: "Mecánico Móvil en Prince George's County, MD | Anywhere Auto Repair",
    metaDescription:
      "Reparación móvil de autos en todo Prince George's County — Hyattsville, Bowie, Greenbelt, Laurel y Upper Marlboro.",
    intro:
      "PG County es una de nuestras regiones más servidas del lado de Maryland. Desde Hyattsville y Greenbelt hasta Bowie y Laurel, hacemos diagnóstico, frenos, cambio de aceite y baterías en tu casa u oficina.",
    neighborhoods: ["Hyattsville", "Greenbelt", "Bowie", "Laurel", "Upper Marlboro", "Lanham", "Beltsville", "Largo"],
    travelNote: "La mayoría de vecindarios de PG están a 25–35 millas de la base. Servicio mismo día o al siguiente.",
    cta: "Agenda servicio móvil en Prince George's County",
  },
};

export function getAreaContent(slug: AreaSlug, lang: Locale): AreaCopy {
  return (lang === "es" ? ES : EN)[slug];
}

export function getAllAreas(lang: Locale) {
  return AREA_SLUGS.map((slug) => ({ slug, ...getAreaContent(slug, lang) }));
}
