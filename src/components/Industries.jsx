import { useEffect, useRef, useState } from "react";

function useInView(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible];
}

const industries = [
  {
    key: "retail",
    title: "Retail",
    desc: "Mejorá la liquidez del personal en picos de demanda (fines de semana, fechas clave).",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 10h16l-1 10H5L4 10Z" />
        <path d="M3 10l2-5h14l2 5" />
      </svg>
    ),
  },
  {
    key: "construction",
    title: "Construcción",
    desc: "Obras y contratistas con ciclos de pago variables; adelantos simples y trazables.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 21h18" />
        <path d="M6 21V10l6-6 6 6v11" />
      </svg>
    ),
  },
  {
    key: "finance",
    title: "Servicios financieros",
    desc: "Beneficio competitivo para atraer y retener talento en fintechs y aseguradoras.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M3 10h2m14 0h2M3 14h2m14 0h2" />
      </svg>
    ),
  },
  {
    key: "health",
    title: "Salud",
    desc: "Turnos rotativos y guardias: acceso flexible a lo ya trabajado sin fricción.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
      </svg>
    ),
  },
  {
    key: "tech",
    title: "Tecnología",
    desc: "Startups y software factories con equipos remotos y políticas modernas de beneficios.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    key: "education",
    title: "Educación",
    desc: "Instituciones con nóminas amplias: adelantos claros y administración centralizada.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 7l9-4 9 4-9 4-9-4Z" />
        <path d="M21 10v6" />
        <path d="M3 10v6l9 4 9-4" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [ref, visible] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      id="industries"
      ref={ref}
      className={`relative overflow-hidden scroll-mt-24
                  py-20 text-white transition-opacity duration-700
                  ${visible ? "opacity-100" : "opacity-0"}
                  [background:var(--color-feature-bg)]`}
      style={{
        background:
          "var(--color-feature-bg, linear-gradient(180deg,#033347 0%,#0B3A4F 100%))",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full overflow-hidden opacity-70 [animation:bob_8s_ease-in-out_infinite]">
        <svg
          className="block w-[200%] h-20 md:h-24 [animation:wave-slide_18s_linear_infinite]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,64 C180,96 360,0 540,16 C720,32 900,112 1080,104 C1260,96 1350,56 1440,40 L1440,0 L0,0 Z"
            fill="white"
          />
          <path
            d="M1440,64 C1620,96 1800,0 1980,16 C2160,32 2340,112 2520,104 C2700,96 2790,56 2880,40 L2880,0 L1440,0 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Industrias donde PayFlex marca la diferencia
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
          Nuestra solución se adapta a empresas de distintos sectores de la
          economía uruguaya.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
          {industries.map((ind, i) => (
            <article
              key={ind.key}
              className={`rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur text-center transform transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 300}ms` }}
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                {ind.icon}
              </div>
              <h3 className="font-semibold">{ind.title}</h3>
              <p className="mt-2 text-sm text-white/80">{ind.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-60 [animation:bob_10s_ease-in-out_infinite]">
        <svg
          className="block w-[200%] h-24 md:h-28 [animation:wave-slide-rev_24s_linear_infinite]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,120 C120,140 300,160 480,140 C660,120 780,60 960,60 C1140,60 1320,110 1440,130 L1440,160 L0,160 Z"
            fill="white"
          />
          <path
            d="M1440,120 C1560,140 1740,160 1920,140 C2100,120 2220,60 2400,60 C2580,60 2760,110 2880,130 L2880,160 L1440,160 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
