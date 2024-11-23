"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { wavyAnimation } from "@/animations";



const Item = ({ url, delay }: { url: string, delay: number }) => {
  return (
    <motion.div
      variants={wavyAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className=" aspect-square overflow-hidden rounded-full shrink-0"
      transition={{ yoyo: Infinity, duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: delay * 0.25 }}
    >
      <Image src={url} width={80} height={80} alt="stack" className="aspect-square size-14 md:size-20" objectFit="cover" />
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer
      className="bg-black py-8 flex justify-center gap-4 px-10"
    >
      {["/nextjs.png",
        "/react.png",
        "/typescript.png",
        "/framer.png"].map((url: string, index: number) => (
          <Item url={url} key={url} delay={index} />
        ))}
    </footer>
  );
}

