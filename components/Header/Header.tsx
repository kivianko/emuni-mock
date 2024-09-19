"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoHorizonal from "@/components/Logo/Horizonal";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "私たちについて", href: "/about" },
  { label: "事業紹介", href: "/services" },
  { label: "ニュース", href: "/news" },
  { label: "採用", href: "/careers" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 flex justify-center w-full h-18 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-none"
      }`}
    >
      <nav className="container max-w-[1360px] px-8 py-4 flex items-center justify-between">
        <div id="logo">
          <Link href="/" className="text-xl font-bold">
            <LogoHorizonal useColor={isScrolled} />
          </Link>
        </div>

        <div className="flex items-center gap-20">
          <ul className={`flex space-x-8  ${isScrolled ? "text-black" : "text-white"}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition duration-300 shadow-sm hover:text-gray-300 font-semibold ${
                    pathname === item.href ? "font-bold text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <div id="download">
              <Link href="/download" className="hover:text-gray-300">
                <Button
                  className={
                    "rounded-full px-5 font-bold border hover:bg-gray-100 bg-white text-primary border-primary"
                  }
                >
                  資料ダウンロード
                </Button>
              </Link>
            </div>
            <div id="contact">
              <Link href="/contact" className="hover:text-gray-300">
                <Button
                  className={`rounded-full px-5 font-bold ${isScrolled ? "bg-primary text-white" : "text-white"}`}
                >
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
