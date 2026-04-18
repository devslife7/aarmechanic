"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { widgetTranslations, type WidgetLang } from "./translations";
import { submitContact } from "@/lib/submitContact";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { getFieldError } from "@/lib/contact-errors";

interface ChatWidgetProps {
  lang: WidgetLang;
}

export default function ChatWidget({ lang }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const renderTime = useRef(Date.now());
  const tx = widgetTranslations[lang];

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: "",
      vin: "",
      fuel: "gas",
      issue: "",
      website: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (!formSubmitted) renderTime.current = Date.now();
  }, [formSubmitted]);

  const onSubmit = handleSubmit(async (values) => {
    setFormError("");
    const result = await submitContact({ ...values, _t: renderTime.current });
    if (result.ok) {
      setFormSubmitted(true);
      return;
    }
    if (result.fieldErrors) {
      for (const [field, msgs] of Object.entries(result.fieldErrors)) {
        if (msgs && msgs.length > 0) {
          setError(field as keyof ContactInput, { message: msgs[0] });
        }
      }
    }
    setFormError(result.error ?? "Something went wrong");
  });

  function handleReset() {
    setFormSubmitted(false);
    setFormError("");
    reset();
  }

  const inputClass =
    "w-full rounded-xl border border-white/12 bg-midnight px-4 py-3.5 font-[family-name:var(--font-sans)] text-sm font-light text-white outline-none transition-all duration-300 placeholder:text-white/45 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)]";
  const errorClass = "mt-1 text-xs text-red-400";

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={tx.buttonLabel}
        className={`
          fixed bottom-7 right-7 z-90 flex h-[60px] w-[60px] cursor-pointer items-center justify-center
          rounded-full border-none bg-blue-500 shadow-[0_8px_32px_rgba(59,130,246,0.35)]
          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:scale-[1.08] hover:shadow-[0_12px_40px_rgba(59,130,246,0.45)]
          max-[680px]:bottom-5 max-[680px]:right-5 max-[680px]:h-14 max-[680px]:w-14
          ${isOpen ? "" : "animate-[cw-pulse_3s_ease-in-out_infinite]"}
        `}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`
          fixed bottom-[100px] right-7 z-90 flex w-[380px] max-h-[calc(100vh-140px)]
          flex-col overflow-hidden rounded-3xl border border-white/12
          bg-gradient-to-b from-navy to-deep shadow-[0_24px_80px_rgba(0,0,0,0.5)]
          origin-bottom-right transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
          max-[680px]:bottom-0 max-[680px]:right-0 max-[680px]:left-0 max-[680px]:w-full
          max-[680px]:max-h-[85vh] max-[680px]:rounded-b-none max-[680px]:rounded-t-3xl
          max-[680px]:origin-bottom
          ${isOpen
            ? "opacity-100 visible pointer-events-auto translate-y-0 scale-100"
            : "opacity-0 invisible pointer-events-none translate-y-5 scale-95"
          }
        `}
        role="dialog"
        aria-label={tx.buttonLabel}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/12 bg-midnight px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/12 font-[family-name:var(--font-serif)] text-lg text-blue-400">
            T
          </div>
          <div className="flex-1">
            <div className="text-[0.95rem] font-semibold text-white">Tyler</div>
            <div className="text-xs font-light text-white/45">Anywhere Auto Repair</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/45 transition-all duration-300 hover:bg-white/12 hover:text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {formSubmitted ? (
          /* Success state */
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4 className="font-[family-name:var(--font-serif)] text-xl text-white">
              {tx.successTitle}
            </h4>
            <p className="text-sm font-light leading-relaxed text-white/45">
              {tx.successDesc}
            </p>
            <button
              onClick={handleReset}
              className="mt-1 cursor-pointer border-none bg-transparent text-sm font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-400"
            >
              {tx.sendAnother}
            </button>
          </div>
        ) : (
          /* Form body */
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
            {/* Chat bubble greeting */}
            <div className="max-w-[92%] rounded-[18px_18px_18px_4px] border border-blue-500/15 bg-blue-500/12 px-4 py-3 text-sm font-light leading-relaxed text-white/70">
              {tx.greeting}
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
              {/* Honeypot — hidden from real users, bots will fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.nameLabel}
                </label>
                <input type="text" placeholder={tx.namePlaceholder} className={inputClass} aria-invalid={!!errors.name} {...register("name")} />
                {errors.name && <p className={errorClass}>{getFieldError(errors, "name", lang)}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.phoneLabel}
                </label>
                <input type="tel" placeholder={tx.phonePlaceholder} className={inputClass} aria-invalid={!!errors.phone} {...register("phone")} />
                {errors.phone && <p className={errorClass}>{getFieldError(errors, "phone", lang)}</p>}
              </div>

              {/* Vehicle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.vehicleLabel}
                </label>
                <input type="text" placeholder={tx.vehiclePlaceholder} className={inputClass} aria-invalid={!!errors.vehicle} {...register("vehicle")} />
                {errors.vehicle && <p className={errorClass}>{getFieldError(errors, "vehicle", lang)}</p>}
              </div>

              {/* VIN (optional) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.vinLabel}
                </label>
                <input type="text" placeholder={tx.vinPlaceholder} className={inputClass} aria-invalid={!!errors.vin} {...register("vin")} />
                {errors.vin && <p className={errorClass}>{getFieldError(errors, "vin", lang)}</p>}
              </div>

              {/* Fuel type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.fuelLabel}
                </label>
                <div className="flex gap-2.5">
                  <label className="flex flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/12 bg-midnight px-3 py-3 text-sm font-light text-white/70 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/12 has-[:checked]:text-white">
                    <input type="radio" value="gas" className="sr-only" {...register("fuel")} />
                    {tx.fuelGas}
                  </label>
                  <label className="flex flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/12 bg-midnight px-3 py-3 text-sm font-light text-white/70 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/12 has-[:checked]:text-white">
                    <input type="radio" value="diesel" className="sr-only" {...register("fuel")} />
                    {tx.fuelDiesel}
                  </label>
                </div>
                {errors.fuel && <p className={errorClass}>{getFieldError(errors, "fuel", lang)}</p>}
              </div>

              {/* Issue */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-white/[0.88]">
                  {tx.issueLabel}
                </label>
                <textarea
                  placeholder={tx.issuePlaceholder}
                  aria-invalid={!!errors.issue}
                  className="min-h-[72px] w-full resize-y rounded-xl border border-white/12 bg-midnight px-4 py-3.5 font-[family-name:var(--font-sans)] text-sm font-light leading-relaxed text-white outline-none transition-all duration-300 placeholder:text-white/45 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)]"
                  {...register("issue")}
                />
                {errors.issue && <p className={errorClass}>{getFieldError(errors, "issue", lang)}</p>}
              </div>

              {/* Form-level error */}
              {formError && <p className="text-sm text-red-400">{formError}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 self-end rounded-full border-none bg-blue-500 px-7 py-3.5 font-[family-name:var(--font-sans)] text-sm font-semibold text-midnight transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
                {tx.send}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
