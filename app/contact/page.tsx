import { cardInteractive } from "@/lib/button-classes";
import { narrowPageShell, pageLead, pageTitle } from "@/lib/layout-classes";
import { content } from "@/lib/content";

export default function ContactPage() {
  const { contact, contactIntro } = content;
  const whatsappDigits = contact.whatsapp.replace(/\D/g, "");
  const mapQuery = encodeURIComponent(contact.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className={narrowPageShell}>
      <h1 className={pageTitle}>Contact</h1>
      <p className={`${pageLead} max-w-none`}>{contactIntro}</p>

      <dl
        className={`mt-12 space-y-8 rounded-2xl border border-primary/10 bg-white p-6 shadow-soft-md sm:p-8 ${cardInteractive}`}
      >
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Telefoon
          </dt>
          <dd className="mt-1">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="break-words text-base font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90 md:text-lg"
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
              className="break-words text-base font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90 md:text-lg"
            >
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Adres
          </dt>
          <dd className="mt-1 break-words text-base text-foreground md:text-lg">{contact.address}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            WhatsApp
          </dt>
          <dd className="mt-1">
            <a
              href={`https://wa.me/${whatsappDigits}`}
              className="break-words text-base font-medium text-primary transition-all duration-300 ease-in-out hover:underline hover:opacity-90 md:text-lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {contact.whatsapp}
            </a>
          </dd>
        </div>
      </dl>

      <section className="mt-10 rounded-2xl border border-primary/10 bg-white p-4 shadow-soft-md ring-1 ring-primary/6 sm:mt-12 sm:p-5">
        <h2 className="px-1 text-sm font-semibold uppercase tracking-wide text-foreground/55">
          Locatie
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-primary/10 bg-background">
          <div className="aspect-16/10 w-full sm:aspect-16/8">
            <iframe
              title={`Google Maps locatie: ${contact.address}`}
              src={mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
