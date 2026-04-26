import type { Metadata } from "next";

import { bodyProse, narrowPageShell, pageLead, pageTitle } from "@/lib/layout-classes";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Informatie over welke gegevens wij verzamelen, waarom, en hoe wij uw privacy respecteren.",
};

const sectionHeading =
  "mt-12 scroll-mt-24 text-xl font-semibold tracking-tight text-primary first:mt-10 sm:mt-14 sm:text-2xl sm:first:mt-12";

export default function PrivacybeleidPage() {
  const { contact } = content;
  const whatsappDigits = contact.whatsapp.replace(/\D/g, "");

  return (
    <article className={narrowPageShell}>
      <header>
        <h1 className={pageTitle}>Privacybeleid</h1>
        <p className={`${pageLead} max-w-none`}>
          Dit privacybeleid beschrijft hoe wij omgaan met uw persoonsgegevens wanneer u contact
          opneemt of gebruikmaakt van onze diensten.
        </p>
      </header>

      <div className={`${bodyProse} mt-12 max-w-none space-y-5 sm:mt-14`}>
        <section aria-labelledby="sectie-1">
          <h2 id="sectie-1" className={sectionHeading}>
            1. Welke gegevens verzamelen wij?
          </h2>
          <p>
            Afhankelijk van hoe u contact met ons opneemt, kunnen wij de volgende gegevens
            verwerken:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary/80">
            <li>Naam</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>Adres (straat, postcode, gemeente)</li>
            <li>Informatie over uw aanvraag of storing (bijvoorbeeld type toestel en probleem)</li>
            <li>Communicatie die u met ons uitwisselt (bijvoorbeeld via e-mail, telefoon of WhatsApp)</li>
          </ul>
        </section>

        <section aria-labelledby="sectie-2">
          <h2 id="sectie-2" className={sectionHeading}>
            2. Waarom verzamelen wij deze gegevens?
          </h2>
          <p>
            Wij gebruiken deze gegevens uitsluitend om u te kunnen contacteren, uw vragen of
            herstellingsaanvragen te behandelen, afspraken te plannen en onze diensten naar behoren
            te leveren. Zonder deze informatie kunnen wij uw verzoek niet of minder goed
            opvolgen.
          </p>
        </section>

        <section aria-labelledby="sectie-3">
          <h2 id="sectie-3" className={sectionHeading}>
            3. Hoe beschermen wij uw gegevens?
          </h2>
          <p>
            Wij gaan zorgvuldig om met uw gegevens. Wij beperken de toegang tot wat nodig is voor
            de uitvoering van onze diensten en gebruiken gangbare maatregelen om ongeoorloofde
            toegang of verlies te beperken, zoals zorgvuldige opslag van communicatie en beperkte
            toegang binnen ons team.
          </p>
        </section>

        <section aria-labelledby="sectie-4">
          <h2 id="sectie-4" className={sectionHeading}>
            4. Delen wij gegevens met derden?
          </h2>
          <p>
            Wij verkopen uw gegevens niet. Wij delen persoonsgegevens alleen met derden wanneer dat
            noodzakelijk is voor de uitvoering van onze dienst (bijvoorbeeld leveranciers van
            onderdelen of planning) of wanneer de wet ons daartoe verplicht. In die gevallen zorgen
            wij ervoor dat dit beperkt en passend gebeurt.
          </p>
        </section>

        <section aria-labelledby="sectie-5">
          <h2 id="sectie-5" className={sectionHeading}>
            5. Contact informatie
          </h2>
          <p>
            Voor vragen over dit privacybeleid of over de verwerking van uw gegevens kunt u contact
            met ons opnemen:
          </p>
          <dl className="not-prose mt-6 space-y-6 rounded-2xl border border-primary/10 bg-white p-6 shadow-soft-md sm:p-8">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                Telefoon
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                E-mail
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                Adres
              </dt>
              <dd className="mt-1 text-foreground/90">{contact.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  className="font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.whatsapp}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
}
