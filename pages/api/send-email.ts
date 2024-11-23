"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import mg from "@/lib/mailgun";
import { z } from "zod";

const bodySchema = z.object({
  from: z.string().email(),
  text: z.string().min(1).max(500),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { from, text } = bodySchema.parse(req.body);

  const payload = {
    from: "Mon portfolio <postmaster@mail.adrienpoua.fr>",
    to: "adrien.poua@gmail.com",
    subject: "Portfolio Contact, from " + from,
    text,
  };

  try {
    await mg.messages.create("mail.adrienpoua.fr", payload);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Mailgun Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
