"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (from: string, content: string) => {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_PORT, EMAIL_HOST } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_PORT || !EMAIL_HOST) {
    throw new Error("Veuillez configurer les variables d'environnement EMAIL_USER, EMAIL_PASS, EMAIL_PORT et EMAIL_HOST");
  }

  if (!from || !content) {
    throw new Error("L'email de l'expéditeur et le contenu du message sont requis");
  }

  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT, 10),
    secure: parseInt(EMAIL_PORT, 10) === 465, // true for port 465, false for other ports
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    // Envoyer l'email
    await transporter.sendMail({
      from: EMAIL_USER, // Utiliser l'email utilisateur comme expéditeur
      to: EMAIL_USER, // Utiliser l'email utilisateur comme destinataire
      subject: `Nouveau message de contact de ${from}`,
      text: content,
    });

    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, message: "Erreur lors de l'envoi de l'email", error };
  }
};
