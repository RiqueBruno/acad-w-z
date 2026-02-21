"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../NavItem";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Cursos", href: "/cursos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-colors-brand-primary shadow-md z-[999] fixed top-0 w-full h-24 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Logo Academia Waleska Zanyor"
            width={180}
            height={60}
            className="cursor-pointer object-contain"
            priority
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden p-2 text-colors-brand-secondary focus:outline-none"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen
              ? "absolute top-20 right-6 bg-colors-brand-primary w-56 rounded-xl shadow-2xl border border-white/10 transition-all duration-300"
              : "hidden md:block"
          } md:static md:w-auto md:bg-transparent md:shadow-none md:border-none`}
        >
          <ul className="flex flex-col md:flex-row py-4 md:py-0 md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                text={link.label}
                url={link.href}
                cssLi=""
                cssLink="block px-5 py-3 md:py-2 text-colors-brand-secondary hover:bg-colors-brand-tertiary hover:text-colors-brand-primary font-medium transition-all rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
