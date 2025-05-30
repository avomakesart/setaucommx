"use client";
import { Section } from "~/components/section";
import { IconCard } from "./values";
import { useTheme } from "next-themes";

export const OurClients = () => {
  const { theme } = useTheme();
  const companies = [
    "Logística y transporte",
    "Manufactura",
    "Comercio exterior",
    "Seguridad privada",
    "Almacenamiento y distribución",
    "Sector aduanal",
  ];
  return (
    <Section id="info">
      <div className="py-[3.12rem] mx-auto px-4 lg:px-12">
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
                <div className="text-foreground">Clientes</div>
              </div>

              <div className="max-w-full">
                <h2 className="text-3xl text-foreground">
                  Nos enorgullece colaborar con empresas nacionales e
                  internacionales en sectores como:
                </h2>
              </div>

              <div className="grid w-full auto-cols-fr lg:grid-cols-2 xl:grid-cols-3 grid-rows-[auto] gap-4">
                {companies.map((item) => (
                  <IconCard
                    key={item}
                    title={item}
                    description={""}
                    isActive={theme !== "system"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
