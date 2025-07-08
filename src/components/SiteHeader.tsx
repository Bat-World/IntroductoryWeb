"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#28394C] text-white border-b"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-6xl mx-auto px-10 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://html.modernwebtemplates.com/precast/images/logo.png"
            alt="Company Logo"
            width={40}
            height={32}
            
          />
          <h1 className="text-[30px] font-bold" style={{ color: "#E38710" }}>
            Evt Ers
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a
            href="#home"
            style={{ color: scrolled ? "#E38710" : undefined }}
            className="hover:underline text-sm"
          >
            Нүүр
          </a>
          <a href="#about" className="hover:text-[#E38710] transition-colors">
            Бидний тухай
          </a>
          <a
            href="#products"
            className="hover:text-[#E38710] transition-colors"
          >
            Бүтээгдэхүүн
          </a>
          <a href="#contact" className="hover:text-[#E38710] transition-colors">
            Холбоо барих
          </a>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              style={{ backgroundColor: "#0F0F0F", color: "#fff" }}
              className="w-64 border-l border-[#E38710]"
            >
              <div className="flex flex-col space-y-6 mt-10 pl-4 text-lg">
                <a href="#home" className="hover:text-[#E38710]">
                  Нүүр
                </a>
                <a href="#about" className="hover:text-[#E38710]">
                  Бидний тухай
                </a>
                <a href="#products" className="hover:text-[#E38710]">
                  Бүтээгдэхүүн
                </a>
                <a href="#contact" className="hover:text-[#E38710]">
                  Холбоо барих
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
