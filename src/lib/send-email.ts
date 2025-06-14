import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_8u7BgKPz_GX4kN8kFCrCE4z1c992vRRgt");

const originEmail = process.env.RESEND_EMAIL || "sistemas@setau.com.mx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendEmail = async (prevState: any, formData: FormData) => {
  const fullName = formData.get("fullName") as string;
  const from = formData.get("email") as string;
  const content = formData.get("message") as string;

  const response = await resend.emails.send({
    from: from,
    to: originEmail,
    subject: `Nuevo mensaje del formulario de la web de: ${fullName}`,
    html: content,
  });

  return response;
};
