"use client"
import React, { ReactNode, useMemo } from "react";
import { Section } from "~/components/section";
import { ShadowIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useTheme } from "next-themes";


export const Values = () => {
  const { theme } = useTheme()

  const valuesData = useMemo(
    () => [
      {
        label: "Centrado en el Cliente",
        content:
          "Creamos sinergia con nuestros clientes superando sus expectativas y generando relaciones de confianza a largo plazo.",
        },
      {
        label: "Ética",
        content:
          "Nos conducimos con responsabilidad y estricto apego a nuestra profesión, garantizando un actuar justo y profesional en todo momento.",
        },
      {
        label: "Honestidad e Integridad",
        content:
          "Somos coherentes con lo que decimos y hacemos. Actuamos con transparencia, sinceridad y compromiso hacia nuestros clientes y aliados.",
      },
      {
        label: "Rentabilidad",
        content:
          "Nuestro enfoque está en generar valor real y utilidad para nuestros clientes, asegurando que nuestras soluciones sean sostenibles y eficientes.",
      },
      {
        label: "Mejora Continua",
        content:
          "Nos esforzamos por gestionar mejores experiencias y elevar constantemente la calidad de nuestros servicios mediante la innovación y el aprendizaje constante.",
      },
      {
        label: "Congruencia",
        content:
          "Ejecutamos nuestros servicios con verdad, coherencia y alineación entre lo que pensamos, decimos y hacemos.",
      },
      {
        label: "Servicios",
        content:
          "Somos especialistas en consultoría para la prevención de riesgos patrimoniales, ayudando a proteger la cadena de suministro, optimizar procesos y fortalecer la seguridad organizacional.",
      },
    ],
    []
  );


  return (
    <Section id="info">
      <div className=" py-[3.12rem] mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-12">
          <div className="flex w-full justify-start items-start flex-col gap-6">
            <div className="gap-4 text-left justify-start items-start flex flex-col">
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
                <div className="text-foreground">Nuestros Valores</div>
              </div>

              <div className="max-w-[43rem]">
                <h2 className="text-4xl text-foreground">
                  Descubre los valores que nos definen como empresa
                </h2>
              </div>
            </div>
          </div>

          <div className="grid auto-cols-fr lg:grid-cols-2 grid-rows-[auto] gap-4">
            {valuesData.map((item) => (
              <IconCard
                key={item.label}
                icon={<ShadowIcon />}
                title={item.label}
                description={item.content}
                isActive={theme !== 'system'}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export function IconCard({
  icon,
  title,
  description,
  isActive,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  isActive?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex border rounded-2xl border-border gap-x-10 gap-y-10 justify-start items-start min-w-[20.16rem] font-light leading-[1.714] px-6 py-8 flex-col",
        { "bg-blue-500 border-blue-500": isActive }
      )}
    >
      <div
        className={clsx("max-w-8 rounded-full text-accent bg-blue-500 p-2", {
          "text-accent-foreground bg-white": isActive,
        })}
      >
        {icon}
      </div>
      <div
        className={clsx("flex flex-col items-start justify-start gap-2.5", {
          "text-accent": isActive,
        })}
      >
        <div className="text-xl capitalize font-normal">{title}</div>
        <div className="w-full max-w-[32.6rem]">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
