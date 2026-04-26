export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type BrandItem = {
  name: string;
};

export type TrustPoint = {
  title: string;
  description: string;
};

export type ReviewItem = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export type HowWeWorkStep = {
  title: string;
  description: string;
};

export type ServiceExtraPoint = {
  title: string;
  description: string;
};

export type DeviceGalleryItem = {
  id: string;
  label: string;
  imageSrc: string;
};

export const content = {
  companyName: "Service van Witgoed",

  heroTitle: "Herstelling van huishoudtoestellen binnen 24u",
  heroDescription: "Snel, betrouwbaar en professioneel in België",

  heroKeyPoints: [
    "€69 diagnosekost",
    "7/7 beschikbaar",
    "Alle merken",
    "Snelle service",
  ] as const,

  heroVisualImage: {
    src: "/images/hero/hero-repair-new.jpg",
    alt: "Professionele witgoedherstelling aan huis",
  } as const,

  aboutHeroImage: {
    src: "/images/about/technician.jpg",
    alt: "Ervaren technicus aan het werk",
  } as const,

  trustStrip: [
    {
      title: "Meer dan 1000 tevreden klanten",
      description: "Vertrouwen in heel België",
    },
    {
      title: "Snelle interventie",
      description: "Binnen 24 uur bij u thuis",
    },
    {
      title: "Professionele service",
      description: "Ervaren witgoedtechnici",
    },
    {
      title: "Garantie op herstellingen",
      description: "Zorgeloos verder",
    },
  ] as const,

  pricingSectionTitle: "Transparante prijzen",
  pricingSection: {
    diagnoseLabel: "Diagnose",
    diagnosePrice: "€69",
    bullets: [
      "Prijs afhankelijk van probleem",
      "Geen verborgen kosten",
      "Snelle en eerlijke service",
    ],
  } as const,

  homeWhyChooseTitle: "Waarom kiezen voor ons?",
  homeWhyChooseSubtitle:
    "Van eerste contact tot werkend toestel, duidelijk, snel en betrouwbaar.",
  homeWhyChoose: [
    {
      title: "24u service",
      description:
        "U spoort ons op wanneer het u past; wij streven naar interventie binnen 24 uur.",
    },
    {
      title: "Ervaren techniekers",
      description:
        "Gespecialiseerd in diagnose en herstel van alle gangbare merken en types.",
    },
    {
      title: "Snelle interventie",
      description:
        "Efficiënte planning en duidelijke afspraken, zodat u niet onnodig lang wacht.",
    },
    {
      title: "Betrouwbaar",
      description:
        "Transparante communicatie, eerlijke prijzen en kwaliteitsonderdelen waar mogelijk.",
    },
  ] as const,

  featuredBrandsHome: [
    { name: "Bosch", slug: "bosch" },
    { name: "Samsung", slug: "samsung" },
    { name: "LG", slug: "lg" },
    { name: "Siemens", slug: "siemens" },
    { name: "Whirlpool", slug: "whirlpool" },
  ] as const,

  heroCallButtonLabel: "Bel nu",
  heroWhatsappButtonLabel: "WhatsApp",

  aboutSectionTitle: "Over ons",
  aboutReadMoreLabel: "Ontdek ons verhaal",
  aboutPreview:
    "Wij zijn een gespecialiseerd team dat huishoudtoestellen herstelt met kwaliteitsonderdelen en duidelijke communicatie. Uw comfort staat centraal, van eerste contact tot een werkend toestel.",

  aboutText: `
Wij zijn een gespecialiseerd bedrijf in het herstellen en onderhouden van huishoudelijke elektrische toestellen, zoals wasmachines, droogkasten en vaatwassers.

Met onze ervaring en vakkennis bieden wij snelle en nauwkeurige service, waarbij we werken met kwalitatieve en duurzame onderdelen om een optimale werking te garanderen.

Onze prioriteit is uw comfort, met een betrouwbare service en een klantgerichte aanpak waarop u kunt vertrouwen.
`,

  aboutStory: `
Ons verhaal begon met een eenvoudig idee, mensen helpen hun toestellen te herstellen in plaats van ze weg te gooien.

Na verloop van tijd groeide deze passie uit tot een professioneel bedrijf, gebouwd op ervaring en vertrouwen. Door de jaren heen hebben wij honderden huishoudelijke toestellen hersteld, waaronder wasmachines, droogkasten en vaatwassers.

Wij geloven dat elk toestel een tweede leven verdient. Daarom streven wij ernaar om de beste onderhoudsoplossingen te bieden, met hoge kwaliteit en een snelle service.

Vandaag zijn wij trots dat wij een betrouwbare keuze zijn geworden voor vele klanten die op ons rekenen om hun toestellen in topconditie te houden.
`,

  teamExperience: `
Ons team bestaat uit ervaren en gekwalificeerde technici, gespecialiseerd in het herstellen van huishoudelijke toestellen.

Met jarenlange ervaring werken wij efficiënt aan het herstellen van wasmachines, droogkasten en vaatwassers.

Wij maken gebruik van moderne technieken en kwalitatieve onderdelen om een snelle en betrouwbare service te garanderen.

Onze vakkennis en toewijding maken ons tot een betrouwbare partner voor het onderhouden en herstellen van uw toestellen.
`,

  aboutStoryTitle: "Ons verhaal",
  teamExperienceTitle: "Ons team en expertise",
  teamExperienceSubtitle:
    "Kwaliteit, duidelijkheid en respect voor uw tijd.",
  teamExperienceHighlights: [
    "Gekwalificeerde technici",
    "Moderne diagnose & herstel",
    "Klantgerichte service",
  ],

  overOnsPageIntro:
    "Ontdek wie wij zijn, hoe wij werken en waarom klanten op ons vertrouwen voor het herstellen van witgoed in België.",

  howWeWorkTitle: "Hoe wij werken",
  howWeWorkSubtitle: "In drie duidelijke stappen van melding tot herstel.",
  howWeWorkSteps: [
    {
      title: "Contact opnemen",
      description:
        "Bel, mail of schrijf ons via WhatsApp. Wij plannen een afspraak en horen graag wat er mis is met uw toestel.",
    },
    {
      title: "Diagnose",
      description:
        "Een technicus spoort de oorzaak nauwkeurig op met professioneel materiaal en geeft u helder uitleg over de opties.",
    },
    {
      title: "Herstelling",
      description:
        "Na uw akkoord herstellen wij met kwaliteitsonderdelen waar mogelijk en testen we of alles weer naar behoren werkt.",
    },
  ] satisfies HowWeWorkStep[],

  overOnsCtaTitle: "Klaar voor een afspraak?",
  overOnsCtaDescription:
    "Laat uw toestel door ons nakijken. Wij helpen u snel verder met een duidelijke planning en eerlijk advies.",

  devicesSectionTitle: "Toestellen die wij herstellen",
  devicesSectionSubtitle:
    "Van witgoed tot ingebouwde apparatuur, wij kennen uw merk en het type storing.",

  homeServicesSectionTitle: "Onze diensten",
  homeServicesSectionSubtitle:
    "Van diagnose tot herstel, wij begeleiden u met duidelijke uitleg en duurzame oplossingen.",

  servicesIntro: "Wij herstellen onder meer de volgende toestellen:",

  dienstenPageTitle: "Onze Diensten",
  dienstenPageIntro:
    "Herstelling, onderhoud en installatie van witgoed in Brussel en omstreken. Ontdek onze kernactiviteiten, merken en werkgebied, plus onze specialisaties per type toestel.",

  dienstenOverviewTitle: "Overzicht",
  dienstenOverviewSubtitle:
    "Drie duidelijke pijlers, wat wij doen, voor welke merken, en waar wij actief zijn.",

  dienstenCoreServices: [
    {
      id: "herstelling",
      title: "Herstelling",
      summary:
        "Ervaren technici, transparante prijsafspraken en herstel met aandacht voor veiligheid en merkprocedures.",
      description:
        "Storingen worden nauwkeurig vastgesteld, u krijgt een duidelijke offerte en wij herstellen met passende onderdelen waar dat kan en nodig is.",
    },
    {
      id: "onderhoud",
      title: "Onderhoud",
      summary:
        "Controle, reiniging en preventieve aanpassingen om slijtage, lawaai en energieverlies te beperken.",
      description:
        "Periodiek onderhoud beperkt onverwachte pech en houdt uw toestel efficiënt, veilig en langer in topconditie.",
    },
    {
      id: "installatie",
      title: "Installatie",
      summary:
        "Netjes ingemeten, veilig aangesloten en getest, inclusief uitleg over bediening en onderhoud.",
      description:
        "Nieuwe toestellen worden correct geplaatst, nagekeken op afdichting en aansluiting, en met u getest vóór oplevering.",
    },
  ] as const,

  dienstenBrandsPanelTitle: "Merken",
  dienstenBrandsPanelSubtitle:
    "Wij herstellen en onderhouden toestellen van deze fabrikanten, met passende onderdelen en procedures.",

  dienstenLocationsPanelTitle: "Regio",
  dienstenLocationsPanelSubtitle: "Onder andere actief in de volgende regio’s:",
  dienstenServiceAreas: [
    "Brussel",
    "Anderlecht",
    "Dilbeek",
    "Vlaams, Brabant",
  ] as const,

  dienstenApplianceSectionTitle: "Specialisaties per toestel",
  dienstenApplianceSectionSubtitle:
    "Van wasmachine tot microgolf, wij kennen uw type toestel en de meest voorkomende storingen.",

  servicesExtraTitle: "Waar u op kunt rekenen",
  servicesExtraSubtitle: "Drie pijlers die onze werkwijze dragen.",
  servicesExtraPoints: [
    {
      title: "Snelle service",
      description:
        "Wij streven naar een vlotte planning en duidelijke afspraken, zodat u niet onnodig lang zonder toestel zit.",
    },
    {
      title: "Professioneel herstel",
      description:
        "Juiste diagnose, ervaren technici en herstel dat aansluit op de vereisten van uw apparaat.",
    },
    {
      title: "Kwaliteitsonderdelen",
      description:
        "Waar mogelijk werken wij met betrouwbare onderdelen voor een duurzaam en veilig resultaat.",
    },
  ] satisfies ServiceExtraPoint[],

  dienstenCtaTitle: "Vragen of een herstelling aanvragen?",
  dienstenCtaDescription:
    "Neem vandaag nog contact op. Wij helpen u graag verder met een afspraak of vrijblijvend advies.",

  services: [
    {
      id: "wasmachine",
      title: "Herstelling van wasmachines",
      description:
        "Lekkages, trommel, elektronica of afslijting, wij diagnosticeren en herstellen alle gangbare merken.",
    },
    {
      id: "droogkast",
      title: "Herstelling van droogkasten",
      description:
        "Problemen met verwarming, sensoren of afvoer? Wij zorgen voor een veilige en efficiënte werking.",
    },
    {
      id: "koelkast",
      title: "Herstelling van koelkasten",
      description:
        "Koeling, thermostaat of ventilator, snelle interventie om voedselverspilling te beperken.",
    },
    {
      id: "vaatwasser",
      title: "Herstelling van vaatwassers",
      description:
        "Van pompen tot sproeiarmen en elektronica, uw vaatwasser weer proper en stil.",
    },
    {
      id: "oven",
      title: "Herstelling van ovens",
      description:
        "Verwarmingselementen, deuren en regeling, veilig hersteld volgens de fabrieksspecificaties.",
    },
    {
      id: "microgolf",
      title: "Herstelling van microgolven",
      description:
        "Magnetron, bediening of deurschakelaar, wij herstellen compact en zorgvuldig.",
    },
  ] satisfies ServiceItem[],

  brandsSectionTitle: "Merken die wij herstellen",
  brandsSectionSubtitle:
    "Wij werken met onderdelen en procedures die passen bij toonaangevende fabrikanten.",

  brands: [
    { name: "Bosch" },
    { name: "Siemens" },
    { name: "Miele" },
    { name: "Samsung" },
    { name: "LG" },
    { name: "Whirlpool" },
    { name: "AEG" },
    { name: "Electrolux" },
  ] satisfies BrandItem[],

  whyChooseUsTitle: "Waarom kiezen voor ons?",
  whyChooseUsSubtitle:
    "Snelle interventie, eerlijke communicatie en vakmanschap dat telt.",
  trustPoints: [
    {
      title: "Snelle service",
      description:
        "Wij streven naar een snelle planning en duidelijke afspraken, zodat u weer verder kunt.",
    },
    {
      title: "Ervaren technici",
      description:
        "Jarenlange ervaring met witgoed en moderne diagnose, juiste oorzaak, duurzaam herstel.",
    },
    {
      title: "Betrouwbaarheid",
      description:
        "Transparante communicatie en kwalitatieve onderdelen waar dat kan en nodig is.",
    },
    {
      title: "Klantgericht",
      description:
        "Heldere uitleg voor en na de interventie, zodat u weet waar u aan toe bent.",
    },
  ] satisfies TrustPoint[],

  reviewsSectionTitle: "Wat klanten zeggen",
  reviewsSectionSubtitle: "Echte meningen van klanten uit heel België.",
  reviews: [
    {
      name: "Sophie V.",
      location: "Brussel",
      rating: 5,
      text: "Wasmachine deed het plots niet meer. Binnen 24 uur iemand ter plaatse, duidelijke uitleg en correct hersteld.",
    },
    {
      name: "Marc D.",
      location: "Antwerpen",
      rating: 5,
      text: "Droogkast maakte vreemd geluid. Technicus op tijd, netjes werk en de reparatie houdt perfect stand.",
    },
    {
      name: "Fatima K.",
      location: "Gent",
      rating: 5,
      text: "Koelkast koelde onvoldoende. Snel geholpen, geen verborgen kosten. Echt een aanrader.",
    },
    {
      name: "Thomas B.",
      location: "Leuven",
      rating: 5,
      text: "Vaatwasser lekte. Duidelijke diagnose tegen €69 en eerlijke prijs voor het onderdeel. Top!",
    },
    {
      name: "Ann L.",
      location: "Namen",
      rating: 5,
      text: "Professionele service van A tot Z. Ze bellen terug, komen op afspraak en het toestel werkt weer.",
    },
  ] satisfies ReviewItem[],

  ctaSectionTitle: "Probleem met uw toestel? Wij helpen u vandaag nog!",
  ctaSectionDescription:
    "Bel, WhatsApp of vraag uw herstelling online aan, wij plannen zo snel mogelijk een interventie.",
  ctaButtonLabel: "Herstelling aanvragen",

  contactIntro:
    "Neem contact op voor een herstelling of vraag, wij helpen u graag verder.",

  devicesGallery: [
    {
      id: "wasmachine",
      label: "Wasmachine",
      imageSrc: "/images/devices/washing-machine.jpg",
    },
    {
      id: "vaatwasser",
      label: "Vaatwasser",
      imageSrc: "/images/devices/dishwasher.jpg",
    },
    {
      id: "droogkast",
      label: "Droogkast",
      imageSrc: "/images/devices/dryer.jpg",
    },
    {
      id: "koelkast",
      label: "Koelkast",
      imageSrc: "/images/devices/fridge.jpg",
    },
    {
      id: "oven",
      label: "Oven",
      imageSrc: "/images/devices/oven.jpg",
    },
    {
      id: "microgolf",
      label: "Microgolf",
      imageSrc: "/images/devices/microwave.jpg",
    },
  ] satisfies DeviceGalleryItem[],

  devices: [
    "Wasmachine",
    "Droogkast",
    "Koelkast",
    "Vaatwasser",
    "Oven",
    "Microgolf",
  ],

  contact: {
    phone: "+32466037452",
    email: "abrashmohammed151@gmail.com",
    address: "Brussel, België",
    whatsapp: "32466037452",
  },
};
