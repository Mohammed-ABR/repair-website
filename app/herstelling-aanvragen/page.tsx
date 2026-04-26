"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { buttonPrimary } from "@/lib/button-classes";
import { content } from "@/lib/content";
import { formatBelgianDisplayPhone, getPhoneHref } from "@/lib/format-phone";
import { pageContainer } from "@/lib/layout-classes";

const MAX_IMAGE_BYTES = 6 * 1024 * 1024; // 6MB

function firstFile(files: FileList | null | undefined) {
  if (!files) return null;
  return files.length > 0 ? files.item(0) : null;
}

function isImage(file: File) {
  return file.type.startsWith("image/");
}

const formSchema = z.object({
  name: z.string().trim().min(2, "Vul uw naam in."),
  phone: z.string().trim().min(6, "Vul een geldig telefoonnummer in."),
  email: z.string().trim().min(1, "Vul uw e-mailadres in.").email("Ongeldig e-mailadres."),
  address: z.string().trim().min(5, "Vul uw volledige adres in."),
  applianceType: z
    .string()
    .trim()
    .min(1, "Kies het type toestel.")
    .refine((value) => content.devices.includes(value), "Kies een toestel uit de lijst."),
  problemDescription: z
    .string()
    .trim()
    .min(10, "Beschrijf kort het probleem (minstens 10 tekens)."),
  image: z
    .custom<FileList | undefined>()
    .optional()
    .refine((files) => {
      const file = firstFile(files);
      if (!file) return true;
      return isImage(file);
    }, "Upload een afbeelding (JPG/PNG/WebP).")
    .refine((files) => {
      const file = firstFile(files);
      if (!file) return true;
      return file.size <= MAX_IMAGE_BYTES;
    }, "Bestand is te groot (max. 6MB)."),
});

type RepairRequestForm = z.infer<typeof formSchema>;

const fieldGroup = "flex flex-col gap-2";

const inputClass =
  "w-full min-h-14 rounded-xl border border-primary/12 bg-white px-4 py-3.5 text-base leading-snug text-foreground shadow-sm outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-foreground/40 focus-visible:border-accent/60 focus-visible:ring-4 focus-visible:ring-accent/15 disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-[3.5rem] sm:px-5 sm:text-lg";

const labelClass = "text-sm font-semibold text-primary sm:text-[0.95rem]";

const errorClass = "text-sm font-medium text-red-600";

const helpClass = "text-sm text-foreground/55";

const trustPoints = [
  "Binnen 24u service",
  "Transparante prijs (€69 diagnose)",
  "Geen verborgen kosten",
] as const;

const herstellingFaqItems: readonly FaqItem[] = [
  {
    question: "Wat kost een herstelling?",
    answer:
      "De prijs hangt af van het toestel en de aard van het defect. Wij hanteren een vaste diagnose van €69; daarna krijgt u een duidelijke offerte vóórdat wij de reparatie uitvoeren. Geen verborgen kosten.",
  },
  {
    question: "Hoe snel komen jullie?",
    answer:
      "Wij reageren doorgaans binnen 24 uur en plannen de interventie zo snel als mogelijk, afhankelijk van onze planning. Heeft u haast? Bel of vul het formulier in — wij nemen meteen contact op om een afspraak te bevestigen.",
  },
  {
    question: "Is diagnose verplicht?",
    answer:
      "Nee. U bent niet verplicht de reparatie te laten uitvoeren na de diagnose. De diagnose zorgt ervoor dat wij exact weten wat er scheelt en u een transparante prijsofferte kunnen geven. Pas daarna bepaalt u of u verder gaat.",
  },
  {
    question: "Werken jullie in mijn regio?",
    answer:
      "Wij zijn actief in de regio rond Brussel (België). Woont u iets verder, neem contact op en vermeld uw gemeente of postcode: in veel gevallen is een afspraak wel mogelijk na overleg over de planning.",
  },
];

const SUCCESS_HOLD_MS = 900;

function TrustCheck() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-600/20"
      aria-hidden
    >
      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m2.5 6 2 2.5L9.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HerstellingAanvragenPage() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fileLabel, setFileLabel] = useState<string | null>(null);

  const devices = useMemo(() => content.devices.slice(), []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RepairRequestForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      applianceType: "",
      problemDescription: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(values: RepairRequestForm) {
    setSubmitError(null);
    try {
      await new Promise((r) => setTimeout(r, 850));
      void values;
      setShowSuccess(true);
      await new Promise((r) => setTimeout(r, SUCCESS_HOLD_MS));
      router.push("/bedankt");
    } catch {
      setSubmitError("Er ging iets mis. Probeer opnieuw of bel ons even.");
    }
  }

  return (
    <div className="min-h-[85vh] bg-linear-to-b from-slate-50 via-white to-slate-50/80">
      <div className={`${pageContainer} py-10 sm:py-14 lg:py-16`}>
        <div className="mx-auto w-full max-w-[600px]">
          <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Herstelling aanvragen
          </h1>
          <p className="mt-3 text-center text-base leading-relaxed text-foreground/70 sm:text-lg">
            Vul het formulier in — wij plannen snel een interventie of bellen u terug.
          </p>

          <m.div
            className="mt-6 mb-6 rounded-2xl border border-emerald-300/70 bg-linear-to-b from-emerald-50 to-emerald-50/75 px-5 py-4 text-center shadow-[0_10px_26px_-18px_rgba(5,150,105,0.45)] ring-1 ring-emerald-500/12 sm:mt-8 sm:mb-7 sm:px-6 sm:py-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20">
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-base font-bold tracking-tight text-emerald-900 sm:text-lg">Geen oplossing? Geen kosten.</p>
          </m.div>

          <div className="relative mt-8 sm:mt-10">
            <div className="overflow-hidden rounded-2xl border border-primary/8 bg-white shadow-[0_4px_24px_-4px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.04)] sm:rounded-3xl">
              {/* Trust strip */}
              <div className="border-b border-primary/8 bg-primary/4 px-5 py-4 sm:px-7 sm:py-5">
                <p className="text-center text-xs font-semibold uppercase tracking-wide text-foreground/50">
                  Waarom kiezen voor ons
                </p>
                <ul className="mt-3 space-y-2.5" role="list">
                  {trustPoints.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm font-medium leading-snug text-foreground/85 sm:text-base">
                      <TrustCheck />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-5 py-6 sm:px-7 sm:py-8">
                <a
                  href={getPhoneHref(content.contact.phone)}
                  className="mb-6 flex w-full min-h-14 items-center justify-center gap-3 rounded-xl bg-emerald-600 px-5 py-3.5 text-base font-bold text-white shadow-md shadow-emerald-900/20 ring-1 ring-white/20 transition-[background-color,box-shadow,transform] duration-200 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 active:scale-[0.99] sm:min-h-14 sm:px-6 sm:text-lg"
                  aria-label={`Bel direct: ${formatBelgianDisplayPhone(content.contact.phone)}`}
                >
                  <PhoneIcon className="h-6 w-6 shrink-0" aria-hidden />
                  <span className="min-w-0 text-center">
                    <span className="block leading-tight">Bel direct</span>
                    <span className="mt-0.5 block text-sm font-semibold text-emerald-50/95 sm:text-base">
                      {formatBelgianDisplayPhone(content.contact.phone)}
                    </span>
                  </span>
                </a>
                <AnimatePresence>
                  {showSuccess ? (
                    <m.div
                      key="success"
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-b-2xl bg-white/95 px-6 text-center backdrop-blur-[1px] sm:rounded-b-3xl"
                    >
                      <m.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 24, delay: 0.04 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-700"
                        aria-hidden
                      >
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </m.div>
                      <p className="text-lg font-semibold text-primary">Verzonden</p>
                      <p className="text-sm text-foreground/65">Een ogenblik, u wordt doorgestuurd…</p>
                    </m.div>
                  ) : null}
                </AnimatePresence>

                <form
                  className={`${showSuccess ? "pointer-events-none min-h-[320px] opacity-40" : ""} space-y-6 sm:space-y-7`}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="name">
                      Naam <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Voornaam en familienaam"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-required
                      {...register("name")}
                      disabled={isSubmitting}
                    />
                    {errors.name ? (
                      <p className={errorClass} role="alert">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="phone">
                      Telefoonnummer <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="Bv. 0470 12 34 56"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-required
                      {...register("phone")}
                      disabled={isSubmitting}
                    />
                    {errors.phone ? (
                      <p className={errorClass} role="alert">
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="email">
                      E-mail <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="naam@voorbeeld.be"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-required
                      {...register("email")}
                      disabled={isSubmitting}
                    />
                    {errors.email ? (
                      <p className={errorClass} role="alert">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="address">
                      Adres <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      autoComplete="street-address"
                      className={inputClass}
                      placeholder="Straat, nummer, postcode, gemeente"
                      aria-invalid={errors.address ? "true" : "false"}
                      aria-required
                      {...register("address")}
                      disabled={isSubmitting}
                    />
                    {errors.address ? (
                      <p className={errorClass} role="alert">
                        {errors.address.message}
                      </p>
                    ) : null}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="applianceType">
                      Type toestel <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="applianceType"
                      className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2024%2024%27%20stroke=%27%2315254a%27%3E%3Cpath%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%272%27%20d=%27M19%209l-7%207-7-7%27/%3E%3C/svg%3E')] bg-size-[1.1rem] bg-position-[right_0.9rem_center] bg-no-repeat pr-11`}
                      aria-invalid={errors.applianceType ? "true" : "false"}
                      aria-required
                      {...register("applianceType")}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Kies het type toestel…
                      </option>
                      {devices.map((device) => (
                        <option key={device} value={device}>
                          {device}
                        </option>
                      ))}
                    </select>
                    {errors.applianceType ? (
                      <p className={errorClass} role="alert">
                        {errors.applianceType.message}
                      </p>
                    ) : null}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="problemDescription">
                      Beschrijving van het probleem <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="problemDescription"
                      rows={5}
                      className={`${inputClass} min-h-36 resize-y py-4`}
                      placeholder="Bijv. lekt, maakt lawaai, toont een foutcode…"
                      aria-invalid={errors.problemDescription ? "true" : "false"}
                      aria-required
                      {...register("problemDescription")}
                      disabled={isSubmitting}
                    />
                    {errors.problemDescription ? (
                      <p className={errorClass} role="alert">
                        {errors.problemDescription.message}
                      </p>
                    ) : (
                      <p className={helpClass}>Merk, model of foutcode helpen ons om sneller te plannen.</p>
                    )}
                  </div>

                  <div className={fieldGroup}>
                    <label className={labelClass} htmlFor="image">
                      Foto uploaden <span className="font-normal text-foreground/45">(optioneel)</span>
                    </label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      title="Optioneel: foto van toestel of schermfout (max. 6MB)"
                      className={`${inputClass} cursor-pointer py-3.5 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/15`}
                      aria-invalid={errors.image ? "true" : "false"}
                      {...register("image", {
                        onChange: (e) => {
                          setFileLabel(firstFile(e.target.files)?.name ?? null);
                        },
                      })}
                      disabled={isSubmitting}
                    />
                    {fileLabel ? (
                      <p className={helpClass}>Geselecteerd: {fileLabel}</p>
                    ) : (
                      <p className={helpClass}>JPG, PNG of WebP — max. 6MB</p>
                    )}
                    {errors.image ? (
                      <p className={errorClass} role="alert">
                        {String(errors.image.message)}
                      </p>
                    ) : null}
                  </div>

                  {submitError ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{submitError}</div>
                  ) : null}

                  <p className="text-center text-xs text-foreground/50 sm:text-sm">
                    Velden met <span className="text-red-600">*</span> zijn verplicht.
                  </p>

                  <p className="text-center text-sm font-semibold text-amber-900 sm:text-base">
                    Beperkte plaatsen vandaag beschikbaar
                  </p>

                  <button
                    type="submit"
                    className={`${buttonPrimary} w-full min-h-14 py-4 text-base! font-semibold shadow-md sm:min-h-16 sm:text-lg!`}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting && !showSuccess ? (
                      <span
                        className="mr-2 inline-block size-5 shrink-0 animate-spin rounded-full border-2 border-white/35 border-t-white motion-reduce:animate-none"
                        aria-hidden
                      />
                    ) : null}
                    {isSubmitting && !showSuccess ? "Verzenden…" : showSuccess ? "Even geduld…" : "Aanvraag versturen"}
                  </button>
                </form>
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-foreground/65 sm:mt-8 sm:text-base">
              Wij nemen binnen korte tijd contact met u op
            </p>

            <FaqAccordion
              heading="Veelgestelde vragen"
              items={herstellingFaqItems}
              className="mt-10 sm:mt-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
