import Image from "next/image";
import React from "react";
import { LinkButton } from "~/components/ui/link-button";

export const AboutHero = () => {
  return (
    <section className="w-full pt-12 pb-8 px-4 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16">
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          <h1 className="text-4xl md:text-7xl font-normal text-accent-foreground leading-tight md:leading-[1.1] mb-6">
            Su socio estratégico para el éxito empresarial
          </h1>
          <p className="text-base text-gray-600 mb-8 max-w-xl">
            Adáptese fácilmente a los cambios y escale sus operaciones con
            nuestros servicios, diseñados para impulsar el crecimiento de su
            negocio.
          </p>
          <LinkButton href="#info">Conoce mas</LinkButton>
        </div>
        {/* Right: Image + Card */}
        {/* <div className="flex-1 flex flex-col items-center relative w-full max-w-full xl:max-w-[480px]"> */}
        <div className="rounded-3xl relative overflow-clip pt-[112%]">
          <div className="overflow-clip inset-0 absolute rounded-[inherit]">
            <Image
              src="/images/business-2.png"
              alt="Business Woman"
              width={600}
              height={600}
              className="object-cover w-full absolute max-w-full inline-block inset-0 h-full"
              priority
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
