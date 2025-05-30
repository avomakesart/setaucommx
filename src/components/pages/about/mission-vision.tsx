import { EyeOpenIcon, TargetIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Section } from "~/components/section";

export const MissionVision = () => {
  return (
    <Section id="info">
      <div className="py-[3.12rem] mx-auto px-4 md:px-0">
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
                <div className="text-foreground">Nuestros pilares</div>
              </div>

              <div className="max-w-[43rem]">
                <h2 className="text-4xl text-foreground">
                  Conoce nuestros fundamentos como empresa
                </h2>
              </div>
            </div>
          </div>

          <div className="grid auto-cols-fr md:grid-cols-2 grid-rows-[auto] gap-4">
            <MissionVisionCard
              icon={<TargetIcon />}
              title="Misión"
              description="Proveer servicios de capacitación, consultoría y auditoría a nivel nacional, con el fin de
lograr que los procesos que forman parte de las áreas en las cuales actuamos lo hagan
bajo los mejores estándares de eficiencia y efectividad; asegurando un valor agregado a
nuestros servicios que redunde en el retorno de la inversión de nuestros clientes."
            />
            <MissionVisionCard
              icon={<EyeOpenIcon />}
              title="Visión"
              description="Estamos decididos a ser reconocidos como la mejor opción profesional en entrenamiento,
consultoría y soluciones integrales en prevención de riesgos patrimoniales, para la
pequeña, mediana y gran empresa."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export function MissionVisionCard({
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
      <div className="flex items-center gap-3">
        <div
          className={clsx("max-w-8 rounded-full text-accent bg-blue-500 p-2", {
            "text-accent-foreground bg-white": isActive,
          })}
        >
          {icon}
        </div>
        <div className="text-xl capitalize font-normal">{title}</div>
      </div>

      <div
        className={clsx("flex flex-col items-start justify-start gap-2.5", {
          "text-accent": isActive,
        })}
      >
        <div className="w-full max-w-[32.6rem]">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
