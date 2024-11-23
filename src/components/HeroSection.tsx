"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Adrien from "@/public/poua_adrien.png";
import { ButtonBlackEffect } from "./Button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";


export default function HeroSection() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 relative overflow-hidden">
      <LeftSection />
      <RightSection />
      <p className="text-primary text-9xl rotate-90 absolute right-0 top-1/2 -translate-y-1/2 opacity-50">
        DEV
      </p>
    </main>
  );
};

const RightSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex justify-start"
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden rounded-full shrink-0 aspect-square md:w-[300px] w-48 shadow-primary shadow-md m-5">
        <CardContent className="p-0">
          <Image
            src={Adrien}
            alt="Portrait d'Adrien Poua"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const LeftSection = () => {
  return (
    <motion.div
      className={cn("flex flex-col items-center justify-center w-fit ml-auto")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-row mb-5"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-center flex items-center text-4xl md:text-6xl font-semibold">
          <span className="relative after:bg-gradient-to-r from-primary to-primary/10 after:p-1 after:shadow-xl after:w-full after:rounded-lg after:filter after:absolute after:-bottom-1 after:left-0 inline-block animate-wave">
            Poua
          </span>
          <span className="inline-block ml-2">Adrien</span>
        </h1>
      </motion.div>
      <h2 className="text-xl md:text-2xl text-center mb-16 font-semibold">
        Développeur fullstack
      </h2>
      <motion.div
        className="flex md:gap-5 gap-2 flex-wrap justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contact.map((item) => (
          <ButtonBlackEffect key={item.name} href={item.link} text={item.name} icon={item.img} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const contact = [
  {
    link: "https://github.com/AdrienPoua",
    img: "/github.png",
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/adrien-poua/",
    img: "/linkedin.png",
    name: "Linkedin",
  },
  {
    link: "mailto:adrien.poua@gmail.com",
    img: "/mail.png",
    name: "Email",
  },
]
