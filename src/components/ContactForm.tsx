"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SendEmail from "@/hooks/useSendEmail";

const contactFormSchema = z.object({
    email: z.string({ message: "Veuillez entrer un email valide" }).email({ message: "Veuillez entrer un email valide" }),
    message: z.string({ message: "Veuillez entrer un message" }).min(1, { message: "Veuillez entrer un message" }).max(500, { message: "Votre message est trop long" }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsLoading(true);
        try {
            const response = await SendEmail({ from: data.email, text: data.message });
            console.log("🚀 ~ onSubmit ~ response:", response)
            if (response.ok) {
                toast({
                    title: "Message envoyé!",
                    description: "Merci pour votre message. Je vous répondrai dès que possible.",
                });
                form.reset();
            } else {
                toast({
                    title: "Erreur",
                    description: "Quelque chose s'est mal passé. Veuillez réessayer.",
                    variant: "destructive",
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-[700px] container"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-bold text-white">
                                Votre email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="elonmusk@tesla.com"
                                    {...field}
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-bold text-white">
                                Message
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Je suis intéressé par votre travail"
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading} className="w-full" variant="outline">
                    {isLoading ? (
                        "Envoi en cours..."
                    ) : (
                        <>
                            Envoyer un message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}
