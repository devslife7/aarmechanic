import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { getDict } from "@/lib/i18n";
import { SERVICE_SLUGS, getServiceContent } from "@/lib/content/services";
import { AREA_SLUGS, getAreaContent } from "@/lib/content/areas";

export function SiteHeader({ lang }: { lang: Locale }) {
  const tx = getDict(lang);
  const home = `/${lang}`;
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-10 max-sm:px-5 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[90px]">
        <Link href={home} className="flex items-center no-underline" aria-label={`${"Anywhere Auto Repair"} — Home`}>
          <img src="/logo.png" alt="Anywhere Auto Repair logo" width={72} height={72} className="w-[72px] h-[72px] rounded-full object-cover border-2 border-gray-200" />
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          <Link href={`${home}#services`} className="text-gray-900 text-[0.9rem] no-underline">{tx.nav.services}</Link>
          <Link href={`${home}#area`} className="text-gray-900 text-[0.9rem] no-underline">{tx.nav.coverage}</Link>
          <Link href={`${home}/faq`} className="text-gray-900 text-[0.9rem] no-underline">{tx.nav.faq}</Link>
          <Link href={`${home}/blog`} className="text-gray-900 text-[0.9rem] no-underline">{tx.nav.blog}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full p-[3px] border border-gray-200">
            <Link prefetch={false} href="/en" className={`px-3 py-[5px] rounded-full text-[0.72rem] font-bold no-underline ${lang === "en" ? "bg-blue-500 text-white" : "text-gray-500"}`}>EN</Link>
            <Link prefetch={false} href="/es" className={`px-3 py-[5px] rounded-full text-[0.72rem] font-bold no-underline ${lang === "es" ? "bg-blue-500 text-white" : "text-gray-500"}`}>ES</Link>
          </div>
          <a href={`${home}#contact`} className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold text-[0.82rem] no-underline hover:bg-blue-400 transition-colors">{tx.nav.book}</a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Locale }) {
  const tx = getDict(lang);
  const home = `/${lang}`;
  const otherLang = lang === "en" ? "es" : "en";
  return (
    <footer className="bg-[#06090f] border-t border-white/[0.07] text-white">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-14 grid grid-cols-[1.6fr_1fr_1fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 border-b border-white/[0.05]">
        <div className="max-lg:col-span-2 max-sm:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src="/logo.png" alt="Anywhere Auto Repair logo" className="w-12 h-12 rounded-2xl opacity-70" />
            <div>
              <div className="text-[0.95rem] font-black tracking-[0.14em] text-white">ANYWHERE</div>
              <div className="text-[0.6rem] font-semibold tracking-[0.22em] text-white/35 mt-0.5">AUTO REPAIR</div>
            </div>
          </div>
          <p className="text-[0.85rem] text-white/40 leading-relaxed max-w-[320px] font-light">{tx.footer.tagline}</p>
        </div>
        <div>
          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">{tx.footer.services}</p>
          <ul className="space-y-3">
            {SERVICE_SLUGS.map((slug) => {
              const s = getServiceContent(slug, lang);
              return <li key={slug}><Link href={`${home}/services/${slug}`} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{s.name}</Link></li>;
            })}
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">{tx.footer.serviceAreas}</p>
          <ul className="space-y-3">
            {AREA_SLUGS.map((slug) => {
              const a = getAreaContent(slug, lang);
              return <li key={slug}><Link href={`${home}/service-area/${slug}`} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{a.name}</Link></li>;
            })}
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">{tx.footer.quickLinks}</p>
          <ul className="space-y-3">
            <li><Link href={home} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{tx.nav.how}</Link></li>
            <li><Link href={`${home}/faq`} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{tx.nav.faq}</Link></li>
            <li><Link href={`${home}/blog`} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{tx.nav.blog}</Link></li>
            <li><Link href={`/${otherLang}`} hrefLang={otherLang === "en" ? "en-US" : "es-US"} className="text-[0.85rem] text-white/50 hover:text-white no-underline">{otherLang === "en" ? "English" : "Español"}</Link></li>
            <li><a href="tel:+16104636087" className="text-[0.85rem] text-white/50 hover:text-white no-underline">(610) 463-6087</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5 py-5 flex items-center justify-between flex-wrap gap-3">
        <span className="text-white/20 text-[0.72rem] font-light">{tx.footer.copy}</span>
        <span className="text-white/15 text-[0.72rem] tracking-wider">DC · MD · VA</span>
      </div>
    </footer>
  );
}
