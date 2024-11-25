"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, Mail, CircleDot, User, Laptop } from 'lucide-react'
import Link from "next/link"

type CustomLinkProps = {
  href: string
  title: string
  icon: React.ReactNode
  onClose: () => void
}

const CustomLink = ({ href, title, icon, onClose }: CustomLinkProps) => {
  return (
    <Button
      asChild
      className="w-full justify-start"
      onClick={onClose}
    >
      <Link href={`#${href}`}>
        {title}
        {icon}
      </Link>
    </Button>
  )
}

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <nav className="flex md:hidden justify-end mb-10 p-5">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="min-w-9 min-h-9" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 mt-10">
          <div className="flex flex-col space-y-3">
            <CustomLink
              href="services"
              title="Services"
              onClose={handleClose}
              icon={<User className="ml-auto h-5 w-5" />}
            />
            <CustomLink
              href="compétences"
              title="Compétences"
              onClose={handleClose}
              icon={<CircleDot className="ml-auto h-5 w-5" />}
            />
            <CustomLink
              href="projets"
              title="Projets"
              onClose={handleClose}
              icon={<Laptop className="ml-auto h-5 w-5" />}
            />
            <CustomLink
              href="contact"
              title="Contact"
              onClose={handleClose}
              icon={<Mail className="ml-auto h-5 w-5" />}
            />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
    </nav>
  )
}

