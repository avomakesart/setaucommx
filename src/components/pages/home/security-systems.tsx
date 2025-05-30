import React from "react";
import { Section } from "~/components/section";

const categories = [
  {
    title: "Sistemas de Gestión de Seguridad",
    items: ["BASC", "CTPAT", "OEA", "ISO 28001", "ISO 27001", "TAPA"],
  },
  {
    title: "Análisis y Gestión de Riesgos",
    items: [
      "Evaluación de riesgos operativos y logísticos",
      "Análisis de riesgos en la cadena de exportación",
      "Metodologías: FIVE STEPS, GIRO, AMEF",
      "Auditorías de Diagnóstico",
    ],
  },
  {
    title: "Auditorías",
    items: [
      "Auditorías internas y de cumplimiento",
      "Evaluación de madurez de sistemas de gestión",
    ],
  },
  {
    title: "Continuidad del Negocio",
    items: ["Planes de continuidad (BCP)", "Análisis de impacto (BIA)"],
  },
  {
    title: "Prevención de Pérdidas",
    items: [
      "Estrategias para reducir pérdidas patrimoniales",
      "Control de riesgos internos y externos",
    ],
  },
  {
    title: "Cadena de Suministro",
    items: ["Mapeo de vulnerabilidades", "Evaluación de puntos críticos logísticos"],
  },
];

export const SecuritySystems = () => {
  return (
    <Section id="sistemas-seguridad">
      <div className="flex flex-col items-center justify-between overflow-hidden gap-12">
        <div className="flex w-full items-end justify-between">
          <div className="gap-4  w-full text-left justify-start items-start flex flex-col">
            <div className="gap-x-3 gap-y-3 text-foreground tracking-[normal] whitespace-nowrap justify-start items-center text-base font-light leading-normal flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 13 12"
                fill="none"
                className="size-3"
              >
                <circle cx="6.5" cy="6" r="6" fill="currentColor"></circle>
              </svg>
              <div>Cadena de suministros</div>
            </div>

            <div className="max-w-full">
              <h2 className="text-4xl lg:text-6xl">Sistemas de Gestión de Seguridad</h2>
            </div>
          </div>
        </div>
        <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-8">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};


