import Image from 'next/image'
import React from 'react'
import { Section } from '~/components/section'

export const Info = () => {
  return (
    <Section id="info">
      <div className="py-[3.12rem] px-4 md:px-0">
        <div className="flex flex-col gap-12 justify-start items-center  lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative overflow-clip pt-[86%] min-w-full rounded-3xl">
              <div className="overflow-clip inset-0 absolute rounded-[inherit]">
                <Image
                  src="/images/security.png"
                  alt="Japan"
                  width={1200}
                  height={600}
                  className="absolute inset-0 size-full object-cover max-w-full inline-block"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-start items-start flex-col gap-6 md:order-1 order-[-1]">
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
                <div className="text-foreground">¿Quiénes Somos?</div>
              </div>

              <div className="max-w-[43rem]">
                <h2 className="text-4xl text-foreground">
                  Tu socio estratégico en la gestión de riesgos
                </h2>
              </div>

              <p>
                En SETAU (Security Training &amp; Auditing), nos dedicamos a
                fortalecer la seguridad patrimonial y operativa de empresas
                mediante servicios de consultoría, auditoría y capacitación.
                Ayudamos a nuestros clientes a cumplir con estándares
                internacionales, reduciendo riesgos, mejorando su productividad
                y garantizando la continuidad de sus negocios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
