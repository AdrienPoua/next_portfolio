"use client";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";
import { footer } from "@/data";
import { motion } from "framer-motion";
import { wavyAnimation } from "@/animations";



const Item = ({ content, delay }: { content: StaticImageData, delay: number }) => {
  return (
    <motion.div
      variants={wavyAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className=" aspect-square overflow-hidden rounded-full shrink-0"
      transition={{ yoyo: Infinity, duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: delay * 0.25 }}
    >
      <Image src={content} width={80} height={80} alt="stack" className="aspect-square size-14 md:size-20" objectFit="cover" />
    </motion.div>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      className="bg-black py-8 flex justify-center gap-4 px-10"
    >
      {footer.map((content, index) => (
        <Item content={content} key={uuidv4()} delay={index} />
      ))}
    </Box>
  );
}

