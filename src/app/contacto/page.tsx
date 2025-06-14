import { Metadata } from "next";
import { Resend } from "resend";
import { Form } from "~/components/pages/contact/form";

export const metadata: Metadata = {
  title: "Contacto | SETAU",
  description: "Envianos tus dudas, o realiza una llamada a nuestra oficina.",
};

export default async function ContactPage() {
  const sendEmail = async ({
    from,
    fullName,
    content,
  }: {
    from: string;
    fullName: string;
    content: string;
  }) => {
    "use server";
    const resend = new Resend(
      process.env.RESEND_API_KEY || "re_8u7BgKPz_GX4kN8kFCrCE4z1c992vRRgt"
    );
    const toEmail = process.env.RESEND_EMAIL;
    const response = await resend.emails.send({
      from: "no-reply@updates.setau.com.mx",
      to: toEmail,
      subject: `Nuevo mensaje del formulario de la web de: ${fullName} - con correo: ${from}`,
      html: content,
    });

    return response;
  };

  return (
    <div>
      <div className="bg-background">
        <div className="px-4 py-8 md:py-10 lg:p-[3.25rem]">
          <div className="mx-auto max-w-full md:max-w-6xl">
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex">
                <h1 className="text-5xl">Contáctanos hoy</h1>
              </div>
              <div className="grid place-items-stretch gap-8 lg:gap-12 lg:grid-cols-[66%_1fr] grid-rows-[auto] auto-cols-fr">
                <div className="flex flex-col mb-0">
                  <Form sendEmail={sendEmail} />
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
