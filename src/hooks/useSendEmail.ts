"use client";
import { z } from "zod";

const propsSchema = z.object({
  from: z.string().email(),
  text: z.string(),
});

type Props = z.infer<typeof propsSchema>;

export default async function useSendEmail({ from, text }: Props) {
  return await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, text }),
  });
}
