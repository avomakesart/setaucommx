"use client";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { CreateEmailResponse } from "resend";
import sanitize from "xss";

export const Form = ({
  sendEmail,
}: {
  sendEmail: ({
    from,
    fullName,
    content,
  }: {
    from: string;
    fullName: string;
    content: string;
  }) => Promise<CreateEmailResponse>;
}) => {
  const [, setToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current?.execute();
  };

  return (
    <form
      action={async (formData) => {
        const fullName = formData.get("fullName") as string;
        const from = formData.get("email") as string;
        const content = formData.get("message") as string;
        await sendEmail({ from, fullName, content: sanitize(content) });
      }}
    >
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

      <HCaptcha
        sitekey={process.env.HCAPTCHA_KEY as string}
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />

      {captchaRef.current?.isReady() && <div className="mt-5" />}

      <div className="flex">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-linear-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-center text-base font-medium text-white shadow-xs transition-all duration-100 ease-in-out hover:opacity-90 sm:w-fit dark:text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
