import Image from "next/image";
import React from "react";
import { Section } from "~/components/section";

export const About = () => {
  return (
    <Section id="about" className="lg:my-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="justify-center items-center min-w-full lg:min-w-[34%] flex relative overflow-clip pt-[60%] lg:pt-[33%] rounded-3xl">
          <div className="absolute overflow-clip rounded-[inherit] inset-[0%]">
            <Image
              src="/images/cameras.png"
              alt="Cameras photo"
              width={767}
              height={350}
              className="object-cover size-full absolute inset-0 max-w-full inline-block align-middle"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-16">
          <div className="flex">
            <div className="text-2xl">
              Somos especialistas en consultoría para la prevención de riesgos
              patrimoniales, capacitando y auditando a empresas a nivel nacional
              para proteger su cadena de suministro, optimizar sus procesos y
              aumentar el valor de sus operaciones.
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="gap-x-[0.62rem] gap-y-[0.62rem] flex-col justify-start items-start w-full flex pl-0 pr-5">
              <div className="text-4xl">100%</div>
              <div className="text-base text-foreground/70">
                Satisfacción total del cliente
              </div>
            </div>
            <div className="gap-x-[0.62rem] gap-y-[0.62rem] flex-col justify-start items-start w-full flex pl-0 pr-5">
              <div className="text-4xl">100%</div>
              <div className="text-base text-foreground/70">
                Optimizacion de procesos empresariales
              </div>
            </div>
            <div className="gap-x-[0.62rem] gap-y-[0.62rem] flex-col justify-start items-start w-full flex pl-0 pr-5">
              <div className="text-4xl">100%</div>
              <div className="text-base text-foreground/70">
                Aumento de valor en operaciones
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
