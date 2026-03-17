export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-12 p-8">
      <h1 className="text-4xl font-bold tracking-wide">More coming.</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        <a
          href="/designs/option-a-clean-trustworthy.html"
          className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Design A — Clean &amp; Trustworthy
        </a>
        <a
          href="/designs/option-b-bold-street.html"
          className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Design B — Bold Street
        </a>
        <a
          href="/designs/option-c-warm-editorial.html"
          className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Design C — Warm Editorial
        </a>
        <a
          href="/designs/option-d-high-end.html"
          className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Design D — High End
        </a>
        <a
          href="/designs/option-e-eco-modern.html"
          className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Design E — Eco Modern
        </a>
        <a
          href="/designs/brand-blue"
          className="px-6 py-3 border border-blue-500/50 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors text-blue-100"
        >
          Design F — Brand Blue
        </a>
        <a
          href="/designs/dark-chrome"
          className="px-6 py-3 border border-gray-400/50 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors text-gray-200"
        >
          Design G — Dark Chrome
        </a>
      </div>
    </div>
  );
}
