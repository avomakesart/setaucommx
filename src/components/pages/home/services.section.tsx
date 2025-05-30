"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Section } from "~/components/section";

const servicesData = [
  {
    label: "Estrategias",
    content:
      "Diseñamos estrategias personalizadas de prevención de riesgos patrimoniales para proteger la cadena de suministro de tu empresa. Evaluamos los puntos críticos de tus operaciones y te ayudamos a implementar soluciones sostenibles que mitigan vulnerabilidades y fortalecen la resiliencia operativa.",
  },
  {
    label: "Empresarial",
    content:
      "Brindamos consultoría especializada a empresas de todos los sectores para optimizar procesos, reducir pérdidas y mejorar la rentabilidad. Nuestro enfoque empresarial está orientado a elevar el valor de tus operaciones mediante diagnósticos precisos, auditorías y planes de acción efectivos.",
  },
  {
    label: "Cursos",
    content:
      "Capacitamos a equipos y líderes empresariales en prevención de riesgos, buenas prácticas operativas, continuidad del negocio y cultura organizacional orientada a la seguridad. Nuestros cursos están diseñados para generar impacto real y aplicabilidad inmediata dentro de la empresa.",
  },
  {
    label: "Seguridad",
    content:
      "Auditamos, analizamos y fortalecemos los sistemas de seguridad física, logística y documental de tu empresa. Nuestra experiencia nacional nos permite detectar amenazas potenciales y proponer mejoras concretas que garantizan la protección del patrimonio corporativo.",
  },
];


export const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0].label);
  return (
    <Section className="bg-[#03256C] dark:bg-background">
      <div className="flex flex-col gap-12">
        <div className="gap-4 text-left justify-start items-start flex flex-col">
          <div className="gap-x-3 gap-y-3 text-white dark:text-accent-foreground tracking-[normal] whitespace-nowrap justify-start items-center text-base font-light leading-normal flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 13 12"
              fill="none"
              className="size-3"
            >
              <circle cx="6.5" cy="6" r="6" fill="currentColor"></circle>
            </svg>
            <div className="text-white dark:text-accent-foreground">Servicios</div>
          </div>

          <div className="max-w-[43rem]">
            <h2 className="text-4xl lg:text-6xl text-white dark:text-accent-foreground">
             Explore nuestra oferta integral de servicios
            </h2>
          </div>
        </div>
        <div className="grid-rows-[auto] auto-cols-[1fr] place-items-stretch lg:place-items-stretch lg:items-center gap-x-[3.25rem] gap-y-[3.25rem] grid-cols-[100%] lg:grid-cols-[56%_1fr] w-full grid">
          <div className="relative overflow-clip pt-[97%] rounded-3xl">
            <div className="absolute overflow-clip rounded-[inherit] inset-[0%]">
              <Image
                src="/images/road.png"
                alt="Camino de carretera"
                width={1024}
                height={720}
                className="object-cover w-full h-full absolute inset-[0%] inline-block max-w-full"
              />
            </div>
          </div>

          <div className="gap-x-12 gap-y-12 flex-col flex">
            <div className="flex flex-col">
              {servicesData.map((item) => (
                <button
                  onClick={() => setSelectedService(item.label)}
                  className={clsx(
                    "bg-[#0000] flex-col justify-center items-start flex p-0 cursor-pointer text-left align-top text-gray-400",
                    { "text-white": selectedService === item.label }
                  )}
                  key={item.label}
                >
                  <div className="bg-white dark:bg-accent-foreground w-full h-px" />
                  <div className="py-4">
                    <div className="text-4xl">{item.label}</div>
                  </div>
                  <div className="bg-white dark:bg-accent-foreground w-full h-px" />
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              <div className="block relative">
                {servicesData
                  .filter((item) => item.label === selectedService)
                  .map((service) => (
                    <div className="flex flex-col gap-10" key={service.label}>
                      <div className="text-base text-background">
                        {service.content}
                      </div>
                      <div className="flex">
                        <Link href='/contacto' className="bg-white text-accent-foreground dark:text-accent text-center tracking-[-0.008em] whitespace-nowrap cursor-pointer justify-center items-center min-h-[3rem] text-base font-medium leading-normal transition-[background-color] duration-[0.2s,transform] delay-[0.2s] flex px-6 py-2 rounded-xl">
                          Mas informacion
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
