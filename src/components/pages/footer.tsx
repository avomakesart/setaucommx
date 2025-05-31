import Link from "next/link";
import React, { Fragment } from "react";

export const Footer = () => {
  const footerData = {
    about: {
      title: "Sobre Setau",
      content:
        "Somos una firma especializada en consultoría para la prevención de riesgos patrimoniales. Ayudamos a empresas a proteger su cadena de suministro, optimizar procesos y fortalecer su seguridad operativa.",
    },
    links: {
      title: "Enlaces",
      items: [
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/nosotros" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
    contact: {
      title: "Contacto",
      items: [
        "Email: ventas@setau.com.mx",
        "Tel: +52 33 1600 5566 | +52 33 1294 7705",
        "Prado del Fresno 1069 Colonia Rancho de la Cruz, Tonalá Jalisco, México",
      ],
    },
    legal: {
      copyright: `© ${new Date().getFullYear()} Setau. Todos los derechos reservados.`,
    },
  };

  return (
    <footer className="bg-[#03256C] dark:bg-background">
      <div className="px-4 lg:px-14 pt-16 pb-13">
        <div className="max-w-full w-full mx-auto lg:max-w-7xl">
          <div className="flex gap-8 mb-16 justify-between items-center">
            <div className="text-xl dark:text-foreground text-background">
              Inicia el cambio hoy
            </div>
            <div className="flex">
              <Link
                href="/contacto"
                className="bg-[white] text-foreground dark:text-accent text-center tracking-[-0.008em] whitespace-nowrap cursor-pointer justify-center items-center min-h-[3rem] text-base font-medium leading-normal transition-[background-color] duration-[0.2s,transform] delay-[0.2s] flex px-6 py-2 rounded-xl"
              >
                Contactanos
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="h-px w-full bg-white" />
            <div className="flex flex-col md:flex-row justify-between gap-20">
              <div className="gap-x-12 gap-y-12 justify-between flex flex-col">
                <div className="max-w-[32rem] w-full">
                  <div className="text-base text-background dark:text-foreground">
                    {footerData.about.content}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-20">
                <div className="flex flex-col gap-2">
                  <span className="md:pl-3 text-background dark:text-foreground font-semibold">
                    {footerData.links.title}
                  </span>
                  {footerData.links.items.map((item) => (
                    <Fragment key={item.label}>
                      <Link
                        href={item.href}
                        className="text-background dark:text-foreground whitespace-nowrap cursor-pointer justify-start items-center text-base font-light leading-normal flex py-3 md:p-3"
                      >
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="md:pl-3 text-background dark:text-foreground font-semibold">
                    {footerData.contact.title}
                  </span>
                  {footerData.contact.items.map((item) => (
                    <div
                      key={item}
                      className="text-background dark:text-foreground justify-start items-center text-base font-light leading-normal flex py-3 md:p-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-white mt-10" />
        <div className="text-center mt-10 text-white">
          {footerData.legal.copyright}
        </div>
      </div>
    </footer>
  );
};
