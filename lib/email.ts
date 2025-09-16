import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailValues {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: SendEmailValues) {
  try {
    const { data, error } = await resend.emails.send({
      from: "CDMAN <onboarding@resend.dev>",
      to,
      subject,
      text,
    });

    if (error) {
      console.error('Error sending email : ', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log('Email sent successfully : ', data);
    return Response.json(data);
  } catch (error) {
    console.error('Error sending email (catch error) : ', error);
    return Response.json({ error }, { status: 500 });
  }
}