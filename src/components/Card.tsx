"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react'

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  site: string;
  githubUrl: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  site,
  githubUrl,
}: Readonly<ProjectProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Card
        onClick={() => window.open(site, "_blank")}
        className="] border cursor-pointer overflow-hidden sm:pr-8 relative sm:h-[20rem]  transition sm:group-even:pl-8 bg-transparent hover:bg-primary/10"
      >
        <CardContent className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <CardHeader className="text-primary flex items-center justify-between flex-row p-0 ">
            {title}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="ml-auto"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub repository</span>
              </Link>
            </Button>
          </CardHeader>
          <CardDescription className="mt-4">
            {description}
          </CardDescription>
          <CardFooter className="p-0 mt-auto">
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
              <Badge
                key={tag}
                variant="secondary"
              >
                {tag}
                </Badge>
              ))}
            </ul>
          </CardFooter>
        </CardContent>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={250}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </Card>
    </motion.div>
  );
}

