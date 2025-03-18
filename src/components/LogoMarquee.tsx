interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "SATA",
    logo: "/partners/sata.svg"
  },
  {
    name: "VISOMAX",
    logo: "/partners/VISOMAX_Logo_visomax_aktuell_black.png"
  },
  {
    name: "EUROSIDER",
    logo: "/partners/MARCHIO-MILLI-INDUSTRIES-EUROSIDER-TECNOLOGIA-E-INNOVAZIONE-SISTEMI-DI-SEPAZIONE-ARIA-SISTEMI-OSSIGENO-SISTEMI-AZOTO.ai_.png"
  },
  {
    name: "PELATEC",
    logo: "/partners/Pelatec-quer-safety.png"
  },
  {
    name: "CROPPED",
    logo: "/partners/cropped.png"
  },
  {
    name: "HEDSON",
    logo: "/partners/Hedson.svg"
  }
];

export function LogoMarquee() {
  return (
    <div className="relative flex overflow-hidden bg-background/40 backdrop-blur-sm border-y border-white/10">
      <div className="animate-marquee py-12 flex min-w-full shrink-0">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-[200px] mx-8 flex items-center justify-center group"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <div className="animate-marquee py-12 flex min-w-full shrink-0">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-[200px] mx-8 flex items-center justify-center group"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}