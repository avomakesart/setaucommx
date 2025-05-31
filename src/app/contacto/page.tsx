import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | SETAU",
  description: "Envianos tus dudas, o realiza una llamada a nuestra oficina.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-background">
        <div className="px-4 py-8 md:py-10 lg:p-[3.25rem]">
          <div className="mx-auto max-w-full md:max-w-6xl">
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex">
                <h1 className="text-6xl">Contáctanos hoy</h1>
              </div>
              <div className="grid place-items-stretch gap-8 lg:gap-12 lg:grid-cols-[66%_1fr] grid-rows-[auto] auto-cols-fr">
                <div className="flex flex-col mb-0">
                  <form action="">
                    <div>
                      <label htmlFor="fullName" className="text-base">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 px-6 block h-9 mt-3 text-base mb-6 min-h-14 rounded-lg bg-background text-foreground border border-border"
                        placeholder="Ingresa tu nombre completo"
                        name="fullName"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-base">
                        Correo Electronico
                      </label>
                      <input
                        type="email"
                        className="w-full py-2 px-6 block h-9 text-base mt-3 mb-6 min-h-14 rounded-lg bg-background text-foreground border border-border"
                        name="email"
                        placeholder="Tu correo electronio, eg. correo@gmail.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-base">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        className="w-full py-4 px-6 block mt-3 resize-none text-base mb-6 min-h-52 rounded-lg bg-background text-foreground border border-border"
                        placeholder="Escribe tu mensaje aqui"
                        name="message"
                      />
                    </div>

                    <div className="flex">
                      <button className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-linear-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-center text-base font-medium text-white shadow-xs transition-all duration-100 ease-in-out hover:opacity-90 sm:w-fit dark:text-white">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>

                <div className="gap-5 lg:gap-8 shadow border border-border bg-white dark:text-accent flex flex-col p-6 rounded-3xl">
                  <div className="gap-4 text-base font-light leading-[1.4] flex flex-col">
                    <div>Correo Electronico:</div>
                    <div className="text-xl font-normal">
                      ventas@setau.com.mx
                    </div>
                  </div>

                  <div className="gap-4 text-base font-light leading-[1.4] flex flex-col">
                    <div>Teléfonos:</div>
                    <div className="text-xl font-normal">
                      +52 33 1600 5566 | +52 33 1294 7705
                    </div>
                  </div>

                  <div className="gap-4 text-base font-light leading-[1.4] flex flex-col">
                    <div>Ubicacion:</div>
                    <div className="text-xl font-normal">
                      Prado del Fresno 1069 Colonia Rancho de la Cruz, Tonalá
                      Jalisco, México
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
