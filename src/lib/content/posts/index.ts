import type { Locale } from "@/lib/site-config";

export type BlogPost = {
  slug: string;
  publishedAt: string;
  image?: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-signs-you-need-a-mobile-mechanic",
    publishedAt: "2026-04-01",
    title: {
      en: "5 Signs You Need a Mobile Mechanic in the DMV",
      es: "5 Señales de que Necesitas un Mecánico Móvil en el DMV",
    },
    excerpt: {
      en: "The DMV is a commuter region. When your car acts up in DC, Maryland, or Virginia, getting to a shop is half the problem. Here's when a mobile mechanic is the right answer.",
      es: "El DMV es una región de commuters. Cuando tu carro falla en DC, Maryland o Virginia, llegar al taller es la mitad del problema. Aquí tienes cuándo un mecánico móvil es la respuesta correcta.",
    },
    body: {
      en: `
## 1. You can't safely drive the car

A dead battery, no-start, or warning light you don't recognize is a bad reason to risk the highway. A mobile mechanic comes to your house, apartment lot, or roadside and diagnoses on the spot — no tow bill, no Uber home.

## 2. You don't have a spare half-day

Most shop oil changes and brake jobs eat 2–4 hours of your day once you count the drive, the waiting room, and the drive back. A mobile mechanic does the same work in your driveway while you're on a call.

## 3. You already know what's wrong

If your shop told you it's "definitely the alternator" and quoted $600, a mobile mechanic can replace an alternator at your home in about an hour — usually for less, because you're not paying for the shop's rent.

## 4. The car is stuck somewhere inconvenient

Office parking lot. Apartment building. Metro lot. Most mobile jobs happen outside a garage. As long as there's parking and access, we can work.

## 5. You want someone to explain what's going on

A shop that's trying to turn bays fast doesn't always slow down to explain the diagnosis. Mobile work is one-on-one by design. You ask questions, you see the parts that came off, you know what you're paying for.

## When mobile isn't the right call

Transmission rebuilds, frame work, and anything that needs a lift or full shop equipment is not a mobile job. We'll tell you up front if that's the situation and help point you to a reputable shop. The goal is you getting back on the road, not us forcing every job into a driveway.
`,
      es: `
## 1. No puedes manejar el carro con seguridad

Una batería muerta, un no-arranque o una luz de advertencia que no conoces no es buena razón para arriesgarte en la autopista. Un mecánico móvil va a tu casa, parking de apartamento o carretera y diagnostica en el sitio — sin grúa, sin Uber.

## 2. No tienes medio día libre

La mayoría de los cambios de aceite y trabajos de frenos en taller se comen 2–4 horas entre ir, esperar y regresar. Un mecánico móvil hace el mismo trabajo en tu entrada mientras tú estás en una llamada.

## 3. Ya sabes qué está mal

Si un taller te dijo que "seguro es el alternador" y te cotizó $600, un mecánico móvil puede cambiarte el alternador en tu casa en aproximadamente una hora — muchas veces por menos, porque no pagas la renta del taller.

## 4. El carro está varado en un lugar incómodo

Estacionamiento de oficina. Edificio de apartamentos. Estacionamiento del Metro. La mayoría de los trabajos móviles ocurren fuera de un garaje. Mientras haya estacionamiento y acceso, podemos trabajar.

## 5. Quieres que alguien te explique

Un taller que quiere rotar bahías rápido no siempre se detiene a explicar el diagnóstico. El trabajo móvil es uno-a-uno por diseño. Preguntas, ves las partes que salieron y sabes por qué pagas.

## Cuándo no es móvil

Reconstrucciones de transmisión, trabajo de chasis y cualquier cosa que requiera elevador o equipo completo de taller no es trabajo móvil. Te lo decimos de frente y te referimos con un taller confiable. La meta es que vuelvas al camino, no forzar cada trabajo a una entrada.
`,
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
