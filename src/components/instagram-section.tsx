"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/site-config";
import { BUSINESS } from "@/lib/site-config";
import { getDict } from "@/lib/i18n";
import { INSTAGRAM_POSTS } from "@/lib/instagram-posts";

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-[18px] h-[18px]"}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function InstagramSection({ lang }: { lang: Locale }) {
  const tx = getDict(lang);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT_SRC}"]`
    );

    const process = () => window.instgrm?.Embeds.process();

    if (existing) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      className="py-20 px-10 max-sm:py-14 max-sm:px-5 relative z-[1] bg-slate-50 scroll-mt-[90px]"
      id="instagram"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3 mb-3 reveal">
          <div className="w-7 h-px bg-black/30" />
          <span className="text-[0.78rem] font-medium text-black/50 tracking-[0.12em] uppercase">
            {tx.instagram.tag}
          </span>
          <div className="w-7 h-px bg-black/30" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 reveal reveal-delay-1">
          <h2
            id="instagram-heading"
            className="font-serif text-[2.2rem] max-sm:text-[1.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-gray-900"
          >
            {tx.instagram.title1}{" "}
            <em className="text-blue-600 not-italic">{tx.instagram.title2}</em>
          </h2>
          <p className="text-black/60 text-sm leading-[1.6] max-w-sm font-light">
            {tx.instagram.desc}
          </p>
        </div>

        <div
          className={
            INSTAGRAM_POSTS.length === 1
              ? "flex justify-center reveal reveal-delay-2"
              : "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 reveal reveal-delay-2"
          }
        >
          {INSTAGRAM_POSTS.map((url, i) => (
            <div
              key={`${url}-${i}`}
              className="instagram-embed-wrapper bg-white rounded-2xl overflow-hidden border border-black/[0.08] min-h-[360px] w-full max-w-[420px]"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: "100%",
                }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 reveal reveal-delay-3">
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-[0.82rem] font-medium tracking-[0.02em] transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-4 h-4" />
            {tx.instagram.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
